import Image from "next/image";
import SliderCategory from "./components/global/SliderCategory";
import ProuctHighLight from "./components/global/ProductHighlight";
import SliderBanner from "./components/global/SliderBanner";
import { basePath } from "../next.config";
import "swiper/css";
import Link from "next/link";
import Button from "./components/global/Button";

const product = [
  {
    id: 1,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 2,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 3,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 4,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 5,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 6,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 7,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 8,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 9,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 10,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
  {
    id: 11,
    name: "Fruit Tea Blackcurrant",
    promo: "10000",
    price: "7000",
    image: "/images/product/product1.png",
  },
];

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl w-full items-center justify-between hidden lg:block">
        <SliderBanner rows={2} />
      </div>
      <div className="w-full items-center justify-between lg:hidden">
        <SliderBanner rows={1} />
      </div>
      <div className="max-w-7xl w-full hidden lg:block font-mono text-sm my-2">
        <SliderCategory />
      </div>

      <div className="max-w-7xl w-full font-mono text-sm my-2">
        <Link href="#">
          <Image
            className="w-full"
            src={basePath + "/images/download.gif"}
            alt="Next.js Logo"
            width={800}
            height={200}
            priority
          />
        </Link>
      </div>

      <ProuctHighLight title="Produk Rekomendasi" product={product} />
      <ProuctHighLight title="Produk Terbaru" product={product} />
    </div>
  );
}
