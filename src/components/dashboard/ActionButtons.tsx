import React from "react";
import { Button } from "@/components/ui/button";
import { Download, RefreshCcw, Settings } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button className="flex items-center gap-2 bg-[#3B34DC] hover:bg-[#302BA8] text-white">
        <Settings className="h-4 w-4" />
        Train Your AI Clone More
      </Button>

      <Button
        variant="ghost"
        className="flex items-center gap-2 text-muted-foreground hover:"
      >
        <RefreshCcw className="h-4 w-4" />
        Refresh Data
      </Button>
    </div>
  );
};

export default ActionButtons;
