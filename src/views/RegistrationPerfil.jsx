import React from "react";

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
                  src="https://randomuser.me/api/portraits/men/14.jpg"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Colaborador</h5>
                  <p className="card-text">
                    Ofrece tus servicios. Hay gente que necesita de tu Ayuda en
                    este momento!
                  </p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">
                      Registrate Aqui
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="card text-dark my-4 border-0">
                <img
                  className="img-fluid rounded-circle px-5 py-3 card-img-top"
                  src="https://randomuser.me/api/portraits/men/29.jpg"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Solicitante</h5>
                  <p className="card-text">
                    Cotiza,Selecciona y Agenda tu Servicio. Miles de
                    Colaboradores a un solo click!
                  </p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">
                      Registrate Aqui
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
