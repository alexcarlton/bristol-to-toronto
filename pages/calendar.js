import { useEffect } from "react";
import { Layout } from "../lib/components/Layout/Layout";
import { useRouter } from "next/router";
import { useAuth } from "../lib/hooks/auth/useAuth";

export default function Calendar() {
  const { signOut, signedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!signedIn) {
      router.push("/");
    }
  }, [signedIn]);

  return (
    <Layout>
      <Layout.Header title="May, 2020" />
      <Layout.Main>
        Main Stuff <button onClick={signOut}>Sign Out</button>
      </Layout.Main>
    </Layout>
  );
}
