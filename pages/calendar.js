import { useEffect } from "react";
import { Layout } from "../lib/components/Layout/Layout";
import { useRouter } from "next/router";
import { useAuth } from "../lib/hooks/auth/useAuth";
import { useFetchCalendars } from "../lib/hooks/api/useFetchCalendars";

export default function Calendar() {
  const router = useRouter();

  const { signOut, signedIn, loading: loadingAuth } = useAuth();
  const { error } = useFetchCalendars();

  useEffect(() => {
    if (!loadingAuth && !signedIn) {
      router.push("/");
    }
  }, [signedIn]);

  if (error) {
    return <p>Something went wrong 😭</p>;
  }

  return (
    <Layout>
      <Layout.Header title="May, 2020" />
      <Layout.Main>
        Main Stuff <button onClick={signOut}>Sign Out</button>
      </Layout.Main>
    </Layout>
  );
}
