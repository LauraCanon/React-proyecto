import '../App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  customerPayment,
  infoPayment,
  loadingCreateCreditCard,
  paymentProcess,
  paymentService,
  registCreditCard,
  selectPaymentSucess,
  selectRegisterPayment,
  selectStatusCreditCard,
} from '../store/userSlicer/paymentSlicer';
import Modals from '../component/Modals';
import { Loading } from '../component/Loading';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Payment() {
  const navigate = useNavigate;
  const statePayment = useSelector(selectPaymentSucess);
  const loading = useSelector(loadingCreateCreditCard);
  const { city, price, description, service } = useSelector(
    selectRegisterPayment
  );
  const dispatch = useDispatch();
  const initialValues = {
    holder: '',
    numberCard: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  };
  const tax = (+price * 16) / 100;
  const initialPaymentValues = {
    city,
    description,
    value: price,
    tax: '0',
    tax_base: price,
    doc_type: 'none',
    docNumber: '',
    phone: '',
    cellPhone: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [paymentValues, setPaymentValues] = useState(initialPaymentValues);
  const [showProcessPayment, setShowProcessPayment] = useState(false);
  const handleClosePayment = () => {
    setShowProcessPayment(false);
  };
  const handleShowPayment = () => {
    setShowProcessPayment(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleChangePayment = (e) => {
    const { name, value } = e.target;
    setPaymentValues({ ...paymentValues, [name]: value });
  };
  console.log('state payment afuera', statePayment);

  const paymentHandler = (e) => {
    e.preventDefault();
    const { holder, numberCard, expMonth, expYear, cvc } = formValues;
    const ccInfo = { holder, numberCard, expMonth, expYear, cvc };
    dispatch(paymentProcess(ccInfo));
    setTimeout(() => {
      handleShowPayment();
    }, 10000);
  };

  const paymentProcessHandler = () => {
    setTimeout(() => {
      Swal.fire({
        title: 'Apreciado usuario',
        text: `Se ha realizado el pago de su por valor de $ 50.000}`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
      navigate('/');
    }, 5000);
  };

  return (
    <>
      <Modals
        showProcessPayment={showProcessPayment}
        paymentProcessHandler={paymentProcessHandler}
        handleChangePayment={handleChangePayment}
        paymentValues={paymentValues}
        setShowProcessPayment={setShowProcessPayment}
      />
      <div className="row py-5 px-1">
        <div className="container-fluid d-flex justify-content-center">
          <div className="col-lg-6 mt-5">
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
                  <div className="form-group m-3 mx-3">
                    <label className="control-label">Nombre del Titular</label>
                    <input
                      type="text"
                      name="holder"
                      onChange={handleChange}
                      className="input-lg form-control mb-3"
                      id="name"
                    />
                  </div>
                  <div className="form-group mb-4 mx-3">
                    <label className="control-label mt-2">
                      Número de Tarjeta
                    </label>
                    <input
                      id="cc-number"
                      type="tel"
                      name="numberCard"
                      onChange={handleChange}
                      className="input-lg form-control cc-number"
                      autoComplete="cc-number"
                      placeholder="1234 1234 1234 1234"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-xs-2 col-sm-12 col-md-6 mb-4">
                      <div className="form-group">
                        <label className="control-label mx-3">
                          Mes de expiración
                        </label>
                        <input
                          id="cc-exp"
                          type="tel"
                          name="expMonth"
                          onChange={handleChange}
                          className="input form-control cc-exp mx-3"
                          style={{ width: '92%' }}
                          autoComplete="cc-dateExp"
                          placeholder="MM"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xs-2 col-sm-12 col-md-6 mb-4">
                      <div className="form-group">
                        <label className="control-label mx-3">
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
                  <div className="row">
                    <div className="col-xs-2 col-sm-12 col-md-6 mb-4">
                      <div className="form-group">
                        <label className="control-label mx-3">Código CVC</label>
                        <input
                          id="cc-cvc"
                          type="tel"
                          name="cvc"
                          onChange={handleChange}
                          className="input form-control cc-exp mx-3"
                          style={{ width: '92%' }}
                          autoComplete="cc-cvc"
                          placeholder="1234"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="d-grid gap-2 col-5 mx-auto my-4">
              {!loading ? (
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={paymentHandler}
                >
                  Registrar Tarjeta
                </button>
              ) : (
                <button className="btn btn-success" type="button" disabled>
                  <Loading />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
