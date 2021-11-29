import React from "react";

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
                        <input
                        className="form-check-input me-1"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault"
                        />
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

                <div classNameName="card-body" style={{height: "auto", widht: "auto"}}>
                    <div className="form-group mb-4 mx-3">
                    <label for="cc-number" className="control-label mt-3"
                        >Número de Tarjeta</label
                    >
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
                        <label for="cc-exp" className="control-label mx-3"
                            >Fecha de Expiración</label
                        >
                        <input
                            id="cc-exp"
                            type="tel"
                            className="input form-control cc-exp mx-3" style={{width: "92%"}}
                            autocomplete="cc-exp"
                            placeholder="MM / AA"
                            required
                        />
                        </div>
                    </div>
                    <div className="col-xs-2 col-sm-12 col-md-6 mb-4">
                        <div className="form-group">
                        <label for="cc-cvc" className="control-label mx-3"
                            >Código de verificación</label
                        >
                        <input
                            id="cc-cvc"
                            type="tel"
                            className="input-lg form-control cc-cvc mx-2" style={{width: "92%"}} 
                            autocomplete="off"
                            placeholder="••••"
                            required
                        />
                        </div>
                    </div>
                    </div>
                    <div className="form-group mb-3 mx-3">
                    <label for="numeric" className="control-label"
                        >Nombre del Titular</label
                    >
                    <input type="text" className="input-lg form-control mb-4" id="name" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                    <div className="row">
                        <div className="col-md-8 fw-bold col-6 align-self-center">
                        <input
                            className="form-check-input me-1"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                        />
                        <span>PAGO PAYPAL</span>
                        </div>
                        <div className="col text-end align-bottom">
                        <img
                            src="https://img.icons8.com/color/36/000000/paypal.png"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
            <div className="d-grid gap-2 col-5 mx-auto my-4">
                <button className="btn btn-primary" type="button">Pagar</button>
            </div>
            </div>
        </div>
        </div>
    </>
    );
}