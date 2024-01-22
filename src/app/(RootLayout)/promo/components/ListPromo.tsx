import React from "react";
import CardPromo from "./CardPromo";

interface promoType {
  id: number;
  image: string;
  title: string;
  link: string;
}

interface PromoProps {
  promo: promoType[];
}

const ListPromo: React.FC<PromoProps> = ({ promo }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-12 lg:justify-between md:justify-center items-start">
      {promo?.map((item) => (
        <CardPromo
          key={item.id}
          link={item.link}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default ListPromo;
