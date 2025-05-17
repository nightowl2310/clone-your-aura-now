
import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  
  const tips = [
    "You can customize your AI's tone in Settings → Voice Style",
    "Share links to your AI profile to let fans interact with your clone",
    "Upload your past content to improve your AI's knowledge base",
    "Use your AI clone to respond to repetitive questions on your behalf"
  ];
  
  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };
  
  const nextTip = () => {
    setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-gradient-to-br from-[#1A1F2C] to-[#000000e6] p-1 rounded-lg mb-4 shadow-lg max-w-xs animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#222222] rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] mr-2 flex items-center justify-center">
                  <span className="text-xs font-bold">C</span>
                </div>
                <span className="font-medium">Cloney</span>
              </div>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={toggleAssistant}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="mb-4">
              <p className="text-sm">
                <span className="text-[#9b87f5]">Tip:</span> {tips[tipIndex]}
              </p>
            </div>
            <Button className="bg-[#9b87f5]/20 hover:bg-[#9b87f5]/30 text-[#9b87f5] w-full" onClick={nextTip}>
              Next Tip
            </Button>
          </div>
        </div>
      )}
      <Button
        className={cn(
          "h-14 w-14 rounded-full shadow-lg flex items-center justify-center",
          isOpen ? "bg-[#9b87f5] hover:bg-[#9b87f5]/90" : "bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] hover:opacity-90"
        )}
        onClick={toggleAssistant}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Assistant;
