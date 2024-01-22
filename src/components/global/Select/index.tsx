import React, { SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type Option = {
  value?: string | undefined;
  label: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  readOnly?: boolean;
  error?: FieldError | boolean;
  helperText?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  readOnly = false,
  error,
  helperText,
  ...rest
}) => {
  return (
    <div>
      <select
        className="border border-slate-200 focus:border-blue-400 p-2 w-full rounded-md focus:outline-none focus:border-primary focus:ring-0 dark:bg-secondary/50"
        disabled={readOnly}
        {...rest}
      >
        {options.map((item, index) => (
          <option value={item?.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>
      {error && (
        <div className="text-sm text-danger font-normal pl-1">{helperText}</div>
      )}
    </div>
  );
};

export default Select;
