import React from "react";
import { collaborators } from "../component/People";
import { FaStar } from "react-icons/fa";

export default function SearchPage() {
  return (
    <main className="flex-shrink-0 container mt-5">
      <div className="row my-5">
        <div className="col-12">
          <div className="container-fluid p-2 border-2 bg-black bg-opacity-25 mt-2">
            <form className="d-flex">
              <select
                className="form-select m-1 shadow-sm"
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
                className="form-select m-1"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Primero selecciona un servicio
                </option>
              </select>
              <select
                name="ciudades"
                className="form-select m-1"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Selecciona tu ciudad
                </option>
              </select>
              <select
                className="form-select m-1"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Rango de Precios:
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button className="btn btn-dark m-1" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        {collaborators.map((colab, index) => {
          return (
            <>
              <div key={index} className="col-md-4 col-lg-4 col-xl-2 mb-4">
                <div className="card">
                  <img
                    src={colab.picture.large}
                    className="card-img-top"
                    alt={colab.id.value}
                  />
                  <div className="card-body d-flex justify-content-between">
                    <span className="fs-6">
                      {colab.name.first} {colab.name.last}
                    </span>
                    <div>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                    </div>
                  </div>
                  <div className="row pb-3">
                    <div className="col-6 ">
                      <span className="fs-6 mx-3">$ </span>
                    </div>
                    <div className="col-6">
                      <a href="/" className="btn-sm btn-primary">
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
