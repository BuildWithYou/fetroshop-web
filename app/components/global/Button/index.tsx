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
      success:
        "text-light bg-success border border-success enabled:hover:bg-successDark focus:ring-4 focus:ring-successDark dark:bg-successDark dark:text-light dark:border-success dark:enabled:hover:bg-success dark:enabled:hover:border-success dark:focus:ring-success",
      danger:
        "text-light bg-danger border border-danger enabled:hover:bg-dangerDark focus:ring-4 focus:ring-dangerDark dark:bg-dangerDark dark:text-light dark:border-danger dark:enabled:hover:bg-danger dark:enabled:hover:border-danger dark:focus:ring-danger",
      warning:
        "text-light bg-warning border border-warning enabled:hover:bg-warningDark focus:ring-4 focus:ring-warningDark dark:bg-warningDark dark:text-light dark:border-warning dark:enabled:hover:bg-warning dark:enabled:hover:border-warning dark:focus:ring-warning",
      info: "text-light bg-info border border-info enabled:hover:bg-infoDark focus:ring-4 focus:ring-infoDark dark:bg-infoDark dark:text-light dark:border-info dark:enabled:hover:bg-info dark:enabled:hover:border-info dark:focus:ring-info",
      light:
        "text-dark bg-light border border-gray-200 hover:text-gray-800 enabled:hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 dark:bg-gray-300 dark:text-gray-800 dark:border-light dark:enabled:hover:text-dark dark:enabled:hover:bg-light dark:enabled:hover:border-light dark:focus:ring-dark",
      dark: "text-light bg-dark border border-dark hover:text-white enabled:hover:bg-gray-600 focus:ring-4 focus:ring-gray-600 dark:bg-dark dark:text-light dark:border-light dark:enabled:hover:text-white dark:enabled:hover:bg-gray-900 dark:enabled:hover:border-light dark:focus:ring-info",
      outlinePrimary:
        "text-primary bg-transparent border-2 border-primary hover:border-primaryDark enabled:hover:text-primaryDark enabled:hover:bg-transparent focus:ring-4 focus:ring-primary dark:bg-transparent dark:text-primary dark:border-primary dark:enabled:hover:bg-transparent dark:enabled:hover:border-primaryDark dark:focus:ring-primary",
      outlineSecondary:
        "text-secondary bg-transparent border-2 border-secondary hover:border-secondaryDark enabled:hover:text-secondaryDark enabled:hover:bg-transparent focus:ring-4 focus:ring-secondary dark:bg-transparent dark:text-secondary dark:border-secondary dark:enabled:hover:bg-transparent dark:enabled:hover:border-secondaryDark dark:focus:ring-secondary",
      outlineSuccess:
        "text-success bg-transparent border-2 border-success hover:border-successDark enabled:hover:text-successDark enabled:hover:bg-transparent focus:ring-4 focus:ring-success dark:bg-transparent dark:text-success dark:border-success dark:enabled:hover:bg-transparent dark:enabled:hover:border-successDark dark:focus:ring-success",
      outlineDanger:
        "text-danger bg-transparent border-2 border-danger hover:border-dangerDark enabled:hover:text-dangerDark enabled:hover:bg-transparent focus:ring-4 focus:ring-danger dark:bg-transparent dark:text-danger dark:border-danger dark:enabled:hover:bg-transparent dark:enabled:hover:border-dangerDark dark:focus:ring-danger",
      outlineWarning:
        "text-warning bg-transparent border-2 border-warning hover:border-warningDark enabled:hover:text-warningDark enabled:hover:bg-transparent focus:ring-4 focus:ring-warning dark:bg-transparent dark:text-warning dark:border-warning dark:enabled:hover:bg-transparent dark:enabled:hover:border-warningDark dark:focus:ring-warning",
      outlineInfo:
        "text-info bg-transparent border-2 border-info hover:border-infoDark enabled:hover:text-infoDark enabled:hover:bg-transparent focus:ring-4 focus:ring-info dark:bg-transparent dark:text-info dark:border-info dark:enabled:hover:bg-transparent dark:enabled:hover:border-infoDark dark:focus:ring-info",
      outlineLight:
        "text-light bg-transparent border-2 border-light hover:border-gray-300 enabled:hover:text-gray-300 enabled:hover:bg-transparent focus:ring-4 focus:ring-light dark:bg-transparent dark:text-light dark:border-light dark:enabled:hover:bg-transparent dark:enabled:hover:border-gray-300 dark:focus:ring-light",
      outlineDark:
        "text-dark bg-transparent border-2 border-dark hover:border-gray-700 enabled:hover:text-gray-800 enabled:hover:bg-transparent focus:ring-4 focus:ring-dark dark:bg-transparent dark:text-dark dark:border-dark dark:enabled:hover:bg-transparent dark:enabled:hover:border-gray-800 dark:focus:ring-dark",
      inlinePrimary:
        "text-primary bg-transparent enabled:hover:text-info enabled:hover:bg-transparent focus:ring-4 focus:ring-primary dark:bg-transparent dark:text-primary dark:enabled:hover:bg-transparent dark:focus:ring-primary",
      inlineSecondary:
        "text-secondary bg-transparent enabled:hover:text-info enabled:hover:bg-transparent focus:ring-4 focus:ring-secondary dark:bg-transparent dark:text-secondary dark:enabled:hover:bg-transparent dark:focus:ring-secondary",
      inlineSuccess:
        "text-success bg-transparent enabled:hover:text-info enabled:hover:bg-transparent focus:ring-4 focus:ring-success dark:bg-transparent dark:text-success dark:enabled:hover:bg-transparent dark:focus:ring-success",
      inlineDanger:
        "text-danger bg-transparent enabled:hover:text-info enabled:hover:bg-transparent focus:ring-4 focus:ring-danger dark:bg-transparent dark:text-danger dark:enabled:hover:bg-transparent dark:focus:ring-danger",
      inlineWarning:
        "text-warning bg-transparent enabled:hover:text-info enabled:hover:bg-transparent focus:ring-4 focus:ring-warning dark:bg-transparent dark:text-warning dark:enabled:hover:bg-transparent dark:focus:ring-warning",
      inlineInfo:
        "text-info bg-transparent enabled:hover:text-info enabled:hover:bg-transparent focus:ring-4 focus:ring-info dark:bg-transparent dark:text-info dark:enabled:hover:bg-transparent dark:focus:ring-info",
      inlineLight:
        "text-light bg-transparent enabled:hover:text-gray-300 enabled:hover:bg-transparent focus:ring-4 focus:ring-light dark:bg-transparent dark:text-light dark:enabled:hover:bg-transparent dark:focus:ring-gray-300",
      inlineDark:
        "text-dark bg-transparent enabled:hover:text-dark enabled:hover:bg-transparent focus:ring-4 focus:ring-dark dark:bg-transparent dark:text-dark dark:enabled:hover:bg-transparent dark:focus:ring-dark",
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
