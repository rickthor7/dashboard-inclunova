# PRD --- INCLUNOVA Dashboard

## 1. Ringkasan Produk

INCLUNOVA Dashboard adalah pusat monitoring dan pengelolaan pembelajaran
dalam ekosistem INCLUNOVA. Dashboard memiliki dua sisi utama:

1.  **Teacher Dashboard** --- membantu guru membuat, mengelola,
    memantau, dan menyesuaikan pembelajaran.
2.  **Parent Dashboard** --- membantu orang tua melihat perkembangan
    belajar dan mendampingi siswa di luar sekolah.

Dashboard terhubung dengan Smart Board, Smart Lab, Smartwatch siswa, AI
Adaptive Learning, dan platform data INCLUNOVA.

Smartwatch tetap menjadi antarmuka personal utama bagi siswa, sedangkan
dashboard menjadi pusat pengelolaan dan monitoring bagi guru serta orang
tua.

------------------------------------------------------------------------

## 2. Tujuan

-   Menyatukan data pembelajaran siswa dalam satu ekosistem.
-   Membantu guru membuat dan mengirim materi serta kuis.
-   Menampilkan perkembangan belajar siswa secara mudah dipahami.
-   Menggunakan AI untuk memberikan rekomendasi pembelajaran adaptif.
-   Membantu orang tua memahami perkembangan siswa.
-   Mendukung komunikasi antara aktivitas siswa di sekolah dan
    pembelajaran di rumah.
-   Menyediakan data yang dapat digunakan untuk menyesuaikan tingkat
    kesulitan, materi, dan metode penyampaian.

------------------------------------------------------------------------

## 3. Target Pengguna

### Guru

Kebutuhan utama: - Membuat materi. - Membuat kuis/game interaktif. -
Mengirim materi langsung ke smartwatch. - Memantau kelas. - Melihat
hasil kuis. - Melihat perkembangan individual. - Melihat rekomendasi
AI. - Mengatur Smart Board dan aktivitas Smart Lab.

### Orang Tua

Kebutuhan utama: - Melihat perkembangan belajar anak. - Melihat
aktivitas dan durasi belajar. - Melihat tugas/materi. - Mendapatkan
insight perkembangan. - Mendampingi pembelajaran di rumah. - Melihat
status lokasi siswa sesuai izin dan kebijakan sekolah/keluarga.

------------------------------------------------------------------------

## 4. Struktur Dashboard

### Teacher Dashboard

#### A. Overview

Menampilkan: - Jumlah siswa aktif. - Aktivitas pembelajaran hari ini. -
Rata-rata progres kelas. - Kuis yang sedang berjalan. - Notifikasi
penting. - AI insight.

#### B. Class Monitoring

-   Daftar kelas.
-   Daftar siswa.
-   Status belajar.
-   Progress individual.
-   Aktivitas terbaru.
-   Durasi belajar.

#### C. Material

Guru dapat: - Membuat materi. - Upload video/audio. - Membuat materi
teks. - Membuat materi interaktif. - Mengatur kategori. - Menentukan
target siswa. - Mengirim materi ke smartwatch.

#### D. Quiz & Interactive Activity

-   Multiple choice.
-   Kuis adaptif.
-   Game pembelajaran.
-   Penjadwalan kuis.
-   Pengiriman langsung ke smartwatch.
-   Hasil dan analitik.

#### E. Smart Board

-   Mengontrol aktivitas Smart Board.
-   Menampilkan materi.
-   Menjalankan game interaktif.
-   Sinkronisasi dengan smartwatch.
-   Mengirim kuis/material ke siswa.

#### F. Smart Lab

-   Mengakses aktivitas praktikum digital.
-   Menjalankan simulasi.
-   IoT learning simulation.
-   AR learning activity.
-   Monitoring aktivitas siswa.

#### G. AI Adaptive Learning

AI membaca: - Hasil kuis. - Durasi belajar. - Aktivitas siswa. -
Interaksi dengan materi. - Kebutuhan aksesibilitas. - Data pembelajaran
dari smartwatch.

Output: - Rekomendasi materi. - Tingkat kesulitan. - Metode
penyampaian. - Materi penguatan. - Siswa yang membutuhkan perhatian
lebih lanjut.

#### H. Student Analytics

Per siswa: - Progress. - Nilai. - Aktivitas. - Durasi. - Materi yang
selesai. - Pola interaksi. - Rekomendasi AI.

------------------------------------------------------------------------

### Parent Dashboard

#### A. Home

Menampilkan ringkasan: - Progress belajar. - Aktivitas hari ini. -
Materi/tugas. - Durasi belajar. - Insight AI.

#### B. Child Progress

