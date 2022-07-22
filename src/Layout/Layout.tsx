import { Header } from "src/Layout/Header";
import { Footer } from "src/Layout/Footer";
import { CustomLayout } from "next";

export const Layout: CustomLayout = (props) => {
  return (
    <div className="my-0 mx-auto w-full max-w-screen-xl sm:px-5 ">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
