"use client";

import React from "react";
import { UserRole } from "@/types";
import {
  Bell,
  Wifi,
  Sparkles,
  Watch,
  Radio,
  Moon,
  Sun,
  GraduationCap,
  Users
} from "lucide-react";

interface HeaderProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenNotifications: () => void;
  onToggleWatchSimulator: () => void;
  onOpenSyncInfo: () => void;
  unreadNotifCount: number;
  isWatchOpen: boolean;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRole,
  onRoleChange,
  onOpenNotifications,
  onToggleWatchSimulator,
  onOpenSyncInfo,
  unreadNotifCount,
  isWatchOpen,
  isDarkMode,
  onToggleDarkMode
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#334155] px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#5B5FEF] via-[#38BDF8] to-[#22C55E] flex items-center justify-center shadow-md shadow-[#5B5FEF]/20 text-white font-extrabold text-xl tracking-tight">
            I
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-[#172033] dark:text-[#F8FAFC]">
                INCLU<span className="text-[#5B5FEF]">NOVA</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-[#5B5FEF] border border-[#C7D2FE] dark:border-[#5B5FEF]/40">
                v2.4 Ecosystem
              </span>
            </div>
            <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] hidden md:block font-medium">
              Adaptive & Inclusive Learning Platform
            </p>
          </div>
        </div>

        {/* Center: Dual Role Switcher (no emojis) */}
        <div className="flex items-center bg-[#F1F5F9] dark:bg-[#0F172A] p-1 rounded-2xl border border-[#E2E8F0] dark:border-[#334155]">
          <button
            onClick={() => onRoleChange("teacher")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              currentRole === "teacher"
                ? "bg-white dark:bg-[#1E293B] text-[#5B5FEF] shadow-sm shadow-[#5B5FEF]/10 border border-[#E2E8F0] dark:border-[#334155]"
                : "text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F8FAFC]"
            }`}
          >
            <GraduationCap className="w-4 h-4 text-[#5B5FEF]" />
            <span className="hidden sm:inline">Teacher Dashboard</span>
            <span className="sm:hidden">Guru</span>
          </button>
          <button
            onClick={() => onRoleChange("parent")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              currentRole === "parent"
                ? "bg-white dark:bg-[#1E293B] text-[#22C55E] shadow-sm shadow-[#22C55E]/10 border border-[#E2E8F0] dark:border-[#334155]"
                : "text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F8FAFC]"
            }`}
          >
            <Users className="w-4 h-4 text-[#22C55E]" />
            <span className="hidden sm:inline">Parent Dashboard</span>
            <span className="sm:hidden">Orang Tua</span>
          </button>
        </div>

        {/* Right Actions: Theme Toggle, Sync Status, Smartwatch Trigger, Notifications */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            title={isDarkMode ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
            className="p-2.5 rounded-xl bg-white dark:bg-[#0F172A] hover:bg-[#F8FAFC] dark:hover:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[#64748B] dark:text-[#F8FAFC] transition-all shadow-sm"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-[#FACC15]" />
            ) : (
              <Moon className="w-4 h-4 text-[#5B5FEF]" />
            )}
          </button>

          {/* IoT Sync indicator */}
          <button
            onClick={onOpenSyncInfo}
            title="Klik untuk melihat arsitektur sinkronisasi LoRa & Cloud"
            className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#DCFCE7]/70 dark:bg-[#22C55E]/20 text-[#15803D] dark:text-[#4ADE80] border border-[#BBF7D0] dark:border-[#22C55E]/30 hover:bg-[#DCFCE7] transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
            </span>
            <Wifi className="w-3.5 h-3.5" />
            <span>LoRa & Cloud Synced</span>
          </button>

          {/* Interactive Smartwatch Simulator button */}
          <button
            onClick={onToggleWatchSimulator}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              isWatchOpen
                ? "bg-[#5B5FEF] text-white shadow-md shadow-[#5B5FEF]/30"
                : "bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-[#5B5FEF] dark:text-[#A5B4FC] hover:bg-[#E0E4FE] border border-[#C7D2FE] dark:border-[#5B5FEF]/30"
            }`}
          >
            <Watch className="w-4 h-4" />
            <span className="hidden sm:inline">
              {isWatchOpen ? "Tutup Smartwatch" : "Simulator Smartwatch"}
            </span>
          </button>

          {/* Notifications */}
          <button
            onClick={onOpenNotifications}
            className="relative p-2.5 rounded-xl bg-white dark:bg-[#0F172A] hover:bg-[#F8FAFC] dark:hover:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F8FAFC] transition-all"
            aria-label="Notifikasi"
          >
            <Bell className="w-4 h-4" />
            {unreadNotifCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FB7185] text-[10px] font-bold text-white shadow-sm">
                {unreadNotifCount}
              </span>
            )}
          </button>

          {/* User Avatar */}
          <div className="flex items-center gap-2 pl-1 border-l border-[#E2E8F0] dark:border-[#334155]">
            <div className="w-9 h-9 rounded-full ring-2 ring-[#5B5FEF]/20 overflow-hidden relative">
              <img
                src={
                  currentRole === "teacher"
                    ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
                    : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
