import "./allViews.css";
import { useState, useEffect } from "react";
import React from "react";

export default function HomeCollaborator() {
  const initialValues = {name:"", lastName:"", email:"", password:""}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
    }
  }, [formErrors])
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name) {
      errors.name = "El nombre es requerido!"
    }
    if(!values.lastName) {
      errors.lastName = "El apellido es requerido!"
    } 
    if(!values.email) {
      errors.email = "El email es requerido!"
    } else if (!regex.test(values.email)) {
      errors.email = "Introduce una dirección de correo electrónico válida"
    }
    if(!values.password) {
      errors.password = "La contraseña es requerida!"
    } else if(values.password.length < 4) {
      errors.password = "La contrasena debe tener más de 4 caracteres"
    }
    return errors;
  }
  return (
    <main className="mt-5 container py-5">
      <div className="row display-flex mt-3 justify-content-center">
        <div className="col-md-6 col-lg-7">
            <h2 className="text-center mb-3">Unete a la comunidad FIXHOGAR!</h2>
            <div className="text-center mb-3">
              <img
                src="https://image.freepik.com/vector-gratis/herramientas-mejora-hogar_24640-74868.jpg"
                style={{width:"80%"}}
                alt="home-work"
              />
            </div>
          </div>
        <div className="col-md-6 col-sm-11 col-lg-5">
          <h2 className="mb-5 text-center">Regístrate</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control mb-2"
                name="name"
                id="InputNombre"
                placeholder="Nombre"
                value= {formValues.name}
                onChange= {handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.name}</p>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control mb-2"
                name="lastName"
                id="InputApellido"
                placeholder="Apellido"
                value= {formValues.lastName}
                onChange= {handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.lastName}</p>

            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control mb-2"
                name="email"
                id="InputCorreo"
                placeholder="Correo electronico"
                value= {formValues.email}
                onChange= {handleChange}
              />
            </div>
            <p className="mt-1 text-danger">{formErrors.email}</p>

            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control mb-2"
                name="password"
                id="InputContrasena"
                placeholder="Contrasena"
                value= {formValues.password}
                onChange= {handleChange}
              />
            </div>
            <p className="mt-1 text-danger">{formErrors.password}</p>

            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="CheckTerminos"
              />
              <label className="form-check-label" for="CheckTerminos">
                He leído y acepto los términos y condiciones
              </label>
            </div>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="CheckDatos"
              />
              <label className="form-check-label" for="CheckDatos">
                He leído y acepto la política de privacidad de datos
              </label>
            </div>
            <div className="mt-3 text-center">
              <button type="submit" className="btn btn-outline-primary">
                Registrarse
              </button>
            </div>
          </form>
          <div className="mt-4">
            <p className="text-center">Ya tienes una cuenta?</p>
            <div className="text-center mb-3">
            <a href="/sessionlogin">Inicia Sesión</a>
          </div>
        </div>     
      </div>
      </div>
    </main>
  );
  }
