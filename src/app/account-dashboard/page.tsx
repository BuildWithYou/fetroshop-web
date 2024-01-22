import SidebarDashboard from "@/src/components/SidebarDashboard";
import React from "react";
import TabProfile from "./components/TabProfile";

const AccountDashboard = () => {
  return (
    <div className="mx-auto w-fill px-5">
      <div className="grid md:grid-cols-4 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 gap-8">
        <div className="w-full">
          <SidebarDashboard />
        </div>
        <div className="border border-gray-300 min-h-[450px] rounded-lg md:col-span-3 p-10 md:p-5 bg-white dark:bg-dark text-dark dark:text-white">
          <TabProfile />
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
