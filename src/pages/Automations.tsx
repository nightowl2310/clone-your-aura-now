
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Bot, Search, Plus } from "lucide-react";

const Automations = () => {
  const navigate = useNavigate();
  
  const automations = [
    { name: "Instagram Auto-Reply", type: "Comment Reply", runs: 1203, status: "Active", lastPublished: "2 days ago", live: true },
    { name: "Story Response", type: "Story Reply", runs: 543, status: "Active", lastPublished: "5 days ago", live: true },
    { name: "DM Assistant", type: "Direct Message", runs: 2548, status: "Inactive", lastPublished: "2 weeks ago", live: false },
  ];

  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 max-w-7xl mx-auto">
          <Header />
          
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
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
            
            <div className="mb-6 flex justify-between">
              <div className="relative w-64">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search automations..."
                  className="w-full pl-8 py-2 rounded-md bg-[#1A1F2C] border border-border"
                />
              </div>
              
              <select className="py-2 px-4 rounded-md bg-[#1A1F2C] border border-border">
                <option value="all">All Types</option>
                <option value="comment">Comment Reply</option>
                <option value="story">Story Reply</option>
                <option value="dm">Direct Message</option>
              </select>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 pl-4">Automation</th>
                    <th className="pb-3">Type</th>
                    <th className="pb-3">Runs</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Last Published</th>
                    <th className="pb-3 pr-4">Live</th>
                  </tr>
                </thead>
                <tbody>
                  {automations.map((automation, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-border hover:bg-[#1A1F2C] cursor-pointer transition-colors"
                      onClick={() => navigate("/clone-tuning")}
                    >
                      <td className="py-4 pl-4">{automation.name}</td>
                      <td className="py-4">{automation.type}</td>
                      <td className="py-4">{automation.runs}</td>
                      <td className="py-4">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${automation.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        {automation.status}
                      </td>
                      <td className="py-4">{automation.lastPublished}</td>
                      <td className="py-4 pr-4">
                        <div className={`w-12 h-6 rounded-full ${automation.live ? 'bg-[#9b87f5]' : 'bg-gray-600'} relative cursor-pointer`}>
                          <div className={`absolute h-4 w-4 rounded-full bg-white top-1 transition-all ${automation.live ? 'right-1' : 'left-1'}`}></div>
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
