import "../App.css";
import React from "react";

export default function HomeStandardUser() {
  const user = JSON.parse(window.localStorage.getItem("user"));
  console.log(user);
  return (
    <>
      <main className="container mt-5 pt-3">
        <div className="row mt-4">
          <div className="col-md-4 col-lg-3 d-flex justify-content-center ">
            <div
              className="card align-items-center border-0"
              style={{ width: "15rem" }}
            >
              <img
                src="/img/Insert-Photo-Here.png"
                className="card-img-top w-75"
                alt="..."
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
                      <div className="col-md-6 col-lg-4 mt-3">
                        <div className="card border-light shadow text-dark bg-light">
                          <div className="card-body border-success">
                            <small className="fs-6">Ubicacion:</small>
                            <br></br>
                            <small className="fs-6">Telefono:</small>
                            <p className="fs-6">Servicio:</p>
                            <p className="fs-6">$:</p>
                            <div className="d-flex justify-content-around">
                              <button
                                className="btn-sm btn-danger"
                                type="submit"
                              >
                                Cancelar
                              </button>
                              <button
                                className="btn-sm btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                type="button"
                              >
                                Agendar
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
                              <button
                                className="btn-sm btn-danger"
                                type="submit"
                              >
                                Cancelar
                              </button>
                              <button
                                className="btn-sm btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                type="button"
                              >
                                Agendar
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
                              <button
                                className="btn-sm btn-danger"
                                type="submit"
                              >
                                Cancelar
                              </button>
                              <button
                                className="btn-sm btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                type="button"
                              >
                                Agendar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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
                        <div className="card border-secondary shadow text-dark bg-light">
                          <div className="card-body">
                            <small className="fs-6">Ubicacion:</small>
                            <br></br>
                            <small className="fs-6">Telefono:</small>
                            <p className="fs-6">Servicio:</p>
                            <p className="fs-6">$:</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        <div className="card border-secondary shadow text-dark bg-light">
                          <div className="card-body">
                            <small className="fs-6">Ubicacion:</small>
                            <br></br>
                            <small className="fs-6">Telefono:</small>
                            <p className="fs-6">Servicio:</p>
                            <p className="fs-6">$:</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 mt-3">
                        <div className="card border-secondary shadow text-dark bg-light">
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

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Agendar Servicio
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  El Siguiente paso lo llevara a el pago del servicio. una vez
                  pago no se puede cancelar el servicio
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="button" className="btn btn-success">
                    Acepto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1440 320">
        <path
          fill="rgb(63, 106, 64)"
          fill-opacity="0.7"
          d="M0,160L48,176C96,192,192,224,288,245.3C384,267,480,277,576,288C672,299,768,309,864,309.3C960,309,1056,299,1152,256C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="0.7"
          d="M0,0L48,21.3C96,43,192,85,288,133.3C384,181,480,235,576,256C672,277,768,267,864,224C960,181,1056,107,1152,106.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
      <svg
        className="image"
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
