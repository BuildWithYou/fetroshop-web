import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <ArrowLeftCircleIcon
        className="h-7 absolute top-0  z-10"
        onClick={() => swiper.slidePrev()}
      />
      <ArrowRightCircleIcon
        className="h-7 absolute top-0 right-0 z-10"
        onClick={() => swiper.slideNext()}
      />
    </>
  );
};
