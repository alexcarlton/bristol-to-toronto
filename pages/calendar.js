import { useEffect } from "react";
import { Layout } from "../lib/components/Layout/Layout";
import { useRouter } from "next/router";
import { useAuth } from "../lib/hooks/auth/useAuth";
import { useFetchCalendars } from "../lib/hooks/api/useFetchCalendars";
import { Sidebar } from "../lib/components/Sidebar/Sidebar";
import { Calendar } from "../lib/components/Calendar/Calendar";

export default function CalendarPage() {
  const router = useRouter();
  const { signedIn, loading: loadingAuth } = useAuth();
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
        <Sidebar>Hello</Sidebar>
        <Calendar>Hi</Calendar>
      </Layout.Main>
    </Layout>
  );
}
