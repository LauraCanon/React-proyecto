import "../App.css";
import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileUser, selectFile } from "../store/userSlicer/fileUserSlicer";

export default function HomeCollaborator() {
  const collaborator = JSON.parse(window.localStorage.getItem("collaborator"));
  const dispatch = useDispatch();
  const initialValue = { img: [] };
  const [show, setShow] = useState(false);
  const [upload, setUpload] = useState(initialValue);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const file = useSelector(selectFile);
  console.log(file);

  const handleUpload = (e) => {
    const data = new FormData();
    data.append("file", upload);
    for (let value of data.values()) {
      console.log(value);
    }

    dispatch(fileUser(data));
    setShow(false);
  };

  return (
    <>
      <main className="container mt-5 pt-5">
        <div className="row mt-4">
          <div className="col-md-4 d-flex justify-content-center">
            <div
              className="card align-items-center border-0"
              style={{ width: "18rem" }}
            >
              <img
                src={collaborator.image || file}
                className="card-img-top w-80"
                alt="..."
              />

              <button
                type="button"
                className="btn btn-light"
                onClick={handleShow}
              >
                Subir imágen
              </button>
              <div className="card-body text-center">
                <p className="pt-3 mb-1 fw-bold">{`${collaborator.name} ${collaborator.lastName}`}</p>
                <p>{collaborator.email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 p-2">
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
                    Mis Tarifas
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
                        <label for="formFile" className="form-label">
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
                    <div className="col-6">
                      <img
                        src="https://image.freepik.com/vector-gratis/ilustracion-solicitantes-empleo_335657-4659.jpg?w=740"
                        className="img-fluid"
                        alt="..."
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
                    <form className="d-flex">
                      <select
                        className="form-select m-1"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected disabled>
                          Categorias ...
                        </option>
                        <option value="1">Instalar</option>
                        <option value="2">Reparar</option>
                        <option value="3">Mantenimiento</option>
                        <option value="4">Pintar</option>
                      </select>
                      <select
                        className="form-select m-1"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected>Subcategorias ...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <input
                        type="number"
                        className="form-control m-1"
                        id="floatingInput"
                        placeholder="Tu tarifa $"
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
                  <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table table-bordered table-sm table-striped mb-0">
                      <thead className="">
                        <tr>
                          <th scope="col">Categorias</th>
                          <th scope="col">Subcategorias</th>
                          <th scope="col">Tarifa</th>
                          <th className="text-center" scope="col">
                            Editar
                          </th>
                          <th className="text-center" scope="col">
                            Eliminar
                          </th>
                          <th className="text-center" scope="col">
                            Activo
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Instalar</td>
                          <td>Base TV</td>
                          <td>$ 45.000</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a className="link-dark" href="#">
                                <i className="bi bi-pencil-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a
                                className="link-danger"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <i className="bi bi-trash-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div
                              className="
                             d-flex
                             form-check form-switch
                             justify-content-center
                           "
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Instalar</td>
                          <td>Base TV</td>
                          <td>$ 45.000</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a className="link-dark" href="#">
                                <i className="bi bi-pencil-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a
                                className="link-danger"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <i className="bi bi-trash-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div
                              className="
                             d-flex
                             form-check form-switch
                             justify-content-center
                           "
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Instalar</td>
                          <td>Base TV</td>
                          <td>$ 45.000</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a className="link-dark" href="#">
                                <i className="bi bi-pencil-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a
                                className="link-danger"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <i className="bi bi-trash-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div
                              className="
                             d-flex
                             form-check form-switch
                             justify-content-center
                           "
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Instalar</td>
                          <td>Base TV</td>
                          <td>$ 45.000</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a className="link-dark" href="#">
                                <i className="bi bi-pencil-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a
                                className="link-danger"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <i className="bi bi-trash-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div
                              className="
                             d-flex
                             form-check form-switch
                             justify-content-center
                           "
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Instalar</td>
                          <td>Base TV</td>
                          <td>$ 45.000</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a className="link-dark" href="#">
                                <i className="bi bi-pencil-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a
                                className="link-danger"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <i className="bi bi-trash-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div
                              className="
                             d-flex
                             form-check form-switch
                             justify-content-center
                           "
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Instalar</td>
                          <td>Base TV</td>
                          <td>$ 45.000</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a className="link-dark" href="#">
                                <i className="bi bi-pencil-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a
                                className="link-danger"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <i className="bi bi-trash-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div
                              className="
                             d-flex
                             form-check form-switch
                             justify-content-center
                           "
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Instalar</td>
                          <td>Base TV</td>
                          <td>$ 45.000</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a className="link-dark" href="#">
                                <i className="bi bi-pencil-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a
                                className="link-danger"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <i className="bi bi-trash-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div
                              className="
                             d-flex
                             form-check form-switch
                             justify-content-center
                           "
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Instalar</td>
                          <td>Base TV</td>
                          <td>$ 45.000</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a className="link-dark" href="#">
                                <i className="bi bi-pencil-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a
                                className="link-danger"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <i className="bi bi-trash-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div
                              className="
                             d-flex
                             form-check form-switch
                             justify-content-center
                           "
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Instalar</td>
                          <td>Base TV</td>
                          <td>$ 45.000</td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a className="link-dark" href="#">
                                <i className="bi bi-pencil-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center">
                              <a
                                className="link-danger"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                              >
                                <i className="bi bi-trash-fill"></i>
                              </a>
                            </div>
                          </td>
                          <td>
                            <div
                              className="
                             d-flex
                             form-check form-switch
                             justify-content-center
                           "
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                checked
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade border border-5 border-top-0"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row">
                    <div className="col-md-6 col-lg-4 mt-3">
                      <div className="card border-light shadow text-dark bg-light">
                        <div className="card-body">
                          <small className="fs-6">Ubicacion:</small>
                          <br></br>
                          <small className="fs-6">Telefono:</small>
                          <p className="fs-6">Servicio:</p>
                          <p className="fs-6">$:</p>
                          <div className="d-flex justify-content-around">
                            <button className="btn-sm btn-danger" type="submit">
                              Cancelar
                            </button>
                            <button
                              className="btn-sm btn-success"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              type="button"
                            >
                              Aceptar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mt-3">
                      <div className="card border-light shadow text-dark bg-light">
                        <div className="card-body">
                          <small className="fs-6">Ubicacion:</small>
                          <br></br>
                          <small className="fs-6">Telefono:</small>
                          <p className="fs-6">Servicio:</p>
                          <p className="fs-6">$:</p>
                          <div className="d-flex justify-content-around">
                            <button className="btn-sm btn-danger" type="submit">
                              Cancelar
                            </button>
                            <button
                              className="btn-sm btn-success"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              type="button"
                            >
                              Aceptar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3">
                      <div className="card border-light shadow text-dark bg-light">
                        <div className="card-body">
                          <small className="fs-6">Ubicacion:</small>
                          <br></br>
                          <small className="fs-6">Telefono:</small>
                          <p className="fs-6">Servicio:</p>
                          <p className="fs-6">$:</p>
                          <div className="d-flex justify-content-around">
                            <button className="btn-sm btn-danger" type="submit">
                              Cancelar
                            </button>
                            <button
                              className="btn-sm btn-success"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              type="button"
                            >
                              Aceptar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
      </main>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sube tu imágen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            <input
              className="form-control form-control-sm"
              id="formFileSm"
              type="file"
              name="file"
              accept="image/*"
              onChange={(e) => setUpload(e.target.files[0])}
            />
          </Form.Group>
          {/* Logica fotossss */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleUpload}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
      <svg
        className="image-col"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,208C672,213,768,267,864,282.7C960,299,1056,277,1152,229.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
