
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, RefreshCcw, Settings } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button className="flex items-center gap-2 bg-[#9b87f5] hover:bg-[#7E69AB]">
        <Settings className="h-4 w-4" />
        Train Your AI Clone More
      </Button>
      <Button variant="outline" className="flex items-center gap-2 text-white border-white/20">
        <Download className="h-4 w-4" />
        Export Data
      </Button>
      <Button
        variant="ghost"
        className="flex items-center gap-2 text-muted-foreground hover:text-white"
      >
        <RefreshCcw className="h-4 w-4" />
        Refresh Data
      </Button>
    </div>
  );
};

export default ActionButtons;