-   Progress per mata pelajaran.
-   Riwayat nilai.
-   Materi yang sudah selesai.
-   Materi yang perlu diulang.
-   Perkembangan dari waktu ke waktu.

#### C. Activity

-   Aktivitas belajar.
-   Durasi penggunaan smartwatch.
-   Materi yang diakses.
-   Kuis yang dikerjakan.

#### D. Tasks & Materials

-   Tugas dari guru.
-   Materi yang perlu dipelajari.
-   Status penyelesaian.
-   Pengingat.

#### E. Monitoring

-   Status perangkat.
-   Informasi lokasi sesuai izin.
-   Aktivitas terbaru.

#### F. AI Insight

Bahasa dibuat sederhana dan ramah orang tua: - "Hari ini kamu
menyelesaikan 3 materi." - "Materi pecahan masih perlu latihan." -
"Ananda lebih aktif belajar pada sore hari."

------------------------------------------------------------------------

## 5. User Stories

### Guru

-   Sebagai guru, saya ingin membuat materi agar dapat dikirim kepada
    siswa.
-   Sebagai guru, saya ingin membuat kuis interaktif agar siswa dapat
    mengerjakannya melalui smartwatch.
-   Sebagai guru, saya ingin melihat perkembangan setiap siswa.
-   Sebagai guru, saya ingin menerima rekomendasi AI untuk menyesuaikan
    pembelajaran.
-   Sebagai guru, saya ingin menggunakan Smart Board dan Smart Lab dari
    satu sistem.

### Orang Tua

-   Sebagai orang tua, saya ingin melihat perkembangan anak tanpa harus
    menunggu laporan manual.
-   Sebagai orang tua, saya ingin mengetahui materi yang sedang
    dipelajari.
-   Sebagai orang tua, saya ingin mengetahui aktivitas belajar anak.
-   Sebagai orang tua, saya ingin mendapatkan insight yang mudah
    dipahami.

------------------------------------------------------------------------

## 6. Core Learning Loop

``` text
GURU
  ↓
Buat Materi / Kuis / Aktivitas
  ↓
INCLUNOVA PLATFORM
  ↓
AI Personalization
  ↓
SMARTWATCH SISWA
  ↓
Belajar + Interaksi + Kuis
  ↓
Data Pembelajaran
  ↓
AI Analytics
  ↓
Teacher Dashboard + Parent Dashboard
  ↓
Learning Recommendation
  ↓
Guru Menyesuaikan Pembelajaran
  ↓
Materi Baru
  ↓
SMARTWATCH SISWA
```

------------------------------------------------------------------------

## 7. Functional Requirements

  ID      Requirement                      Priority
  ------- -------------------------------- ----------
  FR-01   Login guru                       Must
  FR-02   Login orang tua                  Must
  FR-03   Teacher dashboard                Must
  FR-04   Parent dashboard                 Must
  FR-05   Student monitoring               Must
  FR-06   Material management              Must
  FR-07   Quiz management                  Must
  FR-08   Send material to smartwatch      Must
  FR-09   Send quiz to smartwatch          Must
  FR-10   AI learning recommendation       Must
  FR-11   Learning analytics               Must
  FR-12   Smart Board integration          Should
  FR-13   Smart Lab integration            Should
  FR-14   Parent learning insight          Must
  FR-15   Offline synchronization status   Should
  FR-16   Notification center              Should

------------------------------------------------------------------------

## 8. Non-Functional Requirements

-   Responsive.
-   Mudah dipahami guru dan orang tua.
-   Accessible.
-   Visual hierarchy jelas.
-   Loading state jelas.
-   Empty state informatif.
-   Error state ramah pengguna.
-   Data siswa harus menggunakan role-based access.
-   Informasi sensitif hanya ditampilkan kepada pihak yang memiliki
    izin.
-   Dashboard harus tetap nyaman digunakan pada laptop/tablet.

------------------------------------------------------------------------

## 9. MVP

### Teacher

-   Overview.
-   Class monitoring.
-   Material.
-   Quiz.
-   Student analytics.
-   AI recommendation.

### Parent

-   Overview.
-   Child progress.
-   Activity.
-   Tasks/materials.
-   AI insight.

Integrasi Smart Board, Smart Lab, dan fitur lanjutan dapat dibuat
sebagai modul tahap berikutnya.

------------------------------------------------------------------------

## 10. Success Metrics

-   Guru dapat membuat dan mengirim materi tanpa bantuan teknis.
-   Guru dapat memahami kondisi kelas dari overview.
-   Orang tua dapat memahami perkembangan anak dalam beberapa detik.
-   Materi dan kuis berhasil tersinkronisasi ke smartwatch.
-   AI menghasilkan rekomendasi yang dapat ditindaklanjuti guru.
-   Data pembelajaran dapat membentuk siklus adaptive learning.
