import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import fluenceailogo from "../../assets/logo_fluenceai.png" ;
import {
  BarChartHorizontal,
  Users,
  Gift,
  Settings,
  LogOut,
  Bot,
  X
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  href: string;
  label: string;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, href, label, onClick }: SidebarItemProps) => {
  const location = useLocation();
  const isActive =
    location.pathname === href ||
    (href !== "/" && href !== "/dashboard" && location.pathname.startsWith(href));

  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn(
        "flex items-center py-3 px-4 rounded-2xl transition-colors shadow-sm hover:shadow-md",
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

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
  className={cn(
    "fixed top-0 left-0 h-screen w-64 bg-[#1A1F2C] text-white z-40 p-4 border-r border-border transform transition-transform duration-300",
    isOpen ? "translate-x-0" : "-translate-x-full",
    "flex flex-col justify-between md:relative md:translate-x-0 md:flex"
  )}
>
  {/* Top Section */}
  <div>
    <div className="flex items-center justify-between mb-8 px-4 md:justify-start">
      <div className="flex items-center">
        <img
            src={fluenceailogo}
            alt="Fluence AI Logo"
            className="h-8 w-8 mr-2"
          />
        <a
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-[#33C3F0] to-[#3B34DC] bg-clip-text text-transparent"
        >
          Fluence AI
        </a>
      </div>
      <button className="md:hidden" onClick={onClose}>
        <X className="h-6 w-6" />
      </button>
    </div>

    <nav className="space-y-2">
      <SidebarItem icon={BarChartHorizontal} href="/dashboard" label="Dashboard" onClick={onClose} />
      <SidebarItem icon={Bot} href="/automations" label="Automations" onClick={onClose} />
      <SidebarItem icon={Settings} href="/settings" label="Settings" onClick={onClose} />
    </nav>
  </div>

  {/* Bottom Section (Logout) */}
  <div className="pt-4">
    <SidebarItem icon={LogOut} href="/" label="Logout" onClick={onClose} />
  </div>
</aside>

    </>
  );
};

export default Sidebar;
