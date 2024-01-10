import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  className?: string;
  title?: string;
  helperText?: string;
}

const Checkbox: React.FC<InputProps> = ({
  error = false,
  className,
  title,
  helperText,
  ...props
}) => {
  return (
    <div className="mb-4">
      <div className="relative flex flex-row justify-start items-center gap-2">
        <input
          type="checkbox"
          className={
            className +
            ` w-4 h-4 rounded focus:outline-none focus:border-primary focus:ring-0 border cursor-pointer dark:bg-secondary/50 ${
              error ? "border-danger ring-inset ring-danger" : "border-gray-300"
            }`
          }
          {...props}
        />
        {title && <p className="w-full">{title}</p>}
      </div>
      {error && (
        <div className="text-sm text-danger font-medium pl-1">{helperText}</div>
      )}
    </div>
  );
};

export default Checkbox;
