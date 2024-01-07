import cn from "@/app/utils/cn";
import { cva } from "class-variance-authority";
import React from "react";
import Image from "next/image";

interface CardProps {
  size: "sm" | "md" | "lg" | "full";
  image?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ size, image, children }) => {
  return (
    <div className={cn(cardVariants({ size }))}>
      {image && (
        <Image
          className="rounded-t-md"
          src={image}
          width={800}
          height={400}
          alt=".."
        />
      )}
      <div className="pt-3 pb-5 px-5">{children}</div>
    </div>
  );
};

const cardVariants = cva("shadow-sm rounded-md border border-grey-400", {
  variants: {
    size: {
      sm: "w-full max-w-sm",
      md: "w-full max-w-md",
      lg: "w-full max-w-lg",
      full: "w-full",
    },
  },
});

export default Card;
