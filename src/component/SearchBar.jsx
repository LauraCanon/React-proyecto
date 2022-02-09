import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serviceListLoad } from "./../store/userSlicer/serviceListSlicer";
import { selectService } from "../store/userSlicer/serviceListSlicer.js";
import { selectCity } from "../store/userSlicer/cityListSlicer.js";
import { cityListLoad } from "../store/userSlicer/cityListSlicer";
import { useLayoutEffect } from "react";

export const SearchBar = () => {
  const optionService = useSelector(selectService);
  const optionCity = useSelector(selectCity);
  const [values, setValues] = useState({
    service: "none",
    city: "none",
    price: "0",
  });
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  useLayoutEffect(() => {
    dispatch(serviceListLoad());
    dispatch(cityListLoad(values.service));
  }, [values.service]);

  const valueHandlerService = (event) => {
    setValues((prevValues) => ({ ...prevValues, service: event.target.value }));
    setValues((prevValues) => ({ ...prevValues, city: "none" }));
  };
  const valueHandlerCity = (event) => {
    setValues((prevValues) => ({ ...prevValues, city: event.target.value }));
  };

  const handleSubmit = () => {
    window.location.href = `/search?service=${values.service}&city=${values.city}`;
  };
  const alertButton = () => {
    return alert("Seleccione todos los campos para realizar la busqueda");
  };
  return (
    <div className="container-fluid p-2 border-2 bg-black bg-opacity-25 mt-2 rounded">
      <form className="d-flex">
        <select
          className="form-select m-1 rounded shadow-sm"
          aria-label="Default select example"
          value={values.service}
          onChange={valueHandlerService}
        >
          <option defaultValue="none" value={"none"} disabled>
            Selecciona un servicio:
          </option>
          {optionService.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
        <select
          name="ciudades"
          className="form-select m-1"
          aria-label="Default select example"
          value={values.city}
          onChange={valueHandlerCity}
        >
          <option defaultValue="none" value="none" disabled>
            Selecciona tu ciudad
          </option>
          {optionCity
            ? optionCity.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))
            : null}
        </select>
        {values.service === "none" ? (
          <>
            <button className="btn btn-dark m-1" onClick={alertButton}>
              Buscar
            </button>
          </>
        ) : values.city === "none" ? (
          <>
            <button className="btn btn-dark m-1" onClick={alertButton}>
              Buscar
            </button>
          </>
        ) : values.price === "0" ? (
          <>
            <button className="btn btn-dark m-1" onClick={alertButton}>
              Search
            </button>
          </>
        ) : (
          <button className="btn btn-dark m-1" onClick={handleSubmit}>
            Search
          </button>
        )}
      </form>
    </div>
  );
};
