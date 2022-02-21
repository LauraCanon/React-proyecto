import React, { memo } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteService } from '../store/userSlicer/createServiceSlicer';

export const Modals = memo(
  ({
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
    showProcessPayment,
    setShowProcessPayment,
    paymentProcessHandler,
    handleChangePayment,
    paymentValues,
  }) => {
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
              <label htmlFor="scheuleInput1" className="form-label">
                Dirección
              </label>
              <input
                name="address"
                type="text"
                className="form-control"
                id="scheuleInput1"
                placeholder="Dirección donde requiere servicio"
                onChange={handleScheduleChange}
              />
              <label htmlFor="scheuleInput2" className="form-label">
                Fecha
              </label>
              <input
                name="date"
                type="date"
                className="form-control"
                id="scheuleInput2"
                placeholder="Fecha tentativa servicio"
                onChange={handleScheduleChange}
              />
              <label htmlFor="scheuleInput3" className="form-label">
                Teléfono
              </label>
              <input
                name="phone"
                type="text"
                className="form-control"
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
        <Modal
          show={showProcessPayment}
          backdrop="static"
          keyboard={false}
          onHide={setShowProcessPayment}
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Pago</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <small>
              Una vez realizado el pago el servicio no puede ser cancelado.
            </small>
            <Form.Group className="mb-3">
              <label htmlFor="scheuleInput1" className="form-label">
                Tipo de Documento
              </label>

              {paymentValues && (
                <select
                  name="doc_type"
                  value={paymentValues.doc_type}
                  type="text"
                  className="form-control"
                  id="scheuleInput1"
                  onChange={handleChangePayment}
                >
                  <option defaultValue="none" value={'none'} disabled>
                    Selecciona tu tipo de Documento
                  </option>
                  <option value="CC">Cedula de Ciudadania</option>
                  <option value="CE">Cedula de Extranjeria</option>
                </select>
              )}
              <label htmlFor="scheuleInput2" className="form-label">
                Numero de Documento:
              </label>
              <input
                name="docNumber"
                type="number"
                className="form-control"
                id="scheuleInput2"
                placeholder="Digita tu Documento de Identidad"
                onChange={handleChangePayment}
              />
              <label htmlFor="scheuleInput3" className="form-label">
                Teléfono
              </label>
              <input
                name="phone"
                type="text"
                className="form-control"
                id="scheuleInput3"
                placeholder="Número de contacto"
                onChange={handleChangePayment}
              />
              <label htmlFor="scheuleInput3" className="form-label">
                Celular
              </label>
              <input
                name="cellPhone"
                type="text"
                className="form-control"
                id="scheuleInput3"
                placeholder="Número de contacto"
                onChange={handleChangePayment}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={paymentProcessHandler}>
              PAGAR
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    );
  }
);
