"use client";

import Input from "@/src/components/global/Input";
import { Typography } from "../../(RootLayout)/account-dashboard/components/TabProfile";
import { Controller, useForm } from "react-hook-form";
import {
  ResetPasswordState,
  defaultValues,
  schemaValidation,
} from "./validation";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/src/components/global/Button";

const BoxResetPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<ResetPasswordState, any>({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(schemaValidation),
  });

  const onShowPassword = (type: "password" | "confirm") => {
    if (type === "password") {
      setShowPassword((prev) => !prev);
    } else {
      setShowConfirmPassword((prev) => !prev);
    }
  };

  const onSubmitData = (data: ResetPasswordState) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <div className="mb-5">
        <Typography>Kata Sandi Baru</Typography>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              type={showPassword ? "text" : "password"}
              endIcon={
                <div onClick={() => onShowPassword("password")}>
                  {showPassword ? (
                    <EyeSlashIcon width={24} />
                  ) : (
                    <EyeIcon width={24} />
                  )}
                </div>
              }
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Kata sandi baru"
              error={errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
      </div>

      <div className="mb-8">
        <Typography>Konfirmasi Kata Sandi</Typography>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <Input
              type={showConfirmPassword ? "text" : "password"}
              endIcon={
                <div onClick={() => onShowPassword("confirm")}>
                  {showConfirmPassword ? (
                    <EyeSlashIcon width={24} />
                  ) : (
                    <EyeIcon width={24} />
                  )}
                </div>
              }
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Kata sandi baru"
              error={errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          )}
        />
      </div>

      <Button type="submit" width={"full"}>
        Ubah Password
      </Button>
    </form>
  );
};

export default BoxResetPassword;
