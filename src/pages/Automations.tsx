import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/dashboard/Header"; // Top header component
import Sidebar from "@/components/dashboard/Sidebar"; // Sidebar component
import { Button } from "@/components/ui/button"; // UI button component
import { Bot, Search, Plus } from "lucide-react"; // Icon imports

const Automations = () => {
  const navigate = useNavigate(); // Navigation hook from react-router

  // Component state holding a list of automation objects
  const [automations, setAutomations] = useState([
    {
      name: "Instagram Auto-Reply",      // Name of the automation
      type: "Comment Reply",             // Type/category
      runs: 1203,                        // Total times run
      status: "Active",                 // Status (Active/Inactive)
      lastPublished: "2 days ago",      // Last published date
      live: true                        // Live toggle state (used in the switch)
    },
    {
      name: "Story Response",
      type: "Story Reply",
      runs: 543,
      status: "Active",
      lastPublished: "5 days ago",
      live: true
    },
    {
      name: "DM Assistant",
      type: "Direct Message",
      runs: 2548,
      status: "Inactive",
      lastPublished: "2 weeks ago",
      live: false
    }
  ]);

  // Function to toggle the 'live' property of a specific automation
  const toggleLiveStatus = (index: number) => {
    const updated = [...automations];        // Clone array to maintain immutability
    updated[index].live = !updated[index].live; // Toggle the boolean value
    setAutomations(updated);                 // Update state
  };

  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      {/* Sidebar navigation */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 max-w-7xl mx-auto">
          {/* Top header (logo, profile, etc.) */}
          <Header />

          <div className="mt-8">
            {/* Section header with icon and button */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Bot className="text-[#9b87f5] h-6 w-6 mr-2" />
                <h2 className="text-2xl font-bold">Automations</h2>
              </div>

              {/* Button to create new automation */}
              <Button 
                onClick={() => navigate("/automation-builder")}
                className="bg-gradient-to-r from-[#9b87f5] to-[#3B34DC] hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all duration-300"
              >
                <Plus className="h-4 w-4 mr-1" />
                New Automation
              </Button>
            </div>

            {/* Search + filter section */}
            <div className="mb-6 flex justify-between">
              {/* Search input */}
              <div className="relative w-64">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search automations..."
                  className="w-full pl-8 py-2 rounded-md bg-[#1A1F2C] border border-border"
                />
              </div>

              {/* Filter dropdown */}
              <select className="py-2 px-4 rounded-md bg-[#1A1F2C] border border-border">
                <option value="all">All Types</option>
                <option value="comment">Comment Reply</option>
                <option value="story">Story Reply</option>
                <option value="dm">Direct Message</option>
              </select>
            </div>

            {/* Automation table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 pl-4">Automation</th>
                    <th className="pb-3">Type</th>
                    <th className="pb-3">Runs</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Last Published</th>
                    <th className="pb-3 pr-4">Live</th> {/* Toggle column */}
                  </tr>
                </thead>
                <tbody>
                  {automations.map((automation, index) => (
                    <tr 
                      key={index}
                      className="border-b border-border hover:bg-[#1A1F2C] transition-colors"
                      // ⛔ No more row-level onClick (removed navigation)
                    >
                      {/* Automation name */}
                      <td className="py-4 pl-4">{automation.name}</td>

                      {/* Type */}
                      <td className="py-4">{automation.type}</td>

                      {/* Number of runs */}
                      <td className="py-4">{automation.runs}</td>

                      {/* Status with colored dot */}
                      <td className="py-4">
                        <span
                          className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            automation.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        ></span>
                        {automation.status}
                      </td>

                      {/* Last published date */}
                      <td className="py-4">{automation.lastPublished}</td>

                      {/* ✅ Toggle Switch (Live Column) */}
                      <td className="py-4 pr-4">
                        <div
                          className={`w-12 h-6 rounded-full ${
                            automation.live ? 'bg-[#9b87f5]' : 'bg-gray-600'
                          } relative cursor-pointer`}
                          onClick={() => toggleLiveStatus(index)} // Toggle live state on click
                        >
                          <div
                            className={`absolute h-4 w-4 rounded-full bg-white top-1 transition-all ${
                              automation.live ? 'right-1' : 'left-1'
                            }`}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Automations;
