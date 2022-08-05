import { Header } from "src/Layout/Header";
import { Footer } from "src/Layout/Footer";
import { CustomLayout } from "next";
import Head from "next/head";

export const SingleLayout: CustomLayout = (props) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-20 pb-5">{props.children}</main>
      <Footer />
    </>
  );
};
