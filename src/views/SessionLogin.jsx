import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectUser } from '../store/userSlicer/userSlice';
import { Navigate } from 'react-router';
import React, { useState, useEffect, Fragment } from 'react';

export default function SessionLogin() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validationHandler = (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    const user = { email, password };
    console.log(user);
    dispatch(loginUser(user));
  };

  return (
    <Fragment>
      {user === null ? (
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

                    <div className="d-grid col-8 col-8 col-sm-10 col-lg-8 mx-auto">
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
          <svg
            className="image-login"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#273036"
              fill-opacity="1"
              d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,208C672,213,768,267,864,282.7C960,299,1056,277,1152,229.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Fragment>
      ) : window.localStorage.getItem('collaborator') ? (
        <>
          <Navigate to={`/home/collaborator`} />
        </>
      ) : (
        <>
          <Navigate to={`/home/user`} />
        </>
      )}
    </Fragment>
  );
}
