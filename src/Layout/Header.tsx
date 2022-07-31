import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, NAV_ITEMS_DRAWER } from "src/utils/nav";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { NextRouter, useRouter } from "next/router";

export const Header = () => {
  const router: NextRouter = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className=" flex items-center justify-between py-4  md:py-8 ">
        {/* logo - start */}
        <Link href="/">
          <a className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold text-green-600 md:text-3xl">
            Portfolio
          </a>
        </Link>
        {/* logo - end */}

        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex">
          {NAV_ITEMS.map((item) => {
            return (
              <Link key={item.href} href={item.href}>
                <a className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-green-500 active:text-green-700">
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>
        {/* nav - end */}

        {/* buttons - start */}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-green-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Menu
        </button>

        {/* buttons - end */}
      </header>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <nav className="p-6 text-center">
          {NAV_ITEMS_DRAWER.map((item) => {
            return (
              <Link key={item.href} href={item.href}>
                <a
                  className={`py-6 block text-lg border-gray-600 font-semibold  transition duration-100 hover:text-green-500 ${
                    router.pathname === item.href
                      ? "bg-green-500 text-white rounded-md"
                      : "text-gray-600"
                  }`}
                  onClick={toggleDrawer}
                >
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>
      </Drawer>
    </>
  );
};
