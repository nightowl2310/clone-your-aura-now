
import React from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

const Refer = () => {
  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 max-w-7xl mx-auto">
          <Header />
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Refer & Earn</h2>
            <p className="text-muted-foreground">
              This page will be implemented in the future.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Refer;
