"use client";
import { useState } from "react";
import Button from "../components/global/Button";
import { useRouter } from "next/navigation";
import Input from "../components/global/Input";

export default function Register() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  return (
    <main className="h-2/3 flex flex-col items-center justify-center px-6 mt-20">
      <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col justify-between items-center bg-light rounded-md ring-1 ring-gray-300 text-dark p-6">
        <h2 className="font-medium text-xl">Daftar</h2>
        <div className="flex flex-row items-center">
          <p>Sudah punya akun Fetroshop? </p>
          <Button
            className="font-semibold focus:ring-0 px-2"
            variant="inlinePrimary"
            onClick={() => router.push("/login")}
          >
            Masuk
          </Button>
        </div>
        <div className="w-full flex flex-col gap-3 mt-2">
          <h2>No Telephone</h2>
          <Input
            name="No Telephone"
            value={phone}
            placeholder="No Telephone"
            onChange={(event) =>
              setPhone(event.target.value.replace(/\D/g, ""))
            }
          />
        </div>
        <Button
          className="w-full"
          variant={phone.length >= 8 ? "primary" : "light"}
          disabled={phone.length <= 8}
        >
          Lanjutkan
        </Button>
      </div>
    </main>
  );
}
