import React from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function RegistrationPerfil({ isAuth }) {
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
      {!isAuth && (
        <section className="mt-4 text-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="card text-dark my-2 border-0">
                  <img
                    className="img-fluid"
                    src="https://image.freepik.com/vector-gratis/ilustracion-concepto-sistema-alcantarillado_335657-5412.jpg"
                    alt="..."
                  />
                  <div className="card-body mb-4">
                    <h4 className="card-title">Colaborador</h4>
                    <p className="card-text">
                      Ofrece tus servicios. Hay gente que necesita de tu ayuda
                      en este momento!
                    </p>
                    <Link
                      to="/registration-collab"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="d-grid gap-2 mb-2">
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          Regístrate aquí
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="card text-dark my-2 border-0">
                  <img
                    className="img-fluid"
                    src="https://image.freepik.com/vector-gratis/ilustracion-concepto-aplicacion-mensajeria_335657-5543.jpg"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title">Solicitante</h4>
                    <p className="card-text">
                      Cotiza, selecciona y agenda tu servicio. Miles de
                      Colaboradores a un solo click!
                    </p>
                    <Link
                      to="/registration-user"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="d-grid gap-2 mb-2">
                        <button
                          className="btn btn-outline-success"
                          type="submit"
                        >
                          Regístrate aquí
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {isAuth && <Navigate to={'/'} />}
    </main>
  );
}
