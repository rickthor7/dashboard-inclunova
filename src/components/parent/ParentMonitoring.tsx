"use client";

import React, { useState } from "react";
import { Student } from "@/types";
import {
  ShieldCheck,
  MapPin,
  Wifi,
  Battery,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  Watch,
  ExternalLink,
  RefreshCw,
  Navigation,
  Radio,
  Clock,
  Layers
} from "lucide-react";

interface ParentMonitoringProps {
  child: Student;
}

export const ParentMonitoring: React.FC<ParentMonitoringProps> = ({ child }) => {
  const [showLocation, setShowLocation] = useState(true);
  const [zoomLevel, setZoomLevel] = useState<"close" | "medium" | "wide">("close");
  const [isPingingGps, setIsPingingGps] = useState(false);
  const [lastPingTime, setLastPingTime] = useState("Baru saja (08:45 WIB)");
  const [pingSuccessToast, setPingSuccessToast] = useState(false);

  // Real GPS Coordinates (Default: SDN Permata Hati / Central Education Area)
  const lat = child.smartwatch.latitude ?? -6.208763;
  const lon = child.smartwatch.longitude ?? 106.845599;

  // Calculate dynamic bounding box for OpenStreetMap based on zoom
  const getBbox = () => {
    switch (zoomLevel) {
      case "close":
        return `${lon - 0.0035},${lat - 0.0025},${lon + 0.0035},${lat + 0.0025}`;
      case "medium":
        return `${lon - 0.008},${lat - 0.006},${lon + 0.008},${lat + 0.006}`;
      case "wide":
        return `${lon - 0.02},${lat - 0.015},${lon + 0.02},${lat + 0.015}`;
    }
  };

  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
    getBbox()
  )}&layer=mapnik&marker=${lat}%2C${lon}`;

  const osmExternalUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`;

  const handlePingGps = () => {
    setIsPingingGps(true);
    setPingSuccessToast(false);
    setTimeout(() => {
      setIsPingingGps(false);
      setLastPingTime("Baru saja diperbarui");
      setPingSuccessToast(true);
      setTimeout(() => setPingSuccessToast(false), 3500);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Title & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] dark:text-[#F8FAFC] tracking-tight">
            Status Lokasi & Keamanan Smartwatch
          </h1>
          <p className="text-sm text-[#64748B] dark:text-[#94A3B8] font-medium mt-1">
            Pelacakan posisi real-time berbasis peta OpenStreetMap dan geofencing area sekolah.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePingGps}
            disabled={isPingingGps}
            className="btn-primary text-xs py-2 px-3.5 shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isPingingGps ? "animate-spin" : ""}`} />
            <span>{isPingingGps ? "Mencari Sinyal..." : "Ping GPS Jam"}</span>
          </button>
        </div>
      </div>

      {/* Ping Success Notification */}
      {pingSuccessToast && (
        <div className="p-3.5 rounded-2xl bg-[#DCFCE7] dark:bg-[#14532D] text-[#15803D] dark:text-[#86EFAC] border border-[#BBF7D0] dark:border-[#22C55E]/40 text-xs font-bold flex items-center justify-between animate-bounce">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Sinyal GPS Smartwatch {child.nickname} terverifikasi kuat (Akurasi: ±3 meter).</span>
          </div>
          <span className="text-[11px] opacity-80">{lastPingTime}</span>
        </div>
      )}

      {/* Privacy Notice Banner */}
      <div className="card-friendly-static p-4 sm:p-5 bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] flex items-start gap-3">
        <div className="p-2.5 rounded-2xl bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-[#5B5FEF] dark:text-[#A5B4FC] flex-shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs sm:text-sm font-extrabold text-[#172033] dark:text-[#F8FAFC]">
            Geofencing Aman & Kebijakan Privasi Siswa
          </h4>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            Data lokasi dikirim melalui modul LoRa Mesh ke gateway sekolah saat jam belajar aktif. Di luar radius sekolah atau saat di rumah, pelacakan otomatis non-aktif demi privasi keluarga.
          </p>
        </div>
      </div>

      {/* Real OpenStreetMap Section */}
      <div className="card-friendly-static bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] overflow-hidden shadow-sm">
        {/* Map Header Toolbar */}
        <div className="p-4 border-b border-[#E2E8F0] dark:border-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#E0F2FE] dark:bg-[#0C4A6E]/40 text-[#0284C7] dark:text-[#38BDF8]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-extrabold text-[#172033] dark:text-[#F8FAFC]">
                  Peta Real-Time OpenStreetMap
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#DCFCE7] dark:bg-[#14532D] text-[#15803D] dark:text-[#86EFAC] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping"></span>
                  Safe Zone Aktif
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                {child.smartwatch.locationName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center bg-[#F1F5F9] dark:bg-[#0F172A] p-1 rounded-xl border border-[#E2E8F0] dark:border-[#334155] text-[11px] font-bold">
              <button
                onClick={() => setZoomLevel("close")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  zoomLevel === "close"
                    ? "bg-white dark:bg-[#1E293B] text-[#5B5FEF] dark:text-[#A5B4FC] shadow-sm"
                    : "text-[#64748B] dark:text-[#94A3B8]"
                }`}
              >
                Kelas
              </button>
              <button
                onClick={() => setZoomLevel("medium")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  zoomLevel === "medium"
                    ? "bg-white dark:bg-[#1E293B] text-[#5B5FEF] dark:text-[#A5B4FC] shadow-sm"
                    : "text-[#64748B] dark:text-[#94A3B8]"
                }`}
              >
                Sekolah
              </button>
              <button
                onClick={() => setZoomLevel("wide")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  zoomLevel === "wide"
                    ? "bg-white dark:bg-[#1E293B] text-[#5B5FEF] dark:text-[#A5B4FC] shadow-sm"
                    : "text-[#64748B] dark:text-[#94A3B8]"
                }`}
              >
                Kawasan
              </button>
            </div>

            <button
              onClick={() => setShowLocation(!showLocation)}
              className="p-2 rounded-xl bg-[#F8FAFC] dark:bg-[#0F172A] hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[#64748B] dark:text-[#94A3B8] transition-colors"
              title={showLocation ? "Sembunyikan Peta" : "Tampilkan Peta"}
            >
              {showLocation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>

            <a
              href={osmExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#F8FAFC] dark:bg-[#0F172A] hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] text-[#64748B] dark:text-[#94A3B8] transition-colors flex items-center gap-1 text-xs font-bold"
              title="Buka di situs resmi OpenStreetMap"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Map View Canvas */}
        {showLocation ? (
          <div className="relative w-full h-[380px] sm:h-[440px] bg-[#E2E8F0] dark:bg-[#0F172A]">
            {/* Live OpenStreetMap Iframe */}
            <iframe
              title="OpenStreetMap Lokasi Smartwatch Anak"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={osmEmbedUrl}
              className="w-full h-full dark:contrast-125 dark:brightness-90"
            />

            {/* Smartwatch Pin Overlay HUD */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <div className="bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-md p-3 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-lg flex items-center gap-3">
                <div className="relative">
                  <img
                    src={child.avatar}
                    alt={child.name}
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-[#22C55E]"
                  />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]"></span>
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-extrabold text-[#172033] dark:text-[#F8FAFC]">
                      {child.nickname}&apos;s Watch
                    </span>
                    <span className="text-[10px] font-bold text-[#22C55E]">● LIVE</span>
                  </div>
                  <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8] block">
                    ID: {child.smartwatch.deviceId}
                  </span>
                </div>
              </div>
            </div>

            {/* Coordinates Badge on Bottom Right */}
            <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
              <div className="bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#E2E8F0] dark:border-[#334155] shadow-md text-[11px] font-semibold text-[#172033] dark:text-[#F8FAFC] flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-[#5B5FEF]" />
                <span>
                  {lat.toFixed(6)}°, {lon.toFixed(6)}°
                </span>
                <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] font-normal">
                  (±3m)
                </span>
              </div>
            </div>

            {/* Safe Zone Geofence Tag Bottom Left */}
            <div className="absolute bottom-4 left-4 z-10 pointer-events-none hidden sm:block">
              <div className="bg-[#DCFCE7]/95 dark:bg-[#14532D]/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#BBF7D0] dark:border-[#22C55E]/40 text-[11px] font-bold text-[#15803D] dark:text-[#86EFAC] flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Radius Geofence Sekolah: 200 Meter (Aman)</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center bg-[#F8FAFC] dark:bg-[#0F172A]">
            <Lock className="w-10 h-10 text-[#94A3B8] mx-auto mb-2" />
            <h4 className="text-sm font-bold text-[#172033] dark:text-[#F8FAFC]">
              Tampilan Peta Disembunyikan
            </h4>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1 max-w-sm mx-auto">
              Anda memilih menyembunyikan peta. Klik tombol mata di atas untuk kembali melihat posisi real-time anak.
            </p>
          </div>
        )}

        {/* Map Footer Bar: Telemetry Stats */}
        <div className="p-4 bg-[#F8FAFC] dark:bg-[#0F172A] border-t border-[#E2E8F0] dark:border-[#334155] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-2.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]">
            <span className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] block uppercase">
              Gateway Penghubung
            </span>
            <span className="font-extrabold text-[#172033] dark:text-[#F8FAFC] flex items-center gap-1 mt-0.5">
              <Radio className="w-3.5 h-3.5 text-[#5B5FEF]" />
              LoRa Gateway 4A
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]">
            <span className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] block uppercase">
              Kekuatan Sinyal
            </span>
            <span className="font-extrabold text-[#22C55E] flex items-center gap-1 mt-0.5">
              <Wifi className="w-3.5 h-3.5" />
              -68 dBm (Sangat Baik)
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]">
            <span className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] block uppercase">
              Baterai Jam Anak
            </span>
            <span className="font-extrabold text-[#172033] dark:text-[#F8FAFC] flex items-center gap-1 mt-0.5">
              <Battery className="w-3.5 h-3.5 text-[#22C55E]" />
              {child.smartwatch.batteryLevel}% (8 Jam Sisa)
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155]">
            <span className="text-[10px] font-bold text-[#64748B] dark:text-[#94A3B8] block uppercase">
              Pembaruan Terakhir
            </span>
            <span className="font-extrabold text-[#5B5FEF] dark:text-[#A5B4FC] flex items-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5" />
              {child.smartwatch.lastSyncText}
            </span>
          </div>
        </div>
      </div>

      {/* Movement Timeline & Security Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Movement History Today */}
        <div className="card-friendly-static p-6 bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[#334155]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#5B5FEF]" />
              <h3 className="text-sm font-extrabold text-[#172033] dark:text-[#F8FAFC]">
                Riwayat Pergerakan Area Sekolah Hari Ini
              </h3>
            </div>
            <span className="text-[11px] font-bold text-[#22C55E]">Terkonfirmasi Aman</span>
          </div>

          <div className="space-y-3 text-xs">
            {[
              {
                time: "08:45 WIB",
                location: "Ruang Kelas 4A Inklusi",
                note: "Posisi Terkini: Sesi belajar pecahan interaktif",
                status: "current"
              },
              {
                time: "08:20 WIB",
                location: "Laboratorium Sains & Smart Lab",
                note: "Praktikum simulasi kelembaban tanaman IoT",
                status: "past"
              },
              {
                time: "07:15 WIB",
                location: "Ruang Kelas 4A Inklusi",
                note: "Absensi harian otomatis terdeteksi gateway",
                status: "past"
              },
              {
                time: "07:02 WIB",
                location: "Gerbang Utama SDN Permata Hati",
                note: "Memasuki radius geofencing sekolah",
                status: "past"
              }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 relative">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      step.status === "current"
                        ? "bg-[#22C55E] ring-4 ring-[#22C55E]/20"
                        : "bg-[#CBD5E1] dark:bg-[#475569]"
                    }`}
                  ></div>
                  {idx < 3 && (
                    <div className="w-0.5 h-8 bg-[#E2E8F0] dark:bg-[#334155] my-1"></div>
                  )}
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-[#172033] dark:text-[#F8FAFC]">
                      {step.location}
                    </span>
                    <span className="text-[10px] font-semibold text-[#64748B] dark:text-[#94A3B8]">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] leading-tight">
                    {step.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Offline Cache & Safety Feature */}
        <div className="card-friendly-static p-6 bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[#334155]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#22C55E]" />
              <h3 className="text-sm font-extrabold text-[#172033] dark:text-[#F8FAFC]">
                Sinkronisasi Materi Offline saat Pulang
              </h3>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EEF0FF] dark:bg-[#5B5FEF]/20 text-[#5B5FEF] dark:text-[#A5B4FC]">
              FR-15
            </span>
          </div>

          <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            Sistem INCLUNOVA menjamin proses belajar tidak terputus kendati di rumah tidak memiliki akses internet stabil:
          </p>

          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155]">
              <span className="font-bold text-[#172033] dark:text-[#F8FAFC] block">
                1. Otomatis Cache Sebelum Keluar Gerbang
              </span>
              <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                Saat jam pulang sekolah (12:30 WIB), materi tugas rumah disimpan langsung ke memori internal smartwatch.
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155]">
              <span className="font-bold text-[#172033] dark:text-[#F8FAFC] block">
                2. Belajar Mandiri Bersama Orang Tua
              </span>
              <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                Ananda dapat mengerjakan kuis haptik dan mendengarkan audio TTS secara offline di rumah.
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155]">
              <span className="font-bold text-[#172033] dark:text-[#F8FAFC] block">
                3. Sinkronisasi Balik Esok Pagi
              </span>
              <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                Saat ananda kembali memasuki gerbang sekolah, data jawaban dan durasi belajar langsung tersinkron ke dashboard guru.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
