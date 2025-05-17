
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageSquare, BarChartHorizontal, Bell, Settings, LogOut } from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  label: string;
}

const SidebarItem = ({ icon: Icon, href, isActive = false, label }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center py-3 px-4 rounded-lg transition-colors",
        isActive
          ? "bg-[#9b87f5]/20 text-[#9b87f5]"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      <Icon className="h-5 w-5 mr-3" />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 p-4 border-r border-border">
      <div className="flex items-center mb-8 px-4">
        <span className="text-xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] bg-clip-text text-transparent">
          CreatorClone.ai
        </span>
      </div>
      <nav className="space-y-2 flex-1">
        <SidebarItem icon={BarChartHorizontal} href="/dashboard" isActive label="Dashboard" />
        <SidebarItem icon={MessageSquare} href="/tuning" label="Clone Tuning" />
        <SidebarItem icon={Bell} href="/notifications" label="Notifications" />
        <SidebarItem icon={Settings} href="/settings" label="Settings" />
      </nav>
      <div className="mt-auto">
        <SidebarItem icon={LogOut} href="/" label="Logout" />
      </div>
    </aside>
  );
};

export default Sidebar;
