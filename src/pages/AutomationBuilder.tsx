<<<<<<< HEAD

=======
>>>>>>> fix-login-navigation
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Settings, ZoomIn, ZoomOut, Plus, Minus } from "lucide-react";

const AutomationBuilder = () => {
  const navigate = useNavigate();
  const [isPublished, setIsPublished] = React.useState(false);
=======
import { Settings, ZoomIn, ZoomOut, Plus } from "lucide-react";

const AutomationBuilder = () => {
  const navigate = useNavigate(); // Hook to navigate between routes
  const [isPublished, setIsPublished] = React.useState(false); // Toggle for publish switch
>>>>>>> fix-login-navigation

  return (
    <div className="min-h-screen flex bg-[#121212] text-white">
      <Sidebar />
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="p-6 max-w-7xl mx-auto w-full">
          <Header />
<<<<<<< HEAD
          
=======

          {/* Page title and publish/start controls */}
>>>>>>> fix-login-navigation
          <div className="mt-8 w-full">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Settings className="text-[#9b87f5] h-6 w-6 mr-2" />
                <h2 className="text-2xl font-bold">Create Automation</h2>
              </div>
<<<<<<< HEAD
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="mr-2">Publish</span>
                  <div 
=======

              <div className="flex items-center space-x-4">
                {/* Publish Toggle */}
                <div className="flex items-center">
                  <span className="mr-2">Publish</span>
                  <div
>>>>>>> fix-login-navigation
                    className={`w-12 h-6 rounded-full ${isPublished ? 'bg-[#9b87f5]' : 'bg-gray-600'} relative cursor-pointer`}
                    onClick={() => setIsPublished(!isPublished)}
                  >
                    <div className={`absolute h-4 w-4 rounded-full bg-white top-1 transition-all ${isPublished ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>
<<<<<<< HEAD
                
                <Button 
=======

                {/* Navigate to clone tuning */}
                <Button
>>>>>>> fix-login-navigation
                  onClick={() => navigate("/clone-tuning")}
                  className="bg-gradient-to-r from-[#9b87f5] to-[#3B34DC] hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all duration-300"
                >
                  Start
                </Button>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        
        {/* Canvas area */}
        <div className="flex-1 flex flex-col relative overflow-hidden bg-[#1A1F2C]/50 border-t border-border">
          {/* Grid background */}
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }}
          ></div>
          
          {/* Empty canvas message */}
          <div className="flex items-center justify-center h-full z-10">
            <div className="text-center text-gray-400">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#1A1F2C] flex items-center justify-center">
=======

        {/* Canvas Area */}
        <div className="flex-1 flex flex-col relative overflow-hidden bg-[#1A1F2C]/50 border-t border-border">
          {/* Grid pattern background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>

          {/* Empty state canvas center message */}
          <div className="flex items-center justify-center h-full z-10">
            <div className="text-center text-gray-400">
              <div className="mb-4 flex justify-center">
                <div
                  onClick={() => navigate("/clone-tuning")}
                  className="w-16 h-16 rounded-full bg-[#1A1F2C] flex items-center justify-center cursor-pointer"
                >
>>>>>>> fix-login-navigation
                  <Plus className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2">Start Building Your Automation</h3>
              <p className="max-w-md text-sm text-muted-foreground">
                Drag and drop elements from the toolbar to create your custom automation workflow
              </p>
            </div>
          </div>
<<<<<<< HEAD
          
          {/* Zoom controls */}
=======

          {/* Zoom controls at bottom-right */}
>>>>>>> fix-login-navigation
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

export default AutomationBuilder;
