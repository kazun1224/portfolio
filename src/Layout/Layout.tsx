import { Header } from "src/Layout/Header";
import { FC, ReactElement } from "react";
import { Footer } from "src/Layout/Footer";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className="my-0 mx-auto w-full max-w-screen-xl px-36 sm:px-5">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
