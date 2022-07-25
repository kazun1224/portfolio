import type { CustomNextPage, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "src/libs/client";
import { Works, PropsList } from "src/types/works";
import { Layout } from "src/Layout/Layout";

const Works: CustomNextPage<PropsList> = (props) => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* <!-- text - start --> */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Works
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {props.contents.map((content) => {
            return (
              <div key={content.id}>
                <Link href={`/works/${content.id}`}>
                  <a className="flex flex-col overflow-hidden rounded-lg border bg-white">
                    <div className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                      <Image
                        src={content.img.url}
                        layout='fill'
                        loading="lazy"
                        alt="Photo by Minh Pham"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        unoptimized={true}
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                      <h2 className="mb-2 text-lg font-semibold text-gray-800">
                        {content.title}
                      </h2>

                      <p className="mb-8 text-gray-500">
                        {content.description}
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    // <div>
    //   <h1 className="text-9xl">Works</h1>
    //   <p>{props.totalCount}</p>

    //   <article>
    //     <ul>
    //       {props.contents.map((content) => {
    //         return (
    //           <li key={content.id}>
    //             <h2>
    //               <Link href={`/works/${content.id}`}>
    //                 <a className="underline">{content.title}</a>
    //               </Link>
    //             </h2>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </article>
    // </div>
  );
};

// 記事一覧データの取得
export const getStaticProps: GetStaticProps<PropsList> = async () => {
  const data = await client.getList<Works>({ endpoint: "works" });

  return { props: data };
};

Works.getLayout = (page) => <Layout>{page}</Layout>;

export default Works;
