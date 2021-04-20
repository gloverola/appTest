import React, {createContext, useReducer} from 'react';
import authReducer from './authReducer';
import {authInitialState} from './authReducer';

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  return (
    <GlobalContext.Provider value={{authState, authDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};
