"use client";

import React, { useState } from "react";
import { Student } from "@/types";
import {
  X,
  Volume2,
  Hand,
  Wifi,
  Battery,
  Heart,
  Sparkles,
  CheckCircle2,
  Bell,
  RefreshCw,
  Play,
  RotateCcw
} from "lucide-react";
import confetti from "canvas-confetti";

interface SmartwatchSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  activeStudent: Student;
  incomingNotification?: string | null;
}

export const SmartwatchSimulator: React.FC<SmartwatchSimulatorProps> = ({
  isOpen,
  onClose,
  activeStudent,
  incomingNotification
}) => {
  const [activeWatchApp, setActiveWatchApp] = useState<"notif" | "quiz" | "audio" | "haptic" | "sync">("notif");
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [isHapticBuzzing, setIsHapticBuzzing] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  if (!isOpen) return null;

  const triggerHaptic = () => {
    setIsHapticBuzzing(true);
    setTimeout(() => setIsHapticBuzzing(false), 800);
  };

  const handleQuizAnswer = (optionId: string, isCorrect: boolean) => {
    setSelectedQuizOption(optionId);
    triggerHaptic();

    if (isCorrect) {
      setQuizScore(100);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    } else {
      setQuizScore(50);
    }
  };

  return (
    <div className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-6 sm:right-6 z-50 flex flex-col items-center sm:items-end animate-fade-in">
      {/* Outer Smartwatch Container */}
      <div
        className={`w-full max-w-[340px] sm:w-80 rounded-[36px] sm:rounded-[44px] p-3.5 sm:p-5 bg-white dark:bg-[#1E293B] shadow-2xl border-4 border-[#E2E8F0] dark:border-[#334155] text-[#172033] dark:text-white relative transition-all ${
          isHapticBuzzing ? "ring-4 ring-[#5B5FEF] translate-x-1" : ""
        }`}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-2 pb-2.5 mb-2 border-b border-[#E2E8F0] dark:border-white/10 text-xs">
          <div className="flex items-center gap-1.5 text-[#475569] dark:text-white/80">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
            <span className="font-bold text-[11px] truncate max-w-[130px]">
              {activeStudent.nickname}&apos;s Watch
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#5B5FEF] dark:text-[#A5B4FC] font-semibold">LoRa Synced</span>
            <button
              onClick={onClose}
              className="p-1 rounded-full bg-[#F1F5F9] dark:bg-white/10 hover:bg-[#E2E8F0] dark:hover:bg-white/20 text-[#64748B] dark:text-white transition-colors"
              aria-label="Tutup Simulator"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Smartwatch Screen */}
        <div className="w-full h-[320px] sm:h-[360px] rounded-[26px] sm:rounded-[32px] bg-[#F8FAFC] dark:bg-[#0A0E1A] p-3.5 sm:p-4 flex flex-col justify-between border border-[#E2E8F0] dark:border-white/10 relative overflow-hidden shadow-inner text-[#172033] dark:text-white">
          {/* Watch Status Bar */}
          <div className="flex items-center justify-between text-[11px] text-[#64748B] dark:text-white/70 font-semibold mb-2">
            <span>08:45</span>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[#FB7185]">
                <Heart className="w-3 h-3 fill-current" />
                {activeStudent.smartwatch.heartRateBpm}
              </span>
              <span className="flex items-center gap-1 text-[#22C55E]">
                <Battery className="w-3 h-3" />
                {activeStudent.smartwatch.batteryLevel}%
              </span>
            </div>
          </div>

          {/* Screen Content by Mode */}
          <div className="flex-1 overflow-y-auto py-1 space-y-3">
            {activeWatchApp === "notif" && (
              <div className="space-y-3 animate-fade-in">
                <div className="p-3 rounded-2xl bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 border border-[#C7D2FE] dark:border-[#5B5FEF]/40 text-center space-y-1">
                  <div className="w-8 h-8 mx-auto rounded-xl bg-[#5B5FEF]/15 dark:bg-[#5B5FEF]/30 flex items-center justify-center text-[#5B5FEF] dark:text-white mb-1">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-extrabold text-[#172033] dark:text-white">Materi Baru Masuk!</h4>
                  <p className="text-[11px] text-[#475569] dark:text-white/80 leading-relaxed">
                    {incomingNotification || "Bu Rina mengirim modul 'Pecahan Dasar Pizza Ceria'."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      triggerHaptic();
                      setActiveWatchApp("quiz");
                    }}
                    className="p-2.5 rounded-xl bg-[#5B5FEF] hover:bg-[#4B4FDF] text-white text-[11px] font-bold text-center transition-all shadow-sm"
                  >
                    Kerjakan Kuis
                  </button>
                  <button
                    onClick={() => {
                      triggerHaptic();
                      setActiveWatchApp("audio");
                    }}
                    className="p-2.5 rounded-xl bg-[#F1F5F9] dark:bg-white/10 hover:bg-[#E2E8F0] dark:hover:bg-white/20 text-[#172033] dark:text-white text-[11px] font-bold text-center transition-all border border-[#CBD5E1] dark:border-transparent"
                  >
                    Dengar Audio
                  </button>
                </div>
              </div>
            )}

            {activeWatchApp === "quiz" && (
              <div className="space-y-2.5 animate-fade-in">
                <div className="flex items-center justify-between text-[10px] text-[#64748B] dark:text-white/60 font-semibold">
                  <span>KUIS ADAPTIF PIZZA</span>
                  <span>1 / 1</span>
                </div>

                <p className="text-xs font-bold text-[#172033] dark:text-white leading-tight">
                  Jika 1 pizza dipotong menjadi 2 bagian sama, 1 potong bernilai?
                </p>

                <div className="space-y-1.5">
                  {[
                    { id: "opt-1", text: "1/2 (Setengah)", isCorrect: true },
                    { id: "opt-2", text: "1/4 (Seperempat)", isCorrect: false }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleQuizAnswer(item.id, item.isCorrect)}
                      className={`w-full p-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                        selectedQuizOption === item.id
                          ? item.isCorrect
                            ? "bg-[#22C55E] text-white"
                            : "bg-[#FB7185] text-white"
                          : "bg-[#F1F5F9] dark:bg-white/10 hover:bg-[#E2E8F0] dark:hover:bg-white/20 text-[#172033] dark:text-white border border-[#CBD5E1] dark:border-transparent"
                      }`}
                    >
                      {item.text}
                    </button>
                  ))}
                </div>

                {quizScore !== null && (
                  <div className="p-2 rounded-xl bg-[#22C55E]/15 text-[#15803D] dark:text-[#4ADE80] text-[11px] font-bold text-center flex items-center justify-center gap-1 border border-[#86EFAC] dark:border-[#22C55E]/40">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Hebat! Jawaban Alya Benar (100)</span>
                  </div>
                )}
              </div>
            )}

            {activeWatchApp === "audio" && (
              <div className="space-y-3 text-center py-2 animate-fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#38BDF8]/20 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8]">
                  <Volume2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#172033] dark:text-white">Narasi Suara TTS</h4>
                  <p className="text-[10px] text-[#64748B] dark:text-white/70 mt-1">
                    &quot;Satu per dua adalah satu potong dari dua bagian sama besar...&quot;
                  </p>
                </div>

                <button
                  onClick={() => {
                    triggerHaptic();
                    setAudioPlaying(!audioPlaying);
                  }}
                  className="px-4 py-1.5 rounded-full bg-[#38BDF8] text-white dark:text-[#0A0E1A] text-xs font-bold transition-all shadow-sm"
                >
                  {audioPlaying ? "Jeda Narasi" : "Putar Suara"}
                </button>
              </div>
            )}

            {activeWatchApp === "haptic" && (
              <div className="space-y-3 text-center py-2 animate-fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#FACC15]/20 flex items-center justify-center text-[#CA8A04] dark:text-[#FACC15]">
                  <Hand className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#172033] dark:text-white">Panduan Napas & Relaksasi</h4>
                  <p className="text-[10px] text-[#64748B] dark:text-white/70 mt-1">
                    Tarik napas saat getaran lembut muncul, hembuskan perlahan.
                  </p>
                </div>

                <button
                  onClick={triggerHaptic}
                  className="px-4 py-1.5 rounded-full bg-[#FACC15] text-[#854D0E] dark:text-[#1E293B] text-xs font-bold transition-all shadow-sm"
                >
                  Tes Getaran Halus
                </button>
              </div>
            )}

            {activeWatchApp === "sync" && (
              <div className="space-y-2 text-left py-1 animate-fade-in text-[11px]">
                <div className="p-2 rounded-xl bg-[#F1F5F9] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 space-y-1">
                  <span className="text-[#5B5FEF] dark:text-[#A5B4FC] font-bold block">Status Memori Offline</span>
                  <span className="text-[#172033] dark:text-white">4 Modul Tersimpan Lokal</span>
                  <p className="text-[10px] text-[#64748B] dark:text-white/60">
                    Bisa dipelajari di rumah tanpa internet.
                  </p>
                </div>

                <div className="p-2 rounded-xl bg-[#F1F5F9] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                  <span className="text-[#15803D] dark:text-[#4ADE80] font-bold block">Jaringan LoRa Gateway</span>
                  <span className="text-[#172033] dark:text-white">Tersambung ke Kelas 4A</span>
                </div>
              </div>
            )}
          </div>

          {/* Watch App Navigation Dock */}
          <div className="flex items-center justify-around pt-2 border-t border-[#E2E8F0] dark:border-white/10">
            <button
              onClick={() => setActiveWatchApp("notif")}
              title="Notifikasi"
              className={`p-1.5 rounded-xl transition-colors ${
                activeWatchApp === "notif" ? "bg-[#5B5FEF] text-white" : "text-[#94A3B8] hover:text-[#172033] dark:text-white/50 dark:hover:text-white"
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveWatchApp("quiz")}
              title="Kuis"
              className={`p-1.5 rounded-xl transition-colors ${
                activeWatchApp === "quiz" ? "bg-[#5B5FEF] text-white" : "text-[#94A3B8] hover:text-[#172033] dark:text-white/50 dark:hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveWatchApp("audio")}
              title="Audio TTS"
              className={`p-1.5 rounded-xl transition-colors ${
                activeWatchApp === "audio" ? "bg-[#5B5FEF] text-white" : "text-[#94A3B8] hover:text-[#172033] dark:text-white/50 dark:hover:text-white"
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveWatchApp("haptic")}
              title="Haptik"
              className={`p-1.5 rounded-xl transition-colors ${
                activeWatchApp === "haptic" ? "bg-[#5B5FEF] text-white" : "text-[#94A3B8] hover:text-[#172033] dark:text-white/50 dark:hover:text-white"
              }`}
            >
              <Hand className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActiveWatchApp("sync")}
              title="Offline Sync"
              className={`p-1.5 rounded-xl transition-colors ${
                activeWatchApp === "sync" ? "bg-[#5B5FEF] text-white" : "text-[#94A3B8] hover:text-[#172033] dark:text-white/50 dark:hover:text-white"
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
