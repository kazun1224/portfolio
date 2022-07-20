import dayjs from "dayjs";
import { GetListRequest } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { PropsDetail } from "src/types/works";

const WorksId: NextPage<PropsDetail> = (props) => {
  return (
    <main>
      <h2>WorksId</h2>
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

// 動的にするための記述
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList<GetListRequest>({ endpoint: "works" });
  const ids = data.contents.map((content) => `/works/${content.id}`);
  return { paths: ids, fallback: false };
};

// 記事データの取得
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
