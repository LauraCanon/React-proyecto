import React from 'react';



export const CompLanding = () => {
  return (
    <>
      <section class="bg-primary text-light p-5 mt-4">
        <div class="container">
          <div class="d-md-flex justify-content-between align-items-center">
            <h3 class="mb-3 mb-md-0">Recibir Noticias</h3>

            <div class="input-group news-input">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
              />
              <button class="btn btn-dark btn-lg" type="button">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="p-5">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-laptop"></i>
                  </div>
                  <h3 class="card-title mb-3">Hogar</h3>
                  <p class="card-text">
                    Servicios de Instalacion y Mantenimineto en tu hogar a un
                    solo click. Encuentra esa persona de confianza para que
                    ayude.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-secondary text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-person-square"></i>
                  </div>
                  <h3 class="card-title mb-3">Oficina</h3>
                  <p class="card-text">
                    Todo lo que necesitas para poder establecer una red y lograr
                    ofrecer tus servicios desde tu nueva sede.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-people"></i>
                  </div>
                  <h3 class="card-title mb-3">Negocio</h3>
                  <p class="card-text">
                    Ayudamos a crecer su negocio, ofrezca servicios
                    profesionales como las grnades empresas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="learn" class="p-2">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src="../img/20943863.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-md p-5">
              <h2>
                TENEMOS LOS COLABORADORES PROFESIONALES EN SERVICIOS QUE
                NECESITAS:
              </h2>
              <p class="lead">
                Cotiza fácil con uno o varios aliados, elige tu experto y recibe
                un servicio con el sello FIXHOGAR.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="questions" class="p-2 mb-5">
        <div class="container">
          <h2 class="text-center mb-4">Preguntas Frecuentes</h2>
          <div class="accordion accordion-flush" id="questions">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  Que Es FixHogar?
                </button>
              </h2>
              <div
                id="question-one"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  FixHogar es una solución que conecta personas en búsqueda de
                  servicios específicos con independientes que puedan prestarle
                  ayuda experta, cumplida y confiable.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  ¿Qué servicios encuentro en FixHogar?
                </button>
              </h2>
              <div
                id="question-two"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Podrás encontrar independientes que prestan servicios en las
                  categorías de hogar, personas, negocio y mascotas, contando
                  con un sinnúmero de servicios especializados dentro de cada
                  una de ellas.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  ¿Cuál es el propósito de FixHogar?
                </button>
              </h2>
              <div
                id="question-three"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Nuestro propósito es contribuir al crecimiento y desarrollo de
                  los independientes del país, apoyando su trabajo mediante la
                  conexión con contratantes que están en búsqueda de sus
                  servicios, mientras impulsamos la formalización y el
                  mejoramiento de sus condiciones laborales.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  ¿Quién puede ser parte de Mis Aliados?
                </button>
              </h2>
              <div
                id="question-four"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Al unirte a nuestra comunidad encontrarás una gran variedad de
                  alternativas para contratar el servicio que buscas con un
                  experto, que ha sido validado bajo altos criterios de calidad.
                  Además podrás contar con la garantía de las pólizas
                  respaldadas por SURA, que han sido creadas para proteger la
                  realización del servicio, su cumplimiento, al trabajador y a
                  terceros. ¡Tranquilidad para ti!
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  ¿Cómo me registro en la plataforma?
                </button>
              </h2>
              <div
                id="question-five"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Para registrarte en la plataforma deberás ingresar a
                  www.misaliados.com.co y dirigirte al menú superior en la
                  sección: Ingresa. Allí podrás crear tu cuenta o ingresar a
                  través de tu cuenta de Facebook o Gmail. ¡Es muy sencillo!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
