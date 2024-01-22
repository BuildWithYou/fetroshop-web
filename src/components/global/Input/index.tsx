import React, { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  readOnly = false,
  startIcon,
  endIcon,
  error = false,
  type = "text",
  helperText,
  ...rest
}) => {
  return (
    <div>
      <div className="relative">
        {startIcon && (
          <div className="absolute top-2.5 left-2">{startIcon}</div>
        )}
        <input
          type={type}
          className={`border ${
            !error
              ? "border-slate-200 focus:border-blue-400"
              : "border-danger ring-inset ring-danger"
          } p-2 w-full rounded-md focus:outline-none focus:border-primary focus:ring-0 dark:bg-secondary/50 ${
            startIcon ? "pl-8" : ""
          } ${endIcon ? "pr-8" : ""}`}
          disabled={disabled}
          readOnly={readOnly}
          {...rest}
        />
        {endIcon && <div className="absolute top-2.5 right-2">{endIcon}</div>}
      </div>
      {error && (
        <div className="text-sm text-danger font-normal pl-1">{helperText}</div>
      )}
    </div>
  );
};

export default Input;
