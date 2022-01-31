import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  const [values, setValues] = useState({
    service: 'none',
    city: 'none',
    price: '0',
  });

  const valueHandlerService = (event) => {
    setValues((prevValues) => ({ ...prevValues, service: event.target.value }));
  };
  const valueHandlerCity = (event) => {
    setValues((prevValues) => ({ ...prevValues, city: event.target.value }));
  };
  const valueHandlerPrice = (event) => {
    setValues((prevValues) => ({ ...prevValues, price: event.target.value }));
  };

  const alertButton = () => {
    return alert('Seleccione todos los campos para realizar la busqueda');
  };
  return (
    <div className="container-fluid p-2 border-2 bg-black bg-opacity-25 mt-2">
      <form className="d-flex">
        <select
          className="form-select m-1 shadow-sm"
          aria-label="Default select example"
          value={values.service}
          onChange={valueHandlerService}
        >
          <option selected defaultValue="none" value={'none'} disabled>
            Selecciona un servicio:
          </option>
          <option value="installTV">Instalación TV</option>
          <option value="installFrezzer">Instalación Nevera</option>
          <option value="carpenter">Carpintería</option>
          <option value="plomery">Plomería</option>
          <option value="interiorPaint">Pintura de Interiores</option>
          <option value="washinMachineMaint">Mantenimiento Lavadora</option>
          <option value="gardening">Jardinería</option>
        </select>
        <select
          name="ciudades"
          className="form-select m-1"
          aria-label="Default select example"
          value={values.city}
          onChange={valueHandlerCity}
        >
          <option selected defaultValue="none" value="none" disabled>
            Selecciona tu ciudad
          </option>
        </select>
        <select
          className="form-select m-1"
          aria-label="Default select example"
          value={values.price}
          onChange={valueHandlerPrice}
        >
          <option selected defaultValue="0" value="0" disabled>
            Rango de Precios:
          </option>
          <option value="1">$50.000 - $100.000</option>
          <option value="2">$100.001 - $200.000</option>
          <option value="3">$200.001 - $300.000</option>
        </select>
        {values.service === 'none' ? (
          <>
            <button className="btn btn-dark m-1" onClick={alertButton}>
              Search
            </button>
          </>
        ) : values.city === 'none' ? (
          <>
            <button className="btn btn-dark m-1" onClick={alertButton}>
              Search
            </button>
          </>
        ) : values.price === '0' ? (
          <>
            <button className="btn btn-dark m-1" onClick={alertButton}>
              Search
            </button>
          </>
        ) : (
          <>
            <Link
              className="btn btn-dark m-1"
              to={`/search?service=${values.service}&?city=${values.city}&?price=${values.price}`}
            >
              Search
            </Link>
          </>
        )}
      </form>
    </div>
  );
};
