import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "src/libs/client";
import { Works, PropsList } from "src/types/works";

const Works: NextPage<PropsList> = (props) => {
  return (
    <div>
      <h1 className="text-9xl">Works</h1>
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

// 記事一覧データの取得
export const getStaticProps: GetStaticProps<PropsList> = async () => {
  const data = await client.getList<Works>({ endpoint: "works" });

  return { props: data };
};

export default Works;
