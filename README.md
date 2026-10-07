# INCLUNOVA — Platform Pembelajaran Adaptif & Inklusif 🌈

Pusat monitoring dan pengelolaan pembelajaran dalam ekosistem **INCLUNOVA** yang menghubungkan guru, orang tua, siswa, Smartwatch anak, Smart Board, Smart Lab, dan AI Adaptive Learning Engine.

Dibangun dengan prinsip arsitektur dan panduan desain **"Friendly Future Classroom"** berbasis **Next.js (App Router)** dan siap di-deploy langsung ke **Vercel**.

---

## 🌟 Fitur Utama

### 👩‍🏫 1. Teacher Dashboard (Pusat Kendali Guru)
- **Overview & Hero Card**: Rangkuman progres kelas (78%), siswa aktif, aktivitas interaktif hari ini, KPI cards, dan maskot Incli AI.
- **Monitoring Kelas Real-Time**: Status telemetri baterai smartwatch, detak jantung sensori, tingkat stres (tenang, fokus, kelelahan), lokasi aman kelas, dan fitur **Kirim Getaran/Haptic Cheer** langsung ke pergelangan tangan siswa.
- **Manajemen Materi Multimodal**: Pembuatan modul dengan dukungan aksesibilitas (*Audio TTS, Visual Kontras, Getaran Haptik, Bahasa Isyarat*) serta tombol **Kirim ke Smartwatch Siswa**.
- **Kuis & Game Pembelajaran**: Simulator kuis langsung berkecepatan tinggi dengan tracking respon smartwatch dan selebrasi confetti.
- **Konsol Smart Board**: Proyeksi interaktif materi kelas dan pemancaran layar ke jam tangan siswa secara serentak.
- **Konsol Smart Lab**: Simulasi praktikum sensor IoT (kelembaban tanah, suhu lingkungan, intensitas cahaya) serta integrasi AR 3D.
- **AI Adaptive Learning Engine**: Rekomendasi materi personal terjelaskan (*explainable AI*) berdasarkan performa sensori & kognitif siswa.
- **Analitik Siswa**: Grafik preferensi multimodal dan capaian individual.

### 👨‍👩‍👧 2. Parent Dashboard (Pendampingan Keluarga)
- **Beranda Ramah Anak**: Hero card ananda (Alya sudah belajar 42 menit, progres 82%, 3 materi tuntas).
- **Insight AI Berbahasa Santai**: Rekomendasi pendampingan ramah tanpa istilah teknis yang membebani.
- **Rapor Progres Ceria**: Kartu mata pelajaran, bintang pencapaian, dan saran latihan ringan di rumah.
- **Aktivitas & Riwayat Smartwatch**: Garis waktu pembelajaran jam tangan harian.
- **Tugas & Kolaborasi Rumah**: Panduan orang tua mendampingi anak dengan checklist interaktif.
- **Keamanan & Privasi Lokasi**: Transparansi status smartwatch dan kontrol privasi keluarga.
- **Mobile Bottom Navigation**: Tampilan navigasi responsif khusus ponsel orang tua.

### ⌚ 3. Simulator Interaktif Smartwatch Siswa
- Preview jam tangan pintar wearable wearable yang dapat dibuka kapan saja melalui header atau floating button.
- Mendukung simulasi pengerjaan kuis di layar jam, tes gelombang getaran haptik, pemutaran suara narasi TTS, dan status memori sinkronisasi offline.

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Install Dependencies** (jika belum):
   ```bash
   npm install
   ```

2. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

3. **Uji Build Produksi**:
   ```bash
   npm run build
   ```

---

## ☁️ Cara Hosting ke Vercel

Aplikasi ini sudah dioptimalkan dan siap 100% untuk di-hosting ke Vercel tanpa konfigurasi tambahan:

### Opsi A: Melalui Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opsi B: Melalui Dashboard Vercel (GitHub/GitLab)
1. Push repository ini ke akun GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi INCLUNOVA dashboard Next.js"
   git branch -M main
   git remote add origin https://github.com/<username>/inclunova.git
   git push -u origin main
   ```
2. Buka [https://vercel.com/new](https://vercel.com/new).
3. Import repository `inclunova`.
4. Framework Preset akan otomatis terdeteksi sebagai **Next.js**.
5. Klik **Deploy**!
