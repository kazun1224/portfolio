import "src/styles/globals.css";
import type { CustomAppPage  } from "next/app";
import { MantineProvider } from "@mantine/core";


const MyApp: CustomAppPage = ({ Component, pageProps } ) => {
  const getLayout =
  Component.getLayout ||
  ((page) => {
    return page;
  });

  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        fontFamily: 'Open Sans, sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
      >
      {getLayout(<Component {...pageProps} />)}
    </MantineProvider>
  );
}

export default MyApp;
