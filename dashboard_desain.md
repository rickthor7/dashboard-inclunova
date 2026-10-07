# DESAIN --- INCLUNOVA Dashboard

## 1. Design Direction

### Tema

**"Friendly Future Classroom"**

Dashboard harus terasa: - Ramah anak. - Cerah. - Interaktif. - Fun. -
Modern. - Tidak terasa seperti software administrasi sekolah yang kaku.

Walaupun digunakan guru dan orang tua, visualnya tetap mengambil bahasa
visual dunia belajar anak.

------------------------------------------------------------------------

## 2. Visual Personality

Gunakan kombinasi: - Rounded cards. - Soft shadows. - Bentuk blob
sederhana. - Icon yang playful. - Illustration kecil. - Progress ring. -
Sticker/badge. - Micro-animation. - Empty state dengan karakter maskot.

Hindari: - Dashboard corporate yang terlalu abu-abu. - Tabel penuh tanpa
visual. - Gradient berlebihan. - Neon yang menyakitkan mata. - Terlalu
banyak dekorasi sehingga data sulit dibaca.

------------------------------------------------------------------------

## 3. Color System

### Primary

`#5B5FEF` --- Intelligent Purple

### Secondary

`#22C55E` --- Learning Green

### Accent

`#FACC15` --- Happy Yellow

### Accent 2

`#38BDF8` --- Sky Blue

### Accent 3

`#FB7185` --- Friendly Pink

### Background

`#F8FAFC`

### Surface

`#FFFFFF`

### Text

`#172033`

### Muted

`#64748B`

Warna digunakan sebagai sistem, bukan semua komponen diberi warna
berbeda.

------------------------------------------------------------------------

## 4. Typography

Recommended: - **Plus Jakarta Sans** - **Nunito Sans**

Heading: - Bold / ExtraBold. - Rounded visual.

Body: - Medium / Regular.

Data: - SemiBold.

------------------------------------------------------------------------

## 5. Layout

### Desktop

``` text
┌─────────────────────────────────────────────────────────┐
│ Logo        Search              Notification   Profile │
├────────────┬────────────────────────────────────────────┤
│            │                                            │
│ Sidebar    │              Main Content                  │
│            │                                            │
│ Overview   │  Greeting                                  │
│ Classes    │  ┌──────┐ ┌──────┐ ┌──────┐              │
│ Materials  │  │Stat 1│ │Stat 2│ │Stat 3│              │
│ Quiz       │  └──────┘ └──────┘ └──────┘              │
│ Analytics  │                                            │
│ AI         │  Progress / Activity / Insight            │
│ Smart Lab  │                                            │
│ Settings   │                                            │
└────────────┴────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# TEACHER DASHBOARD

## 6. Teacher Home

Greeting:

> "Selamat pagi, Bu Rina! 🌈"

Subtext:

> "Yuk lihat perkembangan kelas hari ini."

### Hero Card

Menampilkan: - Class progress. - Active students. - Today's activity.

Contoh:

**78% Class Progress**

Dengan progress ring besar dan karakter maskot.

------------------------------------------------------------------------

## 7. Teacher KPI Cards

### Siswa Aktif

Icon: smiling student.

### Materi Aktif

Icon: book.

### Kuis Hari Ini

Icon: game controller.

### AI Insight

Icon: sparkle brain.

Card menggunakan rounded 20--24px.

------------------------------------------------------------------------

## 8. Class Progress

Gunakan: - Progress bars. - Mini avatar siswa. - Status chip.

Contoh:

``` text
Alya       █████████░ 90%
Bima       ███████░░░ 72%
Caca       ██████████ 96%
Dito       █████░░░░░ 53%
```

Klik siswa → Student Detail.

------------------------------------------------------------------------

## 9. AI Insight Card

Visual seperti kartu rekomendasi.

``` text
✨ AI INSIGHT

3 siswa membutuhkan materi
penguatan pada topik Pecahan.

[ Lihat Saran ]
```

AI tidak boleh menggunakan istilah teknis yang sulit pada interface
guru.

------------------------------------------------------------------------

## 10. Quick Action

Empat tombol:

-   -   Buat Materi
-   -   Buat Kuis
-   Smart Board
-   Smart Lab

Gunakan icon besar dan label pendek.

------------------------------------------------------------------------

## 11. Student Detail

Header: - Avatar. - Nama. - Kelas. - Learning status.

Cards: - Progress. - Score. - Learning duration. - Material
completion. - Quiz history.

### AI Recommendation

``` text
🎯 Rekomendasi Pembelajaran

