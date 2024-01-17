import React, {SelectHTMLAttributes} from "react";

type Option = {
  value: string;
  label: string;
}

type SelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
};

const Select: React.FC<SelectProps> = ({ options, value, onChange, readOnly = false, ...rest }) => {
  return (
    <div>
      <select
        className="border border-slate-200 focus:border-blue-400 p-2 w-full rounded-md focus:outline-none focus:border-primary focus:ring-0 dark:bg-secondary/50"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={readOnly}
      >
        {options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
