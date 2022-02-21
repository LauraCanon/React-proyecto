import '../App.css';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  fileUser,
  selectFile,
  selectLoading,
} from '../store/userSlicer/fileUserSlicer';
import {
  getService,
  selectRequestsService,
} from '../store/userSlicer/getServiceSlicer';
import { Loading } from '../component/Loading';
import { selectServiceCollab } from '../store/userSlicer/searchServiceSlicer';
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router-dom';
import { Modals } from '../component/Modals';
import { infoPayment } from '../store/userSlicer/paymentSlicer';

export default function HomeStandardUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const service = useSelector(selectRequestsService);
  console.log(service);
  const user = JSON.parse(window.localStorage.getItem('user'));
  const initialValue = { img: [] };
  const [showFile, setShowFile] = useState(false);
  const handleShowFile = () => setShowFile(true);
  const handleShowCloseFile = () => setShowFile(false);
  const [upload, setUpload] = useState(initialValue);

  const file = useSelector(selectFile);

  const loading = useSelector(selectLoading);

  const paymentProcessHandler = (servicio) => {
    dispatch(infoPayment(servicio));
    navigate('/payment');
  };

  const handleUpload = (e) => {
    const data = new FormData();
    data.append('file', upload);
    dispatch(fileUser(data));
    handleShowCloseFile();
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(getService());
    }, 500);
  }, []);

  return (
    <>
      <main className="container mt-5 pt-3">
        {user && (
          <div className="row mt-5">
            <div className="col-md-4 col-lg-3 d-flex justify-content-center rounded">
              <div
                className="card align-items-center border-0 rounded"
                style={{ width: '15rem' }}
              >
                {loading ? (
                  <Loading />
                ) : (
                  <img
                    src={user.image || file}
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
                <Modals
                  showFile={showFile}
                  handleShowFile={handleShowFile}
                  handleShowCloseFile={handleShowCloseFile}
                  setUpload={setUpload}
                  handleUpload={handleUpload}
                />
                <p className="pt-3 mb-1 fw-bold">{`${user.name} ${user.lastName}`}</p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="col-md-8 col-lg-9 ">
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
                    Servicios Activos
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
                    Historial De Servicios
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-3" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        {service &&
                          service.map((servicio, index) => (
                            <div
                              key={index}
                              className="col-md-6 col-lg-4 mt-3 d-flex flex-wrap "
                            >
                              <div className="card border-light shadow text-dark bg-light rounded ">
                                <div
                                  className="card-body border-success rounded"
                                  style={{ width: '15rem' }}
                                >
                                  <p className="fs-6 pt-2">
                                    Colaborador: {servicio.name}{' '}
                                    {servicio.lastName}
                                    <br />
                                    Servicio: {servicio.service}
                                    <br />
                                    Precio: $ {servicio.price}
                                    <br />
                                    Direccion: {servicio.address}
                                    <br />
                                    Fecha: {servicio.date}
                                  </p>
                                  {servicio.payment ? (
                                    <div className="d-flex justify-content-around">
                                      <button
                                        className="btn-sm btn-success"
                                        disabled
                                      >
                                        Pago Efectuado
                                      </button>
                                    </div>
                                  ) : (
                                    <div className="d-flex justify-content-around">
                                      <button
                                        className="btn-sm btn-danger"
                                        type="submit"
                                      >
                                        Cancelar
                                      </button>
                                      <button
                                        className="btn-sm btn-success px-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                        type="button"
                                        onClick={() =>
                                          paymentProcessHandler(servicio)
                                        }
                                      >
                                        Pagar
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6 col-lg-4 mt-3">
                          <div className="card border-light shadow text-dark bg-light rounded">
                            <div className="card-body">
                              <small className="fs-6">Ubicacion:</small>
                              <br></br>
                              <small className="fs-6">Telefono:</small>
                              <p className="fs-6">Servicio:</p>
                              <p className="fs-6">$:</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!user && <Navigate to={'/'} />}
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
