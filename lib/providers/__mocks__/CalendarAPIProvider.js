import React, { createContext } from "react";

const CalendarAPIContext = createContext({ loading: true, error: null });

function CalendarAPIProvider({ children }) {
  return (
    <CalendarAPIContext.Provider value={{ loading: false, error: null }}>
      {children}
    </CalendarAPIContext.Provider>
  );
}

export { CalendarAPIProvider, CalendarAPIContext };
