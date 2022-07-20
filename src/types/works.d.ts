import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from "microcms-js-sdk";

export type Works = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  img: {
    url: string;
    height: number;
    width: number;
  };
  body: string;
};

export type PropsList = MicroCMSListResponse<Works>;

export type PropsDetail = Blog & MicroCMSContentId & MicroCMSDate;
