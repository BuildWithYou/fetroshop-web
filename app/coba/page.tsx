"use client";
import React, { useState } from "react";
import Input from "../components/global/Input";
import { EyeDropperIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import Button from "../components/global/Button";

const Coba = () => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-3 pt-28 2xl:p-28">
      Page
      <Input
        name="password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        endIcon={
          <div onClick={onShowPassword}>
            {showPassword ? (
              <EyeSlashIcon width={20} height={20} />
            ) : (
              <EyeIcon width={20} height={20} />
            )}
          </div>
        }
      />
      <Button onClick={() => console.log(value)}>Send</Button>
    </main>
  );
};

export default Coba;
