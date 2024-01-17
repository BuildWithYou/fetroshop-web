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
  width,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant, size, pill, justify, width, className })
      )}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("flex items-center", {
  variants: {
    variant: {
      primary:
        "text-light bg-primary border border-primary enabled:hover:bg-primaryDark dark:bg-primaryDark dark:text-light dark:border-primary dark:enabled:hover:bg-primary dark:enabled:hover:border-primary",
      secondary:
        "text-light bg-secondary border border-secondary enabled:hover:bg-secondaryDark dark:bg-secondaryDark dark:text-light dark:border-secondary dark:enabled:hover:bg-secondary dark:enabled:hover:border-secondary",
      success:
        "text-light bg-success border border-success enabled:hover:bg-successDark dark:bg-successDark dark:text-light dark:border-success dark:enabled:hover:bg-success dark:enabled:hover:border-success",
      danger:
        "text-light bg-danger border border-danger enabled:hover:bg-dangerDark dark:bg-dangerDark dark:text-light dark:border-danger dark:enabled:hover:bg-danger dark:enabled:hover:border-danger",
      warning:
        "text-light bg-warning border border-warning enabled:hover:bg-warningDark dark:bg-warningDark dark:text-light dark:border-warning dark:enabled:hover:bg-warning dark:enabled:hover:border-warning",
      info: "text-light bg-info border border-info enabled:hover:bg-infoDark dark:bg-infoDark dark:text-light dark:border-info dark:enabled:hover:bg-info dark:enabled:hover:border-info",
      light:
        "text-dark bg-light border border-gray-200 hover:text-gray-800 enabled:hover:bg-gray-200 dark:bg-gray-300 dark:text-gray-800 dark:border-light dark:enabled:hover:text-dark dark:enabled:hover:bg-light dark:enabled:hover:border-light",
      dark: "text-light bg-dark border border-dark hover:text-white enabled:hover:bg-gray-600 dark:bg-dark dark:text-light dark:border-light dark:enabled:hover:text-white dark:enabled:hover:bg-gray-900 dark:enabled:hover:border-light",
      outlinePrimary:
        "text-primary bg-transparent border-2 border-primary hover:border-primaryDark enabled:hover:text-primaryDark enabled:hover:bg-transparent dark:bg-transparent dark:text-primary dark:border-primary dark:enabled:hover:bg-transparent dark:enabled:hover:border-primaryDark",
      outlineSecondary:
        "text-secondary bg-transparent border-2 border-secondary hover:border-secondaryDark enabled:hover:text-secondaryDark enabled:hover:bg-transparent dark:bg-transparent dark:text-secondary dark:border-secondary dark:enabled:hover:bg-transparent dark:enabled:hover:border-secondaryDark",
      outlineSuccess:
        "text-success bg-transparent border-2 border-success hover:border-successDark enabled:hover:text-successDark enabled:hover:bg-transparent dark:bg-transparent dark:text-success dark:border-success dark:enabled:hover:bg-transparent dark:enabled:hover:border-successDark",
      outlineDanger:
        "text-danger bg-transparent border-2 border-danger hover:border-dangerDark enabled:hover:text-dangerDark enabled:hover:bg-transparent dark:bg-transparent dark:text-danger dark:border-danger dark:enabled:hover:bg-transparent dark:enabled:hover:border-dangerDark",
      outlineWarning:
        "text-warning bg-transparent border-2 border-warning hover:border-warningDark enabled:hover:text-warningDark enabled:hover:bg-transparent dark:bg-transparent dark:text-warning dark:border-warning dark:enabled:hover:bg-transparent dark:enabled:hover:border-warningDark",
      outlineInfo:
        "text-info bg-transparent border-2 border-info hover:border-infoDark enabled:hover:text-infoDark enabled:hover:bg-transparent dark:bg-transparent dark:text-info dark:border-info dark:enabled:hover:bg-transparent dark:enabled:hover:border-infoDark",
      outlineLight:
        "text-light bg-transparent border-2 border-light hover:border-gray-300 enabled:hover:text-gray-300 enabled:hover:bg-transparent dark:bg-transparent dark:text-light dark:border-light dark:enabled:hover:bg-transparent dark:enabled:hover:border-gray-300",
      outlineDark:
        "text-dark bg-transparent border-2 border-dark hover:border-gray-700 enabled:hover:text-gray-800 enabled:hover:bg-transparent dark:bg-transparent dark:text-dark dark:border-dark dark:enabled:hover:bg-transparent dark:enabled:hover:border-gray-800",
      inlinePrimary:
        "text-primary bg-transparent enabled:hover:text-info enabled:hover:bg-transparent dark:bg-transparent dark:text-primary dark:enabled:hover:bg-transparent",
      inlineSecondary:
        "text-secondary bg-transparent enabled:hover:text-info enabled:hover:bg-transparent dark:bg-transparent dark:text-secondary dark:enabled:hover:bg-transparent",
      inlineSuccess:
        "text-success bg-transparent enabled:hover:text-info enabled:hover:bg-transparent dark:bg-transparent dark:text-success dark:enabled:hover:bg-transparent",
      inlineDanger:
        "text-danger bg-transparent enabled:hover:text-info enabled:hover:bg-transparent dark:bg-transparent dark:text-danger dark:enabled:hover:bg-transparent",
      inlineWarning:
        "text-warning bg-transparent enabled:hover:text-info enabled:hover:bg-transparent dark:bg-transparent dark:text-warning dark:enabled:hover:bg-transparent",
      inlineInfo:
        "text-info bg-transparent enabled:hover:text-info enabled:hover:bg-transparent dark:bg-transparent dark:text-info dark:enabled:hover:bg-transparent",
      inlineLight:
        "text-light bg-transparent enabled:hover:text-gray-300 enabled:hover:bg-transparent dark:bg-transparent dark:text-light dark:enabled:hover:bg-transparent",
      inlineDark:
        "text-dark bg-transparent enabled:hover:text-dark enabled:hover:bg-transparent dark:bg-transparent dark:text-dark dark:enabled:hover:bg-transparent",
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
    width: {
     full: "w-full",
     auto: "w-auto"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    pill: "md",
    justify: "center",
    width: "auto"
  },
});

export default Button;
