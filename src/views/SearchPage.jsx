import React, { useEffect, useState, Fragment } from "react";
import { FaStar } from "react-icons/fa";
import { SearchBar } from "../component/SearchBar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectServiceCollab,
  serviceCollabList,
} from "../store/userSlicer/searchServiceSlicer";
import { Button, Form, Modal } from "react-bootstrap";
import { requestService } from "../store/userSlicer/requestServiceSlicer";

export default function SearchPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query] = useSearchParams();
  const city = query.get("city");
  const service = query.get("service");
  const search = { service, city };
  useEffect(() => {
    dispatch(serviceCollabList(search));
  }, []);
  const serviceCollabs = useSelector(selectServiceCollab);
  console.log(serviceCollabs);
  const initialState = { address: "", date: "", phone: "", collabId: "" };
  const [show, setShow] = useState(false);
  const [schedule, setSchedule] = useState(initialState);
  const handleClose = () => setShow(false);
  const handleShow = (collab) => {
    setShow(true);
    setSchedule({ ...schedule, collabId: collab.createdBy._id });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setShow(false);
    dispatch(requestService(schedule.collabId));
    navigate("/home/user");
  };

  return (
    <Fragment>
      <main className="flex-shrink-0 container mt-4 mb-4">
        <div className="row my-5">
          <div className="col-12">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          {serviceCollabs &&
            serviceCollabs.map((collab, index) => {
              return (
                <div key={index} className="col-md-4 col-lg-4 col-xl-2 mb-5">
                  <div className="card shadow ">
                    <img
                      src={collab.createdBy.image}
                      className="card-img-top img-fluid w-75 mx-auto"
                      alt={collab.createdBy.name}
                    />
                    <div className="card-body d-flex justify-content-between">
                      <span className="fs-6">{collab.createdBy.name}</span>
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
                      <div className="col-12 ">
                        <span className="fs-6 mx-3">
                          Price: ${collab.price}
                        </span>
                      </div>
                    </div>
                    <div className="col mx-auto">
                      <button
                        type="button"
                        className="btn-sm btn-success text-center"
                        onClick={() => handleShow(collab)}
                      >
                        Seleccionar
                      </button>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Agendar servicio</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form.Group className="mb-3">
                          <label for="scheuleInput1" class="form-label">
                            Dirección
                          </label>
                          <input
                            name="address"
                            type="text"
                            class="form-control"
                            id="scheuleInput1"
                            placeholder="Dirección donde requiere servicio"
                            onChange={handleChange}
                          />
                          <label for="scheuleInput2" class="form-label">
                            Fecha
                          </label>
                          <input
                            name="date"
                            type="date"
                            class="form-control"
                            id="scheuleInput2"
                            placeholder="Fecha tentativa servicio"
                            onChange={handleChange}
                          />
                          <label for="scheuleInput3" class="form-label">
                            Teléfono
                          </label>
                          <input
                            name="phone"
                            type="text"
                            class="form-control"
                            id="scheuleInput3"
                            placeholder="Número de contacto"
                            onChange={handleChange}
                          />
                          <input
                            name="collabId"
                            value={"scec ver"}
                            type="hidden"
                            id="scheuleInput4"
                          />
                        </Form.Group>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="success" onClick={handleConfirm}>
                          Confirmar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </Fragment>
  );
}
