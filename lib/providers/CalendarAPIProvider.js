import React, { createContext } from "react";

const CalendarAPIContext = createContext({});

function CalendarAPIProvider({ children }) {
  console.log(process.env.NEXT_PUBLIC_CALENDAR_API_CLIENT_ID);
  console.log(process.env.NEXT_PUBLIC_CALENDAR_API_KEY);

  const value = {};

  return (
    <CalendarAPIContext.Provider value={value}>
      {children}
    </CalendarAPIContext.Provider>
  );
}

export { CalendarAPIProvider, CalendarAPIContext };
