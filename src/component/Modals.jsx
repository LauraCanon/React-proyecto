import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteService } from '../store/userSlicer/createServiceSlicer';

export default function Modals({
  showFile,
  setUpload,
  showsSuccess,
  handleCloseSuccess,
  handleUpload,
  handleShowCloseFile,
  showServiceCreate,
  handleCloseServiceCreate,
  showServiceDelete,
  handleCloseServiceDelete,
  showSchedule,
  handleCloseSchedule,
  handleScheduleChange,
  handleConfirm,
}) {
  const dispatch = useDispatch();

  const deleteServiceHandler = () => {
    dispatch(deleteService(showServiceDelete.idService));
  };
  return (
    <main>
      <Modal show={showFile} onHide={handleShowCloseFile}>
        <Modal.Header closeButton>
          <Modal.Title>Sube tu imágen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            <input
              className="form-control form-control-sm"
              id="formFileSm"
              type="file"
              name="file"
              accept="image/*"
              onChange={(e) => setUpload(e.target.files[0])}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleUpload}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showServiceCreate} onHide={handleCloseServiceCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Servicio Registrado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            Tu servicio fue registrado con exito
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseServiceCreate}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showServiceDelete} onHide={handleCloseServiceDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            Esta Seguro que desea Eliminar el Servicio ?
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseServiceDelete}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteServiceHandler();
              handleCloseServiceDelete();
            }}
          >
            ELIMINAR
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showsSuccess} onHide={handleCloseSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Registro Exitoso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            Fuiste registrado exitosamente, recuerda validar tu correo
            electronico
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseSuccess}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSchedule} onHide={handleCloseSchedule}>
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
              onChange={handleScheduleChange}
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
              onChange={handleScheduleChange}
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
              onChange={handleScheduleChange}
            />
            <input
              name="collabId"
              value={'scec ver'}
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
    </main>
  );
}