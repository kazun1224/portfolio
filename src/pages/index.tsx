import { Title } from "@mantine/core";
import type { GetStaticProps, CustomNextPage } from "next";
import Link from "next/link";
import { Layout } from "src/Layout/Layout";
import { client } from "src/libs/client";
import { Works, PropsList } from "src/types/works";

const Home: CustomNextPage<PropsList> = (props) => {
  return (
    <div>
      <h1 className="text-8xl">Home</h1>

      <Title order={1}>This is h1 title</Title>

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
