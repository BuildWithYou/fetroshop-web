"use client";

import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCallback, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Button from "../Button";

export default function SliderCategory() {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <ChevronLeftIcon
        className="mr-2 h-10 text-primary hover:text-info cursor-pointer"
        onClick={handlePrev}
      />
      <Swiper
        className="w-auto font-semibold"
        onSwiper={setSwiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={9}
      >
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <Button className="px-5" pill="full" variant="light">
            Category
          </Button>
        </SwiperSlide>
      </Swiper>
      <ChevronRightIcon
        className="ml-2 h-10 text-primary hover:text-info cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
}
