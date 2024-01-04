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
  type?: string;
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
            !error && "border-gray-300"
          } p-2 w-full rounded-md focus:outline-none focus:border-primary focus:ring-0 ${
            startIcon && "pl-8"
          } ${endIcon && "pr-8"} ${
            error && "border-danger ring-inset ring-danger"
          }`}
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
        <div className="text-sm text-danger font-medium pl-1">Error</div>
      )}
    </div>
  );
};

export default Input;
