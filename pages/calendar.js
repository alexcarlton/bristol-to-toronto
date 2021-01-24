import { useEffect, useState } from "react";
import { Layout } from "../lib/components/Layout/Layout";
import { useRouter } from "next/router";
import { useAuth } from "../lib/hooks/auth/useAuth";
import { useFetchCalendars } from "../lib/hooks/api/useFetchCalendars";
import { Sidebar } from "../lib/components/Sidebar/Sidebar";
import { Calendar } from "../lib/components/Calendar/Calendar";
import { DateTime } from "luxon";

export default function CalendarPage() {
  const router = useRouter();
  const { signedIn, loading: loadingAuth } = useAuth();
  const { error } = useFetchCalendars();

  const [dateTime] = useState(DateTime.local());

  useEffect(() => {
    if (!loadingAuth && !signedIn) {
      router.push("/");
    }
  }, [signedIn]);

  if (error) {
    return <p>Something went wrong 😭</p>;
  }

  const headerTitle = `${dateTime.toLocaleString({
    month: "long",
  })}, ${dateTime.toLocaleString({ year: "numeric" })}`;

  return (
    <Layout>
      <Layout.Header title={headerTitle} />
      <Layout.Main>
        <Sidebar />
        <Calendar />
      </Layout.Main>
    </Layout>
  );
}
