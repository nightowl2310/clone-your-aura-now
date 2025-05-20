import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Bot, Search, Plus } from "lucide-react";

const Automations = () => {
  const navigate = useNavigate();

  const [automations, setAutomations] = useState([
    {
      name: "Instagram Auto-Reply",
      type: "Comment Reply",
      status: "Active",
      live: true,
    },
    {
      name: "Story Response",
      type: "Story Reply",
      status: "Active",
      live: true,
    },
    {
      name: "DM Assistant",
      type: "Direct Message",
      status: "Inactive",
      live: false,
    },
  ]);

  const toggleLiveStatus = (index: number) => {
    const updated = [...automations];
    updated[index].live = !updated[index].live;
    setAutomations(updated);
  };

  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      {/* Sidebar */}
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-4 sm:p-6 max-w-7xl mx-auto">
          <Header />

          <div className="mt-6 sm:mt-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <div className="flex items-center">
                <Bot className="text-[#9b87f5] h-6 w-6 mr-2" />
                <h2 className="text-2xl font-bold">Automations</h2>
              </div>
              <Button
                onClick={() => navigate("/automation-builder")}
                className="bg-gradient-to-r from-[#9b87f5] to-[#3B34DC] hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all duration-300"
              >
                <Plus className="h-4 w-4 mr-1" />
                New Automation
              </Button>
            </div>

            {/* Filters and search */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search automations..."
                  className="w-full pl-8 py-2 rounded-md bg-[#1A1F2C] border border-border"
                />
              </div>

              <select className="py-2 px-4 rounded-md bg-[#1A1F2C] border border-border w-full sm:w-auto">
                <option value="all">All Types</option>
                <option value="comment">Comment Reply</option>
                <option value="story">Story Reply</option>
                <option value="dm">Direct Message</option>
              </select>
            </div>

            {/* Table layout for desktop */}
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse hidden md:table">
                <thead>
  <tr className="border-b border-border">
    <th className="pb-3 pl-4 text-center">Automation</th>
    <th className="pb-3 text-center">Type</th>
    <th className="pb-3 text-center">Status</th>
    <th className="pb-3 pr-4 text-center">Live</th>
  </tr>
</thead>
                <tbody>
                  {automations.map((automation, index) => (
                    <tr
                      key={index}
                      className="border-b border-border hover:bg-[#1A1F2C] transition-colors"
                    >
                      <td className="py-4 pl-4">{automation.name}</td>
                      <td className="py-4">{automation.type}</td>
                      <td className="py-4">
                        <span
                          className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            automation.status === "Active"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></span>
                        {automation.status}
                      </td>
                      <td className="py-4 pr-4">
                        <div
                          className={`w-12 h-6 rounded-full ${
                            automation.live ? "bg-[#9b87f5]" : "bg-gray-600"
                          } relative cursor-pointer`}
                          onClick={() => toggleLiveStatus(index)}
                        >
                          <div
                            className={`absolute h-4 w-4 rounded-full bg-white top-1 transition-all ${
                              automation.live ? "right-1" : "left-1"
                            }`}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Card layout for mobile */}
              <div className="space-y-4 md:hidden">
                {automations.map((automation, index) => (
                  <div
                    key={index}
                    className="bg-[#1A1F2C] rounded-lg p-4 shadow border border-border"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-white">
                        {automation.name}
                      </h3>
                      <div
                        className={`w-10 h-5 rounded-full ${
                          automation.live ? "bg-[#9b87f5]" : "bg-gray-600"
                        } relative cursor-pointer`}
                        onClick={() => toggleLiveStatus(index)}
                      >
                        <div
                          className={`absolute h-4 w-4 rounded-full bg-white top-0.5 transition-all ${
                            automation.live ? "right-1" : "left-1"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium text-white">Type:</span>{" "}
                        {automation.type}
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-white mr-1">
                          Status:
                        </span>
                        <span
                          className={`w-2 h-2 rounded-full mr-2 ${
                            automation.status === "Active"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        />
                        {automation.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Automations;
