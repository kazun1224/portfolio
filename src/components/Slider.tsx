import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; //カルーセル用のタグをインポート
import { FC } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import pic404 from "public/img/404.png";
import pic from "public/swiper-img/スクリーンショット (42).png";
import pic1 from "public/swiper-img/3919204_s.jpg";

SwiperCore.use([Pagination, Navigation, Autoplay]);

// // カルーセルにする画像のソースをリストにします
// const images = [
//   '/public/swiper-img/スクリーンショット (42).png',
//   '/public/swiper-img/スクリーンショット (42).png',
//   '/public/swiper-img/スクリーンショット (42).png',
// ]

import "swiper/css";
import "swiper/css/pagination";

export const Slider: FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={pic404}
            layout="responsive"
            width={640}
            height={400}
            alt="test_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={pic}
            layout="responsive"
            width={640}
            height={400}
            alt="test_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={pic}
            layout="fill"
            width={640}
            height={400}
            alt="test_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={pic1}
            layout="responsive"
            width={640}
            height={400}
            alt="test_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={pic1}
            layout="responsive"
            width={640}
            height={400}
            alt="test_image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
