import SidebarDashboard from "@/src/components/SidebarDashboard";
import Input from "@/src/components/global/Input";
import React from "react";
import TabProfile from "./components/TabProfile";

const AccountDashboard = () => {
  const profileData = [
    { label: "Nama", value: "Mitro Ubaidillah" },
    { label: "Tanggal Lahir", value: "12 April 1978" },
    { label: "Jenis Kelamin", value: "Laki-Laki" },
    { label: "Status Perkawinan", value: "Belum Menikah" },
    { label: "Nomor Handphone", value: "081332725004" },
    { label: "Email", value: "muhmitro10@gmail.com" },
  ];
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <SidebarDashboard />
        </div>
        <div className="border border-gray-300 min-h-[450px] rounded-lg col-span-3 p-10 bg-white">
          <TabProfile />
        </div>
      </div>
    </div>
  );
};

type TypographyProps = {
  children: string;
};

const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <div className="text-md font-semibold">{children}</div>;
};

export default AccountDashboard;
