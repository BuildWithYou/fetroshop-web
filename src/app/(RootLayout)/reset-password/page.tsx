"use client";
import SidebarDashboard from "@/src/components/SidebarDashboard";
import BoxResetPassword from "./BoxResetPassword";

const ResetPassword = () => {
  return (
    <div className="mx-auto w-fill px-5">
      <div className="grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 gap-8">
        <div className="w-full">
          <SidebarDashboard />
        </div>
        <div className="border border-gray-300 min-h-[450px] md:col-span-2 rounded-lg px-10 py-5 bg-white dark:bg-dark text-dark dark:text-white text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold my-3">
              Atur Ulang Kata Sandi Kamu
            </h1>

            <p className="text-md max-w-md">
              Kata Sandi harus mengandung Angka, Huruf besar dan Simbol. Minimal
              8 karakter
            </p>

            <div className="text-start mt-5 max-w-md w-full">
              <BoxResetPassword />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
