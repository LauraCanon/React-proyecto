import '../App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectPaymentHandler,
  createTokenCreditCard,
  customerPayment,
  getCreditCards,
  selectCreditCards,
  makePayment,
  clearPaymentSuccess,
} from '../store/userSlicer/paymentSlicer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, infoPayment, statusCreditCard, paymentSuccess } =
    useSelector(selectPaymentHandler);
  const creditCards = useSelector(selectCreditCards);
  useEffect(() => {
    dispatch(getCreditCards());
  }, [loading]);
  useEffect(() => {
    infoPayment === 'sin Info' && navigate('/home/user');
  }, []);
  useEffect(() => {
    if (statusCreditCard) {
      setTimeout(() => {
        dispatch(customerPayment());
      }, 3000);
    }
  }, [statusCreditCard]);
  useEffect(() => {
    if (paymentSuccess) {
      Swal.fire({
        title: 'Apreciado usuario',
        text: `Se ha realizado el pago de su servicio por valor de $ ${paymentValues.value}`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
      }).then(() => {
        dispatch(clearPaymentSuccess());
        navigate('/home/user');
      });
    }
  }, [paymentSuccess]);
  const { price, service, idCollab, idService } = infoPayment;
  const initialValues = {
    holder: '',
    numberCard: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  };
  const initialPaymentValues = {
    idCollab,
    idService,
    value: price,
    tax: '0',
    tax_base: price,
    doc_type: '',
    docNumber: '',
    phone: '',
    cellPhone: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [paymentValues, setPaymentValues] = useState(initialPaymentValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleChangePayment = (e) => {
    const { name, value } = e.target;
    setPaymentValues({ ...paymentValues, [name]: value });
  };

  const paymentHandler = (e) => {
    e.preventDefault();
    const { holder, numberCard, expMonth, expYear, cvc } = formValues;
    const ccInfo = { holder, numberCard, expMonth, expYear, cvc };
    dispatch(createTokenCreditCard(ccInfo));
  };

  const paymentProcessHandler = () => {
    dispatch(makePayment(paymentValues));
  };
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-start">
        <div className="col-5">
          <div>
            <h3>Realizar Pago</h3>
          </div>
          <div>
            <p>
              Estas a punto de realizar el pago de:
              <br />
              <em>
                El Servicio de: <strong>{service}</strong>
              </em>
              <br />
              <em>
                Por Valor de: <strong>$ {price}</strong>
              </em>
              <br />
              Una vez el pago es realizado no puedes cancelar el servicio.
            </p>
            <p>
              {!creditCards
                ? `Para finalizar el pago, registra una tarjeta de credito.`
                : `Finaliza el pago con tu tarjeta Registrada`}
            </p>
          </div>
          <div>
            {!creditCards ? (
              <form method="post" id="paymentForm">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="fw-bold col-md-8 col-6 align-self-center">
                        <span>PAGO TARJETA CREDITO/DEBITO</span>
                      </div>
                      <div className="col text-end align-bottom">
                        <img
                          src="https://img.icons8.com/color/36/000000/visa.png"
                          alt="icono visa"
                        />
                        <img
                          src="https://img.icons8.com/color/36/000000/mastercard.png"
                          alt="icono mastercard"
                        />
                        <img
                          src="https://img.icons8.com/color/36/000000/amex.png"
                          alt="icono amex"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="card-body"
                    style={{ height: 'auto', widht: 'auto' }}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="holder"
                        placeholder="Nombre del Titular"
                        onChange={handleChange}
                        className="input-lg form-control mb-1"
                        id="name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="cc-number"
                        type="tel"
                        name="numberCard"
                        onChange={handleChange}
                        className="input-lg form-control cc-number"
                        autoComplete="cc-number"
                        placeholder="4575 6231 8229 0326"
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-xs-2 col-sm-12 col-md-6">
                        <div className="form-group">
                          <label className="control-label ">
                            Mes de expiración
                          </label>
                          <input
                            id="cc-exp"
                            type="tel"
                            name="expMonth"
                            onChange={handleChange}
                            className="input form-control cc-exp "
                            style={{ width: '92%' }}
                            autoComplete="cc-dateExp"
                            placeholder="MM"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xs-2 col-sm-12 col-md-6">
                        <div className="form-group">
                          <label className="control-label ">
                            Año de expiración
                          </label>
                          <input
                            id="cc-yexp"
                            type="tel"
                            name="expYear"
                            onChange={handleChange}
                            className="input-lg form-control cc-cvc mx-2"
                            style={{ width: '92%' }}
                            autoComplete="off"
                            placeholder="YYYY"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row align">
                      <div className="col-xs-2 col-sm-12 col-md-6">
                        <div className="form-group">
                          <label className="control-label ">Código CVC</label>
                          <input
                            id="cc-cvc"
                            type="tel"
                            name="cvc"
                            onChange={handleChange}
                            className="input form-control cc-exp"
                            style={{ width: '92%' }}
                            autoComplete="cc-cvc"
                            placeholder="1234"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xs-2 col-sm-12 col-md-6">
                        <div className="form-group">
                          {!loading ? (
                            <button
                              className="btn btn-success mt-4 ms-2"
                              type="button"
                              onClick={paymentHandler}
                            >
                              Registrar Tarjeta
                            </button>
                          ) : (
                            <button
                              className="btn btn-success mt-4 ms-2"
                              type="button"
                              disabled
                            >
                              <span
                                className="spinner-grow spinner-grow-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              {`      Cargando...`}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="contenedor">
                <section className="tarjeta" id="tarjeta">
                  <div className="delantera">
                    <div className="logo-marca" id="logo-marca">
                      <img
                        src="https://github.com/falconmasters/formulario-tarjeta-credito-3d/blob/master/img/logos/visa.png?raw=true"
                        alt=""
                      />
                    </div>
                    <div className="datos">
                      <div className="grupo" id="numero">
                        <p className="numero">{creditCards[0].mask}</p>
                      </div>
                      <div className="row">
                        <div className="col grupo" id="nombre">
                          <p className="nombre">{creditCards[0].holderCard}</p>
                        </div>

                        <div className="col grupo" id="expiracion">
                          <p className="label">
                            <span className="mes">{`${creditCards[0].expMonth}/${creditCards[0].expYear}`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
        <div className="col-5 ms-5 mt-3">
          <form className="mb-3">
            {creditCards ? (
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="fw-bold col-md-8 col-6 align-self-center">
                      <span className="mt-3 mb-3">
                        FINALIZA EL PAGO DE TU SERVICIO
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p>
                    Diligencia todos los campos para realizar el pago del
                    Servicio
                  </p>
                  {paymentValues && (
                    <select
                      required="required"
                      name="doc_type"
                      value={paymentValues.doc_type}
                      type="text"
                      className="form-control mt-2 mb-2"
                      id="scheuleInput1"
                      onChange={handleChangePayment}
                    >
                      <option disabled value="">
                        Selecciona tu tipo de Documento
                      </option>
                      <option value="CC">Cedula de Ciudadania</option>
                      <option value="CE">Cedula de Extranjeria</option>
                    </select>
                  )}

                  <input
                    name="docNumber"
                    type="number"
                    className="form-control mt-2 mb-2"
                    id="scheuleInput2"
                    placeholder="Digita tu Documento de Identidad"
                    onChange={handleChangePayment}
                  />
                  <input
                    name="phone"
                    type="text"
                    className="form-control mt-2 mb-2"
                    id="scheuleInput3"
                    placeholder="Número de contacto"
                    onChange={handleChangePayment}
                  />

                  <input
                    name="cellPhone"
                    type="text"
                    className="form-control mt-2 mb-2"
                    id="scheuleInput3"
                    placeholder="Número de contacto"
                    onChange={handleChangePayment}
                  />
                  {!loading ? (
                    <button
                      className="btn btn-success mt-1"
                      type="button"
                      onClick={paymentProcessHandler}
                    >
                      Realizar Pago
                    </button>
                  ) : (
                    <button
                      className="btn btn-success mt-1"
                      type="button"
                      disabled
                    >
                      <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      {`      Pagando...`}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div>Aun No has Registrado tu tarjeta de credito.</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
