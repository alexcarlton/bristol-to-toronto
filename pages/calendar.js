import { useEffect, useContext, useState } from "react";
import { Layout } from "../lib/components/Layout/Layout";
import { useRouter } from "next/router";
import { useAuth } from "../lib/hooks/auth/useAuth";
import { CalendarAPIContext } from "../lib/providers/CalendarAPIProvider";
import { listCalendars } from "../lib/api/calendars/listCalendars";

export default function Calendar() {
  const { loading: loadingCalendarAPI } = useContext(CalendarAPIContext);
  const { signOut, signedIn, loading: loadingAuth } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loadingAuth && !signedIn) {
      router.push("/");
    }
  }, [signedIn]);

  const fetchCalendars = async () => {
    const { calendarsList, error } = await listCalendars();

    if (error) {
      return setError(error);
    }

    console.log(calendarsList);
  };

  useEffect(() => {
    if (loadingCalendarAPI) {
      return;
    }

    fetchCalendars();
  }, [loadingCalendarAPI]);

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
