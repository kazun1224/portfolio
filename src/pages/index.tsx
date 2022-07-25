import type { GetStaticProps, CustomNextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "src/Layout/Layout";
import { client } from "src/libs/client";
import { Works, PropsList } from "src/types/works";
import minePic from "public/img/main.png";
import about from "public/img/about.png";

const Home: CustomNextPage<PropsList> = (props) => {
  return (
    <div>
      <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        {/* <!-- content - start --> */}
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
          <p className="mb-4 font-semibold text-green-500 md:mb-5 md:text-3xl xl:text-2xl">
            My Portfolio
          </p>

          <h1 className="text-black-800 mb-6 text-4xl font-bold sm:text-5xl md:mb-10 md:text-6xl">
            Web Developer
          </h1>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
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

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-64 overflow-hidden md:h-auto">
                <Image
                  src={about}
                  alt="aboutのイラスト"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:pt-8">
              <p className="text-center font-bold text-green-500 md:text-left">
                Who we are
              </p>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Our competitive advantage
              </h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is{" "}
                <a
                  href="#"
                  className="text-green-500 underline transition duration-100 hover:text-green-600 active:text-green-700"
                >
                  random
                </a>{" "}
                or otherwise generated. It may be used to display a sample of
                fonts or generate text for testing. Filler text is dummy text
                which has no meaning however looks very similar to real text.
              </p>

              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                About us
              </h2>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-------------------------------- section ---------------------------------------> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
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

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* <!-- article - start --> */}

            {/* <!-- article - end --> */}
            {props.contents.map((content) => {
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
          <div className=" flex flex-col items-center py-6 sm:py-8 lg:py-12">
            <Link href="/works">
              <a className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                Go Works
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-------------------------------- section ---------------------------------------> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
            <div>
              <h2 className="text-xl font-bold text-green-500 md:text-2xl">
                Contact
              </h2>
              <p className="text-gray-600">No Credit Card required</p>
            </div>
            <Link href="/contact">
              <a className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
                Start now
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
