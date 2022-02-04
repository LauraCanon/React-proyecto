import React from "react";
import { Link } from "react-router-dom";

export default function RegistrationPerfil() {
  return (
    <main
      className="
        flex-shrink-0
        d-flex
        justify-content-center
        align-items-center
        min-vh-100
      "
    >
      <section className="mt-5 text-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="card text-dark my-4 border-0">
                <img
                  className="img-fluid rounded-circle px-5 py-3 card-img-top"
                  src="https://image.flaticon.com/icons/png/512/1226/1226084.png"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">Colaborador</h4>
                  <p className="card-text">
                    Ofrece tus servicios. Hay gente que necesita de tu ayuda en
                    este momento!
                  </p>
                  <Link to='/registration-collab'>
                    <div className="d-grid gap-2">
                      <button className="btn btn-success" type="button">
                        Registrate aquí
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="card text-dark my-4 border-0">
                <img
                  className="img-fluid rounded-circle px-5 py-3 card-img-top"
                  src="https://image.flaticon.com/icons/png/512/1226/1226123.png"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title">Solicitante</h4>
                  <p className="card-text">
                    Cotiza, selecciona y agenda tu servicio. Miles de
                    Colaboradores a un solo click!
                  </p>
                  <Link to='/registration-user'>
                    <div className="d-grid gap-2">
                      <button className="btn btn-success" type="button">
                        Registrate aquí
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
