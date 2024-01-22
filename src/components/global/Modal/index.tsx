import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ModalComponent {
  title: string;
  children: React.ReactNode;
  open: boolean;
  subtitle?: string;
  onClose: () => void;
}

const Modal: React.FC<ModalComponent> = ({
  title,
  children,
  open,
  onClose,
  subtitle,
}) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative z-50 bg-white p-4 rounded-lg">
              <div className="flex justify-between items-start mb-4 gap-3">
                <div>
                  <h2 className="text-lg font-bold">{title}</h2>
                  <p className="text-xs md:hidden hidden lg:block">
                    {subtitle}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon height={"20px"} width={"20px"} />
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
