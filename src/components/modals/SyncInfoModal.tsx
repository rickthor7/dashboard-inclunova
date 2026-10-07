"use client";

import React, { useState } from "react";
import {
  X,
  Wifi,
  HardDrive,
  RefreshCw,
  Radio,
  CheckCircle2,
  Cloud,
  Watch,
  Layers
} from "lucide-react";

interface SyncInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SyncInfoModal: React.FC<SyncInfoModalProps> = ({ isOpen, onClose }) => {
  const [isSimulatingSync, setIsSimulatingSync] = useState(false);
  const [syncedSuccess, setSyncedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleRunSync = () => {
    setIsSimulatingSync(true);
    setSyncedSuccess(false);
    setTimeout(() => {
      setIsSimulatingSync(false);
      setSyncedSuccess(true);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="card-friendly-static bg-white dark:bg-[#1E293B] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border border-[#E2E8F0] dark:border-[#334155] text-[#172033] dark:text-[#F8FAFC]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F1F5F9] dark:bg-[#0F172A] hover:bg-[#E2E8F0] dark:hover:bg-[#334155] text-[#64748B] dark:text-[#94A3B8] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-[#DCFCE7] dark:bg-[#14532D] text-[#15803D] dark:text-[#86EFAC]">
            <Radio className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-[#172033] dark:text-[#F8FAFC]">
              Arsitektur Sinkronisasi INCLUNOVA (FR-15)
            </h2>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
              Dukungan kondisi Online, Gateway LoRa, dan Offline Storage Mandiri.
            </p>
          </div>
        </div>

        {/* Sync Architecture Diagrams */}
        <div className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Online Flow */}
            <div className="p-4 rounded-2xl bg-[#EEF0FF]/50 dark:bg-[#5B5FEF]/15 border border-[#C7D2FE] dark:border-[#5B5FEF]/30 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#5B5FEF] text-white inline-block">
                MODE ONLINE (SEKOLAH / WIFI)
              </span>
              <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Smartwatch mengirim telemetri respon jawaban langsung ke Gateway Sekolah dan Cloud INCLUNOVA secara real-time.
              </p>
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0F172A] border border-[#C7D2FE] dark:border-[#5B5FEF]/30 text-[11px] font-semibold text-[#172033] dark:text-[#F8FAFC] flex items-center justify-between">
                <span>Smartwatch</span>
                <span>→</span>
                <span>Gateway LoRa</span>
                <span>→</span>
                <span>Cloud Data</span>
              </div>
            </div>

            {/* Offline Flow */}
            <div className="p-4 rounded-2xl bg-[#FEF9C3]/50 dark:bg-[#FACC15]/10 border border-[#FEF08A] dark:border-[#FACC15]/20 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#A16207] dark:bg-[#EAB308] text-white dark:text-black inline-block">
                MODE OFFLINE (RUMAH TANPA INTERNET)
              </span>
              <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                Sebelum pulang sekolah, materi dicache ke Local Storage jam. Siswa belajar offline, lalu data antrean sinkron otomatis saat tersambung kembali.
              </p>
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0F172A] border border-[#FEF08A] dark:border-[#FACC15]/20 text-[11px] font-semibold text-[#172033] dark:text-[#F8FAFC] flex items-center justify-between">
                <span>Local Storage</span>
                <span>→</span>
                <span>Sync Queue</span>
                <span>→</span>
                <span>Platform</span>
              </div>
            </div>
          </div>

          {/* LoRa Mesh Explanation from dashboard_arsitektur.md */}
          <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] space-y-1.5">
            <h4 className="font-extrabold text-[#172033] dark:text-[#F8FAFC] flex items-center gap-1.5">
              <Radio className="w-4 h-4 text-[#5B5FEF] dark:text-[#A5B4FC]" />
              <span>Peran Spesifik Komunikasi LoRa Mesh</span>
            </h4>
            <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed text-[11px]">
              Sesuai spesifikasi arsitektur INCLUNOVA, LoRa digunakan secara khusus untuk komunikasi perangkat smartwatch ke gateway kelas berdaya rendah (low power long range) dan tidak disamakan dengan koneksi internet/cloud berkapasitas besar.
            </p>
          </div>

          {/* Current Live Status & Simulation */}
          <div className="p-4 rounded-2xl bg-[#F0FDF4] dark:bg-[#14532D]/30 border border-[#BBF7D0] dark:border-[#22C55E]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#15803D] dark:text-[#86EFAC] block">
                Status Antrean Saat Ini:
              </span>
              <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                24 Smartwatch tersinkron penuh. 0 antrean tertunda.
              </span>
            </div>

            <button
              onClick={handleRunSync}
              disabled={isSimulatingSync}
              className="btn-primary bg-[#22C55E] hover:bg-[#16A34A] text-xs py-2 px-3 shadow-sm self-start sm:self-auto"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulatingSync ? "animate-spin" : ""}`} />
              <span>
                {isSimulatingSync ? "Menyinkronkan Antrean..." : "Simulasikan Sinkronisasi Cloud"}
              </span>
            </button>
          </div>

          {syncedSuccess && (
            <div className="p-3 rounded-xl bg-[#DCFCE7] dark:bg-[#14532D] text-[#15803D] dark:text-[#86EFAC] text-xs font-bold flex items-center gap-2 animate-bounce">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sinkronisasi sukses! Seluruh paket telemetry dan kuis terbaru tersimpan.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
