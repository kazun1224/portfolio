import "src/styles/globals.css";
import type { CustomAppPage } from "next/app";
import { useLoading } from "src/hooks/useLoading";

const MyApp: CustomAppPage = ({ Component, pageProps }) => {
  const {pageLoading, loadingComponent} = useLoading();

  // Custom Layout
  const getLayout = Component.getLayout ?? ((page) => page);

  return pageLoading
    ? loadingComponent
    : getLayout(<Component {...pageProps} />);
};

export default MyApp;
