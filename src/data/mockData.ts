import {
  Student,
  Material,
  Quiz,
  AIRecommendation,
  NotificationItem,
  User,
  LearningActivityRecord
} from "@/types";

export const mockCurrentUserTeacher: User = {
  id: "teacher-1",
  name: "Bu Rina Kusumawati, M.Pd",
  role: "teacher",
  email: "rina.kusuma@inclunova.sch.id",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  title: "Guru Kelas 4A Inklusi",
  schoolName: "SD Inklusi Permata Hati"
};

export const mockCurrentUserParent: User = {
  id: "parent-1",
  name: "Bunda Erika (Ibunda Alya)",
  role: "parent",
  email: "erika.alya@gmail.com",
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
  title: "Wali Murid",
  schoolName: "SD Inklusi Permata Hati"
};

export const mockStudents: Student[] = [
  {
    id: "std-1",
    name: "Alya Khairunnisa",
    nickname: "Alya",
    avatar: "https://images.unsplash.com/photo-1595454223600-91fbdd94ee73?w=150&auto=format&fit=crop&q=80",
    classId: "cls-4a",
    className: "Kelas 4A Inklusi",
    progress: 90,
    averageScore: 92,
    studyDurationMinutes: 42,
    completedMaterialsCount: 8,
    status: "studying",
    accessibilityProfiles: ["audio", "visual"],
    specialNeedsDescription: "Sensori Visual dan Butuh Ritme Audio Terstruktur",
    smartwatch: {
      deviceId: "WATCH-ALYA-01",
      batteryLevel: 88,
      heartRateBpm: 78,
      stressLevel: "fokus",
      connectionStatus: "online",
      lastSyncText: "2 menit lalu",
      locationName: "Ruang Kelas 4A Inklusi (SDN Permata Hati)",
      isLocationPermissionGranted: true,
      latitude: -6.208763,
      longitude: 106.845599
    }
  },
  {
    id: "std-2",
    name: "Bima Satria Wijaya",
    nickname: "Bima",
    avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=150&auto=format&fit=crop&q=80",
    classId: "cls-4a",
    className: "Kelas 4A Inklusi",
    progress: 72,
    averageScore: 78,
    studyDurationMinutes: 35,
    completedMaterialsCount: 6,
    status: "online",
    accessibilityProfiles: ["haptic", "visual"],
    specialNeedsDescription: "Tunarungu Ringan / Penguatan Getaran Haptik",
    smartwatch: {
      deviceId: "WATCH-BIMA-02",
      batteryLevel: 74,
      heartRateBpm: 82,
      stressLevel: "tenang",
      connectionStatus: "online",
      lastSyncText: "Baru saja",
      locationName: "Taman Sensori Sekolah",
      isLocationPermissionGranted: true
    }
  },
  {
    id: "std-3",
    name: "Caca Melati",
    nickname: "Caca",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    classId: "cls-4a",
    className: "Kelas 4A Inklusi",
    progress: 96,
    averageScore: 98,
    studyDurationMinutes: 50,
    completedMaterialsCount: 11,
    status: "online",
    accessibilityProfiles: ["audio", "visual", "sign_language"],
    specialNeedsDescription: "Disleksia Ringan / Butuh Huruf Berwarna dan TTS",
    smartwatch: {
      deviceId: "WATCH-CACA-03",
      batteryLevel: 94,
      heartRateBpm: 75,
      stressLevel: "fokus",
      connectionStatus: "online",
      lastSyncText: "1 menit lalu",
      locationName: "Perpustakaan Ramah Anak",
      isLocationPermissionGranted: true
    }
  },
  {
    id: "std-4",
    name: "Dito Ardiansyah",
    nickname: "Dito",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    classId: "cls-4a",
    className: "Kelas 4A Inklusi",
    progress: 53,
    averageScore: 68,
    studyDurationMinutes: 20,
    completedMaterialsCount: 4,
    status: "needs_attention",
    accessibilityProfiles: ["haptic", "audio"],
    specialNeedsDescription: "ADHD / Memerlukan Interaksi Berganti dan Getaran Halus",
    smartwatch: {
      deviceId: "WATCH-DITO-04",
      batteryLevel: 45,
      heartRateBpm: 104,
      stressLevel: "perlu_istirahat",
      connectionStatus: "lora_mesh",
      lastSyncText: "5 menit lalu via LoRa",
      locationName: "Area Smart Lab Inklusif",
      isLocationPermissionGranted: true
    }
  },
  {
    id: "std-5",
    name: "Fajar Pratama",
    nickname: "Fajar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    classId: "cls-4a",
    className: "Kelas 4A Inklusi",
    progress: 84,
    averageScore: 85,
    studyDurationMinutes: 38,
    completedMaterialsCount: 7,
    status: "studying",
    accessibilityProfiles: ["visual", "audio"],
    specialNeedsDescription: "Autisme Spektrum Ringan / Rutinitas Visual Terstruktur",
    smartwatch: {
      deviceId: "WATCH-FAJAR-05",
      batteryLevel: 82,
      heartRateBpm: 76,
      stressLevel: "tenang",
      connectionStatus: "online",
      lastSyncText: "3 menit lalu",
      locationName: "Ruang Kelas 4A Inklusi",
      isLocationPermissionGranted: true
    }
  },
  {
    id: "std-6",
    name: "Hana Lestari",
    nickname: "Hana",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    classId: "cls-4a",
    className: "Kelas 4A Inklusi",
    progress: 65,
    averageScore: 71,
    studyDurationMinutes: 25,
    completedMaterialsCount: 5,
    status: "needs_attention",
    accessibilityProfiles: ["visual", "haptic"],
    specialNeedsDescription: "Kesulitan Pemahaman Konsep Abstrak Matematika",
    smartwatch: {
      deviceId: "WATCH-HANA-06",
      batteryLevel: 62,
      heartRateBpm: 92,
      stressLevel: "kelelahan",
      connectionStatus: "offline_synced",
      lastSyncText: "10 menit lalu (Local Cached)",
      locationName: "Sudut Baca Inklusif",
      isLocationPermissionGranted: true
    }
  }
];

