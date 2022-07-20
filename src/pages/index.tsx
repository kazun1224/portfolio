import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import { client } from "src/libs/client";
import { Works, PropsList } from "src/types/works";
// import {handler} from "./api/search"

const Home: NextPage<PropsList> = (props) => {
  console.log(props.contents);

  return (
    <div>
      <h1 className="text-9xl">Works</h1>
      <p>{props.totalCount}</p>

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
    </div>
  );
};

export const getStaticProps: GetStaticProps<PropsList> = async () => {
  const data = await client.getList<Works>({ endpoint: "works" });

  return { props: data };
};

export default Home;
