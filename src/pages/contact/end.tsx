import type { CustomNextPage } from "next";
import Link from "next/link";
import { Layout } from "src/Layout";

const End: CustomNextPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-10 text-center">
        <h2 className="mb-5 text-lg font-bold md:text-2xl">
          お問い合わせありがとうございました。
        </h2>
        <p>
          24時間以内に返信いたします。
          <br className="md:hidden" />
          土日、祝日は返信が遅れる場合があります。
        </p>
      </div>
      <div className="flex flex-col gap-2.5 sm:justify-center md:flex-row ">
        <Link href="/">
          <a className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
            トップページに戻る
          </a>
        </Link>
      </div>
    </div>
  );
};

End.getLayout = (page) => <Layout>{page}</Layout>;

export default End;
