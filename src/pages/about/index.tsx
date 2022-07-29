import type { CustomNextPage } from "next";
import { Layout } from "src/Layout/Layout";
import aboutDetail from "public/img/aboutDetail.png";
import Image from "next/image";

const About: CustomNextPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl md:px-8">
      <div className="grid place-items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <div className="overflow-hidden md:h-auto">
            <Image
              src={aboutDetail}
              alt="メインビジュアルの画像"
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="md:pt-8">
          <p className="text-center font-bold text-green-500 md:text-left">
            Who we are
          </p>

          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
            なにをつくるかよりも、なぜ作るか
          </h1>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            大手家電メーカー勤務後、 個人事業主として外交販売員として活動
            <br />
            不動産の営業や製造業、個人事業主としてWeb制作の請負など様々な経験をしてきました。
            <br />
            個人事業主の経験を活かして経営者の目線など、達観した視点で、
            <br />
            「なぜ作るか」を念頭に置いて制作を行います。
          </p>

          <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
            About us
          </h2>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            ・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
          </p>
        </div>
      </div>
    </div>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
