import dayjs from "dayjs";
import { GetListRequest } from "microcms-js-sdk";
import { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { SingleLayout } from "src/Layout/SingleLayout";
import { client } from "src/libs/client";
import { PropsDetail } from "src/types/works";

const WorksId: CustomNextPage<PropsDetail> = (props) => {
  return (
    <>
      <div className="pb-20">
        <div className="relative pt-18rem md:pt-36rem lg:pt-50rem">
          <Image
            src={props.img.url}
            layout="fill"
            loading="lazy"
            alt="アプリケーションの画像"
            className=" object-cover"
          />
        </div>
        <div
          className="prose pt-10 md:pt-20"
          dangerouslySetInnerHTML={{
            __html: `${props.body}`,
          }}
        />
      </div>
      <time>{dayjs(props.createdAt).format("YYYY年MM月DD日")}</time>
    </>
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

WorksId.getLayout = (page) => <SingleLayout>{page}</SingleLayout>;

export default WorksId;
