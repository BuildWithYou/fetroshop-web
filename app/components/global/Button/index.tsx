import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import cn from "../../../utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

function Button({
  children,
  className,
  variant,
  size,
  pill,
  justify,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant, size, pill, justify, className })
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("flex items-center", {
  variants: {
    variant: {
      primary:
        "text-light bg-primary border border-primary enabled:hover:bg-primaryDark focus:ring-4 focus:ring-primaryDark dark:bg-primaryDark dark:text-light dark:border-primary dark:enabled:hover:bg-primary dark:enabled:hover:border-primary dark:focus:ring-primary",
      secondary:
        "text-light bg-secondary border border-secondary enabled:hover:bg-secondaryDark focus:ring-4 focus:ring-secondaryDark dark:bg-secondaryDark dark:text-light dark:border-secondary dark:enabled:hover:bg-secondary dark:enabled:hover:border-secondary dark:focus:ring-secondary",
      light:
        "text-dark bg-light border border-dark hover:text-light enabled:hover:bg-secondaryDark focus:ring-4 focus:ring-secondaryDark dark:bg-secondaryDark dark:text-light dark:border-light dark:enabled:hover:text-dark dark:enabled:hover:bg-light dark:enabled:hover:border-light dark:focus:ring-light",
      outlinePrimary:
        "text-primary bg-transparent border border-primary enabled:hover:text-primaryDark enabled:hover:bg-transparent focus:ring-4 focus:ring-primary dark:bg-transparent dark:text-primary dark:border-primary dark:enabled:hover:bg-transparent dark:enabled:hover:border-primaryDark dark:focus:ring-primary",
      labelPrimary:
        "text-primary bg-transparent enabled:hover:text-info enabled:hover:bg-transparent focus:ring-4 focus:ring-primary dark:bg-transparent dark:text-primary dark:enabled:hover:bg-transparent dark:focus:ring-primary",
    },
    size: {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
      xl: "text-base px-6 py-3",
    },
    pill: {
      full: "rounded-full",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      no: "",
    },
    justify: {
      center: "justify-center",
      around: "justify-around",
      evently: "justify-evently",
      between: "justify-between",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    pill: "md",
    justify: "center",
  },
});

export default Button;
