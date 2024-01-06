import { XMarkIcon } from "@heroicons/react/16/solid";
import {
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { cva } from "class-variance-authority";
import cn from "@/app/utils/cn";

interface ModalErrorProps {
  open: boolean;
  variant: "error" | "success";
  title: string;
  message: string;
  onClose: () => void;
}

const ModalPopup: React.FC<ModalErrorProps> = ({
  open,
  variant,
  title,
  message,
  onClose,
}) => {
  return (
    <div>
      {open && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative z-50 bg-white rounded-sm">
              <div className={cn(modalVariants({ variant }))}>
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200"
                  >
                    <XMarkIcon height={"20px"} width={"20px"} />
                  </button>
                </div>
                <div className="flex justify-center text-white">
                  {variant === "error" && (
                    <XCircleIcon height={100} width={100} />
                  )}
                  {variant === "success" && (
                    <CheckCircleIcon height={100} width={100} />
                  )}
                </div>
              </div>
              <div className="flex items-center flex-col mb-5 gap-3">
                <div className="text-center">
                  <div className="text-3xl">{title}</div>
                  <div className="text-md">{message}</div>
                </div>
                <button
                  onClick={onClose}
                  className={cn(buttonVariants({ variant }))}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const buttonVariants = cva("flex items-center px-10 py-2 rounded-md", {
  variants: {
    variant: {
      error:
        "text-light bg-danger border border-danger enabled:hover:bg-dangerDark focus:ring-4 focus:ring-dangerDark dark:bg-dangerDark dark:text-light dark:border-danger dark:enabled:hover:bg-danger dark:enabled:hover:border-danger dark:focus:ring-danger",
      success:
        "text-success bg-transparent border border-success enabled:hover:text-white enabled:hover:bg-success focus:ring-4 focus:ring-success dark:bg-transparent dark:text-success dark:border-success dark:enabled:hover:bg-transparent dark:enabled:hover:border-successDark dark:focus:ring-success",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

const modalVariants = cva("mb-4 rounded-t-sm px-5 pt-2 pb-5 min-w-[350px]", {
  variants: {
    variant: {
      error: "bg-danger",
      success: "bg-success",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

export default ModalPopup;
