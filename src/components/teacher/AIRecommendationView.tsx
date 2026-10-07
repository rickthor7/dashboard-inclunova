"use client";

import React, { useState } from "react";
import { AIRecommendation } from "@/types";
import { AccessibilityBadge } from "@/components/common/Badge";
import {
  Sparkles,
  Watch,
  CheckCircle2,
  Brain,
  ArrowRight,
  TrendingUp,
  AlertCircle
} from "lucide-react";

interface AIRecommendationViewProps {
  recommendations: AIRecommendation[];
  onApplyRecommendation: (rec: AIRecommendation) => void;
}

export const AIRecommendationView: React.FC<AIRecommendationViewProps> = ({
  recommendations,
  onApplyRecommendation
}) => {
  const [appliedIds, setAppliedIds] = useState<Record<string, boolean>>({});

  const handleApply = (rec: AIRecommendation) => {
    setAppliedIds((prev) => ({ ...prev, [rec.id]: true }));
    onApplyRecommendation(rec);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
              AI Adaptive Learning Engine
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FEF9C3] text-[#A16207] border border-[#FEF08A]">
              Model Rekomendasi Aktif
            </span>
          </div>
          <p className="text-sm text-[#64748B] font-medium mt-1">
            Analisis cerdas berdasarkan respon kuis smartwatch, durasi belajar, dan profil sensori setiap siswa.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3.5 py-1.5 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] shadow-sm text-xs font-bold text-[#5B5FEF] dark:text-[#A5B4FC] flex items-center gap-2">
            <Brain className="w-4 h-4" />
            <span>Akurasi Model: 94.8%</span>
          </div>
        </div>
      </div>

      {/* Explanatory Banner: Non-technical & Friendly */}
      <div className="card-friendly-static p-6 bg-gradient-to-r from-[#EEF0FF] via-white to-[#DCFCE7]/40 dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#0F172A] border border-[#C7D2FE] dark:border-[#334155]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#5B5FEF] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-[#5B5FEF]/20">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-[#172033] dark:text-[#F8FAFC]">
              Bagaimana AI INCLUNOVA Bekerja Menemani Guru?
            </h2>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed mt-1 max-w-3xl">
              AI tidak menggantikan peran guru, melainkan menjadi asisten cerdas yang membaca sinyal dari smartwatch (seperti jeda menjawab, denyut nadi saat fokus/lelah, dan pilihan jawaban kuis). AI kemudian menyarankan materi penguatan dengan mode sensorik yang paling cocok untuk siswa.
            </p>
          </div>
        </div>
      </div>

      {/* Recommendations Cards */}
      <div className="space-y-4">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
          Daftar Rekomendasi Pembelajaran Personal (Hari Ini)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recommendations.map((rec) => {
            const isApplied = appliedIds[rec.id] || rec.actionTaken;

            return (
              <div
                key={rec.id}
                className="card-friendly p-6 bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] flex flex-col justify-between"
              >
                <div>
                  {/* Student Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={rec.studentAvatar}
                      alt={rec.studentName}
                      className="w-11 h-11 rounded-2xl object-cover ring-2 ring-[#E2E8F0] dark:ring-[#334155]"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#172033] dark:text-[#F8FAFC]">{rec.studentName}</h4>
                      <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-medium">
                        Dihasilkan {rec.generatedAt}
                      </span>
                    </div>
                  </div>

                  {/* Recommendation Subject & Difficulty */}
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] space-y-2 mb-4">
                    <span className="text-[10px] font-extrabold uppercase text-[#5B5FEF] dark:text-[#A5B4FC] tracking-wider block">
                      Materi yang Disarankan:
                    </span>
                    <h5 className="text-sm font-bold text-[#172033] dark:text-[#F8FAFC] leading-snug">
                      &quot;{rec.recommendedMaterialTitle}&quot;
                    </h5>

                    <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E2E8F0] dark:border-[#334155]">
                      <span className="text-[#64748B] dark:text-[#94A3B8]">Penyesuaian Level:</span>
                      <span className="font-bold text-[#5B5FEF] dark:text-[#A5B4FC]">{rec.recommendedDifficulty}</span>
                    </div>
                  </div>

                  {/* AI Explanation / Reason */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[11px] font-bold text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
                      <span>Alasan Personal AI:</span>
                    </span>
                    <p className="text-xs text-[#64748B] dark:text-[#CBD5E1] leading-relaxed italic bg-[#FEF9C3]/40 dark:bg-[#713F12]/30 p-2.5 rounded-xl border border-[#FEF08A]/60 dark:border-[#713F12]">
                      &quot;{rec.reason}&quot;
                    </p>
                  </div>

                  {/* Multimodal Delivery tags */}
                  <div className="space-y-1 mb-5">
                    <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                      Metode Penyampaian Disarankan:
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {rec.deliveryModes.map((mode) => (
                        <AccessibilityBadge key={mode} mode={mode} size="sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-3 border-t border-[#E2E8F0]">
                  {isApplied ? (
                    <div className="py-2.5 px-3 rounded-2xl bg-[#DCFCE7] text-[#15803D] text-xs font-bold flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Terkirim ke Smartwatch Siswa</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleApply(rec)}
                      className="w-full btn-primary text-xs py-2.5"
                    >
                      <Watch className="w-4 h-4" />
                      <span>Kirim Materi Ini ke Smartwatch</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
