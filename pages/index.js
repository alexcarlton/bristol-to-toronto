import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../lib/hooks/auth/useAuth";

export default function Home() {
  const router = useRouter();
  const { signedIn, loading, signIn } = useAuth();

  useEffect(() => {
    if (signedIn) {
      router.push("/calendar");
    }
  }, [signedIn]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (!signedIn) {
    return <button onClick={signIn}>Sign In</button>;
  }

  return null;
}
