
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Platform {
  id: string;
  name: string;
  icon: string;
}

interface PlatformSwitcherProps {
  platforms: Platform[];
  activePlatform: string;
  onPlatformChange: (platformId: string) => void;
}

const PlatformSwitcher = ({
  platforms,
  activePlatform,
  onPlatformChange,
}: PlatformSwitcherProps) => {
  return (
    <div className="bg-[#1A1F2C] rounded-full p-1 flex space-x-1 mb-6 max-w-md mx-auto">
      {platforms.map((platform) => (
        <Button
          key={platform.id}
          variant="ghost"
          className={cn(
            "flex-1 rounded-full",
            activePlatform === platform.id
              ? "bg-[#9b87f5] text-white hover:bg-[#9b87f5]/90"
              : "text-muted-foreground opacity-70 hover:bg-[#333333] hover:opacity-100"
          )}
          disabled={platform.id !== "instagram"} // Only Instagram is active
          onClick={() => onPlatformChange(platform.id)}
        >
          <span className="mr-2">{platform.icon}</span>
          {platform.name}
        </Button>
      ))}
    </div>
  );
};

export default PlatformSwitcher;
