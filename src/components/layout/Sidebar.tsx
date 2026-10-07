"use client";

import React from "react";
import { UserRole } from "@/types";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Gamepad2,
  Tv,
  FlaskConical,
  Sparkles,
  BarChart3,
  Home,
  TrendingUp,
  Clock,
  CheckSquare,
  MapPin,
  HelpCircle
} from "lucide-react";

interface SidebarProps {
  currentRole: UserRole;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onOpenSyncInfo: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentRole,
  activeTab,
  onTabChange,
  onOpenSyncInfo
}) => {
  const teacherMenuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard, badge: undefined },
    { id: "classes", label: "Monitoring Kelas", icon: Users, badge: "6 Siswa" },
    { id: "materials", label: "Materi Belajar", icon: BookOpen, badge: "4 Modul" },
    { id: "quiz", label: "Kuis & Game", icon: Gamepad2, badge: "1 Aktif" },
    { id: "smartboard", label: "Smart Board", icon: Tv, badge: "Live" },
    { id: "smartlab", label: "Smart Lab", icon: FlaskConical, badge: "IoT" },
    { id: "ai_adaptive", label: "Rekomendasi AI", icon: Sparkles, badge: "3 Saran" },
    { id: "analytics", label: "Analitik Siswa", icon: BarChart3, badge: undefined }
  ];

  const parentMenuItems = [
    { id: "home", label: "Beranda Anak", icon: Home, badge: undefined },
    { id: "progress", label: "Perkembangan Belajar", icon: TrendingUp, badge: "82%" },
    { id: "activity", label: "Aktivitas & Jam", icon: Clock, badge: "42 mnt" },
    { id: "tasks", label: "Tugas & Materi", icon: CheckSquare, badge: "2 Tugas" },
    { id: "monitoring", label: "Status & Lokasi", icon: MapPin, badge: "Online" }
  ];

  const menuItems = currentRole === "teacher" ? teacherMenuItems : parentMenuItems;

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-[#1E293B] border-r border-[#E2E8F0] dark:border-[#334155] p-4 flex flex-col justify-between hidden md:flex min-h-[calc(100vh-65px)]">
      <div>
        {/* Role Identity Tag */}
        <div className="mb-4 px-3 py-2 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0]/80 dark:border-[#334155]">
          <p className="text-[10px] font-bold tracking-wider text-[#64748B] dark:text-[#94A3B8] uppercase">
            {currentRole === "teacher" ? "Pusat Kendali Pengajar" : "Pendampingan Keluarga"}
          </p>
          <p className="text-xs font-bold text-[#172033] dark:text-[#F8FAFC] truncate mt-0.5">
            {currentRole === "teacher" ? "SD Inklusi Permata Hati" : "Siswa: Alya Khairunnisa"}
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? currentRole === "teacher"
                      ? "bg-[#5B5FEF] text-white shadow-md shadow-[#5B5FEF]/25"
                      : "bg-[#22C55E] text-white shadow-md shadow-[#22C55E]/25"
                    : "text-[#64748B] dark:text-[#94A3B8] hover:bg-[#F8FAFC] dark:hover:bg-[#0F172A] hover:text-[#172033] dark:hover:text-[#F8FAFC]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#64748B] dark:text-[#94A3B8]"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#F1F5F9] dark:bg-[#0F172A] text-[#64748B] dark:text-[#94A3B8]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Mascot Widget */}
      <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#334155]">
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#EEF0FF] via-[#F8FAFC] to-[#DCFCE7] dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] border border-[#C7D2FE]/60 dark:border-[#334155] relative overflow-hidden">
          <div className="flex items-start gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#1E293B] shadow-sm flex items-center justify-center flex-shrink-0 animate-float-gentle text-[#5B5FEF] dark:text-[#A5B4FC]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-[#172033] dark:text-[#F8FAFC]">Incli AI Bot</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
              </div>
              <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-0.5">
                {currentRole === "teacher"
                  ? "Smartwatch siswa tersinkron lancar hari ini!"
                  : "Alya belajar dengan ceria dan fokus hari ini!"}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenSyncInfo}
            className="mt-2.5 w-full text-center text-[11px] font-bold text-[#5B5FEF] dark:text-[#A5B4FC] hover:underline flex items-center justify-center gap-1"
          >
            <HelpCircle className="w-3 h-3" />
            <span>Info Alur Ekosistem</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
