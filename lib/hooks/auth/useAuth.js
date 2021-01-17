import { useContext } from "react";
import { SignedInContext } from "../../providers/SignedInProvider";

function useAuth() {
  const { signedIn, loading } = useContext(SignedInContext);

  const signIn = () => gapi.auth2.getAuthInstance().signIn();
  const signOut = () => gapi.auth2.getAuthInstance().signOut();

  return { signedIn, signIn, signOut, loading };
}

export { useAuth };
