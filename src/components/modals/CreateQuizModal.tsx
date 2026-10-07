"use client";

import React, { useState } from "react";
import { Quiz } from "@/types";
import { X, Gamepad2, Plus, Sparkles } from "lucide-react";

interface CreateQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (newQuiz: Quiz) => void;
}

export const CreateQuizModal: React.FC<CreateQuizModalProps> = ({
  isOpen,
  onClose,
  onCreate
}) => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("Matematika");
  const [questionsCount, setQuestionsCount] = useState(3);
  const [adaptiveMode, setAdaptiveMode] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newQuiz: Quiz = {
      id: `qz-${Date.now()}`,
      title,
      subject,
      questionsCount,
      questions: [
        {
          id: `q-${Date.now()}`,
          questionText: "Berapakah jumlah 2 bagian dari 4 pizza yang sama besar?",
          audioPrompt: "Pilihlah pecahan yang tepat.",
          options: [
            { id: "o-1", text: "2/4 atau 1/2", isCorrect: true },
            { id: "o-2", text: "1/4", isCorrect: false }
          ],
          explanation: "Dua bagian dari empat sama dengan setengah (1/2).",
          hapticFeedbackPattern: "success_wave"
        }
      ],
      targetClass: "Kelas 4A Inklusi",
      adaptiveMode,
      status: "aktif",
      completionRate: 0,
      syncedToSmartwatchCount: 24,
      totalTargetStudents: 24
    };

    onCreate(newQuiz);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="card-friendly-static bg-white dark:bg-[#1E293B] w-full max-w-lg p-6 sm:p-8 relative shadow-2xl border border-[#E2E8F0] dark:border-[#334155] text-[#172033] dark:text-[#F8FAFC]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F1F5F9] dark:bg-[#0F172A] hover:bg-[#E2E8F0] dark:hover:bg-[#334155] text-[#64748B] dark:text-[#94A3B8] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-2xl bg-[#DCFCE7] dark:bg-[#14532D] text-[#22C55E] dark:text-[#86EFAC]">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-[#172033] dark:text-[#F8FAFC]">Buat Kuis Adaptif Baru</h2>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
              Soal akan otomatis disesuaikan oleh AI berdasarkan performa setiap siswa.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-[#172033] dark:text-[#F8FAFC] mb-1">Judul Kuis</label>
            <input
              type="text"
              required
              placeholder="Contoh: Petualangan Menghitung Buah Sahabat Rimba"
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
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F8FAFC] font-semibold text-xs"
              >
                <option value="Matematika">Matematika</option>
                <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                <option value="Sains Inklusif">Sains Inklusif</option>
                <option value="Sensori & Motorik">Sensori & Motorik</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#172033] dark:text-[#F8FAFC] mb-1">Jumlah Butir Soal</label>
              <input
                type="number"
                min={1}
                max={10}
                value={questionsCount}
                onChange={(e) => setQuestionsCount(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F8FAFC] font-semibold text-xs"
              />
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#EEF0FF] dark:bg-[#5B5FEF]/15 border border-[#C7D2FE] dark:border-[#5B5FEF]/30 flex items-start gap-3">
            <input
              type="checkbox"
              id="adaptive"
              checked={adaptiveMode}
              onChange={(e) => setAdaptiveMode(e.target.checked)}
              className="w-4 h-4 rounded text-[#5B5FEF] accent-[#5B5FEF] mt-0.5"
            />
            <label htmlFor="adaptive" className="text-xs font-bold text-[#172033] dark:text-[#F8FAFC] cursor-pointer">
              Aktifkan Mode Adaptif AI
              <span className="block font-normal text-[#64748B] dark:text-[#94A3B8] text-[11px] mt-0.5">
                AI mengatur tingkat kesulitan soal secara otomatis saat siswa menjawab dari smartwatch.
              </span>
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3">
            <button type="button" onClick={onClose} className="btn-secondary text-xs">
              Batal
            </button>
            <button type="submit" className="btn-primary text-xs">
              <Gamepad2 className="w-4 h-4" />
              <span>Simpan & Rilis Kuis</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
