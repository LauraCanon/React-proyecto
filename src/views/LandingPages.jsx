import React from "react";

export default function LandingPages() {
  return (
    <div>
      <main className="flex-shrink-0 container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item image-cover active"
              style={{ backgroundImage: "url(../img/232641266.jpg)" }}
            ></div>
            <div
              className="carousel-item image-cover"
              style={{
                backgroundImage:
                  "url(../img/funny-electrician-installing-plug-with-screwdriver-carrying-mouth.jpg)",
              }}
            ></div>
            <div
              className="carousel-item image-cover"
              style={{
                backgroundImage:
                  "url(../img/repairman-doing-air-conditioner-service.jpg)",
              }}
            ></div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
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
      </main>
    </div>
  );
}
