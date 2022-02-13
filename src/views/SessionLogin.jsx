import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUser,
  selectStateLogin,
  selectUser,
} from '../store/userSlicer/userSlice';
import React, { useState, useEffect, Fragment } from 'react';
import { Navigate } from 'react-router-dom';

export default function SessionLogin({ isAuth }) {
  const dispatch = useDispatch();
  const stateLogin = useSelector(selectStateLogin);
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);

  const validationHandler = (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    const user = { email, password };
    dispatch(loginUser(user));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Fragment>
      {!isAuth && (
        <Fragment>
          <div className="container text-center pt-5">
            <h1 className="display-6 pt-5 fw-bold">Inicia Sesión</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-6 mx-auto mt-3">
                <div>
                  <form onSubmit={validationHandler} action="#">
                    <div className="mb-4 mt-2 col-8 col-sm-10 col-lg-8 mx-auto">
                      <label hrmlfor="email" className="form-label">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={formValues.email}
                      />
                    </div>
                    <div className="mb-4 col-8 col-8 col-sm-10 col-lg-8 mx-auto">
                      <label hrmlfor="password" className="form-label">
                        Contraseña
                      </label>{' '}
                      <span>
                        <a href="#" className="link-success">
                          {'  '}
                          Olvidaste tu contraseña?
                        </a>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        value={formValues.password}
                      />
                    </div>
                    <div className="mb-4 col-8 col-8 col-sm-10 col-lg-8 mx-auto">
                      <p className="text-danger">{stateLogin}</p>
                    </div>
                    <div className="d-grid col-8 col-8 col-sm-10 col-lg-8 mx-auto z-index-pos">
                      <button
                        type="submit"
                        className="btn btn-outline-success col-12"
                      >
                        Iniciar Sesión
                      </button>
                    </div>
                  </form>
                  <div className="my-3 col-8 mx-auto">
                    <span>
                      No tienes cuenta?{' '}
                      <a href="/registration" className="link-success">
                        {' '}
                        Regístrate
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-6 mx-auto text-center mt-0">
                <img
                  src="../img/login.jpg"
                  className="img-fluid"
                  style={{ width: '70%' }}
                />
              </div>
            </div>
            <div className="my-2 col-10 mx-auto text-center">
              <span>
                Al iniciar sesión estás aceptando los{' '}
                <a href="#" className="link-success">
                  términos y condiciones{' '}
                </a>
                y la{' '}
                <a href="#" className="link-success">
                  política de privacidad
                </a>{' '}
                de datos de <span className="fw-bold">FIXHOGAR</span>
              </span>
            </div>
          </div>
        </Fragment>
      )}
      {window.localStorage.getItem('collaborator') && (
        <>
          <Navigate to={`/`} />
        </>
      )}
      {window.localStorage.getItem('user') && (
        <>
          <Navigate to={`/`} />
        </>
      )}
    </Fragment>
  );
}
