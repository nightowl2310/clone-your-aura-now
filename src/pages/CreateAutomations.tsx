import React from "react";
import { useNavigate } from "react-router-dom";
import { Rocket } from "lucide-react";

const AutomatePostCard = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border border-gray-700 rounded-lg p-6 w-80 text-white shadow-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Rocket className="text-blue-400 w-5 h-5" />
          <h3 className="font-semibold text-lg">Automate Post</h3>
        </div>
        <button className="text-red-500 text-lg">✕</button>
      </div>

      {/* Select Post or Reel */}
      <div className="mb-4">
        <label className="block mb-1 text-sm">Select Post or Reel <span className="text-red-500">*</span></label>
        <button
          onClick={() => navigate("/select-post")}
          className="w-full bg-[#232323] text-white py-2 rounded-md border border-gray-600 hover:bg-[#2e2e2e] transition"
        >
          Select
        </button>
      </div>

      {/* Keywords input */}
      <div className="mb-4">
        <label className="block mb-1 text-sm">Keywords <span className="text-red-500">*</span></label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type keyword..."
            className="flex-1 bg-[#1c1c1c] text-white p-2 rounded-md border border-gray-600"
          />
          <button className="bg-[#9b87f5] px-3 py-1 rounded-md text-sm font-medium hover:bg-[#856fff] transition">
            Add →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutomatePostCard;
