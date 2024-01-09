import cn from "@/src/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

interface AlertProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  className?: string;
  variant: "error" | "info" | "success";
}

const Alert: React.FC<AlertProps> = ({
  open,
  title,
  children,
  variant,
  className,
}) => {
  return (
    <>
      {open && (
        <div className={cn(AlertVariants({ variant, className }))}>
          <div>
            <h2 className="text-lg font-medium">{title}</h2>
          </div>
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

const AlertVariants = cva("rounded-lg p-5", {
  variants: {
    variant: {
      error: "bg-background-danger border border-borderColor-danger",
      info: "bg-background-info border border-borderColor-info",
      success: "bg-background-success border border-borderColor-success",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export default Alert;
