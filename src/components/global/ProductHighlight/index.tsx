"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Button from "../Button";
import ProductCard from "../ProductCard";

interface productType {
  id: number;
  image: string;
  name: string;
  promo: string;
  price: string;
}

interface dataType {
  title: string;
  product: productType[];
}

export default function ProuctHighLight(data: dataType) {
  const [showAll, setShowAll] = useState(false);

  const handleShow = () => {
    setShowAll(!showAll);
  };
  let product = data.product;
  if (!showAll) {
    product = data.product.slice(0, 6);
  }

  return (
    <div className="max-w-7xl w-full font-bold flex flex-col mt-2">
      <p className="text-2xl text-dark dark:text-light my-2">{data.title}</p>
      <div className="mb-4 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:max-w-7xl lg:w-full lg:mb-0 lg:text-left">
        {product.map((item, index) => (
          <ProductCard key={"prod-" + index} data={item} />
        ))}
      </div>
      {showAll ? (
        <Button
          className="w-full 2xl:my-2"
          onClick={handleShow}
          variant="inlinePrimary"
        >
          Lihat Lebih Sedikit <ChevronUpIcon className="w-6" />
        </Button>
      ) : (
        <Button
          className="w-full 2xl:my-2"
          onClick={handleShow}
          variant="inlinePrimary"
        >
          Lihat Selengkapnya <ChevronDownIcon className="w-6" />
        </Button>
      )}
    </div>
  );
}
