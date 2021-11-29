import "./allViews.css";
import React from "react";

export default function HomeStandardUser() {
  return (
    <main className="container mt-5 py-5">
      <div className="row mt-5">
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
          </div>
        </div>
        <div className="col-md-8 col-lg-9 ">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
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
                className="nav-link"
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
          <div className="tab-content" id="myTabContent">
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
                      <div className="card">
                        <div className="card-body">
                          <small className="fs-6">Ubicacion:</small>
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
                              Agendar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3">
                      <div className="card">
                        <div className="card-body">
                          <small className="fs-6">Ubicacion:</small>
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
                              Agendar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3">
                      <div className="card">
                        <div className="card-body">
                          <small className="fs-6">Ubicacion:</small>
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
                      <div className="card">
                        <div className="card-body">
                          <small className="fs-6">Ubicacion:</small>
                          <small className="fs-6">Telefono:</small>
                          <p className="fs-6">Servicio:</p>
                          <p className="fs-6">$:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3">
                      <div className="card">
                        <div className="card-body">
                          <small className="fs-6">Ubicacion:</small>
                          <small className="fs-6">Telefono:</small>
                          <p className="fs-6">Servicio:</p>
                          <p className="fs-6">$:</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3">
                      <div className="card">
                        <div className="card-body">
                          <small className="fs-6">Ubicacion:</small>
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
  );
}
