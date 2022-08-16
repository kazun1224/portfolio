import type { CustomNextPage } from "next";
import aboutDetail from "public/img/aboutDetail.png";
import Image from "next/image";
import { Layout } from "src/Layout";

const About: CustomNextPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl md:px-8">
      <div className="grid place-items-center gap-8 md:grid-cols-2 lg:gap-12">
        {/* <!-------------------------------- image ---------------------------------------> */}

        <div className="overflow-hidden md:h-auto">
          <Image
            src={aboutDetail}
            alt="メインビジュアルの画像"
            className="h-full w-full"
          />
        </div>

        {/* <!-------------------------------- about ---------------------------------------> */}
        <div className="mb-10">
          <div className="mb-10 md:pt-8">
            <p className="text-center font-bold text-green-500 md:text-left">
              Who we are
            </p>

            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              なにをつくるかよりも、なぜ作るか
            </h1>

            <p className="text-gray-500 sm:text-lg md:mb-8">
              学生時代はバレーボールで全国大会を目指して切磋琢磨してました。
              <br />
              社会人になってからは、スポーツで培った継続力を活かして勤労。
              <br />
              大手家電メーカー、外交員、営業、Web制作などを様々な業務を経験。
              <br />
              <br />
              個人事業主としての経験を活かし、経営者やユーザー目線で使いやすく、私生活をより有意義にできるような
              仕組みを作ることができればと考えています。
              <br />
              何を作るかよりなぜ作るかを意識して、達観した視点で新しいものを作り出します。
              今後はDXを推進する動きに貢献していきたいと思っています。
              <br />
              <br />
              様々なプロジェクトに参画して経験を増やしていきたいです。
            </p>
          </div>

          {/* <!-------------------------------- about ---------------------------------------> */}
          <div className="mb-6 p-4">
            <h2 className="mb-4 px-2  text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              About us
            </h2>
            <div className=" text-gray-500 sm:text-lg md:mb-8">
              <dl>
                <div className="flex w-full p-2">
                  <dt className="w-4/12">趣味</dt>
                  <dd className="w-8/12">BBQ 洋画鑑賞</dd>
                </div>
                <div className="flex w-full p-2">
                  <dt className="w-4/12">好きなスポーツ</dt>
                  <dd className="w-8/12">バレーボール バスケットボール</dd>
                </div>
                <div className="flex w-full p-2">
                  <dt className="w-4/12">好きな映画</dt>
                  <dd className="w-8/12">アイアンマン 007 オーシャンズ11</dd>
                </div>
              </dl>
            </div>
          </div>
          {/* <!-------------------------------- section ---------------------------------------> */}
        </div>
      </div>
    </div>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
