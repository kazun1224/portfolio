import type { CustomNextPage } from "next";
import { Layout } from "src/Layout/Layout";
import aboutDetail from "public/img/aboutDetail.png";
import Image from "next/image";

const About: CustomNextPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
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
            Our competitive advantage
          </h1>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
            <br />
            <br />
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is{" "}
            <a
              href="#"
              className="text-green-500 underline transition duration-100 hover:text-green-600 active:text-green-700"
            >
              random
            </a>{" "}
            or otherwise generated. It may be used to display a sample of fonts
            or generate text for testing. Filler text is dummy text which has no
            meaning however looks very similar to real text.
          </p>

          <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
            About us
          </h2>

          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated. It may be used to display
            a sample of fonts or generate text for testing. Filler text is dummy
            text which has no meaning however looks very similar to real text.
          </p>
        </div>
      </div>
    </div>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
