"use client";

import React, { useState } from "react";
import { Material } from "@/types";
import { Badge, AccessibilityBadge } from "@/components/common/Badge";
import {
  BookOpen,
  PlusCircle,
  Send,
  Watch,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  Sparkles,
  Volume2,
  Eye,
  Hand,
  RefreshCw
} from "lucide-react";

interface MaterialManagerProps {
  materials: Material[];
  onOpenCreateModal: () => void;
  onSendToWatch: (material: Material) => void;
}

export const MaterialManager: React.FC<MaterialManagerProps> = ({
  materials,
  onOpenCreateModal,
  onSendToWatch
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [syncingId, setSyncingId] = useState<string | null>(null);

  const subjects = [
    { id: "all", label: "Semua Mapel" },
    { id: "Matematika", label: "Matematika" },
    { id: "Bahasa Indonesia", label: "Bahasa Indonesia" },
    { id: "Sains Inklusif", label: "Sains Inklusif" },
    { id: "Sensori & Motorik", label: "Sensori & Motorik" }
  ];

  const filteredMaterials = materials.filter(
    (m) => selectedSubject === "all" || m.subject === selectedSubject
  );

  const handleSend = (material: Material) => {
    setSyncingId(material.id);
    onSendToWatch(material);
    setTimeout(() => {
      setSyncingId(null);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Title & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            Materi Pembelajaran Inklusif
          </h1>
          <p className="text-sm text-[#64748B] font-medium mt-1">
            Kelola modul multimodal dan kirimkan langsung ke jam tangan pintar siswa.
          </p>
        </div>

        <button onClick={onOpenCreateModal} className="btn-primary">
          <PlusCircle className="w-5 h-5" />
          <span>+ Buat Materi Baru</span>
        </button>
      </div>

      {/* Subject Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {subjects.map((subj) => (
          <button
            key={subj.id}
            onClick={() => setSelectedSubject(subj.id)}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              selectedSubject === subj.id
                ? "bg-[#5B5FEF] text-white shadow-md shadow-[#5B5FEF]/20"
                : "bg-white text-[#64748B] hover:text-[#172033] border border-[#E2E8F0]"
            }`}
          >
            {subj.label}
          </button>
        ))}
      </div>

      {/* Material Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredMaterials.map((mat) => {
          const isSyncing = syncingId === mat.id;

          return (
            <div
              key={mat.id}
              className="card-friendly p-6 bg-white border border-[#E2E8F0] flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EEF0FF] text-[#5B5FEF]">
                      {mat.subject}
                    </span>
                    <span className="text-xs text-[#64748B] font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {mat.durationMinutes} menit
                    </span>
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      mat.difficulty === "Mudah"
                        ? "bg-[#DCFCE7] text-[#15803D]"
                        : mat.difficulty === "Sedang"
                        ? "bg-[#FEF9C3] text-[#A16207]"
                        : "bg-[#FFE4E6] text-[#BE123C]"
                    }`}
                  >
                    Level {mat.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-[#172033] mb-2">{mat.title}</h3>

                {/* Content Summary */}
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  {mat.contentSummary}
                </p>

                {/* Accessibility Modes */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[11px] font-bold text-[#64748B] block uppercase tracking-wider">
                    Dukungan Aksesibilitas Sensorik:
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {mat.accessibilityModes.map((mode) => (
                      <AccessibilityBadge key={mode} mode={mode} size="sm" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  <span>Dibaca {mat.readsCount} siswa di kelas</span>
                </div>

                <button
                  onClick={() => handleSend(mat)}
                  disabled={isSyncing}
                  className={`btn-primary text-xs py-2 px-3.5 ${
                    isSyncing ? "opacity-75 cursor-wait" : ""
                  }`}
                >
                  {isSyncing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Menyinkronkan...</span>
                    </>
                  ) : (
                    <>
                      <Watch className="w-4 h-4" />
                      <span>Kirim ke Smartwatch Siswa</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
