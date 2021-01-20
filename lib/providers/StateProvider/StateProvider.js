import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const StateContext = createContext(null);

function StateProvider({ children }) {
  const initialState = {
    calendars: {
      byId: {},
    },
    events: {
      byCalendarIds: {},
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export { StateProvider, StateContext };
