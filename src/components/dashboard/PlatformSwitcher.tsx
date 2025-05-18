
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handlePlatformChange = (platformId: string) => {
    onPlatformChange(platformId);
    navigate(`/dashboard?platform=${platformId}`);
  };

  return (
    <div className="bg-[#1A1F2C] rounded-full p-1 flex space-x-1 mb-6 max-w-md mx-auto">
      {platforms.map((platform) => (
        <Button
          key={platform.id}
          variant="ghost"
          className={cn(
            "flex-1 rounded-full",
            activePlatform === platform.id
              ? "bg-[#3B34DC] text-white hover:bg-[#302BA8]"
              : "text-muted-foreground opacity-70 hover:bg-[#333333] hover:opacity-100"
          )}
          onClick={() => handlePlatformChange(platform.id)}
        >
          <span className="mr-2">{platform.icon}</span>
          {platform.name}
        </Button>
      ))}
    </div>
  );
};

export default PlatformSwitcher;