Materi berikut disarankan:
"Pecahan Dasar"

Level: Easy → Medium

Metode:
🔊 Audio
👁 Visual
✋ Haptic

[ Kirim ke Smartwatch ]
```

------------------------------------------------------------------------

# PARENT DASHBOARD

## 12. Parent Home

Greeting:

> "Hai, Ayah/Bunda! 👋"

Subtext:

> "Yuk dampingi perjalanan belajar hari ini."

------------------------------------------------------------------------

## 13. Child Hero Card

Card besar dengan avatar anak.

``` text
┌─────────────────────────────────┐
│ 🌟 Hari ini                     │
│                                 │
│ Alya sudah belajar 42 menit     │
│                                 │
│ Progress        82%             │
│ ████████████░░                  │
│                                 │
│ 🎉 3 materi selesai             │
└─────────────────────────────────┘
```

------------------------------------------------------------------------

## 14. Parent Progress

Gunakan visual: - Progress ring. - Subject cards. - Weekly learning
chart. - Completed materials.

Jangan membuat orang tua harus membaca tabel akademik yang kompleks.

------------------------------------------------------------------------

## 15. Parent AI Insight

``` text
💡 Insight Hari Ini

Alya sudah memahami materi
penjumlahan dengan baik.

Coba lanjutkan latihan
pengurangan selama 10 menit.

[ Mulai Belajar ]
```

------------------------------------------------------------------------

## 16. Tasks

Card tugas:

``` text
📚 Latihan Pecahan
Deadline: Hari ini

███████░░░ 70%

[ Lanjutkan ]
```

------------------------------------------------------------------------

## 17. Monitoring

Monitoring harus dibuat sederhana dan tidak terasa seperti surveillance.

``` text
📍 Status Anak

Terakhir tersinkron:
2 menit lalu

Status perangkat:
● Online

Lokasi:
[ Tampilkan jika diizinkan ]
```

------------------------------------------------------------------------

## 18. Mobile Parent Experience

Bottom navigation:

``` text
⌂ Home
📈 Progress
📚 Tugas
💡 Insight
👤 Profil
```

------------------------------------------------------------------------

## 19. Components

### Button

-   Rounded 14--16px.
-   Height 44--48px.
-   Clear label.
-   Icon optional.

### Card

-   Radius 20--24px.
-   Soft shadow.
-   20--24px padding.

### Badge

-   Rounded pill.
-   Short text.

### Avatar

-   Circular.
-   Optional colorful ring.

### Progress

-   Thick enough to be visible.
-   Use color semantics consistently.

------------------------------------------------------------------------

## 20. Interaction

Micro-interactions: - Card hover. - Button press animation. - Progress
animation. - Notification bounce. - Success confetti setelah kuis
selesai. - AI insight muncul dengan subtle sparkle.

Jangan menggunakan animasi pada semua komponen.

------------------------------------------------------------------------

## 21. Accessibility

-   Kontras teks harus tetap terbaca.
-   Jangan menggunakan warna sebagai satu-satunya penanda status.
-   Semua icon penting memiliki label.
-   Font minimum nyaman untuk dashboard.
-   Keyboard navigation untuk desktop.
-   Screen reader friendly.
-   Status memiliki text + icon.

------------------------------------------------------------------------

## 22. Empty State

Contoh Teacher:

> 🌱 Belum ada materi hari ini.
>
> Yuk buat pembelajaran pertama untuk kelasmu!

Button: **+ Buat Materi**

Parent:

> 🐣 Belum ada aktivitas baru.
>
> Aktivitas belajar anak akan muncul di sini.

------------------------------------------------------------------------

## 23. Loading State

Gunakan skeleton: - Card skeleton. - Chart skeleton. - List skeleton.

Hindari loading spinner besar untuk seluruh halaman.

------------------------------------------------------------------------

## 24. Error State

Contoh:

> Oops! Data belum tersambung.
>
> Coba periksa koneksi dan sinkronkan kembali.

Button: **Coba Lagi**

------------------------------------------------------------------------

## 25. Overall Experience

Dashboard harus terasa seperti:

**Learning App + Friendly Analytics + Smart Assistant**

bukan:

**Sistem Administrasi Sekolah.**
