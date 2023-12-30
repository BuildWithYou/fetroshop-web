"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { basePath } from "../../next.config";
import Link from "next/link";

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
          <div
            className="group rounded-lg border border-primary px-5 py-4 transition-colors bg-light dark:bg-primaryDark/15 hover:border-primary hover:bg-light/30 hover:dark:border-light hover:dark:bg-primaryDark/50"
            key={item.id}
          >
            <Link href="#">
              <div>
                <Image
                  className="w-full rounded-md"
                  src={basePath + item.image}
                  width={200}
                  height={200}
                  alt={item.name}
                />
              </div>
              <h2 className="my-3 text-xl font-semibold text-dark dark:text-light hover:text-light">
                {item.name}
              </h2>
              <div>
                <p className="text-sm text-secondary hover:text-light font-bold line-through">
                  {item.normalPrice}
                </p>
                <p className="text-md text-danger font-bold">{item.price}</p>
              </div>
            </Link>
            <Button className="w-full z-10 bg-primary dark:bg-primaryDark enabled:hover:bg-light dark:enabled:hover:bg-primary enabled:hover:text-primary dark:enabled:hover:text-light enabled:hover:border-primary mt-2">
              Beli
            </Button>
          </div>
        ))}
      </div>
      {showAll ? (
        <Button
          className="w-full bg-transparent dark:bg-transparent enabled:hover:bg-transparent dark:enabled:hover:bg-transparent enabled:hover:text-primaryDark dark:enabled:hover:text-primary focus:ring-transparent dark:focus:ring-transparent 2xl:my-2"
          onClick={handleShow}
        >
          Lihat Lebih Sedikit <ChevronUpIcon className="w-6" />
        </Button>
      ) : (
        <Button
          className="w-full bg-transparent dark:bg-transparent enabled:hover:bg-transparent dark:enabled:hover:bg-transparent enabled:hover:text-primaryDark dark:enabled:hover:text-primary focus:ring-transparent dark:focus:ring-transparent 2xl:my-2"
          onClick={handleShow}
        >
          Lihat Selengkapnya <ChevronDownIcon className="w-6" />
        </Button>
      )}
    </div>
  );
}
