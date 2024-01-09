import Card from "@/app/components/global/Card";
import Link from "next/link";
import React from "react";

type CardPromoProps = {
  link: string;
  image: string;
  title: string;
};

const CardPromo: React.FC<CardPromoProps> = ({ link, image, title }) => {
  return (
    <Link href={link} target="_blank">
      <Card size="sm" image={image}>
        <p className="text-md text-gray-500 max-w-sm truncate">{title}</p>
      </Card>
    </Link>
  );
};

export default CardPromo;
