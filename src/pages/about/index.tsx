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
            親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）
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
