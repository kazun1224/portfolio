import type { GetStaticProps, CustomNextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "src/libs/client";
import { Works, PropsList } from "src/types/works";
import minePic from "public/img/main.png";
import about from "public/img/about.png";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Layout } from "src/Layout";

const Home: CustomNextPage<PropsList> = (props) => {
  const HomeWorkContents: (Works & MicroCMSContentId & MicroCMSDate)[] =
    props.contents.slice(0, 4);

  return (
    <div>
      <section className="flex flex-col-reverse justify-between gap-20 pb-20 text-center  md:flex-row md:gap-16 md:pb-32">
        {/* <!-- content - start --> */}
        <div className="flex flex-col justify-center md:text-left lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-green-500 md:mb-5 md:text-3xl xl:text-2xl">
            My Portfolio
          </p>

          <h1 className="text-black-800 mb-10 text-4xl font-bold sm:text-5xl md:text-6xl">
            Web Developer
          </h1>

          <div className="flex flex-col gap-2.5 sm:justify-center md:flex-row md:justify-start">
            <Link href="/works">
              <a className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
                Go Works
              </a>
            </Link>
          </div>
        </div>
        {/* <!-- content - end --> */}

        {/* <!-- image - start --> */}
        <div className="overflow-hidden  xl:w-5/12">
          <Image
            src={minePic}
            alt="メインビジュアル"
            className="h-full w-full"
          />
        </div>
        {/* <!-- image - end --> */}
      </section>
      {/* <!-------------------------------- section ---------------------------------------> */}

      <section className="px-4 pb-20 md:px-8 md:pb-32">
        <div className="grid place-items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden md:h-auto">
            <Image
              src={about}
              alt="About"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="md:pt-8">
            <p className="text-center font-bold text-green-500 md:text-left">
              Who we are
            </p>

            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              About us
            </h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）
            </p>
          </div>
        </div>
      </section>

      {/* <!-------------------------------- section ---------------------------------------> */}
      <div className="pb-20 md:pb-32">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Works
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a works.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="mb-10 grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* <!-- article - start --> */}

            {/* <!-- article - end --> */}
            {HomeWorkContents.map((content) => {
              return (
                <div key={content.id}>
                  <h2>
                    <Link href={`/works/${content.id}`}>
                      <a
                        key={content.id}
                        className="flex flex-col items-center gap-4 font-semibold transition  duration-100 hover:text-green-600 active:text-green-700 md:flex-row lg:gap-6"
                      >
                        <div className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                          <Image
                            src={content.img.url}
                            alt="アプリケーションの画像"
                            layout="fill"
                            className="object-cover transition duration-200 group-hover:scale-110"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <h2 className="text-xl font-bold text-gray-800">
                            {content.title}
                          </h2>
                          <p className="text-gray-500">{content.description}</p>
                        </div>
                      </a>
                    </Link>
                  </h2>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2.5 sm:justify-center md:flex-row ">
            <Link href="/works">
              <a className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
                Go Works
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-------------------------------- section ---------------------------------------> */}
      <div className="pb-20 md:pb-32">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className=" flex flex-col items-center justify-between gap-10 rounded-lg bg-gray-100 py-9 px-6 text-center sm:flex-row sm:gap-4 sm:p-4 sm:text-left md:p-8">
            <div>
              <h2 className="mb-4 text-xl font-bold text-green-500 sm:mb-0 md:text-2xl">
                Contact
              </h2>
              <p className="text-gray-600">お問い合わせはこちら</p>
            </div>
            <Link href="/contact">
              <a className=" inline-block w-full rounded-lg bg-green-500 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 sm:w-fit sm:px-8 md:text-base ">
                Go Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PropsList> = async () => {
  const data = await client.getList<Works>({ endpoint: "works" });

  return { props: data };
};

// Layoutの適用
Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
