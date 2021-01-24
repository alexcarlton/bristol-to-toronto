import React, { createContext } from "react";

const SignedInContext = createContext({});

function SignedInProvider({ children }) {
  return (
    <SignedInContext.Provider value={{ loading: false, signedIn: true }}>
      {children}
    </SignedInContext.Provider>
  );
}

export { SignedInProvider, SignedInContext };
