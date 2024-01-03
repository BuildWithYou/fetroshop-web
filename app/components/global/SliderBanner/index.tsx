"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css/navigation";
import { basePath } from "../../../../next.config";

interface params {
  rows?: number;
}

export default function SliderBanner({ rows = 1 }: params) {
  return (
    <Swiper
      className="w-full"
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={rows}
      navigation
      autoplay
      loop
    >
      <SwiperSlide>
        <Image
          className="w-full cursor-pointer"
          src={basePath + "/images/banner/banner1.png"}
          width={800}
          height={400}
          alt=".."
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-full cursor-pointer"
          src={basePath + "/images/banner/banner2.png"}
          width={800}
          height={400}
          alt=".."
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-full cursor-pointer"
          src={basePath + "/images/banner/banner3.png"}
          width={800}
          height={400}
          alt=".."
          onClick={() => {}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="w-full cursor-pointer"
          src={basePath + "/images/banner/banner4.png"}
          width={800}
          height={400}
          alt=".."
          onClick={() => {}}
        />
      </SwiperSlide>
    </Swiper>
  );
}
