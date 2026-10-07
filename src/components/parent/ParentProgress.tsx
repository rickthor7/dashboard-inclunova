"use client";

import React from "react";
import { Student } from "@/types";
import { ProgressRing } from "@/components/common/ProgressRing";
import {
  TrendingUp,
  Star,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Calendar,
  Smile,
  Award,
  BookOpen
} from "lucide-react";

interface ParentProgressProps {
  child: Student;
}

export const ParentProgress: React.FC<ParentProgressProps> = ({ child }) => {
  const subjects = [
    {
      name: "Matematika Inklusif",
      score: 92,
      progress: 88,
      status: "Sangat Baik",
      color: "#5B5FEF",
      bgLight: "#EEF0FF",
      comment: "Alya sangat menyukai representasi visual pecahan bergambar."
    },
    {
      name: "Bahasa Indonesia",
      score: 95,
      progress: 92,
      status: "Istimewa",
      color: "#22C55E",
      bgLight: "#DCFCE7",
      comment: "Keterampilan menyimak narasi dongeng sangat berkembang."
    },
    {
      name: "Sains Alam & Smart Lab",
      score: 88,
      progress: 78,
      status: "Aktif Bertanya",
      color: "#38BDF8",
      bgLight: "#E0F2FE",
      comment: "Antusias mengamati sensor tanaman melalui getaran smartwatch."
    },
    {
      name: "Sensori & Motorik",
      score: 98,
      progress: 95,
      status: "Luar Biasa",
      color: "#FB7185",
      bgLight: "#FFE4E6",
      comment: "Keseimbangan dan fokus ritmis berkembang sangat pesat."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
          Perkembangan Belajar Alya
        </h1>
        <p className="text-sm text-[#64748B] font-medium mt-1">
          Rangkuman capaian pembelajaran yang dirancang ramah dan mudah dipahami Ayah & Bunda.
        </p>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {subjects.map((sub, idx) => (
          <div
            key={idx}
            className="card-friendly p-6 bg-white border border-[#E2E8F0] space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold"
                  style={{ backgroundColor: sub.bgLight, color: sub.color }}
                >
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#172033]">{sub.name}</h3>
                  <span
                    className="text-xs font-bold px-2.5 py-0.5 rounded-full mt-0.5 inline-block"
                    style={{ backgroundColor: sub.bgLight, color: sub.color }}
                  >
                    {sub.status}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-2xl font-extrabold text-[#172033]">{sub.score}</span>
                <span className="text-xs text-[#64748B] block font-medium">Nilai Terkini</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-[#64748B]">Kemajuan Modul</span>
                <span style={{ color: sub.color }}>{sub.progress}%</span>
              </div>
              <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${sub.progress}%`, backgroundColor: sub.color }}
                ></div>
              </div>
            </div>

            {/* Teacher note */}
            <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed flex items-start gap-2">
              <Smile className="w-4 h-4 text-[#5B5FEF] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Catatan Guru:</strong> &quot;{sub.comment}&quot;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Completed Materials vs Gentle Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Completed Materials */}
        <div className="card-friendly-static p-6 bg-white border border-[#E2E8F0] space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
            <h3 className="text-base font-extrabold text-[#172033]">
              Materi yang Sudah Dikuasai dengan Baik
            </h3>
          </div>

          <div className="space-y-2.5">
            {[
              "Pecahan Dasar Pizza Ceria (1/2 dan 1/4)",
              "Mengenal Tokoh Fabel Sahabat Rimba",
              "Pengenalan Sensor Kelembaban Smart Lab",
              "Latihan Ketukan Irama Haptik 4/4"
            ].map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-[#DCFCE7]/40 border border-[#BBF7D0] flex items-center justify-between text-xs"
              >
                <span className="font-semibold text-[#15803D]">✓ {item}</span>
                <span className="text-[10px] font-bold text-[#15803D] bg-white px-2 py-0.5 rounded-full">
                  Tuntas
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gentle Review Suggestions */}
        <div className="card-friendly-static p-6 bg-white border border-[#E2E8F0] space-y-4">
          <div className="flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-[#FACC15]" />
            <h3 className="text-base font-extrabold text-[#172033]">
              Latihan Santai untuk Diulang di Rumah
            </h3>
          </div>

          <p className="text-xs text-[#64748B]">
            Bukan tugas berat! Cukup diajak ngobrol santai bersama Ayah/Bunda sambil bermain:
          </p>

          <div className="space-y-2.5">
            {[
              {
                title: "Menebak Potongan Kue / Buah di Meja Makan",
                tip: "Latih konsep 3/4 potong apel saat makan sore bersama."
              },
              {
                title: "Refleksi Sensori Tanaman Pot di Rumah",
                tip: "Sentuh tanah tanaman pot dan bandingkan dengan simulasi di Smart Lab."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-[#FEF9C3]/40 border border-[#FEF08A] text-xs space-y-1"
              >
                <span className="font-bold text-[#854D0E] block">{item.title}</span>
                <span className="text-[#64748B] text-[11px] leading-relaxed block">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
