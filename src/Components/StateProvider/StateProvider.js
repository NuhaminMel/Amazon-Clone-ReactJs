import React, { createContext, useContext, useReducer } from "react";

//this help us prepare data
export const StateContext = createContext();

//use it to wrap the components in App.js to provide data (ask about useReducer)
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull&push info from the data layer
export const useStateValue = () => useContext(StateContext);
