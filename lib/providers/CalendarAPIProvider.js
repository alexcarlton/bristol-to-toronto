import React, { createContext, useState } from "react";
import { useScript } from "../hooks/scripts/useScript";

const CalendarAPIContext = createContext({ loading: true, error: null });

function CalendarAPIProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onLoad = () => {
    gapi.load("client:auth2", async () => {
      try {
        await gapi.client.init({
          apiKey: process.env.NEXT_PUBLIC_CALENDAR_API_KEY,
          clientId: process.env.NEXT_PUBLIC_CALENDAR_API_CLIENT_ID,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: "https://www.googleapis.com/auth/calendar.readonly",
        });

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    });
  };

  useScript({
    id: "google-api",
    src: "https://apis.google.com/js/api.js",
    onLoad,
  });

  return (
    <CalendarAPIContext.Provider value={{ loading, error }}>
      {children}
    </CalendarAPIContext.Provider>
  );
}

export { CalendarAPIProvider, CalendarAPIContext };
