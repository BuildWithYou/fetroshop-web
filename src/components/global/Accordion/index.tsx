"use client";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { Fragment, useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div
        className="flex items-center w-full justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="font-bold text-md">{title}</span>
        <div className={`transform ${isOpen ? "rotate-180" : "rotate-0"} duration-500`}>
          <ChevronDownIcon width={22} />
        </div>
      </div>
      <div className={`transition-transform h-fill ${isOpen ? "mt-2 inline-block" : "collapse h-0"} overflow-hidden duration-500 delay-1000 ease-in-out`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
