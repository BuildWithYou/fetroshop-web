import React from "react";
import ListPromo from "./components/ListPromo";
import Breadcrumb from "../components/global/BreadCrumb";

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
    title: "Hemat belanja mingguan potongan 80% ksadkadjadasjdkaj",
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
  const paths = [
    { name: "Home", url: "/", active: true },
    { name: "Promo", url: "/promo", active: false },
  ];
  return (
    <div className="w-fill mt-3">
      <Breadcrumb paths={paths} />
      <p className="text-2xl my-6">Semua Promo</p>
      <ListPromo promo={promo} />
    </div>
  );
};

export default page;
