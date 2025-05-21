import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#1A1F2C] text-white">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-6 max-w-7xl mx-auto w-full">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="mt-4">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
