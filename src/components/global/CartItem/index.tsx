"use client";

import { TrashIcon } from "@heroicons/react/16/solid";
import Button from "../Button";
import { basePath } from "../../../../next.config";
import Image from "next/image";
import CartCount from "../CartCount";
import { useState } from "react";
import { BuildingStorefrontIcon, GifIcon } from "@heroicons/react/24/outline";

interface productType {
  data: {
    id: number;
    image: string;
    name: string;
    promo: number;
    price: number;
  };
}

export default function CartItem({ data }: productType) {
  const [productCount, setProductCount] = useState(1);
  const changeCount = (type: "plus" | "minus") => {
    if (type == "minus") {
      if (productCount > 1) {
        setProductCount(productCount - 1);
      }
    } else {
      setProductCount(productCount + 1);
    }
  };
  return (
    <div className="flex flex-col bg-secondary/5 rounded-md gap-2 p-2 sm:p-4 mt-3">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h2 className="flex flex-row gap-2">
            <BuildingStorefrontIcon className="w-4" /> Stok dari Gudang
          </h2>
          <p className="flex flex-row gap-2">
            <GifIcon className="w-4" />
            Pengiriman 1-2 Hari
          </p>
        </div>
        <Button className="focus:ring-0" variant="inlinePrimary">
          <TrashIcon className="w-6" />
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center">
        <div className="w-full sm:w-3/5 flex flex-row gap-2">
          <Image
            className="w-1/3 sm:w-1/4 rounded-md"
            src={basePath + data.image}
            width={60}
            height={60}
            alt=""
          />
          <div className="w-2/3 sm:w-3/4">
            <h2 className="my-3 text-xl font-semibold text-dark dark:text-light hover:text-light line-clamp-2">
              {data.name}
            </h2>
            <p className="text-sm text-secondary hover:text-light font-bold line-through">
              Rp {data.promo.toLocaleString()}
            </p>
            <p className="text-md text-dark dark:text-light font-bold">
              Rp {data.price.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="w-full sm:w-2/5 flex flex-row-reverse sm:flex-row sm:justify-around items-center pb-2 pr-2 md:p-0">
          <CartCount
            onPlus={() => changeCount("plus")}
            onMinus={() => changeCount("minus")}
            value={productCount}
            buttonStyle="p-1"
            size={"sm"}
          />
          <p className="w-1/2 text-md text-center text-dark dark:text-light font-bold">
            Rp {(data.price * productCount).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
