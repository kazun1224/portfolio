import type { GetStaticProps, CustomNextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "src/Layout/Layout";
import { client } from "src/libs/client";
import { Works, PropsList } from "src/types/works";
import heroPic from "public/img/heroPic.jpg";

const Home: CustomNextPage<PropsList> = (props) => {
  return (
    <div>
      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        {/* <!-- content - start --> */}
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-green-500 md:mb-5 md:text-3xl xl:text-2xl">
            I m kazu
          </p>

          <h1 className="text-black-800 mb-6 text-4xl font-bold sm:text-5xl md:mb-10 md:text-6xl">
          Web Developer
          </h1>

          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            This is my Portfolio
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="/works">

            <a

              className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
            >
              Go to Works
            </a>
            </Link>
          </div>
        </div>
        {/* <!-- content - end --> */}

        {/* <!-- image - start --> */}
        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg xl:w-5/12">
          <Image src={heroPic} alt="メインビジュアルの画像" className="w-full h-full"/>
        </div>
        {/* <!-- image - end --> */}
      </section>

      <h2>Works</h2>
      <p>{props.totalCount}</p>
      <article>
        <ul>
          {props.contents.map((content) => {
            return (
              <li key={content.id}>
                <h2>
                  <Link href={`/works/${content.id}`}>
                    <a className="underline">{content.title}</a>
                  </Link>
                </h2>
              </li>
            );
          })}
        </ul>
      </article>
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
