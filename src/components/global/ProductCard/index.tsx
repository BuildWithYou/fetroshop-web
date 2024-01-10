import Link from "next/link";
import Button from "../Button";
import Image from "next/image";
import { basePath } from "../../../../next.config";

interface ProductCardProps {
  data: { image: string; name: string; promo: number; price: number };
}

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="group rounded-lg border border-primary px-5 py-4 transition-colors bg-light dark:bg-primaryDark/15 hover:border-primary hover:bg-light/30 hover:dark:border-light hover:dark:bg-primaryDark/50">
      <Link href="#">
        <div>
          <Image
            className="w-full rounded-md"
            src={basePath + data.image}
            width={200}
            height={200}
            alt={data.name}
          />
        </div>
        <h2 className="my-3 text-xl font-semibold text-dark dark:text-light hover:text-light">
          {data.name}
        </h2>
        <div>
          <p className="text-sm text-secondary hover:text-light font-bold line-through">
            {data.promo.toLocaleString()}
          </p>
          <p className="text-md text-danger font-bold">
            {data.price.toLocaleString()}
          </p>
        </div>
      </Link>
      <Button className="w-full z-10 mt-2">Beli</Button>
    </div>
  );
}
