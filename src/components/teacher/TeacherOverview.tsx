"use client";

import React from "react";
import { Student } from "@/types";
import { ProgressRing } from "@/components/common/ProgressRing";
import { Badge, AccessibilityBadge } from "@/components/common/Badge";
import {
  Users,
  BookOpen,
  Gamepad2,
  Sparkles,
  PlusCircle,
  Tv,
  FlaskConical,
  ChevronRight,
  Send,
  Zap,
  Heart,
  Watch
} from "lucide-react";

interface TeacherOverviewProps {
  students: Student[];
  onSelectStudent: (student: Student) => void;
  onOpenCreateMaterial: () => void;
  onOpenCreateQuiz: () => void;
  onNavigateTab: (tabId: string) => void;
  onSendCheerToAll: () => void;
}

export const TeacherOverview: React.FC<TeacherOverviewProps> = ({
  students,
  onSelectStudent,
  onOpenCreateMaterial,
  onOpenCreateQuiz,
  onNavigateTab,
  onSendCheerToAll
}) => {
  return (
    <div className="space-y-6">
      {/* 1. Greeting Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            Selamat pagi, Bu Rina!
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] font-medium mt-1">
            Yuk lihat perkembangan kelas inklusi hari ini dan kirimkan pembelajaran seru.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onSendCheerToAll}
            className="px-3.5 py-2 rounded-2xl bg-white dark:bg-[#1E293B] hover:bg-[#EEF0FF] dark:hover:bg-[#0F172A] text-[#5B5FEF] dark:text-[#A5B4FC] border border-[#C7D2FE] dark:border-[#334155] text-xs font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
            <span>Kirim Semangat Haptik ke Semua Siswa</span>
          </button>
        </div>
      </div>

      {/* 2. Hero Card (78% Class Progress) */}
      <div className="card-friendly-static p-6 sm:p-8 bg-gradient-to-r from-white via-[#F8FAFC] to-[#EEF0FF]/40 dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#0F172A] relative overflow-hidden border border-[#E2E8F0] dark:border-[#334155]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#5B5FEF]/10 via-[#38BDF8]/10 to-transparent dark:from-[#5B5FEF]/20 dark:via-[#38BDF8]/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-[#5B5FEF] dark:text-[#A5B4FC] border border-[#C7D2FE] dark:border-[#5B5FEF]/30">
              <span>Capaian Kelas 4A Inklusi</span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] dark:text-[#F8FAFC] tracking-tight">
                78% Progres Pembelajaran Hari Ini
              </h2>
              <p className="text-sm text-[#64748B] dark:text-[#94A3B8] font-medium max-w-xl mt-1 leading-relaxed">
                Sebagian besar siswa telah menyelesaikan modul interaktif &quot;Pecahan Dasar Pizza Ceria&quot; melalui smartwatch mereka.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white dark:bg-[#0F172A] p-3 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm">
                <span className="text-[11px] font-bold text-[#64748B] dark:text-[#94A3B8] block">Siswa Aktif</span>
                <span className="text-lg font-extrabold text-[#5B5FEF] dark:text-[#818CF8]">24 / 26 Siswa</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] p-3 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm">
                <span className="text-[11px] font-bold text-[#64748B] dark:text-[#94A3B8] block">Aktivitas Hari Ini</span>
                <span className="text-lg font-extrabold text-[#22C55E] dark:text-[#4ADE80]">4 Sesi Interaktif</span>
              </div>
              <div className="bg-white dark:bg-[#0F172A] p-3 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm col-span-2 sm:col-span-1">
                <span className="text-[11px] font-bold text-[#64748B] dark:text-[#94A3B8] block">Status Smartwatch</span>
                <span className="text-lg font-extrabold text-[#38BDF8] dark:text-[#38BDF8]">100% Terhubung</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#0F172A] rounded-3xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm">
            <ProgressRing
              progress={78}
              size={130}
              strokeWidth={12}
              color="#5B5FEF"
              backgroundColor="#EEF0FF"
              sublabel="Kelas 4A"
            />
            <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-[#22C55E] dark:text-[#4ADE80]">
              <span>↑ +12% dibanding kemarin</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Teacher KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Siswa Aktif */}
        <div className="card-friendly p-5 bg-white flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Siswa Aktif</span>
            <div className="text-2xl font-extrabold text-[#172033]">24 Siswa</div>
            <p className="text-[11px] font-medium text-[#22C55E]">● 22 Belajar di kelas, 2 lab</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#EEF0FF] text-[#5B5FEF] flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Card 2: Materi Aktif */}
        <div className="card-friendly p-5 bg-white flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Materi Aktif</span>
            <div className="text-2xl font-extrabold text-[#172033]">4 Modul</div>
            <p className="text-[11px] font-medium text-[#38BDF8]">Tersinkron ke smartwatch</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#22C55E] flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        {/* Card 3: Kuis Hari Ini */}
        <div className="card-friendly p-5 bg-white flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Kuis Hari Ini</span>
            <div className="text-2xl font-extrabold text-[#172033]">1 Sedang Berjalan</div>
            <p className="text-[11px] font-medium text-[#F59E0B]">Tantangan Pecahan Ceria</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
            <Gamepad2 className="w-6 h-6" />
          </div>
        </div>

        {/* Card 4: AI Insight */}
        <div className="card-friendly p-5 bg-white flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">AI Insight</span>
            <div className="text-2xl font-extrabold text-[#172033]">3 Siswa</div>
            <p className="text-[11px] font-medium text-[#FB7185]">Butuh materi penguatan</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#FEF9C3] text-[#CA8A04] flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 4. Quick Actions (4 Buttons) */}
      <div>
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B] mb-3">
          Aksi Cepat Pengajar
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={onOpenCreateMaterial}
            className="p-4 rounded-2xl bg-white hover:bg-[#EEF0FF]/60 border border-[#E2E8F0] hover:border-[#5B5FEF]/40 transition-all flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#EEF0FF] text-[#5B5FEF] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <PlusCircle className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-[#172033]">Buat Materi</span>
            <span className="text-[11px] text-[#64748B]">Teks, audio, interaktif</span>
          </button>

          <button
            onClick={onOpenCreateQuiz}
            className="p-4 rounded-2xl bg-white hover:bg-[#DCFCE7]/60 border border-[#E2E8F0] hover:border-[#22C55E]/40 transition-all flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#22C55E] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-[#172033]">Buat Kuis</span>
            <span className="text-[11px] text-[#64748B]">Adaptif & game seru</span>
          </button>

          <button
            onClick={() => onNavigateTab("smartboard")}
            className="p-4 rounded-2xl bg-white hover:bg-[#E0F2FE]/60 border border-[#E2E8F0] hover:border-[#38BDF8]/40 transition-all flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Tv className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-[#172033]">Smart Board</span>
            <span className="text-[11px] text-[#64748B]">Layar kelas & sinkron</span>
          </button>

          <button
            onClick={() => onNavigateTab("smartlab")}
            className="p-4 rounded-2xl bg-white hover:bg-[#FFE4E6]/60 border border-[#E2E8F0] hover:border-[#FB7185]/40 transition-all flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#FFE4E6] text-[#BE123C] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <FlaskConical className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-[#172033]">Smart Lab</span>
            <span className="text-[11px] text-[#64748B]">Praktikum digital & IoT</span>
          </button>
        </div>
      </div>

      {/* 5. Class Progress & AI Insight Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Class Progress (2 columns) */}
        <div className="lg:col-span-2 card-friendly-static p-6 bg-white border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-extrabold text-[#172033]">Perkembangan Siswa Kelas 4A</h3>
              <p className="text-xs text-[#64748B]">Klik pada siswa untuk melihat profil individual & rekomendasi AI</p>
            </div>
            <button
              onClick={() => onNavigateTab("classes")}
              className="text-xs font-bold text-[#5B5FEF] hover:underline flex items-center gap-1"
            >
              <span>Lihat Monitoring Lengkap</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {students.map((student) => {
              const statusColors = {
                online: "bg-[#DCFCE7] text-[#15803D]",
                studying: "bg-[#EEF0FF] text-[#5B5FEF]",
                needs_attention: "bg-[#FFE4E6] text-[#BE123C]",
                offline: "bg-[#F1F5F9] text-[#64748B]"
              };

              const statusLabels = {
                online: "Online",
                studying: "Sedang Belajar",
                needs_attention: "Perlu Pendampingan",
                offline: "Offline"
              };

              return (
                <div
                  key={student.id}
                  onClick={() => onSelectStudent(student)}
                  className="p-3.5 rounded-2xl border border-[#E2E8F0] hover:border-[#5B5FEF]/40 hover:bg-[#F8FAFC] transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#172033] group-hover:text-[#5B5FEF] transition-colors">
                          {student.name}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            statusColors[student.status]
                          }`}
                        >
                          {statusLabels[student.status]}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        {student.accessibilityProfiles.map((mode) => (
                          <AccessibilityBadge key={mode} mode={mode} size="sm" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:w-56">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-[#64748B] text-[11px] font-medium">Progres</span>
                        <span className="font-extrabold text-[#172033]">{student.progress}%</span>
                      </div>
                      <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            student.progress >= 85
                              ? "bg-[#22C55E]"
                              : student.progress >= 70
                              ? "bg-[#5B5FEF]"
                              : "bg-[#F59E0B]"
                          }`}
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#CBD5E1] group-hover:text-[#5B5FEF] group-hover:translate-x-0.5 transition-all hidden sm:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Insight Card (1 column - exact format from PRD & Design) */}
        <div className="space-y-4">
          <div className="card-friendly-static p-6 bg-gradient-to-br from-[#EEF0FF] via-white to-[#FEF9C3]/50 dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#0F172A] border border-[#C7D2FE] dark:border-[#334155] relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-[#5B5FEF] text-white flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI INSIGHT</span>
              </span>
              <span className="text-xs text-[#64748B] dark:text-[#94A3B8] font-semibold">Adaptive Engine</span>
            </div>

            <h4 className="text-base font-extrabold text-[#172033] dark:text-[#F8FAFC] leading-snug">
              3 siswa membutuhkan materi penguatan pada topik Pecahan Dasar.
            </h4>

            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-2">
              Dito, Hana, dan Bima mengalami perlambatan saat kuis pecahan abstrak. AI menyarankan modul visual &quot;Pizza Ceria&quot; dengan penguatan haptik.
            </p>

            <div className="mt-4 pt-3 border-t border-[#E2E8F0]/80 dark:border-[#334155] space-y-2">
              <button
                onClick={() => onNavigateTab("ai_adaptive")}
                className="w-full btn-primary text-xs py-2.5 shadow-sm"
              >
                <span>Lihat Saran AI & Kirim Materi</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Smartwatch Sync Status Banner */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] dark:bg-[#14532D] text-[#15803D] dark:text-[#86EFAC] flex items-center justify-center">
              <Watch className="w-5 h-5 text-[#15803D] dark:text-[#86EFAC]" />
            </div>
            <div className="flex-1">
              <h5 className="text-xs font-bold text-[#172033] dark:text-[#F8FAFC]">Smartwatch Siswa Aktif</h5>
              <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                24 perangkat terhubung. Rata-rata baterai: 82%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
