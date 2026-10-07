"use client";

import React, { useState } from "react";
import { Student } from "@/types";
import { ProgressRing } from "@/components/common/ProgressRing";
import { AccessibilityBadge } from "@/components/common/Badge";
import {
  BarChart3,
  TrendingUp,
  Clock,
  Award,
  Layers,
  Heart,
  ChevronRight
} from "lucide-react";

interface StudentAnalyticsViewProps {
  students: Student[];
  onSelectStudent: (student: Student) => void;
}

export const StudentAnalyticsView: React.FC<StudentAnalyticsViewProps> = ({
  students,
  onSelectStudent
}) => {
  const [selectedStudent, setSelectedStudent] = useState<Student>(students[0]);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            Analitik Pembelajaran Inklusif
          </h1>
          <p className="text-sm text-[#64748B] font-medium mt-1">
            Data analitik kognitif, keterlibatan sensori, dan histori capaian belajar siswa.
          </p>
        </div>

        {/* Average Class Metrics */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm text-center">
            <span className="text-[10px] font-bold text-[#64748B] uppercase block">Rata-rata Nilai</span>
            <span className="text-lg font-extrabold text-[#22C55E]">84.2</span>
          </div>
          <div className="p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm text-center">
            <span className="text-[10px] font-bold text-[#64748B] uppercase block">Rata-rata Durasi</span>
            <span className="text-lg font-extrabold text-[#5B5FEF]">35 Menit</span>
          </div>
        </div>
      </div>

      {/* Main Analytics Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Student Selector List */}
        <div className="card-friendly-static p-5 bg-white border border-[#E2E8F0] space-y-3">
          <h3 className="text-xs font-extrabold uppercase text-[#64748B] tracking-wider mb-2">
            Pilih Siswa untuk Ditinjau
          </h3>

          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 no-scrollbar">
            {students.map((student) => {
              const isSelected = selectedStudent.id === student.id;
              return (
                <div
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center justify-between flex-shrink-0 w-56 sm:w-64 lg:w-full ${
                    isSelected
                      ? "bg-[#EEF0FF] border-[#5B5FEF] shadow-sm"
                      : "hover:bg-[#F8FAFC] border-[#E2E8F0]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-10 h-10 rounded-xl object-cover ring-1 ring-[#CBD5E1] flex-shrink-0"
                    />
                    <div className="truncate">
                      <h4
                        className={`text-xs font-extrabold truncate ${
                          isSelected ? "text-[#5B5FEF]" : "text-[#172033]"
                        }`}
                      >
                        {student.name}
                      </h4>
                      <span className="text-[10px] text-[#64748B] font-semibold truncate block">
                        Nilai: {student.averageScore} • Progres: {student.progress}%
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-[#5B5FEF]" : "text-[#CBD5E1]"}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Student Analytics Dashboard */}
        <div className="lg:col-span-2 space-y-6">
          {/* Student Profile Card */}
          <div className="card-friendly-static p-6 bg-white border border-[#E2E8F0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <img
                  src={selectedStudent.avatar}
                  alt={selectedStudent.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#5B5FEF]/30"
                />
                <div>
                  <h3 className="text-xl font-extrabold text-[#172033]">{selectedStudent.name}</h3>
                  <p className="text-xs text-[#64748B] font-medium">{selectedStudent.className}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    {selectedStudent.accessibilityProfiles.map((mode) => (
                      <AccessibilityBadge key={mode} mode={mode} size="sm" />
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectStudent(selectedStudent)}
                className="btn-secondary text-xs py-2 px-3 self-start sm:self-auto"
              >
                Buka Profil Lengkap →
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5">
              <div className="p-3.5 rounded-2xl bg-[#EEF0FF] text-center">
                <Award className="w-5 h-5 text-[#5B5FEF] mx-auto mb-1" />
                <span className="text-[10px] font-bold text-[#64748B] uppercase block">Rata Nilai</span>
                <span className="text-xl font-extrabold text-[#5B5FEF]">
                  {selectedStudent.averageScore}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#DCFCE7] text-center">
                <TrendingUp className="w-5 h-5 text-[#22C55E] mx-auto mb-1" />
                <span className="text-[10px] font-bold text-[#64748B] uppercase block">Progres</span>
                <span className="text-xl font-extrabold text-[#15803D]">
                  {selectedStudent.progress}%
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FEF9C3] text-center">
                <Clock className="w-5 h-5 text-[#A16207] mx-auto mb-1" />
                <span className="text-[10px] font-bold text-[#64748B] uppercase block">Durasi Belajar</span>
                <span className="text-xl font-extrabold text-[#A16207]">
                  {selectedStudent.studyDurationMinutes}m
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFE4E6] text-center">
                <Heart className="w-5 h-5 text-[#BE123C] mx-auto mb-1" />
                <span className="text-[10px] font-bold text-[#64748B] uppercase block">Denyut Nadi</span>
                <span className="text-xl font-extrabold text-[#BE123C]">
                  {selectedStudent.smartwatch.heartRateBpm} bpm
                </span>
              </div>
            </div>
          </div>

          {/* Sensory Engagement Distribution Visual */}
          <div className="card-friendly-static p-6 bg-white border border-[#E2E8F0] space-y-4">
            <h4 className="text-sm font-extrabold text-[#172033]">
              Distribusi Preferensi Sensorik Siswa (AI Modeling)
            </h4>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#64748B]">Respon Visual Kontras</span>
                  <span className="text-[#5B5FEF]">88% Efektivitas</span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-3 rounded-full overflow-hidden">
                  <div className="bg-[#5B5FEF] h-full rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#64748B]">Respon Audio TTS</span>
                  <span className="text-[#38BDF8]">92% Efektivitas</span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-3 rounded-full overflow-hidden">
                  <div className="bg-[#38BDF8] h-full rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-[#64748B]">Respon Haptik Jam Tangan</span>
                  <span className="text-[#22C55E]">76% Efektivitas</span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-3 rounded-full overflow-hidden">
                  <div className="bg-[#22C55E] h-full rounded-full" style={{ width: "76%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
