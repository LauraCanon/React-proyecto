import React from "react";

export default function SessionLogin() {
    return (
      <>
      <div className="container text-center py-5">
        <h1 className="display-6 pt-4 fw-bold">Inicia Sesión</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <form action="#"></form>
              <div className="mb-4 mt-2 col-8 mx-auto">
                <label for="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 col-8 mx-auto">
                <label for="password" className="form-label">
                  Contraseña
                </label>
                <span>
                  <a href="#"> Olvidaste tu contraseña?</a>
                </span>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Contraseña"
                />
              </div>
              <div className="mb-4 form-check col-8 mx-auto">
                <input
                  type="checkbox"
                  name="connected"
                  className="form-check-input"
                />
                <label for="connected" className="form-check-label">
                  Mantener sesión iniciada
                </label>
              </div>
              <div className="d-grid col-8 mx-auto">
                <button type="submit" className="btn btn-primary col-12">
                  Iniciar Sesión
                </button>
              </div>
              <div className="my-3 col-8 mx-auto">
                <span>
                  No tienes cuenta? <a href="#"> Regístrate</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-grid gap-2 col-8 mx-auto py-2">
              <label for="redes" className="form-label mb-2">
                O ingresa con tus redes sociales
              </label>
              <button type="button" className="btn btn-outline-danger mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Regístrate con Google
              </button>
              <img src="" alt="" />
              <button type="button" className="btn btn-outline-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="blue"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                Regístrate con Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="my-3 col-10 mx-auto text-center">
          <span>
            Al iniciar sesión estás aceptando los{" "}
            <a href="#">términos y condiciones </a>y la{" "}
            <a href="#">política de privacidad</a> de datos de <span className="fw-bold">FIXHOGAR</span>
          </span>
      </div>
    </div>
      </>
    );
  }
  