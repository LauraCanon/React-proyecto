import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  users: [],
  collabs: [],
  services: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getCollabs = async () => {
    try {
      const response = await axios.get('/allcollabs');
      console.log('response', response);
      dispatch({ type: 'GET_COLLAB', payload: response.data.collab });
    } catch (error) {
      console.log(error);
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
        getCollabs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
