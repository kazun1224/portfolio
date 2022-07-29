import type { CustomNextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "src/Layout/Layout";
import pic404 from "public/img/404.png";

const Custom404: CustomNextPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-8">
      <div className="grid place-items-center gap-8 md:grid-cols-2">
        {/* image - start */}
        <div className="relative  overflow-hidden  md:h-auto">
          <Image src={pic404} alt="404のイラスト" />
        </div>
        {/* image - end */}
        {/* content - start */}
        <div className="flex flex-col items-center justify-center md:items-start md:py-24 lg:py-32">
          <p className="mb-4 text-sm font-semibold uppercase text-green-600 md:text-base">
            Error 404
          </p>
          <h1 className="mb-2 text-center text-5xl font-bold text-gray-800 sm:text-left md:text-3xl">
            Page not found
          </h1>

          <p className="mb-8 text-center text-gray-500 sm:text-left md:text-lg">
            存在しないページです。
          </p>

          <Link href="/">
            <a className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
              ホームへ戻る
            </a>
          </Link>
        </div>
        {/* content - end */}
      </div>
    </div>
  );
};

// Layoutの適用
Custom404.getLayout = (page) => <Layout>{page}</Layout>;

export default Custom404;