export const mockMaterials: Material[] = [
  {
    id: "mat-1",
    title: "Pecahan Dasar dengan Pizza Ceria",
    subject: "Matematika",
    type: "interaktif",
    contentSummary: "Memahami 1/2, 1/4, dan 3/4 melalui simulasi memotong pizza bergambar dengan getaran haptik setiap potongannya.",
    targetClass: "Kelas 4A Inklusi",
    durationMinutes: 15,
    accessibilityModes: ["visual", "audio", "haptic"],
    syncStatus: "tersinkron",
    difficulty: "Mudah",
    createdDate: "06 Okt 2026",
    readsCount: 22
  },
  {
    id: "mat-2",
    title: "Petualangan Hewan Sahabat Rimba",
    subject: "Bahasa Indonesia",
    type: "cerita_bergambar",
    contentSummary: "Mendengarkan narasi audio terstruktur dengan teks berkontras tinggi dan ilustrasi ramah anak.",
    targetClass: "Kelas 4A Inklusi",
    durationMinutes: 20,
    accessibilityModes: ["audio", "visual", "sign_language"],
    syncStatus: "tersinkron",
    difficulty: "Mudah",
    createdDate: "05 Okt 2026",
    readsCount: 24
  },
  {
    id: "mat-3",
    title: "Mengenal Ekosistem dan Sensor Air",
    subject: "Sains Inklusif",
    type: "interaktif",
    contentSummary: "Praktikum dasar ekosistem Smart Lab. Siswa dapat memonitor kelembaban tanaman melalui sensor smartwatch.",
    targetClass: "Kelas 4A Inklusi",
    durationMinutes: 25,
    accessibilityModes: ["visual", "haptic"],
    syncStatus: "tersinkron",
    difficulty: "Sedang",
    createdDate: "04 Okt 2026",
    readsCount: 19
  },
  {
    id: "mat-4",
    title: "Ritme Senam dan Ketukan Sensori",
    subject: "Sensori & Motorik",
    type: "audio_video",
    contentSummary: "Latihan motorik halus dan regulasi emosi dengan ketukan denyut ritmis pada haptik smartwatch.",
    targetClass: "Kelas 4A Inklusi",
    durationMinutes: 10,
    accessibilityModes: ["audio", "haptic"],
    syncStatus: "menunggu_sync",
    difficulty: "Mudah",
    createdDate: "06 Okt 2026",
    readsCount: 8
  }
];

