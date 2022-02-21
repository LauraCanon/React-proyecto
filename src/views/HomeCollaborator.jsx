import '../App.css';
import React, { useEffect, useState } from 'react';
import { validate } from '../utils/validate';
import { BsTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  fileUser,
  selectFile,
  selectLoading,
} from '../store/userSlicer/fileUserSlicer';
import { Loading } from '../component/Loading';
import {
  clearStatus,
  createService,
  deleteService,
  deleteService2,
  selectCreatedService,
} from '../store/userSlicer/createServiceSlicer';
import { Navigate } from 'react-router-dom';
import {
  collabListService,
  selectListService,
} from '../store/userSlicer/listServiceCollab';
import { Modals } from '../component/Modals';
import {
  getService,
  selectRequestsService,
} from '../store/userSlicer/getServiceSlicer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export default function HomeCollaborator() {
  const dispatch = useDispatch();
  const serviceRequests = useSelector(selectRequestsService);
  const { loading: loadingCreateAndDelete, status } =
    useSelector(selectCreatedService);
  const myServices = useSelector(selectListService);
  const initialValues = { description: '', price: '', services: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const collaborator = JSON.parse(window.localStorage.getItem('collaborator'));
  const initialValue = { img: [] };
  const [upload, setUpload] = useState(initialValue);
  const file = useSelector(selectFile);
  const [showFile, setShowFile] = useState(false);
  const handleCloseFile = () => setShowFile(false);
  const handleShowFile = () => setShowFile(true);
  const [showDeleted, setShowDeleted] = useState({ show: false, id: '' });
  const deleteServiceHandler = (id) => {
    setShowDeleted({ show: true, id });
  };
  const showDeleteHandler = () => {
    setShowDeleted({ show: false, id: '' });
  };

  useEffect(() => {
    dispatch(collabListService());
  }, [status.msg]);
  useEffect(() => {
    dispatch(getService());
  }, []);
  const loading = useSelector(selectLoading);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleUpload = (e) => {
    const data = new FormData();
    data.append('file', upload);
    for (let value of data.values()) {
      console.log(value);
    }
    dispatch(fileUser(data));
    setShowFile(false);
  };

  const createServiceHandler = (e) => {
    e.preventDefault();
    dispatch(createService(formValues));
  };
  const alertSwal = () => {
    const info = {
      icon: (status.duplicated && 'warning') || (status.created && 'success'),
      title: (status.duplicated && 'Error !') || (status.created && 'Success'),
    };
    if (showDeleted.show) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success ms-1 me-1',
          cancelButton: 'btn btn-danger ms-1 me-1',
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,
          allowOutsideClick: false,
        })
        .then((result) => {
          if (result.isConfirmed) {
            dispatch(deleteService(showDeleted.id));
            swalWithBootstrapButtons.fire(
              'Servicio Eliminado!',
              'Servicio eliminado Correctamente.',
              'success'
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'El servicio no fue Eliminado',
              'error'
            );
          }
        });
      showDeleteHandler();
    } else {
      MySwal.fire({
        title: info.title,
        text: status.msg,
        icon: info.icon,
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(clearStatus());
        }
        setFormValues(initialValues);
      });
    }
  };
  return (
    <>
      <main className="container mt-5 pt-5">
        <Modals
          showFile={showFile}
          handleCloseFile={handleCloseFile}
          setUpload={setUpload}
          handleUpload={handleUpload}
        />
        {(status.duplicated && alertSwal()) ||
          (status.created && alertSwal()) ||
          (showDeleted.show && alertSwal())}

        {collaborator && (
          <div className="row mt-4">
            <div className="col-md-4 d-flex justify-content-center rounded">
              <div
                className="card align-items-center border-0 rounded"
                style={{ width: '18rem' }}
              >
                {loading ? (
                  <Loading />
                ) : (
                  <img
                    src={collaborator.image || file}
                    className="card-img-top w-100"
                    alt="..."
                  />
                )}

                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleShowFile}
                >
                  Subir imágen
                </button>
                <div className="card-body text-center">
                  <p className="pt-3 mb-1 fw-bold">{`${collaborator.name} ${collaborator.lastName}`}</p>
                  <p>{collaborator.email}</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 ">
              <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active link-success"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Editar mi Perfil
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link link-success"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Mis Servicios Ofrecidos
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link link-success"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Servicios Activos
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link link-success"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact2"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Historial Servicios
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active border border-5 border-top-0"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row g-2">
                      <div className="col-md-6 mt-1 mr-3 ml-2 p-3">
                        <div className="mb-3 text-center">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Años de experiencia"
                          />
                        </div>

                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            placeholder="Describe tu experiencia"
                            rows="3"
                          ></textarea>
                        </div>
                        <div className="mb-3 mt-3">
                          <label htmlFor="formFile" className="form-label">
                            Adjunta certificados de experiencia
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        <div className="d-grid gap-2 col-8 mx-auto">
                          <button className="btn btn-success" type="button">
                            Adjunta
                          </button>
                        </div>
                      </div>
                      <div className="col-6 mx-auto">
                        <img
                          src="../img/job.jpg"
                          className="img-fluid"
                          alt="..."
                          style={{ width: '90%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade border border-5 border-top-0 mt-3"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div
                      className="
                   container
                   p-2
                   border-2
                   bg-black bg-opacity-25
                   rounded
                   mb-3
                 "
                    >
                      <form className="d-flex" onSubmit={createServiceHandler}>
                        <select
                          required="required"
                          className="form-select m-1"
                          id="floatingSelect"
                          name="services"
                          aria-label="Floating label select example"
                          onChange={handleChange}
                          value={formValues.services}
                        >
                          <option disabled selected value="">
                            Categorias ...
                          </option>
                          <option value="Instalación TV">Instalación TV</option>
                          <option value="Instalación Nevera">
                            Instalación Nevera
                          </option>
                          <option value="Carpintería">Carpintería</option>
                          <option value="Plomería">Plomería</option>
                          <option value="Pintura de Interiores">
                            Pintura de Interiores
                          </option>
                          <option value="Mantenimiento Lavadora">
                            Mantenimiento Lavadora
                          </option>
                          <option value="Jardinería">Jardinería</option>
                          <option value="Reparación de Tuberías">
                            Reparación de Tuberías
                          </option>
                        </select>
                        <textarea
                          className="form-control m-1"
                          id="floatingInput"
                          placeholder="Descripcion del servicio..."
                          value={formValues.description}
                          minLength={20}
                          maxLength={255}
                          name="description"
                          onChange={handleChange}
                          required
                        />
                        <input
                          type="number"
                          className="form-control m-1"
                          name="price"
                          id="floatingInput"
                          value={formValues.price}
                          placeholder="Tu tarifa $"
                          onChange={handleChange}
                          required
                        />
                        <button
                          type="submit"
                          className="btn btn-dark m-1"
                          type="submit"
                        >
                          Añadir Tarifa
                        </button>
                      </form>
                    </div>
                    <h5>Mi Tarifario</h5>
                    <div className="my-custom-scrollbar-service">
                      {loadingCreateAndDelete ? (
                        <div className="center ">
                          <Loading text={'Creando Serivicio'} />
                        </div>
                      ) : (
                        <table className="table table-bordered table-sm table-striped mb-0">
                          <thead className="">
                            <tr>
                              <th scope="col">Categorias</th>
                              <th scope="col">Tarifa</th>
                              <th className="text-center" scope="col">
                                Editar
                              </th>
                              <th className="text-center" scope="col">
                                Eliminar
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {myServices &&
                              myServices.map((service, index) => (
                                <tr key={index}>
                                  <td>{service.services}</td>
                                  <td>$ {service.price}</td>
                                  <td>
                                    <div className="d-flex justify-content-center">
                                      <button className="link-danger border-0">
                                        <AiFillEdit />
                                      </button>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex justify-content-center">
                                      <button
                                        className="link-danger border-0"
                                        onClick={(e) => {
                                          deleteServiceHandler(service._id);
                                        }}
                                      >
                                        <BsTrashFill />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade "
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row">
                      {serviceRequests &&
                        serviceRequests.map((servicio, index) => (
                          // console.log(servicio)
                          <div
                            key={index}
                            className="col-md-6 col-lg-4 mt-3 d-flex flex-wrap"
                          >
                            <div className="card border-light shadow text-dark bg-light rounded">
                              <div
                                className="card-body rounded"
                                style={{ width: '15rem' }}
                              >
                                <small className="fs-6">
                                  Usuario: {servicio.name} {servicio.lastName}
                                  <br />
                                  Servicio a realizar: {servicio.service}
                                  <br />
                                  Precio cobrado: {servicio.price}
                                  <br />
                                  Direccion: {servicio.address}
                                  <br />
                                  Fecha: {servicio.date}
                                </small>
                                <br></br>
                                <div className="d-flex justify-content-around">
                                  {servicio.payment ? (
                                    <button
                                      className="btn-sm btn-success"
                                      disabled
                                    >
                                      Pago Efectuado
                                    </button>
                                  ) : (
                                    <button
                                      className="btn-sm btn-secondary"
                                      disabled
                                    >
                                      Pago Pendiente
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade border border-5 border-top-0"
                    id="contact2"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    Historial de Servicios
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!collaborator && <Navigate to={'/'} />}
      </main>
      <svg
        className="image-col"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#273036"
          fillOpacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,208C672,213,768,267,864,282.7C960,299,1056,277,1152,229.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
