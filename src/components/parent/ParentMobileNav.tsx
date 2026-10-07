"use client";

import React from "react";
import { Home, TrendingUp, CheckSquare, Sparkles, MapPin } from "lucide-react";

interface ParentMobileNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const ParentMobileNav: React.FC<ParentMobileNavProps> = ({
  activeTab,
  onTabChange
}) => {
  const items = [
    { id: "home", label: "Home", icon: Home },
    { id: "progress", label: "Progress", icon: TrendingUp },
    { id: "tasks", label: "Tugas", icon: CheckSquare },
    { id: "activity", label: "Aktivitas", icon: Sparkles },
    { id: "monitoring", label: "Lokasi", icon: MapPin }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-md border-t border-[#E2E8F0] dark:border-[#334155] px-3 py-2 flex items-center justify-around shadow-lg">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl text-[10px] font-bold transition-all ${
              isActive
                ? "text-[#22C55E]"
                : "text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F8FAFC]"
            }`}
          >
            <Icon className={`w-5 h-5 mb-0.5 ${isActive ? "text-[#22C55E]" : "text-[#64748B] dark:text-[#94A3B8]"}`} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};
