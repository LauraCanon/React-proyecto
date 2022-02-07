// import "../App.css";
import React from "react";

export const CompLanding = () => {
  return (
    <>
      <section className="bg-success text-light p-3 mt-3">
        <div classNameName="container">
          <div classNameName="d-md-flex justify-content-between">
            <h3 className="mb-3 text-center">Recibir noticias</h3>

            <div className="input news-input mx-auto">
              <input
                type="text"
                className="col-form-label col-8 rounded border border-white"
                placeholder=" Email"
              />
              <button className="btn btn-dark ms-4 mb-2" type="button">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">1. Busca</h3>
                  <p className="card-text">
                    El servicio que requieras para tu hogar, a un solo click
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-black bg-opacity-25 text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-person-square"></i>
                  </div>
                  <h3 className="card-title mb-3">2. Cotiza</h3>
                  <p className="card-text">
                    Encuentra esa persona de confianza que preste el servicio
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="card-title mb-3">3. Agenda</h3>
                  <p className="card-text">
                    Disfruta de un servicio de calidad de la mano de uno de
                    nuestros colaboradores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="learn" className="p-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="../img/worker.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <h2 className="text-center">
                TENEMOS COLABORADORES PROFESIONALES EN LOS SERVICIOS QUE
                NECESITES:
              </h2>
              <p className="lead mt-4">
                Cotiza fácil con uno o varios colaboradores, elige tu experto y
                recibe un servicio con el sello FIXHOGAR.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="p-3 mb-5">
        <div className="container">
          <h2 className="text-center mb-4">Preguntas Frecuentes</h2>
          <div className="accordion accordion-flush" id="questions">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  ¿Qué es FixHogar?
                </button>
              </h2>
              <div
                id="question-one"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  FixHogar es una solución que conecta personas en búsqueda de
                  servicios específicos con independientes que puedan prestarle
                  ayuda experta, cumplida y confiable.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  ¿Qué servicios encuentro en FixHogar?
                </button>
              </h2>
              <div
                id="question-two"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Podrás encontrar colaboradores que prestan excelentes
                  servicios en la categoría hogar: 'Instalación, Reparación,
                  Mantenimiento, entre otros'.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  ¿Cuál es el propósito de FixHogar?
                </button>
              </h2>
              <div
                id="question-three"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Nuestro propósito es contribuir al crecimiento y desarrollo de
                  los independientes del país, apoyando su trabajo mediante la
                  conexión con contratantes que están en búsqueda de sus
                  servicios, mientras impulsamos la formalización y el
                  mejoramiento de sus condiciones laborales.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  ¿Quién puede ser parte de la comunidad Fix Hogar?
                </button>
              </h2>
              <div
                id="question-four"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Al unirte a nuestra comunidad encontrarás una gran variedad de
                  alternativas para contratar el servicio que buscas con un
                  experto, que ha sido validado bajo altos criterios de calidad.
                  ¡Tranquilidad para ti!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  ¿Cómo me registro en la plataforma?
                </button>
              </h2>
              <div
                id="question-five"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  Para registrarte en la plataforma deberás ingresar a
                  www.fixhogar.com y dirigirte al menú superior en la sección:
                  Acceder. Allí podrás crear tu cuenta o ingresar a través de tu
                  cuenta de Facebook o Gmail. ¡Es muy sencillo!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
