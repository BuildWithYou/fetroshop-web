"use client";
import React, { useState } from "react";
import Input from "../components/global/Input";
import { EyeDropperIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import Button from "../components/global/Button";
import Alert from "../components/global/Alert";

const Coba = () => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-3 pt-28 2xl:p-28">
      Page
      <Alert open={true} title="test" variant="success">
        Test Message
      </Alert>
    </main>
  );
};

export default Coba;
