import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const initialState = {
  users: [],
  collabs: [],
  services: [],
  error: null,
  loading: true,
  login: JSON.parse(window.localStorage.getItem("login")) || null,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getCollabs = async () => {
    try {
      const response = await axios.get("/allcollabs");
      dispatch({ type: "GET_COLLAB", payload: response.data.collab });
    } catch (error) {
      console.log(error);
    }
  };

  const collabRegister = async (collabs) => {
    const config = { header: { "Content-type": "application/json" } };
    try {
      const response = await axios.post("/collabregister", collabs, config);
      dispatch({ type: "COLLAB_REGISTER", payload: response.data.collab });
    } catch (error) {
      console.log(error);
    }
  };

  const sessionLogin = async (login) => {
    const config = { header: { "Content-type": "application/json" } };
    try {
      const response = await axios.post("/sessionlogin", login, config);
      dispatch({
        type: "SESSION_LOGIN",
        payload: response.data,
      });
      window.localStorage.setItem(
        "login",
        JSON.stringify(response.data.collaborator)
      );
      window.localStorage.setItem("token", JSON.stringify(response.data.token));
    } catch (error) {
      console.log("Respuesta", error);
    }
  };

  useEffect(() => {
    getCollabs();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        collabs: state.collabs,
        services: state.services,
        error: state.error,
        loading: state.loading,
        login: state.login,
        getCollabs,
        collabRegister,
        sessionLogin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
