"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { basePath } from "../../next.config";

interface productType {
  id: number;
  image: string;
  name: string;
  normalPrice: string;
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
      <p className="text-2xl my-2">{data.title}</p>
      <div className="mb-4 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:max-w-7xl lg:w-full lg:mb-0 lg:text-left">
        {product.map((item) => (
          <a
            href="#"
            className="group rounded-lg border border-primary px-5 py-4 transition-colors bg-light hover:border-primary hover:bg-light/30 hover:dark:border-light hover:dark:bg-primary"
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
          >
            <div>
              <Image
                className="w-full"
                src={basePath + item.image}
                width={200}
                height={200}
                alt={item.name}
              />
            </div>
            <h2 className="my-3 text-xl font-semibold text-dark hover:text-light">
              {item.name}
            </h2>
            <div>
              <p className="text-sm text-secondary hover:text-light font-bold line-through">
                {item.normalPrice}
              </p>
              <p className="text-md text-danger font-bold">{item.price}</p>
            </div>
            <Button className="w-full z-10 bg-primary enabled:hover:bg-light enabled:hover:text-primary enabled:hover:border-primary mt-2">
              Beli
            </Button>
          </a>
        ))}
      </div>
      {showAll ? (
        <Button
          className="w-full bg-transparent enabled:hover:bg-transparent enabled:hover:text-primary focus:ring-transparent 2xl:my-2"
          onClick={handleShow}
        >
          Lihat Lebih Sedikit <ChevronUpIcon className="w-6" />
        </Button>
      ) : (
        <Button
          className="w-full bg-transparent enabled:hover:bg-transparent enabled:hover:text-primary focus:ring-transparent 2xl:my-2"
          onClick={handleShow}
        >
          Lihat Selengkapnya <ChevronDownIcon className="w-6" />
        </Button>
      )}
    </div>
  );
}
