import { ThemeProvider } from "styled-components";
import { theme } from "../lib/styles/theme";
import { GlobalStyle } from "../lib/styles/GlobalStyle";
import Head from "next/head";
import { CalendarAPIProvider } from "../lib/providers/CalendarAPIProvider";
import { SignedInProvider } from "../lib/providers/SignedInProvider";
import { StateProvider } from "../lib/providers/StateProvider/StateProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <StateProvider>
        <CalendarAPIProvider>
          <SignedInProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </SignedInProvider>
        </CalendarAPIProvider>
      </StateProvider>
    </>
  );
}