export const mockQuizzes: Quiz[] = [
  {
    id: "qz-1",
    title: "Tantangan Pecahan Ceria",
    subject: "Matematika",
    questionsCount: 3,
    targetClass: "Kelas 4A Inklusi",
    adaptiveMode: true,
    status: "aktif",
    averageClassScore: 88,
    completionRate: 75,
    syncedToSmartwatchCount: 24,
    totalTargetStudents: 24,
    questions: [
      {
        id: "q-101",
        questionText: "Jika satu pizza dibagi menjadi 2 potong sama besar, 1 potong bernilai?",
        audioPrompt: "Berapa nilai satu potong pizza dari dua bagian sama besar?",
        options: [
          { id: "opt-1", text: "1/2 (Setengah)", isCorrect: true },
          { id: "opt-2", text: "1/4 (Seperempat)", isCorrect: false },
          { id: "opt-3", text: "2/1 (Dua utuh)", isCorrect: false }
        ],
        explanation: "Satu dari dua bagian yang sama disebut setengah atau satu per dua (1/2).",
        hapticFeedbackPattern: "success_wave"
      },
      {
        id: "q-102",
        questionText: "Manakah pecahan yang menunjukkan 1/4 bagian?",
        audioPrompt: "Pilihlah yang menunjukkan satu per empat.",
        options: [
          { id: "opt-4", text: "1 dari 4 potong", isCorrect: true },
          { id: "opt-5", text: "3 dari 4 potong", isCorrect: false },
          { id: "opt-6", text: "2 dari 2 potong", isCorrect: false }
        ],
        explanation: "1 potong dari total 4 potongan sama besar bernilai 1/4.",
        hapticFeedbackPattern: "double_pulse"
      },
      {
        id: "q-103",
        questionText: "Kalian punya 4 apel. 2 apel dibagikan ke teman. Berapa bagian apel yang dibagikan?",
        audioPrompt: "Dua apel dari empat apel, bernilai berapa bagian?",
        options: [
          { id: "opt-7", text: "2/4 atau 1/2", isCorrect: true },
          { id: "opt-8", text: "1/3", isCorrect: false },
          { id: "opt-9", text: "4/2", isCorrect: false }
        ],
        explanation: "Dua dari empat bagian sama nilainya dengan setengah (1/2).",
        hapticFeedbackPattern: "success_wave"
      }
    ]
  },
  {
    id: "qz-2",
    title: "Tebak Bunyi dan Kata Sahabat Rimba",
    subject: "Bahasa Indonesia",
    questionsCount: 4,
    targetClass: "Kelas 4A Inklusi",
    adaptiveMode: false,
    status: "terjadwal",
    completionRate: 0,
    syncedToSmartwatchCount: 24,
    totalTargetStudents: 24,
    questions: []
  },
  {
    id: "qz-3",
    title: "Eksplorasi Smart Lab: Sensor Tanaman",
    subject: "Sains Inklusif",
    questionsCount: 3,
    targetClass: "Kelas 4A Inklusi",
    adaptiveMode: true,
    status: "selesai",
    averageClassScore: 94,
    completionRate: 100,
    syncedToSmartwatchCount: 24,
    totalTargetStudents: 24,
    questions: []
  }
];

export const mockAIRecommendations: AIRecommendation[] = [
  {
    id: "rec-1",
    studentId: "std-4",
    studentName: "Dito Ardiansyah",
    studentAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    recommendedMaterialTitle: "Pecahan Dasar dengan Simulasi Visual dan Haptik",
    currentDifficulty: "Sedang",
    recommendedDifficulty: "Mudah ke Sedang (Adaptif)",
    deliveryModes: ["haptic", "visual"],
    reason: "AI mendeteksi Dito sering ragu pada soal abstrak pecahan di kuis. Rekomendasi getaran ritmis dan balok warna-warni terbukti menaikkan fokus hingga 40%.",
    actionTaken: false,
    generatedAt: "10 menit lalu",
    confidenceScore: 94
  },
  {
    id: "rec-2",
    studentId: "std-6",
    studentName: "Hana Lestari",
    studentAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
    recommendedMaterialTitle: "Penguatan Konsep Pecahan 1/2 dan 1/4 Melalui Cerita",
    currentDifficulty: "Sedang",
    recommendedDifficulty: "Latihan Penguatan Mandiri",
    deliveryModes: ["audio", "visual"],
    reason: "Hana menyelesaikan soal dengan durasi lebih lama dari rata-rata. Pemberian narasi suara ramah dapat meningkatkan kenyamanan kognitif.",
    actionTaken: false,
    generatedAt: "25 menit lalu",
    confidenceScore: 89
  },
  {
    id: "rec-3",
    studentId: "std-1",
    studentName: "Alya Khairunnisa",
    studentAvatar: "https://images.unsplash.com/photo-1595454223600-91fbdd94ee73?w=150&auto=format&fit=crop&q=80",
    recommendedMaterialTitle: "Tantangan Tambahan: Menghitung Pecahan Senilai",
    currentDifficulty: "Mudah",
    recommendedDifficulty: "Menantang (Level Up)",
    deliveryModes: ["visual", "audio"],
    reason: "Alya menguasai materi pecahan dasar dalam waktu 8 menit dengan akurasi 100%. Siap untuk modul pengayaan berikutnya.",
    actionTaken: true,
    generatedAt: "1 jam lalu",
    confidenceScore: 98
  }
];

