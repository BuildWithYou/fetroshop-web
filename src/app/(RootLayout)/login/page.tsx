"use client";
import { useState } from "react";
import Button from "../../components/global/Button";
import { useRouter } from "next/navigation";
import Input from "../../components/global/Input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Checkbox from "../../components/global/Checkbox";
import { useSelector } from "react-redux";

export default function Login() {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col justify-between items-center bg-light dark:bg-secondaryDark rounded-md ring-1 ring-gray-300 dark:ring-primary text-dark dark:text-light p-6">
      <h2 className="font-medium text-xl">Masuk</h2>
      <div className="flex flex-row items-center">
        <p>Belum punya akun Fetroshop? </p>
        <Button
          className="font-semibold focus:ring-0 px-2"
          variant="inlinePrimary"
          onClick={() => router.push("/register")}
        >
          Daftar
        </Button>
      </div>
      <div className="w-full flex flex-col gap-3 mt-2">
        <h2>No Telephone</h2>
        <Input
          name="No Telephone"
          value={phone}
          placeholder="No Telephone"
          onChange={(event) => setPhone(event.target.value.replace(/\D/g, ""))}
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <h2>Password</h2>
        <Input
          name="Password"
          value={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          endIcon={
            showPassword ? (
              <EyeIcon
                className="w-6 cursor-pointer mr-2"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeSlashIcon
                className="w-6 cursor-pointer mr-2"
                onClick={() => setShowPassword(!showPassword)}
              />
            )
          }
        />
      </div>
      <div className="w-full flex flex-col mt-2">
        <Checkbox
          title="Ingat saya"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
      </div>
      <Button
        className="w-full"
        variant={
          phone.length >= 8 && password.length >= 6 ? "primary" : "light"
        }
        disabled={phone.length <= 8 && password.length <= 6}
      >
        Masuk
      </Button>
      <div className="w-full mt-2">
        <Button
          className="pl-0 focus:ring-0"
          variant={darkMode ? "inlineLight" : "inlineDark"}
        >
          Lupa password ?
        </Button>
      </div>
    </div>
  );
}
