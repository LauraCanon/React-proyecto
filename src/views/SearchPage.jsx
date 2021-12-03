import React from "react";

export default function SearchPage({ result }) {
  const colaborators = result.filter((colaborator, index) => index % 2 === 0);

  return (
    <main class="flex-shrink-0 container mt-5">
      <div class="row my-5">
        <div class="col-12">
          <div class="container-fluid p-2 border-2 bg-black bg-opacity-25 mt-2">
            <form class="d-flex">
              <select
                class="form-select m-1 shadow-sm"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Selecciona un servicio:
                </option>
                <option value="1">Instalar</option>
                <option value="2">Reparar</option>
                <option value="3">Mantenimiento</option>
                <option value="4">Pintar</option>
              </select>
              <select
                class="form-select m-1"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Primero selecciona un servicio
                </option>
              </select>
              <select
                name="ciudades"
                class="form-select m-1"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Selecciona tu ciudad
                </option>
              </select>
              <select
                class="form-select m-1"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Rango de Precios:
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button class="btn btn-dark m-1" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        {colaborators.map((col) => {
          return (
            <>
              <div class="col-md-3 col-lg-2">
                <div class="card">
                  <img src={col.picture.large} class="card-img-top" alt="..." />
                  <div class="card-body d-flex justify-content-between">
                    <span class="fs-6">
                      {col.name.first} {col.name.last}
                    </span>
                    <div>
                      <span>
                        <i class="bi bi-star-fill "></i>
                      </span>
                      <span>
                        <i class="bi bi-star-fill "></i>
                      </span>
                      <span>
                        <i class="bi bi-star-fill "></i>
                      </span>
                    </div>
                  </div>
                  <div class="row pb-3">
                    <div class="col-6 ">
                      <span class="fs-6 mx-3">$ </span>
                    </div>
                    <div class="col-6">
                      <a href="/" class="btn-sm btn-primary">
                        <small>Agendar</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
