import React, { createContext, useEffect, useState, useContext } from "react";
import { CalendarAPIContext } from "./CalendarAPIProvider";

const SignedInContext = createContext({ signedIn: null, loading: true });

function SignedInProvider({ children }) {
  const { loading } = useContext(CalendarAPIContext);
  const [signedIn, setSignedIn] = useState(null);

  useEffect(() => {
    if (loading) {
      return;
    }

    setSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());

    gapi.auth2
      .getAuthInstance()
      .isSignedIn.listen((newSignInState) => setSignedIn(newSignInState));
  }, [loading]);

  return (
    <SignedInContext.Provider value={{ loading, signedIn }}>
      {children}
    </SignedInContext.Provider>
  );
}

export { SignedInProvider, SignedInContext };
