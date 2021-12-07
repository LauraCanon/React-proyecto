import "./allViews.css";
import { useParams } from "react-router";
import { collaborators } from "../component/People";
import React, { useState, useEffect } from "react";

export default function HomeCollaborator() {
  const { id } = useParams();
  const [colas, setColas] = useState();

  useEffect(() => {
    const loadCollaborator = () => {
      collaborators.map((collaborator) => {
        if (collaborator.iduser === Number(id)) {
          setColas(collaborator.picture.large);
        }
      });
    };
    loadCollaborator();
  }, []);

  return (
    <main className="container mt-5 py-5">
      <div className="row mt-5">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card align-items-center" style={{ width: "18rem" }}>
            {collaborators.map((collaborator) => {
              if (collaborator.iduser === Number(id)) {
                return (
                  <>
                    <img
                      src={collaborator.picture.large}
                      className="card-img-top w-75"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        {`Name: ${collaborator.name.first} ${collaborator.name.last}\n
                        Email: ${collaborator.email}\n
                        Phone: ${collaborator.cell}`}
                      </p>

                      <p>
                        {`Address: ${collaborator.location.city} ${collaborator.location.street.number} ${collaborator.location.street.name}`}
                      </p>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
        <div className="col-md-8 p-2">
          <div>
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
                  Editar mi Perfil
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
                  Mis Tarifas
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Servicios Activos
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact2"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Historial Servicios
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active border border-5 border-top-0"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6 mt-1 mr-3 ml-2 p-3">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Años de experiencia"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Describe tu experiencia"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="mb-5 mt-3">
                      <label for="formFile" className="form-label">
                        Adjunta certificados de experiencia
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                    <div className="d-grid gap-2 col-8 mx-auto">
                      <button className="btn btn-primary" type="button">
                        Adjunta
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3 mt-1 ">
                    <h3>Mi Galeria</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card">
                          <img
                            src="https://randomuser.me/api/portraits/lego/7.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card">
                          <img
                            src="https://randomuser.me/api/portraits/lego/7.jpg"
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 offset-4">
                      <button type="submit" className="btn btn-outline-primary">
                        Agegar fotos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade border border-5 border-top-0 mt-3"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div
                  className="
                    container
                    p-2
                    border-2
                    bg-black bg-opacity-25
                    rounded
                    mb-3
                  "
                >
                  <form className="d-flex">
                    <select
                      className="form-select m-1"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected disabled>
                        Categorias ...
                      </option>
                      <option value="1">Instalar</option>
                      <option value="2">Reparar</option>
                      <option value="3">Mantenimiento</option>
                      <option value="4">Pintar</option>
                    </select>
                    <select
                      className="form-select m-1"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>Subcategorias ...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <input
                      type="number"
                      className="form-control m-1"
                      id="floatingInput"
                      placeholder="Tu tarifa $"
                    />
                    <button
                      type="submit"
                      className="btn btn-dark m-1"
                      type="submit"
                    >
                      Añadir Tarifa
                    </button>
                  </form>
                </div>
                <h5>Mi Tarifario</h5>
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                  <table className="table table-bordered table-sm table-striped mb-0">
                    <thead className="">
                      <tr>
                        <th scope="col">Categorias</th>
                        <th scope="col">Subcategorias</th>
                        <th scope="col">Tarifa</th>
                        <th className="text-center" scope="col">
                          Editar
                        </th>
                        <th className="text-center" scope="col">
                          Eliminar
                        </th>
                        <th className="text-center" scope="col">
                          Activo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Instalar</td>
                        <td>Base TV</td>
                        <td>$ 45.000</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a className="link-dark" href="#">
                              <i className="bi bi-pencil-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a
                              className="link-danger"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div
                            className="
                              d-flex
                              form-check form-switch
                              justify-content-center
                            "
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Instalar</td>
                        <td>Base TV</td>
                        <td>$ 45.000</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a className="link-dark" href="#">
                              <i className="bi bi-pencil-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a
                              className="link-danger"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div
                            className="
                              d-flex
                              form-check form-switch
                              justify-content-center
                            "
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Instalar</td>
                        <td>Base TV</td>
                        <td>$ 45.000</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a className="link-dark" href="#">
                              <i className="bi bi-pencil-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a
                              className="link-danger"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div
                            className="
                              d-flex
                              form-check form-switch
                              justify-content-center
                            "
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Instalar</td>
                        <td>Base TV</td>
                        <td>$ 45.000</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a className="link-dark" href="#">
                              <i className="bi bi-pencil-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a
                              className="link-danger"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div
                            className="
                              d-flex
                              form-check form-switch
                              justify-content-center
                            "
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Instalar</td>
                        <td>Base TV</td>
                        <td>$ 45.000</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a className="link-dark" href="#">
                              <i className="bi bi-pencil-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a
                              className="link-danger"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div
                            className="
                              d-flex
                              form-check form-switch
                              justify-content-center
                            "
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Instalar</td>
                        <td>Base TV</td>
                        <td>$ 45.000</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a className="link-dark" href="#">
                              <i className="bi bi-pencil-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a
                              className="link-danger"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div
                            className="
                              d-flex
                              form-check form-switch
                              justify-content-center
                            "
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Instalar</td>
                        <td>Base TV</td>
                        <td>$ 45.000</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a className="link-dark" href="#">
                              <i className="bi bi-pencil-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a
                              className="link-danger"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div
                            className="
                              d-flex
                              form-check form-switch
                              justify-content-center
                            "
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Instalar</td>
                        <td>Base TV</td>
                        <td>$ 45.000</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a className="link-dark" href="#">
                              <i className="bi bi-pencil-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a
                              className="link-danger"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div
                            className="
                              d-flex
                              form-check form-switch
                              justify-content-center
                            "
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Instalar</td>
                        <td>Base TV</td>
                        <td>$ 45.000</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a className="link-dark" href="#">
                              <i className="bi bi-pencil-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <a
                              className="link-danger"
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <i className="bi bi-trash-fill"></i>
                            </a>
                          </div>
                        </td>
                        <td>
                          <div
                            className="
                              d-flex
                              form-check form-switch
                              justify-content-center
                            "
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade border border-5 border-top-0"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
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
                            className="btn-sm btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            type="button"
                          >
                            Aceptar
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
                            className="btn-sm btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            type="button"
                          >
                            Aceptar
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
                            className="btn-sm btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            type="button"
                          >
                            Aceptar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade border border-5 border-top-0"
                id="contact2"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                Historial de Servicios
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
