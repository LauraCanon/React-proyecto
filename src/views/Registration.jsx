import './allViews.css';
import React, { useState, useEffect } from 'react';
import {
  selectUserRegis,
  userRegister,
} from '../store/userSlicer/userRegisterSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Modals from '../component/Modals';

export default function RegistrationUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regis = useSelector(selectUserRegis);
  const initialValues = { name: '', lastName: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [showsSuccess, setShowSuccess] = useState(false);
  const handleCloseSuccess = () => {
    setShowSuccess(false);
    navigate('/sessionlogin');
  };
  const handleShowSuccess = () => setShowSuccess(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    const { name, lastName, email, password } = formValues;
    const newUser = { name, lastName, email, password };
    dispatch(userRegister(newUser));
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = 'El nombre es requerido!';
    }
    if (!values.lastName) {
      errors.lastName = 'El apellido es requerido!';
    }
    if (!values.email) {
      errors.email = 'El email es requerido!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Introduce una dirección de correo electrónico válida';
    }
    if (!values.password) {
      errors.password = 'La contraseña es requerida!';
    } else if (values.password.length < 4) {
      errors.password = 'La contrasena debe tener más de 4 caracteres';
    }
    return errors;
  };
  return (
    <main className="mt-5 container pt-5">
      <Modals
        showsSuccess={showsSuccess}
        handleCloseSuccess={handleCloseSuccess}
      />
      <div className="row display-flex mt-3 justify-content-center">
        <div className="col-md-6 col-lg-7">
          <h2 className="text-center mb-3">Únete a la comunidad FIXHOGAR!</h2>
          <div className="text-center mb-3">
            <img
              src="../img/Usuario-register.jpeg"
              style={{ width: '80%' }}
              alt="home-work"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-11 col-lg-5">
          <h2 className="mb-4 text-center">Solicitante</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control mb-2"
                name="name"
                id="InputNombre"
                placeholder="Nombre"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.name}</p>

            <div className="input-group mb-1">
              <input
                type="text"
                className="form-control mb-2"
                name="lastName"
                id="InputApellido"
                placeholder="Apellido"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.lastName}</p>

            <div className="input-group mb-1">
              <input
                type="email"
                className="form-control mb-2"
                name="email"
                id="InputCorreo"
                placeholder="Correo electrónico"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="mt-1 text-danger">{formErrors.email}</p>

            <div className="input-group mb-1">
              <input
                type="password"
                className="form-control mb-2"
                name="password"
                id="InputContrasena"
                placeholder="Contraseña"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className="mt-1 text-danger">{formErrors.password}</p>

            <div className="mt-2 text-center">
              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={handleShowSuccess}
              >
                Regístrate
              </button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <p className="text-center">
              Ya tienes una cuenta?{' '}
              <a href="/sessionlogin" class="link-success">
                {' '}
                Inicia Sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
