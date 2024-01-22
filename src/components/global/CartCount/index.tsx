import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import Button from "../Button";
import { cva } from "class-variance-authority";
import cn from "@/src/utils/cn";

interface CartCountProps {
  onPlus: any;
  onMinus: any;
  value?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  inputStyle?: string | undefined;
  buttonStyle?: string | undefined;
  buttonVariant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light"
    | "outlinePrimary"
    | "outlineSecondary"
    | "outlineSuccess"
    | "outlineDanger"
    | "outlineWarning"
    | "outlineInfo"
    | "outlineLight"
    | "outlineDark"
    | "inlinePrimary"
    | "inlineSecondary"
    | "inlineSuccess"
    | "inlineDanger"
    | "inlineWarning"
    | "inlineInfo"
    | "inlineLight"
    | "inlineDark"
    | undefined;
}

export default function CartCount({
  onPlus,
  onMinus,
  value = 1,
  size = "md",
  inputStyle,
  buttonStyle,
  buttonVariant,
}: CartCountProps) {
  const inputContainer = (className: string | undefined) => {
    return (
      <input
        className={cn(inputVariants({ size, className }))}
        type="number"
        value={value}
      />
    );
  };

  return (
    <div className="flex flex-row gap-1">
      <Button
        className={buttonStyle}
        onClick={onMinus}
        size={size}
        disabled={value <= 1}
        variant={buttonVariant}
      >
        <MinusIcon className={cn(iconVariants({ size }))} />
      </Button>
      {inputContainer(inputStyle)}
      <Button
        className={buttonStyle}
        onClick={onPlus}
        size={size}
        variant={buttonVariant}
      >
        <PlusIcon className={cn(iconVariants({ size }))} />
      </Button>
    </div>
  );
}

const inputVariants = cva(
  "remove-arrow text-center dark:bg-secondary/50 rounded-md",
  {
    variants: {
      size: {
        xs: "text-xs w-5 p-1",
        sm: "text-sm w-10 p-1",
        md: "text-sm px-4 py-2",
        lg: "text-base px-5 py-2.5",
        xl: "text-base px-6 py-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const iconVariants = cva("", {
  variants: {
    size: {
      xs: "w-3 font-semibold",
      sm: "w-4",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
      xl: "text-base px-6 py-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
