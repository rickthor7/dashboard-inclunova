"use client";

import React, { useState } from "react";
import { Material, AccessibilityMode } from "@/types";
import { X, BookOpen, Sparkles, Watch, Plus } from "lucide-react";

interface CreateMaterialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (newMaterial: Material) => void;
}

export const CreateMaterialModal: React.FC<CreateMaterialModalProps> = ({
  isOpen,
  onClose,
  onCreate
}) => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState<Material["subject"]>("Matematika");
  const [type, setType] = useState<Material["type"]>("interaktif");
  const [contentSummary, setContentSummary] = useState("");
  const [duration, setDuration] = useState(15);
  const [difficulty, setDifficulty] = useState<Material["difficulty"]>("Mudah");
  const [selectedModes, setSelectedModes] = useState<AccessibilityMode[]>(["visual", "audio"]);
  const [syncImmediately, setSyncImmediately] = useState(true);

  if (!isOpen) return null;

  const toggleMode = (mode: AccessibilityMode) => {
    setSelectedModes((prev) =>
      prev.includes(mode) ? prev.filter((m) => m !== mode) : [...prev, mode]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newMaterial: Material = {
      id: `mat-${Date.now()}`,
      title,
      subject,
      type,
      contentSummary:
        contentSummary || "Modul inklusif baru yang siap dipelajari siswa melalui smartwatch.",
      targetClass: "Kelas 4A Inklusi",
      durationMinutes: duration,
      accessibilityModes: selectedModes,
      syncStatus: syncImmediately ? "tersinkron" : "menunggu_sync",
      difficulty,
      createdDate: "07 Okt 2026",
      readsCount: 0
    };

    onCreate(newMaterial);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="card-friendly-static bg-white dark:bg-[#1E293B] w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border border-[#E2E8F0] dark:border-[#334155] text-[#172033] dark:text-[#F8FAFC]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F1F5F9] dark:bg-[#0F172A] hover:bg-[#E2E8F0] dark:hover:bg-[#334155] text-[#64748B] dark:text-[#94A3B8] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-2xl bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-[#5B5FEF] dark:text-[#A5B4FC]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-[#172033] dark:text-[#F8FAFC]">Buat Materi Inklusif Baru</h2>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
              Sesuaikan dengan kebutuhan sensori dan kirim ke smartwatch siswa.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-[#172033] dark:text-[#F8FAFC] mb-1">Judul Materi</label>
            <input
              type="text"
              required
              placeholder="Contoh: Menghitung Pecahan Pizza dengan Rasa Senang"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F8FAFC] focus:bg-white dark:focus:bg-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#5B5FEF]/30 text-xs sm:text-sm font-semibold"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-[#172033] dark:text-[#F8FAFC] mb-1">Mata Pelajaran</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F8FAFC] font-semibold text-xs"
              >
                <option value="Matematika">Matematika</option>
                <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                <option value="Sains Inklusif">Sains Inklusif</option>
                <option value="Sensori & Motorik">Sensori & Motorik</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#172033] dark:text-[#F8FAFC] mb-1">Tingkat Kesulitan</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F8FAFC] font-semibold text-xs"
              >
                <option value="Mudah">Mudah</option>
                <option value="Sedang">Sedang</option>
                <option value="Menantang">Menantang</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#172033] dark:text-[#F8FAFC] mb-1">Ringkasan Materi</label>
            <textarea
              rows={3}
              placeholder="Jelaskan ringkasan materi atau instruksi untuk siswa..."
              value={contentSummary}
              onChange={(e) => setContentSummary(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F8FAFC] focus:bg-white dark:focus:bg-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#5B5FEF]/30 text-xs font-medium"
            />
          </div>

          {/* Accessibility Modes Toggles */}
          <div>
            <label className="block font-bold text-[#172033] dark:text-[#F8FAFC] mb-1.5">
              Dukungan Aksesibilitas Sensorik
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "visual", label: "Visual Kontras" },
                { id: "audio", label: "Audio TTS" },
                { id: "haptic", label: "Getaran Haptik" },
                { id: "sign_language", label: "Bahasa Isyarat" }
              ].map((m) => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => toggleMode(m.id as AccessibilityMode)}
                  className={`p-2 rounded-xl border text-[11px] font-bold transition-all text-center ${
                    selectedModes.includes(m.id as AccessibilityMode)
                      ? "bg-[#5B5FEF] text-white border-[#5B5FEF]"
                      : "bg-[#F8FAFC] dark:bg-[#0F172A] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#334155]"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sync Checkbox */}
          <div className="p-3.5 rounded-2xl bg-[#EEF0FF] dark:bg-[#5B5FEF]/15 border border-[#C7D2FE] dark:border-[#5B5FEF]/30 flex items-center gap-3">
            <input
              type="checkbox"
              id="syncNow"
              checked={syncImmediately}
              onChange={(e) => setSyncImmediately(e.target.checked)}
              className="w-4 h-4 rounded text-[#5B5FEF] accent-[#5B5FEF]"
            />
            <label htmlFor="syncNow" className="text-xs font-bold text-[#172033] dark:text-[#F8FAFC] cursor-pointer">
              Langsung pancarkan dan sinkronkan ke 24 smartwatch siswa via LoRa/Cloud
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3">
            <button type="button" onClick={onClose} className="btn-secondary text-xs">
              Batal
            </button>
            <button type="submit" className="btn-primary text-xs">
              <Plus className="w-4 h-4" />
              <span>Simpan & Kirim Materi</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
