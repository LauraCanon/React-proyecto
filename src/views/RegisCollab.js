import "./allViews.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { collabRegister } from "../store/userSlicer/collabSlicer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { listOfCity, selectCitys } from "../store/userSlicer/citysSlicer";
import { useSelector } from "react-redux";

export default function RegistrationCollab() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [suggestions, setSuggestions] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const ciudades = Object.values(useSelector(selectCitys));

  useLayoutEffect(() => {
    dispatch(listOfCity());
  }, []);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setShow(false);
    } else if (Object.keys(formErrors).length !== 0 && isSubmit) {
      setShow(true);
    }
  };

  const handleClose = () => {
    setShow(false);
    navigate("/sessionlogin");
  };

  const handleChange = (e) => {
    let matches = [];
    const { name, value } = e.target;
    if (name === "city" && value.length > 0) {
      matches = ciudades[0].filter((ciudad) => {
        const regex = new RegExp(`${value}`, "gi");
        return ciudad.match(regex);
      });
      setSuggestions(matches);
    }
    setFormValues({ ...formValues, [name]: value });
  };
  const onSuggestions = (value) => {
    setFormValues({ ...formValues, city: value });
    setSuggestions(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const { name, lastName, email, password, city } = formValues;
    const newCollab = { name, lastName, email, password, city };
    dispatch(collabRegister(newCollab));
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "El nombre es requerido!";
    }
    if (!values.lastName) {
      errors.lastName = "El apellido es requerido!";
    }
    if (!values.email) {
      errors.email = "El email es requerido!";
    } else if (!regex.test(values.email)) {
      errors.email = "Introduce una dirección de correo electrónico válida";
    }
    if (!values.password) {
      errors.password = "La contraseña es requerida!";
    } else if (values.password.length < 4) {
      errors.password = "La contrasena debe tener más de 4 caracteres";
    }
    return errors;
  };
  return (
    <main className="mt-5 container pt-5">
      <div className="row display-flex mt-3 justify-content-center">
        <div className="col-md-6 col-lg-7">
          <h2 className="text-center mb-3">Únete a la comunidad FIXHOGAR!</h2>
          <div className="text-center mb-2">
            <img
              src="../img/Collab-register.jpeg"
              style={{ width: "80%" }}
              alt="home-work"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-11 col-lg-5">
          <h2 className="mb-4 text-center">Colaborador</h2>
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
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control mb-2"
                value={formValues.city}
                name="city"
                onBlur={() => {
                  setTimeout(() => {
                    setSuggestions(null);
                  }, 100);
                }}
                id="InputCity"
                placeholder="Selecciona tu ciudad"
                onChange={handleChange}
              />
              <p className="mt-1 text-danger">{formErrors.password}</p>
            </div>
            {suggestions ? (
              <div className={suggestions ? `my-custom-scrollbar` : ``}>
                {suggestions &&
                  suggestions.sort().map((suggestion, index) => (
                    <div
                      className="input-group mb-3 suggestion border-top-0 border-2"
                      key={index}
                      onClick={() => onSuggestions(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
              </div>
            ) : (
              <div></div>
            )}

            <div className="mt-2 text-center">
              <button
                type="submit"
                className="btn btn-outline-success"
                onClick={handleShow}
              >
                Regístrate
              </button>
            </div>

            <Modal show={show}>
              <Modal.Header closeButton>
                <Modal.Title>Tu registro fue exitoso</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group>
                  Por favor verifica tu cuenta para poder continuar navegando
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
          <div className="mt-2 text-center">
            <p className="text-center">
              Ya tienes una cuenta?{" "}
              <a href="/sessionlogin" class="link-success">
                {" "}
                Inicia Sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
