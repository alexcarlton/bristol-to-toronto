import { useEffect, useContext } from "react";
import { Layout } from "../lib/components/Layout/Layout";
import { useRouter } from "next/router";
import { useAuth } from "../lib/hooks/auth/useAuth";
import { useFetchCalendars } from "../lib/hooks/api/useFetchCalendars";
import { StateContext } from "../lib/providers/StateProvider/StateProvider";

export default function Calendar() {
  const router = useRouter();

  const { signOut, signedIn, loading: loadingAuth } = useAuth();
  const { error } = useFetchCalendars();

  const { state } = useContext(StateContext);

  useEffect(() => {
    if (!loadingAuth && !signedIn) {
      router.push("/");
    }
  }, [signedIn]);

  if (error) {
    return <p>Something went wrong 😭</p>;
  }

  console.log(state);

  return (
    <Layout>
      <Layout.Header title="May, 2020" />
      <Layout.Main>
        Main Stuff <button onClick={signOut}>Sign Out</button>
      </Layout.Main>
    </Layout>
  );
}
