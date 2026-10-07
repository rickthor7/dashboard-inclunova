"use client";

import React, { useState } from "react";
import { Student } from "@/types";
import { Badge, AccessibilityBadge } from "@/components/common/Badge";
import {
  Search,
  Filter,
  Battery,
  Heart,
  Radio,
  MapPin,
  Clock,
  Zap,
  ChevronRight,
  Sparkles,
  Wifi,
  AlertTriangle
} from "lucide-react";

interface ClassMonitoringProps {
  students: Student[];
  onSelectStudent: (student: Student) => void;
  onSendHapticBuzz: (student: Student) => void;
}

export const ClassMonitoring: React.FC<ClassMonitoringProps> = ({
  students,
  onSelectStudent,
  onSendHapticBuzz
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [buzziingStudentId, setBuzziingStudentId] = useState<string | null>(null);

  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.specialNeedsDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleBuzz = (e: React.MouseEvent, student: Student) => {
    e.stopPropagation();
    setBuzziingStudentId(student.id);
    onSendHapticBuzz(student);
    setTimeout(() => {
      setBuzziingStudentId(null);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            Monitoring Kelas 4A Inklusi
          </h1>
          <p className="text-sm text-[#64748B] font-medium mt-1">
            Pantau status aktivitas, kondisi sensori, dan telemetri smartwatch siswa secara real-time.
          </p>
        </div>

        {/* Quick Summary Pill */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-2xl bg-[#EEF0FF] text-[#5B5FEF] border border-[#C7D2FE] text-xs font-bold">
            6 Siswa Terpantau
          </div>
          <div className="px-3 py-1.5 rounded-2xl bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0] text-xs font-bold">
            LoRa Mesh Aktif
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="card-friendly-static p-4 bg-white border border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari siswa atau profil aksesibilitas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B5FEF]/30"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
          <span className="text-xs font-bold text-[#64748B] whitespace-nowrap">Status:</span>
          {[
            { id: "all", label: "Semua" },
            { id: "studying", label: "Sedang Belajar" },
            { id: "online", label: "Online Santai" },
            { id: "needs_attention", label: "Perlu Pendampingan" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                statusFilter === tab.id
                  ? "bg-[#5B5FEF] text-white shadow-sm"
                  : "bg-[#F1F5F9] text-[#64748B] hover:text-[#172033]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Student Telemetry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredStudents.map((student) => {
          const isBuzzing = buzziingStudentId === student.id;

          const stressBadgeColor = {
            tenang: "bg-[#DCFCE7] text-[#15803D]",
            fokus: "bg-[#EEF0FF] text-[#5B5FEF]",
            kelelahan: "bg-[#FEF9C3] text-[#A16207]",
            perlu_istirahat: "bg-[#FFE4E6] text-[#BE123C]"
          }[student.smartwatch.stressLevel];

          return (
            <div
              key={student.id}
              onClick={() => onSelectStudent(student)}
              className={`card-friendly p-5 bg-white border cursor-pointer relative overflow-hidden transition-all ${
                isBuzzing ? "ring-2 ring-[#5B5FEF] shadow-lg" : "hover:border-[#5B5FEF]/40"
              }`}
            >
              {isBuzzing && (
                <div className="absolute inset-0 bg-[#5B5FEF]/10 backdrop-blur-[1px] flex items-center justify-center z-10 animate-fade-in">
                  <span className="px-3 py-1.5 rounded-full bg-[#5B5FEF] text-white text-xs font-bold shadow-md flex items-center gap-1.5 animate-bounce">
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    <span>Getaran Haptik Terkirim ke Jam!</span>
                  </span>
                </div>
              )}

              {/* Student Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-12 h-12 rounded-2xl object-cover ring-2 ring-[#E2E8F0]"
                    />
                    <span
                      className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${
                        student.status === "needs_attention"
                          ? "bg-[#FB7185]"
                          : student.status === "studying"
                          ? "bg-[#5B5FEF]"
                          : "bg-[#22C55E]"
                      }`}
                    ></span>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#172033] hover:text-[#5B5FEF] transition-colors">
                      {student.name}
                    </h3>
                    <p className="text-[11px] text-[#64748B] line-clamp-1 font-medium mt-0.5">
                      {student.specialNeedsDescription}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${stressBadgeColor}`}
                >
                  {student.smartwatch.stressLevel.replace("_", " ")}
                </span>
              </div>

              {/* Accessibility Badges */}
              <div className="flex items-center gap-1.5 mb-4 flex-wrap">
                {student.accessibilityProfiles.map((mode) => (
                  <AccessibilityBadge key={mode} mode={mode} size="sm" />
                ))}
              </div>

              {/* Telemetry Stats Box */}
              <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]/80 space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <Battery className="w-3.5 h-3.5 text-[#22C55E]" />
                    <span>Baterai Smartwatch</span>
                  </span>
                  <span className="font-bold text-[#172033]">{student.smartwatch.batteryLevel}%</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        student.smartwatch.heartRateBpm > 95
                          ? "text-[#FB7185] animate-pulse"
                          : "text-[#5B5FEF]"
                      }`}
                    />
                    <span>Detak Jantung</span>
                  </span>
                  <span
                    className={`font-bold ${
                      student.smartwatch.heartRateBpm > 95 ? "text-[#FB7185]" : "text-[#172033]"
                    }`}
                  >
                    {student.smartwatch.heartRateBpm} bpm
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Lokasi</span>
                  </span>
                  <span className="font-semibold text-[#172033] text-[11px] truncate max-w-[150px]">
                    {student.smartwatch.locationName}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E2E8F0]">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#CA8A04]" />
                    <span>Durasi Belajar</span>
                  </span>
                  <span className="font-bold text-[#5B5FEF]">{student.studyDurationMinutes} menit</span>
                </div>
              </div>

              {/* Student Progress Bar */}
              <div className="space-y-1 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#64748B] text-[11px] font-medium">Progres Pembelajaran</span>
                  <span className="font-extrabold text-[#172033]">{student.progress}%</span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#5B5FEF] h-full rounded-full transition-all duration-700"
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1 border-t border-[#E2E8F0]">
                <button
                  onClick={(e) => handleBuzz(e, student)}
                  title="Kirim ketukan getaran haptik ramah ke pergelangan tangan siswa"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#EEF0FF] hover:bg-[#5B5FEF] text-[#5B5FEF] hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Kirim Getaran</span>
                </button>

                <button
                  onClick={() => onSelectStudent(student)}
                  className="py-2 px-3 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#172033] flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Detail</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
