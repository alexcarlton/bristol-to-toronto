import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useAuth } from "../lib/hooks/auth/useAuth";
import { Button } from "../lib/components/core/Button";
import { Layout } from "../lib/components/Layout/Layout";

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
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
    return (
      <Layout>
        <Layout.Header title="Sign In" showSignOut={false} />
        <Layout.Main>
          <Container>
            <Button onClick={signIn}>Sign In</Button>
          </Container>
        </Layout.Main>
      </Layout>
    );
  }

  return null;
}