export const mockNotifications: NotificationItem[] = [
  {
    id: "notif-1",
    title: "Rekomendasi AI Baru",
    message: "3 siswa membutuhkan penyesuaian materi penguatan pada topik Pecahan Dasar.",
    timeAgo: "5 menit lalu",
    type: "ai_insight",
    isRead: false,
    targetRole: "teacher"
  },
  {
    id: "notif-2",
    title: "Sinkronisasi Smartwatch Berhasil",
    message: "Modul 'Pecahan Dasar Pizza Ceria' telah terkirim ke 24 smartwatch siswa.",
    timeAgo: "15 menit lalu",
    type: "sync",
    isRead: false,
    targetRole: "all"
  },
  {
    id: "notif-3",
    title: "Kuis Selesai Dikerjakan",
    message: "Alya telah menyelesaikan Kuis Tantangan Pecahan dengan skor 100.",
    timeAgo: "22 menit lalu",
    type: "quiz",
    isRead: true,
    targetRole: "all"
  },
  {
    id: "notif-4",
    title: "Peringatan Sensori (Dito)",
    message: "Denyut jantung Dito mencapai 104 bpm. Disarankan sesi jeda tenang 5 menit.",
    timeAgo: "30 menit lalu",
    type: "student_status",
    isRead: true,
    targetRole: "teacher"
  }
];

export const mockActivityHistory: LearningActivityRecord[] = [
  {
    id: "act-1",
    studentId: "std-1",
    materialTitle: "Pecahan Dasar Pizza Ceria",
    timestamp: "08:15 WIB",
    durationMinutes: 15,
    deviceType: "smartwatch",
    score: 100,
    interactionNotes: "Menjawab kuis via layar sentuh smartwatch dengan respon audio aktif."
  },
  {
    id: "act-2",
    studentId: "std-1",
    materialTitle: "Praktikum Smart Lab Tanaman",
    timestamp: "09:30 WIB",
    durationMinutes: 20,
    deviceType: "smart_lab",
    score: 95,
    interactionNotes: "Mengamati simulasi sensor kelembaban tanah dan getaran haptik."
  },
  {
    id: "act-3",
    studentId: "std-1",
    materialTitle: "Sesi Interaktif Smart Board",
    timestamp: "10:45 WIB",
    durationMinutes: 12,
    deviceType: "smart_board",
    score: 90,
    interactionNotes: "Menyambungkan jawaban smartwatch ke layar Smart Board di depan kelas."
  }
];

export const mockParentTasks = [
  {
    id: "task-1",
    title: "Latihan Pecahan Bergambar",
    subject: "Matematika Inklusif",
    deadline: "Hari ini, 18:00 WIB",
    progress: 70,
    description: "Dampingi Alya memotong 1 apel menjadi 4 bagian untuk melatih konsep pecahan di rumah.",
    status: "ongoing",
    assignedBy: "Bu Rina (Guru Kelas)"
  },
  {
    id: "task-2",
    title: "Mendengarkan Dongeng Rimba Ceria",
    subject: "Bahasa Indonesia",
    deadline: "Besok, 09:00 WIB",
    progress: 100,
    description: "Alya mendengarkan audio narasi 10 menit sebelum tidur.",
    status: "completed",
    assignedBy: "Bu Rina (Guru Kelas)"
  },
  {
    id: "task-3",
    title: "Catatan Refleksi Sensori Hari Ini",
    subject: "Sensori & Motorik",
    deadline: "Besok lusa",
    progress: 25,
    description: "Latihan pernapasan relaksasi 5 menit menggunakan getaran panduan smartwatch.",
    status: "ongoing",
    assignedBy: "Bu Rina (Guru Kelas)"
  }
];
