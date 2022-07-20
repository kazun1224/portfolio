import "src/styles/globals.css";
import type { CustomAppPage  } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";


const MyApp: CustomAppPage = (props) => {
  const { Component, pageProps } = props;

  const getLayout =
  Component.getLayout ||
  ((page) => {
    return page;
  });

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
      {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </>
  );
}

export default MyApp;
