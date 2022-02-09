import React from 'react';
import '../App.css';

export default function Payment() {
  return (
    <>
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
                  classNameName="card-body"
                  style={{ height: 'auto', widht: 'auto' }}
                >
                  <div className="form-group m-3 mx-3">
                    <label for="numeric" className="control-label">
                      Nombre del Titular
                    </label>
                    <input
                      type="text"
                      className="input-lg form-control mb-3"
                      id="name"
                    />
                  </div>
                  <div className="form-group mb-4 mx-3">
                    <label for="cc-number" className="control-label mt-2">
                      Número de Tarjeta
                    </label>
                    <input
                      id="cc-number"
                      type="tel"
                      className="input-lg form-control cc-number"
                      autocomplete="cc-number"
                      placeholder="1234 1234 1234 1234"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-xs-2 col-sm-12 col-md-6 mb-4">
                      <div className="form-group">
                        <label for="cc-exp" className="control-label mx-3">
                          Mes de expiración
                        </label>
                        <input
                          id="cc-exp"
                          type="tel"
                          className="input form-control cc-exp mx-3"
                          style={{ width: '92%' }}
                          autocomplete="cc-exp"
                          placeholder="MM"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xs-2 col-sm-12 col-md-6 mb-4">
                      <div className="form-group">
                        <label for="cc-cvc" className="control-label mx-3">
                          Año de expiración
                        </label>
                        <input
                          id="cc-cvc"
                          type="tel"
                          className="input-lg form-control cc-cvc mx-2"
                          style={{ width: '92%' }}
                          autocomplete="off"
                          placeholder="YYYY"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-2 col-sm-12 col-md-6 mb-4">
                      <div className="form-group">
                        <label for="cc-exp" className="control-label mx-3">
                          Código CVC
                        </label>
                        <input
                          id="cc-exp"
                          type="tel"
                          className="input form-control cc-exp mx-3"
                          style={{ width: '92%' }}
                          autocomplete="cc-exp"
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
              <button className="btn btn-success" type="button">
                Pagar
              </button>
            </div>
          </div>
        </div>
        <svg
          className="image-pay"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ marginTop: '-240px' }}
        >
          <path
            fill="#273036"
            fill-opacity="1"
            d="M0,32L48,64C96,96,192,160,288,208C384,256,480,288,576,298.7C672,309,768,299,864,293.3C960,288,1056,288,1152,293.3C1248,299,1344,309,1392,314.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
