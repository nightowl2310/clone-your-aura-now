import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Rocket, ZoomIn, ZoomOut } from "lucide-react";

const TunePostComments = () => {
  const navigate = useNavigate();
  const [isPublished, setIsPublished] = React.useState(false);

  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <Sidebar />
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="p-6 max-w-7xl mx-auto w-full">
          <Header />
          
          <div className="mt-8 flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Rocket className="text-[#9b87f5] h-6 w-6 mr-2" />
              <h2 className="text-2xl font-bold">Tune Post Comments</h2>
            </div>

            {/* Publish Toggle */}
            <div className="flex items-center">
              <span className="mr-2">Publish</span>
              <div
                className={`w-12 h-6 rounded-full ${isPublished ? "bg-[#9b87f5]" : "bg-gray-600"} relative cursor-pointer`}
                onClick={() => setIsPublished(!isPublished)}
              >
                <div
                  className={`absolute h-4 w-4 rounded-full bg-white top-1 transition-all ${
                    isPublished ? "right-1" : "left-1"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 relative bg-[#1A1F2C]/50 border-t border-border overflow-hidden">
          {/* Grid Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          {/* Card UI in center */}
          <div className="flex items-center justify-center h-full z-10">
            <div className="bg-black border border-gray-700 rounded-lg p-6 w-80 text-white shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <Rocket className="text-blue-400 w-5 h-5" />
                  <h3 className="font-semibold text-lg">Automate Post</h3>
                </div>
                <button className="text-red-500 text-lg">✕</button>
              </div>

              {/* Flexed Select and Add buttons */}
              <div className="flex items-center space-x-3">
                
                <button
                  onClick={() => navigate("/select-post")}
                  className="flex-1 bg-[#232323] text-white py-2 rounded-md border border-gray-600 
                            hover:bg-[#2f2f2f] hover:scale-105 hover:shadow-lg 
                            transition-transform duration-200 ease-in-out"
                >
                  Select
                </button>

                <button className="bg-[#9b87f5] px-3 py-2 rounded-md text-sm font-medium hover:bg-[#856fff] transition">
                  Add →
                </button>
              </div>
            </div>
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-4 right-4 bg-[#232938] rounded-lg shadow-lg p-2 z-20">
            <div className="flex flex-col space-y-2">
              <button className="p-2 hover:bg-[#1A1F2C] rounded-md">
                <ZoomIn className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-[#1A1F2C] rounded-md">
                <ZoomOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TunePostComments;
