"use client";

import React, { useState } from "react";
import {
  Tv,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Users,
  Watch,
  Sparkles,
  PenTool,
  Volume2,
  CheckCircle2,
  Share2
} from "lucide-react";

interface SmartBoardViewProps {
  onBroadcastToWatch: () => void;
}

export const SmartBoardView: React.FC<SmartBoardViewProps> = ({ onBroadcastToWatch }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isWhiteboardActive, setIsWhiteboardActive] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [broadcastToast, setBroadcastToast] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Pecahan Dasar: 1/2 Bagian Pizza",
      content:
        "Jika kita memotong satu pizza bulat tepat di tengah menjadi 2 potong sama besar, setiap potongan bernilai 1/2 (setengah).",
      visual: "[ 1/2 ] [ 1/2 ]",
      interactiveQuestion: "Siswa diminta menekan tombol 1/2 pada smartwatch mereka sekarang!",
      audioScript: "Halo anak-anak hebat! Perhatikan potongan pizza di depan. Satu potong dari dua bagian sama adalah satu per dua."
    },
    {
      id: 2,
      title: "Pecahan Seperempat: 1/4 Bagian",
      content:
        "Jika dipotong lagi menjadi 4 bagian sama besar, 1 potong kecil bernilai 1/4 (satu per empat).",
      visual: "[ 1/4 ] [ 1/4 ] [ 1/4 ] [ 1/4 ]",
      interactiveQuestion: "Sentuh layar smartwatch dengan getaran 4 ketukan ritmis!",
      audioScript: "Bagus sekali! Sekarang pizza kita bagi menjadi empat bagian sama besar."
    },
    {
      id: 3,
      title: "Tantangan Interaktif Kelas 4A",
      content:
        "Alya dan Bima masing-masing mengambil 1 potong dari 4 potong. Berapa jumlah total potong yang mereka ambil?",
      visual: "1/4 + 1/4 = 2/4 = 1/2",
      interactiveQuestion: "Kirim jawabanmu langsung melalui Smartwatch!",
      audioScript: "Yuk hitung bersama-sama di smartwatch masing-masing."
    }
  ];

  const handleBroadcast = () => {
    onBroadcastToWatch();
    setBroadcastToast(true);
    setTimeout(() => setBroadcastToast(false), 2500);
  };

  const currentSlideData = slides[currentSlide - 1];

  return (
    <div className="space-y-6">
      {/* Title & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
              Konsol Smart Board Kelas Inklusif
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#DCFCE7] text-[#15803D] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping"></span>
              Live Proyeksi Kelas
            </span>
          </div>
          <p className="text-sm text-[#64748B] font-medium mt-1">
            Kendalikan layar Smart Board depan kelas dan sinkronkan aktivitas secara real-time ke smartwatch siswa.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleBroadcast}
            className="btn-primary text-xs py-2 px-3.5"
          >
            <Watch className="w-4 h-4" />
            <span>Kirim Tampilan ke Smartwatch Siswa</span>
          </button>
        </div>
      </div>

      {broadcastToast && (
        <div className="p-3 rounded-2xl bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0] text-xs font-bold flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>Tampilan slide saat ini berhasil dipancarkan ke 24 smartwatch siswa di kelas!</span>
        </div>
      )}

      {/* Main Smart Board Simulation Screen Frame */}
      <div className="card-friendly-static bg-white dark:bg-[#0B0F19] text-[#172033] dark:text-white p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-xl border-4 border-[#E2E8F0] dark:border-[#334155] transition-colors">
        {/* Virtual Smart Board Status Bar */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] dark:border-white/10 pb-3 mb-6 text-xs text-[#64748B] dark:text-white/70">
          <div className="flex items-center gap-2">
            <Tv className="w-4 h-4 text-[#5B5FEF] dark:text-[#38BDF8]" />
            <span className="font-bold text-[#172033] dark:text-white">Smart Board 4A • SDN Permata Hati</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#22C55E]" />
              24 Siswa Tersambung
            </span>
            <span className="bg-[#F1F5F9] dark:bg-white/10 px-2 py-0.5 rounded text-[11px] font-semibold text-[#475569] dark:text-white">Mode Kontras Tinggi</span>
          </div>
        </div>

        {/* Content Projection Area */}
        <div className="min-h-[280px] sm:min-h-[340px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#5B5FEF]/10 dark:bg-[#5B5FEF]/30 text-[#5B5FEF] dark:text-[#A5B4FC] border border-[#5B5FEF]/20 dark:border-[#5B5FEF]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Slide {currentSlide} dari {slides.length}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#172033] dark:text-white leading-tight">
              {currentSlideData.title}
            </h2>

            <p className="text-base sm:text-lg text-[#475569] dark:text-white/80 max-w-2xl leading-relaxed">
              {currentSlideData.content}
            </p>

            <div className="py-4 text-5xl sm:text-7xl select-none tracking-widest text-center sm:text-left text-[#172033] dark:text-white">
              {currentSlideData.visual}
            </div>
          </div>

          {/* Interactive Wrist Watch Prompt Box */}
          <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-white/10 backdrop-blur-md border border-[#E2E8F0] dark:border-white/20 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5B5FEF] flex items-center justify-center">
                <Watch className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#5B5FEF] dark:text-[#A5B4FC] block">Instruksi Smartwatch Siswa</span>
                <span className="text-sm font-semibold text-[#172033] dark:text-white">
                  {currentSlideData.interactiveQuestion}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-white/20 hover:bg-[#F1F5F9] dark:hover:bg-white/30 text-[#172033] dark:text-white border border-[#CBD5E1] dark:border-transparent text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isAudioPlaying ? "Hentikan Audio" : "Putar Narasi Suara"}</span>
            </button>
          </div>
        </div>

        {/* Bottom Slide Controller Bar */}
        <div className="flex items-center justify-between border-t border-[#E2E8F0] dark:border-white/10 pt-4 mt-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 1))}
              disabled={currentSlide === 1}
              className="p-2 rounded-xl bg-[#F1F5F9] dark:bg-white/10 hover:bg-[#E2E8F0] dark:hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-[#172033] dark:text-white border border-[#CBD5E1] dark:border-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-[#64748B] dark:text-white/80 px-2">
              {currentSlide} / {slides.length}
            </span>
            <button
              onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length))}
              disabled={currentSlide === slides.length}
              className="p-2 rounded-xl bg-[#F1F5F9] dark:bg-white/10 hover:bg-[#E2E8F0] dark:hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-[#172033] dark:text-white border border-[#CBD5E1] dark:border-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsWhiteboardActive(!isWhiteboardActive)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                isWhiteboardActive
                  ? "bg-[#22C55E] text-white"
                  : "bg-[#F1F5F9] dark:bg-white/10 hover:bg-[#E2E8F0] dark:hover:bg-white/20 text-[#172033] dark:text-white border border-[#CBD5E1] dark:border-transparent"
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Mode Coretan Digital</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
