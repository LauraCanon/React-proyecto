import "./allViews.css";
import React from "react";

export default function HomeCollaborator() {
  return (
    <main className="mt-5 container ">
  
    <div className="row mt-5">
      <div className="col">
        <h3>Registrate aqui</h3>
        <div className="input-group mb-3">
            <input type="text" className="form-control" id="InputNombre" placeholder="Nombre"/>
          </div>
          
          <div className="input-group mb-3">
            <input type="text" className="form-control" id="InputApellido" placeholder="Apellido"/>
          </div>
                 
          <div className="input-group mb-3">
            <input type="email" className="form-control" id="InputCorreo" placeholder="Correo electronico"/>
          </div>
          
        <div className="input-group mb-3">                                    
            <input type="password" className="form-control" id="InputContrasena" placeholder="Contrasena"/>
        </div>
        
        <div className="form-check mt-5">
            <input className="form-check-input" type="checkbox" value="" id="CheckTerminos"/>
            <label className="form-check-label" for="CheckTerminos">
                He leído y acepto los términos y condiciones
            </label>
        </div>
        <div className="form-check mt-2">
            <input className="form-check-input" type="checkbox" value="" id="CheckDatos"/>
            <label className="form-check-label" for="CheckDatos">
                He leído y acepto la  política de privacidad  de datos
            </label>
        </div>
        <div className="mt-3 offset-4"> 
            <button type="submit" className="btn btn-outline-primary">Registrarse</button>
        </div>
      </div>
      <div className="col">
        <div className="d-flex" style= "height: 600px;">
            <div className="vr"></div>
          </div>
      </div>
      <div className="col">
        <h1>Se parte de la comunidad
            XXXX!</h1>
      <div><img src="images/image1.jpg"
        alt="No se que imagen se supone va aqui"/></div>
      </div>
      
    </div>
  
    
</main>
  );
}