import React from "react";

export default function AdditionalInfo() {
    return (
    <>
    <div className="container py-5">
    <h1 className="display-6 py-4 fw-bold text-center">
        Ingresa la siguiente información
    </h1>
    <div className="container">
        <form name="my-form" className="form-gropu">
        <div className="row jumbotron">
            <div className="col-sm-4">
            <h4 className="text-center fw-bold">Personal</h4>
            <select
                className="form-select mb-4"
                aria-label="Default select example"
            >
                <option selected>Tipo de Documento</option>
                <option value="1">Cédula de Ciudadanía</option>
                <option value="2">Cédula de Extranjería</option>
            </select>
            <div className="mb-4">
                <input
                type="text"
                className="form-control"
                placeholder="Número de Documento"
                />
            </div>
            <div className="form-group">
                <input
                type="text"
                id="fechaInicio"
                placeholder="Fecha de Expedición"
                className="form-control"
                />
            </div>
            <div className="mt-5 text-center">
                <label for="formFile" className="form-label fw-bold"
                >Adjunta la foto de tu cédula</label
                >
                <input className="form-control" type="file" id="formFile" />
            </div>
            </div>
            <div className="col-sm-4">
            <h4 className="text-center fw-bold">Residencial</h4>
            <select
                name="ciudades"
                className="form-select mb-4"
                aria-label="Default select example"
            >
                <option selected>Selecciona tu ciudad</option>
            </select>
            <div className="mb-4">
                <input
                type="text"
                className="form-control"
                name="barrio"
                placeholder="Barrio"
                />
            </div>
            <div className="mb-4">
                <input
                type="text"
                name="fdireccion"
                className="form-control"
                placeholder="Dirección Residencia"
                />
            </div>
            </div>
            <div className="col-sm-4 mb-3">
            <h4 className="text-center fw-bold">Laboral</h4>
            <select
                name="categoria"
                className="form-select mb-4"
                aria-label="Default select example"
            >
                <option selected>Selecciona categoria</option>
                <option value="1">Categoría 1</option>
                <option value="2">categoria 2</option>
                <option value="2">categoria 3</option>
            </select>
            <select
                name="categoria"
                className="form-select mb-4"
                aria-label="Default select example"
            >
                <option selected>Años de experiencia</option>
                <option value="1">Menos de 1 año</option>
                <option value="1">1 - 3 años</option>
                <option value="2">3 - 5 años</option>
                <option value="2">5 - 7 años</option>
                <option value="1">Más de 7 años</option>
            </select>
            <div className="text-center">
                <label for="formFile" className="form-label fw-bold"
                >Certificados laborales/personales</label
                >
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="mt-3 text-center">
                <label for="formFile" className="form-label fw-bold"
                >Certificados de Estudio</label
                >
                <input className="form-control" type="file" id="formFile" />
            </div>
            </div>
        </div>
        </form>
    </div>

    <div className="d-grid col-3 mx-auto mt-4">
        <button type="submit" className="btn btn-primary">Enviar</button>
    </div>
    </div>
    </>
    );
}