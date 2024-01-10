import { Dialog } from "@headlessui/react";
import ThemeToggle from "../../layout/themeToggle";
import Button from "../Button";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface PopUpMobileProps {
  title: string;
  open: boolean;
  onClose: any;
  children: React.ReactNode;
}

export default function PopUpMobile({
  children,
  title,
  open,
  onClose,
}: PopUpMobileProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen h-screen items-center justify-center">
        <Dialog.Panel className="w-screen h-screen rounded text-dark dark:text-light bg-white dark:bg-dark backdrop-blur py-5 px-6">
          <div className="flex flex-row justify-between items-center">
            <Dialog.Title className="font-semibold">{title}</Dialog.Title>
            <XMarkIcon className="w-7 cursor-pointer" onClick={onClose} />
          </div>
          <hr className="border-primary dark:border-primaryDark mt-4" />
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
