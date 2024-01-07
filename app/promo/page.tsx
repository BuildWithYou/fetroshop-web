import React from "react";
import ListPromo from "./components/ListPromo";

const promo = [
  {
    id: 1,
    title: "Promo Januari Meriah 2024",
    image: "/images/banner/banner1.png",
    link: "https://alfagift.id/download",
  },
  {
    id: 2,
    title: "OVO cashback 100%",
    image: "/images/banner/banner2.png",
    link: "https://alfagift.id/download",
  },
  {
    id: 3,
    title: "Hemat belanja mingguan potongan 80%",
    image: "/images/banner/banner3.png",
    link: "https://alfagift.id/download",
  },
  {
    id: 4,
    title: "Hemat belanja mingguan potongan 80%",
    image: "/images/banner/banner4.png",
    link: "https://alfagift.id/download",
  },
  {
    id: 5,
    title: "Promo Januari Meriah 2024",
    image: "/images/banner/banner1.png",
    link: "https://alfagift.id/download",
  },
  {
    id: 6,
    title: "OVO cashback 100%",
    image: "/images/banner/banner2.png",
    link: "https://alfagift.id/download",
  },
  {
    id: 7,
    title: "Hemat belanja mingguan potongan 80%",
    image: "/images/banner/banner3.png",
    link: "https://alfagift.id/download",
  },
  {
    id: 8,
    title: "Hemat belanja mingguan potongan 80%",
    image: "/images/banner/banner4.png",
    link: "https://alfagift.id/download",
  },
];

const page = () => {
  return (
    <main className="flex flex-col items-center min-h-screen px-3 pt-28 2xl:p-28">
      <div className="w-fill px-5">
        <p className="text-2xl my-6">Semua Promo</p>
        <ListPromo promo={promo} />
      </div>
    </main>
  );
};

export default page;
