"use client";

import React from "react";
import { Student } from "@/types";
import { AccessibilityBadge } from "@/components/common/Badge";
import {
  X,
  Battery,
  Heart,
  Clock,
  Sparkles,
  Watch,
  CheckCircle2,
  BookOpen,
  Trophy,
  Zap
} from "lucide-react";

interface StudentDetailModalProps {
  student: Student | null;
  onClose: () => void;
  onSendRecommendationToWatch: (student: Student) => void;
}

export const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  student,
  onClose,
  onSendRecommendationToWatch
}) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="card-friendly-static bg-white dark:bg-[#1E293B] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border border-[#E2E8F0] dark:border-[#334155] text-[#172033] dark:text-[#F8FAFC]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F1F5F9] dark:bg-[#0F172A] hover:bg-[#E2E8F0] dark:hover:bg-[#334155] text-[#64748B] dark:text-[#94A3B8] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header: Avatar, Name, Class, Learning Status */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-[#E2E8F0] dark:border-[#334155]">
          <div className="relative">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-20 h-20 rounded-3xl object-cover ring-4 ring-[#5B5FEF]/20"
            />
            <span
              className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white dark:border-[#1E293B] ${
                student.status === "needs_attention"
                  ? "bg-[#FB7185]"
                  : student.status === "studying"
                  ? "bg-[#5B5FEF]"
                  : "bg-[#22C55E]"
              }`}
            ></span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#172033] dark:text-[#F8FAFC]">{student.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-[#5B5FEF] dark:text-[#A5B4FC]">
                {student.className}
              </span>
            </div>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-medium">{student.specialNeedsDescription}</p>

            <div className="flex items-center gap-1.5 pt-1 flex-wrap">
              {student.accessibilityProfiles.map((mode) => (
                <AccessibilityBadge key={mode} mode={mode} size="sm" />
              ))}
            </div>
          </div>
        </div>

        {/* 4 Cards: Progress, Score, Learning Duration, Material Completion */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-3.5 rounded-2xl bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-center">
            <span className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] uppercase block">Progres</span>
            <span className="text-xl font-extrabold text-[#5B5FEF] dark:text-[#A5B4FC]">{student.progress}%</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#DCFCE7] dark:bg-[#14532D]/40 text-center">
            <span className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] uppercase block">Nilai Kuis</span>
            <span className="text-xl font-extrabold text-[#15803D] dark:text-[#86EFAC]">{student.averageScore}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#FEF9C3] dark:bg-[#713F12]/40 text-center">
            <span className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] uppercase block">Durasi Belajar</span>
            <span className="text-xl font-extrabold text-[#A16207] dark:text-[#FDE047]">
              {student.studyDurationMinutes}m
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#E0F2FE] dark:bg-[#0C4A6E]/40 text-center">
            <span className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] uppercase block">Materi Tuntas</span>
            <span className="text-xl font-extrabold text-[#0369A1] dark:text-[#7DD3FC]">
              {student.completedMaterialsCount} Modul
            </span>
          </div>
        </div>

        {/* Smartwatch Real-time Telemetry Section */}
        <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] mb-6 space-y-2">
          <h4 className="text-xs font-extrabold uppercase text-[#64748B] dark:text-[#94A3B8] tracking-wider flex items-center gap-1.5">
            <Watch className="w-4 h-4 text-[#5B5FEF] dark:text-[#A5B4FC]" />
            <span>Telemetri Jam Tangan ({student.smartwatch.deviceId})</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
            <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]">
              <span className="text-[#64748B] dark:text-[#94A3B8]">Baterai</span>
              <span className="font-bold text-[#22C55E]">{student.smartwatch.batteryLevel}%</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]">
              <span className="text-[#64748B] dark:text-[#94A3B8]">Detak Jantung</span>
              <span className="font-bold text-[#FB7185]">{student.smartwatch.heartRateBpm} bpm</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]">
              <span className="text-[#64748B] dark:text-[#94A3B8]">Kondisi Sensori</span>
              <span className="font-bold capitalize text-[#5B5FEF] dark:text-[#A5B4FC]">
                {student.smartwatch.stressLevel}
              </span>
            </div>
          </div>
        </div>

        {/* AI Recommendation Card (dashboard_desain.md line 210) */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-[#EEF0FF] via-white to-[#FEF9C3]/50 dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] border-2 border-[#5B5FEF]/30 space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-[#5B5FEF] text-white">
              <Sparkles className="w-4 h-4" />
            </span>
            <h4 className="text-sm font-extrabold text-[#172033] dark:text-[#F8FAFC]">
              Rekomendasi Pembelajaran AI untuk {student.nickname}
            </h4>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Materi berikut disarankan:</span>
            <h5 className="text-base font-extrabold text-[#5B5FEF] dark:text-[#A5B4FC]">
              &quot;Pecahan Dasar dengan Dukungan Sentuhan & Audio&quot;
            </h5>
            <span className="text-xs font-bold text-[#172033] dark:text-[#F8FAFC] block">
              Level: Easy → Medium (Adaptif)
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
              Metode Pembelajaran:
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#E0F2FE] text-[#0369A1]">
                Audio TTS
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#FEF9C3] text-[#A16207]">
                Visual Kontras
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#EEF0FF] text-[#5B5FEF]">
                Haptik Bergetar
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onSendRecommendationToWatch(student)}
              className="w-full btn-primary text-xs py-2.5 shadow-md shadow-[#5B5FEF]/20"
            >
              <Watch className="w-4 h-4" />
              <span>[ Kirim ke Smartwatch ]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
