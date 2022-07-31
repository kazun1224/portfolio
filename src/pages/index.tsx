import type { GetStaticProps, CustomNextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "src/Layout/Layout";
import { client } from "src/libs/client";
import { Works, PropsList } from "src/types/works";
import minePic from "public/img/main.png";
import about from "public/img/about.png";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

const Home: CustomNextPage<PropsList> = (props) => {
  const HomeWorkContents: (Works & MicroCMSContentId & MicroCMSDate)[] = props.contents.slice(-4);

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
            alt="メインビジュアルの画像"
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
              alt="aboutのイラスト"
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
              大手家電メーカー勤務後、 個人事業主として外交販売員として活動
              <br />
              不動産の営業や製造業、個人事業主としてWeb制作の請負など様々な経験をしてきました。
              <br />
              個人事業主の経験を活かして経営者の目線など、達観した視点で、
              <br />
              「なぜ作るか」を念頭に置いて制作を行います。
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
                            alt="Photo by Minh Pham"
                            layout="fill"
                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            unoptimized={true}
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
