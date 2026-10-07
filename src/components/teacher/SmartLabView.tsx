"use client";

import React, { useState } from "react";
import {
  FlaskConical,
  Cpu,
  Thermometer,
  Droplets,
  Sun,
  Activity,
  Zap,
  CheckCircle2,
  RefreshCw,
  Sliders,
  Sparkles
} from "lucide-react";

export const SmartLabView: React.FC = () => {
  const [soilMoisture, setSoilMoisture] = useState(65);
  const [temperature, setTemperature] = useState(26);
  const [lightIntensity, setLightIntensity] = useState(80);
  const [isSimulationRunning, setIsSimulationRunning] = useState(true);
  const [arModeActive, setArModeActive] = useState(false);

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            Konsol Smart Lab Inklusif
          </h1>
          <p className="text-sm text-[#64748B] font-medium mt-1">
            Simulasi IoT Sensor Lingkungan & Praktikum Digital Berbantuan Haptik Smartwatch Siswa.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setArModeActive(!arModeActive)}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              arModeActive
                ? "bg-[#5B5FEF] text-white shadow-md shadow-[#5B5FEF]/30"
                : "bg-white text-[#5B5FEF] border border-[#C7D2FE] hover:bg-[#EEF0FF]"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{arModeActive ? "Mode AR Aktif (3D)" : "Aktifkan Simulasi AR"}</span>
          </button>
        </div>
      </div>

      {/* Main Simulation Sandbox & IoT Gauges */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sandbox Canvas Simulator */}
        <div className="lg:col-span-2 card-friendly-static p-6 sm:p-8 bg-gradient-to-br from-white to-[#F0FDF4] dark:from-[#1E293B] dark:to-[#0F172A] border border-[#BBF7D0] dark:border-[#334155] relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[#DCFCE7] dark:bg-[#14532D] text-[#15803D] dark:text-[#86EFAC]">
                <Cpu className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-[#172033] dark:text-[#F8FAFC]">
                  Simulasi IoT: Ekosistem Tanaman Pintar Kelas 4A
                </h3>
                <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Node Sensor LoRa ID: LAB-ENV-09</span>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#DCFCE7] dark:bg-[#14532D] text-[#15803D] dark:text-[#86EFAC] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping"></span>
              IoT Stream Aktif
            </span>
          </div>

          {/* Plant Graphic & Sensor Feedback */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] shadow-sm text-center my-6 relative overflow-hidden">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-[#DCFCE7] dark:bg-[#22C55E]/20 text-[#15803D] dark:text-[#4ADE80] flex items-center justify-center mb-4 animate-float-gentle">
              <FlaskConical className="w-10 h-10" />
            </div>

            <h4 className="text-xl font-extrabold text-[#172033] dark:text-[#F8FAFC]">
              {soilMoisture < 40
                ? "Tanah Terlalu Kering! Smartwatch Siswa Bergetar Cepat."
                : soilMoisture > 80
                ? "Kelembaban Sangat Tinggi."
                : "Kondisi Tanaman Optimal & Segar!"}
            </h4>

            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1 max-w-md mx-auto">
              Sensor mengirim getaran haptik ke smartwatch siswa. Siswa dapat meraba getaran untuk memahami kondisi kelembaban secara sensori.
            </p>

            {/* Simulated Live Values Ribbon */}
            <div className="grid grid-cols-3 gap-3 mt-6 max-w-lg mx-auto">
              <div className="p-3 rounded-2xl bg-[#E0F2FE] dark:bg-[#0C4A6E]/40 text-[#0284C7] dark:text-[#7DD3FC]">
                <Droplets className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-bold block">Kelembaban</span>
                <span className="text-lg font-extrabold">{soilMoisture}%</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FFE4E6] dark:bg-[#881337]/40 text-[#BE123C] dark:text-[#FDA4AF]">
                <Thermometer className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-bold block">Suhu Udara</span>
                <span className="text-lg font-extrabold">{temperature}°C</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#FEF9C3] dark:bg-[#713F12]/40 text-[#A16207] dark:text-[#FDE047]">
                <Sun className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-bold block">Intensitas Cahaya</span>
                <span className="text-lg font-extrabold">{lightIntensity}%</span>
              </div>
            </div>
          </div>

          {/* Sliders to control simulation parameters */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] space-y-4">
            <h5 className="text-xs font-extrabold uppercase text-[#64748B] dark:text-[#94A3B8] tracking-wider flex items-center gap-1.5">
              <Sliders className="w-4 h-4" />
              <span>Kontrol Parameter Praktikum Guru</span>
            </h5>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Kelembaban Tanah (Ubah untuk tes getaran siswa)</span>
                  <span className="text-[#5B5FEF]">{soilMoisture}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={soilMoisture}
                  onChange={(e) => setSoilMoisture(Number(e.target.value))}
                  className="w-full accent-[#5B5FEF] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Suhu Lingkungan Tanaman</span>
                  <span className="text-[#FB7185]">{temperature}°C</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="40"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full accent-[#FB7185] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Student Lab Participation Telemetry */}
        <div className="card-friendly-static p-6 bg-white border border-[#E2E8F0] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-[#172033]">Siswa di Stasiun Lab</h3>
            <span className="text-xs font-bold text-[#22C55E]">6 Terhubung</span>
          </div>

          <p className="text-xs text-[#64748B]">
            Data getaran sensor otomatis dialirkan ke jam tangan masing-masing peserta didik.
          </p>

          <div className="space-y-2.5">
            {[
              { name: "Alya", status: "Mengamati Suhu", haptic: "Getar Halus", score: "95%" },
              { name: "Bima", status: "Sensori Getaran", haptic: "Denyut Ritmis", score: "92%" },
              { name: "Caca", status: "Mencatat Data", haptic: "Aktif", score: "98%" },
              { name: "Dito", status: "Sentuh Sensor Air", haptic: "Aktif", score: "88%" },
              { name: "Fajar", status: "Observasi Visual", haptic: "Getar Halus", score: "90%" },
              { name: "Hana", status: "Mendengarkan TTS", haptic: "Audio Aktif", score: "85%" }
            ].map((st, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-[#172033] block">{st.name}</span>
                  <span className="text-[11px] text-[#64748B]">{st.status}</span>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EEF0FF] text-[#5B5FEF]">
                    {st.haptic}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
