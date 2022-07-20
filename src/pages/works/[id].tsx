import dayjs from "dayjs";
import { GetListRequest } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { PropsDetail } from "src/types/works";

const WorksId: NextPage<PropsDetail> = (props) => {
  console.log(props);

  return (
    <main>
      <h1>{props.title}</h1>
      <time>{dayjs(props.createdAt).format("YYYY年MM月DD日")}</time>
      <div
        dangerouslySetInnerHTML={{
          __html: `${props.body}`,
        }}
      />
    </main>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<GetListRequest>({ endpoint: "works" });
  const ids = data.contents.map((content) => `/works/${content.id}`);
  return { paths: ids, fallback: false };
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const id = await ctx.params?.id;
  const data = await client.getListDetail<PropsDetail>({
    endpoint: "works",
    contentId: id,
  });

  return {
    props: data,
  };
};

export default WorksId;
