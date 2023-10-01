//setup the data layer
//we need this to track he basket

import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
//build a provider
export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);
//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);