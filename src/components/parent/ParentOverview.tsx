"use client";

import React from "react";
import { Student } from "@/types";
import { ProgressRing } from "@/components/common/ProgressRing";
import {
  Sparkles,
  Heart,
  Clock,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Battery,
  Star,
  Play,
  Watch
} from "lucide-react";

interface ParentOverviewProps {
  child: Student;
  onNavigateTab: (tabId: string) => void;
  onStartLearningTogether: () => void;
}

export const ParentOverview: React.FC<ParentOverviewProps> = ({
  child,
  onNavigateTab,
  onStartLearningTogether
}) => {
  return (
    <div className="space-y-6">
      {/* 1. Greeting Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            Hai, Ayah dan Bunda!
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] font-medium mt-1">
            Yuk dampingi perjalanan belajar ananda tercinta hari ini dengan penuh kehangatan.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0] text-xs font-bold self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping"></span>
          <span>Smartwatch Alya Terhubung</span>
        </div>
      </div>

      {/* 2. Child Hero Card (Exact specifications from dashboard_desain.md line 247) */}
      <div className="card-friendly-static p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white via-[#F8FAFC] to-[#DCFCE7]/40 dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#0F172A] border border-[#BBF7D0] dark:border-[#334155] relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#22C55E]/10 via-[#FACC15]/10 to-transparent dark:from-[#22C55E]/20 dark:via-[#FACC15]/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
            <div className="relative flex-shrink-0">
              <img
                src={child.avatar}
                alt={child.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover ring-4 ring-white dark:ring-[#334155] shadow-md"
              />
            </div>

            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DCFCE7] dark:bg-[#14532D] text-[#15803D] dark:text-[#86EFAC]">
                Hari Ini
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#172033] dark:text-[#F8FAFC]">
                {child.nickname} sudah belajar {child.studyDurationMinutes} menit!
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] font-medium">
                {child.className} • Terakhir tersinkron {child.smartwatch.lastSyncText}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-[#0F172A] p-4 rounded-3xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm">
            <ProgressRing
              progress={child.progress}
              size={110}
              strokeWidth={10}
              color="#22C55E"
              backgroundColor="#DCFCE7"
              sublabel="Capaian Hari Ini"
            />
            <div className="text-center sm:text-left space-y-1">
              <div className="flex items-center gap-1.5 justify-center sm:justify-start text-xs font-bold text-[#15803D] dark:text-[#4ADE80]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>3 Materi Selesai</span>
              </div>
              <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-medium max-w-[140px]">
                Target belajar harian tercapai dengan sangat baik!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Parent AI Insight Card (Matching exact text from PRD line 158 & design line 273) */}
      <div className="card-friendly-static p-6 sm:p-7 bg-gradient-to-r from-[#FEF9C3]/70 via-white to-[#EEF0FF]/50 dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#0F172A] border border-[#FEF08A] dark:border-[#334155] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#FACC15] dark:bg-[#A16207] text-[#854D0E] dark:text-[#FEF08A] flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Insight Hari Ini untuk Ayah dan Bunda</span>
              </span>
              <span className="text-xs text-[#64748B] dark:text-[#94A3B8] font-semibold">Bahasa Ramah Pendamping</span>
            </div>

            <h3 className="text-lg font-extrabold text-[#172033] dark:text-[#F8FAFC] leading-snug">
              Alya sudah memahami materi pecahan dan penjumlahan dengan baik!
            </h3>

            <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
              Ananda lebih aktif dan ceria saat belajar dengan ilustrasi gambar potongan pizza. Coba lanjutkan latihan bersama Bunda selama 10 menit nanti sore ya.
            </p>
          </div>

          <button
            onClick={onStartLearningTogether}
            className="btn-primary bg-[#22C55E] hover:bg-[#16A34A] shadow-md shadow-[#22C55E]/30 text-xs sm:text-sm whitespace-nowrap self-start sm:self-auto"
          >
            <Play className="w-4 h-4" />
            <span>Mulai Belajar Bersama</span>
          </button>
        </div>
      </div>

      {/* 4. Quick Dashboard Cards Grid for Parents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Today's Tasks from Teacher */}
        <div className="card-friendly p-5 bg-white border border-[#E2E8F0] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#64748B] uppercase">Tugas Hari Ini</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FEF9C3] text-[#A16207]">
                Deadline Sore Ini
              </span>
            </div>

            <h4 className="text-base font-extrabold text-[#172033] mb-1">
              Latihan Pecahan Bergambar
            </h4>
            <p className="text-xs text-[#64748B] mb-3">
              Potong apel menjadi 4 bagian untuk melatih konsep 1/4 bersama anak.
            </p>

            <div className="space-y-1 mb-4">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-[#64748B]">Progres Latihan</span>
                <span className="text-[#22C55E]">70% Selesai</span>
              </div>
              <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                <div className="bg-[#22C55E] h-full rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab("tasks")}
            className="w-full py-2 px-3 rounded-xl bg-[#F8FAFC] hover:bg-[#EEF0FF] text-xs font-bold text-[#5B5FEF] border border-[#E2E8F0] flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Buka Rincian Tugas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: Smartwatch Device & Health Check */}
        <div className="card-friendly p-5 bg-white border border-[#E2E8F0] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#64748B] uppercase">Kondisi Jam Tangan</span>
              <span className="text-xs font-bold text-[#22C55E]">● Nyaman Dipakai</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center">
                <Watch className="w-6 h-6 text-[#15803D]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#172033]">{child.smartwatch.deviceId}</h4>
                <p className="text-xs text-[#64748B]">Baterai: {child.smartwatch.batteryLevel}% • Detak: {child.smartwatch.heartRateBpm} bpm</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs space-y-1.5 mb-2">
              <div className="flex justify-between">
                <span className="text-[#64748B]">Status Sensori:</span>
                <span className="font-bold text-[#5B5FEF] capitalize">
                  {child.smartwatch.stressLevel}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Lokasi Saat Ini:</span>
                <span className="font-semibold text-[#172033] truncate max-w-[140px]">
                  {child.smartwatch.locationName}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab("monitoring")}
            className="w-full py-2 px-3 rounded-xl bg-[#F8FAFC] hover:bg-[#DCFCE7] text-xs font-bold text-[#15803D] border border-[#E2E8F0] flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Lihat Keamanan & Lokasi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 3: Achievement Stars & Motivation */}
        <div className="card-friendly p-5 bg-white border border-[#E2E8F0] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#64748B] uppercase">Bintang Prestasi</span>
              <span className="text-xs font-bold text-[#FACC15]">14 Bintang</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FEF9C3] flex items-center justify-center">
                <Star className="w-5 h-5 text-[#A16207]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#172033]">Bintang Matematika</h4>
                <p className="text-[11px] text-[#64748B]">Diraih setelah kuis kelereng & pizza</p>
              </div>
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed mb-4">
              Bu Rina memberikan lencana apresiasi karena Alya sangat antusias membantu teman sekelas saat praktikum sensori!
            </p>
          </div>

          <button
            onClick={() => onNavigateTab("progress")}
            className="w-full py-2 px-3 rounded-xl bg-[#F8FAFC] hover:bg-[#FEF9C3] text-xs font-bold text-[#A16207] border border-[#E2E8F0] flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Buka Rapor Kemajuan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
