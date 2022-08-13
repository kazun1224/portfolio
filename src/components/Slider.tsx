import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import pic from "public/swiper-img/test.jpg";

const images = [pic, pic, pic, pic, pic, pic];
SwiperCore.use([Pagination, Navigation, Autoplay]);

export const Slider: FC = () => {
  const getViewportSize = () => {
    if (typeof window === "object") {
      const w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );

      if (w >= 768) {
        return true;
      } else {
        return false;
      }
    }
  };

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
        {images.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={img}
                layout="responsive"
                width={640}
                height={400}
                alt="test_image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
