import React from "react";

interface InputProps {
  placeholder?: string;
  readOnly?: boolean;
  disabled?: boolean;
  error?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date";
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  disabled = false,
  readOnly = false,
  startIcon,
  endIcon,
  error = false,
  name,
  onChange,
  value,
  type = "text",
  helperText,
  ...props
}) => {
  return (
    <div className="mb-4">
      <div className="relative">
        {startIcon && (
          <div className="absolute top-2.5 left-2">{startIcon}</div>
        )}
        <input
          placeholder={placeholder}
          type={type}
          className={`border ${
            !error ? "border-slate-200 focus:border-blue-400" : "border-danger ring-inset ring-danger"
          } p-2 w-full rounded-md focus:outline-none focus:border-primary focus:ring-0 ${
            startIcon ? "pl-8" : ""
          } ${endIcon ? "pr-8" : ""}`}
          disabled={disabled}
          readOnly={readOnly}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
        {endIcon && <div className="absolute top-2.5 right-2">{endIcon}</div>}
      </div>
      {error && (
        <div className="text-sm text-danger font-medium pl-1">{helperText}</div>
      )}
    </div>
  );
};

export default Input;
