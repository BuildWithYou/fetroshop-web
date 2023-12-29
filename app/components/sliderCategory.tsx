"use client";

import { Badge } from "flowbite-react";
import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiClock } from "react-icons/hi";
import { Navigation } from "swiper/modules";
import { useCallback, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

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
        className="mr-2 h-10 hover:text-primary cursor-pointer"
        onClick={handlePrev}
      />
      <Swiper
        className="w-auto"
        onSwiper={setSwiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={9}
      >
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
        <SwiperSlide>
          <Badge
            className="bg-light hover:bg-primary hover:text-light cursor-pointer"
            icon={HiClock}
          >
            Category
          </Badge>
        </SwiperSlide>
      </Swiper>
      <ChevronRightIcon
        className="ml-2 h-10 hover:text-primary cursor-pointer"
        onClick={handleNext}
      />
    </div>
  );
}
