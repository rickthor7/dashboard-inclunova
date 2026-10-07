"use client";

import React, { useState } from "react";
import { NotificationItem } from "@/types";
import {
  X,
  Bell,
  Sparkles,
  Watch,
  Trophy,
  Heart,
  Check,
  CheckCheck
} from "lucide-react";

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead
}) => {
  const [filterType, setFilterType] = useState<string>("all");

  if (!isOpen) return null;

  const filtered = notifications.filter(
    (n) => filterType === "all" || n.type === filterType
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-white dark:bg-[#1E293B] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#E2E8F0] dark:border-[#334155] animate-slide-left text-[#172033] dark:text-[#F8FAFC]">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] dark:border-[#334155]">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-2xl bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-[#5B5FEF] dark:text-[#A5B4FC]">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#172033] dark:text-[#F8FAFC]">Pusat Notifikasi</h3>
                <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                  Pemberitahuan ekosistem INCLUNOVA
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#F1F5F9] dark:hover:bg-[#0F172A] text-[#64748B] dark:text-[#94A3B8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            {[
              { id: "all", label: "Semua" },
              { id: "ai_insight", label: "AI Insight" },
              { id: "sync", label: "Sinkronisasi" },
              { id: "quiz", label: "Kuis" },
              { id: "student_status", label: "Sensori" }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id)}
                className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  filterType === f.id
                    ? "bg-[#5B5FEF] text-white shadow-sm"
                    : "bg-[#F8FAFC] dark:bg-[#0F172A] text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F8FAFC]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* List of Notifications */}
          <div className="space-y-3 mt-2 max-h-[calc(100vh-190px)] overflow-y-auto pr-1">
            {filtered.map((item) => {
              const iconMap = {
                ai_insight: <Sparkles className="w-4 h-4 text-[#FACC15]" />,
                sync: <Watch className="w-4 h-4 text-[#22C55E]" />,
                quiz: <Trophy className="w-4 h-4 text-[#38BDF8]" />,
                student_status: <Heart className="w-4 h-4 text-[#FB7185]" />
              };

              return (
                <div
                  key={item.id}
                  className={`p-3.5 rounded-2xl border transition-all ${
                    !item.isRead
                      ? "bg-[#EEF0FF]/40 dark:bg-[#5B5FEF]/10 border-[#C7D2FE] dark:border-[#5B5FEF]/30"
                      : "bg-[#F8FAFC] dark:bg-[#0F172A] border-[#E2E8F0] dark:border-[#334155]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white dark:bg-[#1E293B] shadow-sm flex-shrink-0 border border-black/5 dark:border-white/5">
                      {iconMap[item.type]}
                    </div>
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-[#172033] dark:text-[#F8FAFC]">{item.title}</h4>
                        <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8]">{item.timeAgo}</span>
                      </div>
                      <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#334155]">
          <button
            onClick={onMarkAllAsRead}
            className="w-full py-2.5 px-4 rounded-xl bg-[#F8FAFC] dark:bg-[#0F172A] hover:bg-[#EEF0FF] dark:hover:bg-[#1E293B] text-xs font-bold text-[#5B5FEF] dark:text-[#A5B4FC] border border-[#E2E8F0] dark:border-[#334155] flex items-center justify-center gap-2 transition-colors"
          >
            <CheckCheck className="w-4 h-4" />
            <span>Tandai Semua Sudah Dibaca</span>
          </button>
        </div>
      </div>
    </div>
  );
};
