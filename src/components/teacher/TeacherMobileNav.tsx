"use client";

import React from "react";
import { LayoutDashboard, Users, BookOpen, Gamepad2, Menu } from "lucide-react";

interface TeacherMobileNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onOpenMobileMenu: () => void;
}

export const TeacherMobileNav: React.FC<TeacherMobileNavProps> = ({
  activeTab,
  onTabChange,
  onOpenMobileMenu
}) => {
  const items = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "classes", label: "Kelas", icon: Users },
    { id: "materials", label: "Materi", icon: BookOpen },
    { id: "quiz", label: "Kuis", icon: Gamepad2 }
  ];

  return (
    <nav
      aria-label="Navigasi Bawah Guru"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-md border-t border-[#E2E8F0] dark:border-[#334155] px-2 py-1.5 flex items-center justify-around shadow-lg"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-bold transition-all ${
              isActive
                ? "text-[#5B5FEF] dark:text-[#818CF8]"
                : "text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F8FAFC]"
            }`}
          >
            <div
              className={`p-1 rounded-xl transition-all ${
                isActive
                  ? "bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-[#5B5FEF] dark:text-[#818CF8]"
                  : "text-[#64748B] dark:text-[#94A3B8]"
              }`}
            >
              <Icon className="w-4 h-4" />
            </div>
            <span className="mt-0.5">{item.label}</span>
          </button>
        );
      })}

      {/* 5th button: Open full mobile menu for SmartBoard, SmartLab, AI, Analytics */}
      <button
        onClick={onOpenMobileMenu}
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] hover:text-[#5B5FEF] dark:hover:text-[#818CF8] transition-all"
      >
        <div className="p-1 rounded-xl bg-[#F1F5F9] dark:bg-[#0F172A] text-[#64748B] dark:text-[#94A3B8]">
          <Menu className="w-4 h-4" />
        </div>
        <span className="mt-0.5">Lainnya</span>
      </button>
    </nav>
  );
};
