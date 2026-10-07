"use client";

import React from "react";
import { Student, LearningActivityRecord } from "@/types";
import {
  Clock,
  Battery,
  Heart,
  Watch,
  CheckCircle2,
  Calendar,
  Sparkles,
  Zap,
  TrendingUp
} from "lucide-react";

interface ParentActivityProps {
  child: Student;
  activities: LearningActivityRecord[];
}

export const ParentActivity: React.FC<ParentActivityProps> = ({ child, activities }) => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
          Aktivitas Belajar dan Smartwatch
        </h1>
        <p className="text-sm text-[#64748B] font-medium mt-1">
          Pantau riwayat interaksi jam pintar anak sepanjang jam sekolah hingga pembelajaran di rumah.
        </p>
      </div>

      {/* Wrist Device Live Health & Connection Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card-friendly p-5 bg-white border border-[#E2E8F0] flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#64748B] uppercase">Baterai Jam Pintar</span>
            <div className="text-2xl font-extrabold text-[#172033]">
              {child.smartwatch.batteryLevel}%
            </div>
            <p className="text-[11px] text-[#22C55E]">● Cukup untuk seharian</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#15803D] flex items-center justify-center">
            <Battery className="w-6 h-6" />
          </div>
        </div>

        <div className="card-friendly p-5 bg-white border border-[#E2E8F0] flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#64748B] uppercase">Kondisi Sensori</span>
            <div className="text-2xl font-extrabold text-[#172033] capitalize">
              {child.smartwatch.stressLevel}
            </div>
            <p className="text-[11px] text-[#5B5FEF]">Detak stabil: {child.smartwatch.heartRateBpm} bpm</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#EEF0FF] text-[#5B5FEF] flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
        </div>

        <div className="card-friendly p-5 bg-white border border-[#E2E8F0] flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#64748B] uppercase">Durasi Aktif Hari Ini</span>
            <div className="text-2xl font-extrabold text-[#172033]">
              {child.studyDurationMinutes} Menit
            </div>
            <p className="text-[11px] text-[#A16207]">3 Sesi belajar selesai</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#FEF9C3] text-[#A16207] flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Daily Activity Timeline */}
      <div className="card-friendly-static p-6 sm:p-8 bg-white border border-[#E2E8F0] space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-extrabold text-[#172033]">
              Garis Waktu Belajar Hari Ini (6 Oktober 2026)
            </h3>
            <p className="text-xs text-[#64748B]">
              Setiap getaran, kuis, dan bacaan yang diikuti Alya tercatat secara otomatis.
            </p>
          </div>
          <span className="text-xs font-bold text-[#22C55E] bg-[#DCFCE7] px-3 py-1 rounded-full">
            ● Sinkron Real-time
          </span>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#E2E8F0]">
          {activities.map((act, index) => (
            <div key={act.id} className="relative group">
              {/* Bullet circle */}
              <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full bg-white border-2 border-[#5B5FEF] flex items-center justify-center text-[10px] font-bold text-[#5B5FEF] shadow-sm">
                {index + 1}
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#5B5FEF]/40 hover:bg-[#EEF0FF]/30 transition-all space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#5B5FEF] bg-[#EEF0FF] px-2.5 py-0.5 rounded-full">
                      {act.timestamp}
                    </span>
                    <h4 className="text-sm font-extrabold text-[#172033]">{act.materialTitle}</h4>
                  </div>
                  <span className="text-xs font-bold text-[#22C55E]">
                    Skor: {act.score}/100 • Durasi: {act.durationMinutes} menit
                  </span>
                </div>

                <p className="text-xs text-[#64748B] leading-relaxed">
                  {act.interactionNotes}
                </p>

                <div className="flex items-center gap-2 pt-1 text-[11px] font-medium text-[#64748B]">
                  <Watch className="w-3.5 h-3.5 text-[#5B5FEF]" />
                  <span>
                    Perangkat:{" "}
                    {act.deviceType === "smartwatch"
                      ? "Smartwatch Pergelangan Tangan"
                      : act.deviceType === "smart_lab"
                      ? "Sensor Smart Lab Tanaman"
                      : "Layar Smart Board Kelas"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
