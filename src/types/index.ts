export type UserRole = "teacher" | "parent";

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar: string;
  title?: string;
  schoolName?: string;
}

export type AccessibilityMode = "audio" | "visual" | "haptic" | "sign_language";

export interface Student {
  id: string;
  name: string;
  nickname: string;
  avatar: string;
  classId: string;
  className: string;
  progress: number; // 0 - 100
  averageScore: number;
  studyDurationMinutes: number;
  completedMaterialsCount: number;
  status: "online" | "studying" | "needs_attention" | "offline";
  accessibilityProfiles: AccessibilityMode[];
  specialNeedsDescription: string;
  smartwatch: {
    deviceId: string;
    batteryLevel: number;
    heartRateBpm: number;
    stressLevel: "tenang" | "fokus" | "kelelahan" | "perlu_istirahat";
    connectionStatus: "online" | "lora_mesh" | "offline_synced";
    lastSyncText: string;
    locationName: string;
    isLocationPermissionGranted: boolean;
    latitude?: number;
    longitude?: number;
  };
}

export interface Material {
  id: string;
  title: string;
  subject: "Matematika" | "Bahasa Indonesia" | "Sains Inklusif" | "Sensori & Motorik";
  type: "teks" | "audio_video" | "interaktif" | "cerita_bergambar";
  contentSummary: string;
  targetClass: string;
  targetStudents?: string[];
  durationMinutes: number;
  accessibilityModes: AccessibilityMode[];
  syncStatus: "tersinkron" | "menunggu_sync" | "draft";
  difficulty: "Mudah" | "Sedang" | "Menantang";
  createdDate: string;
  readsCount: number;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  audioPrompt?: string;
  options: {
    id: string;
    text: string;
    icon?: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  hapticFeedbackPattern: "short_buzz" | "double_pulse" | "success_wave";
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  questionsCount: number;
  questions: QuizQuestion[];
  targetClass: string;
  adaptiveMode: boolean;
  status: "aktif" | "terjadwal" | "selesai";
  averageClassScore?: number;
  completionRate: number; // percentage
  syncedToSmartwatchCount: number;
  totalTargetStudents: number;
}

export interface AIRecommendation {
  id: string;
  studentId: string;
  studentName: string;
  studentAvatar: string;
  recommendedMaterialTitle: string;
  currentDifficulty: string;
  recommendedDifficulty: string;
  deliveryModes: AccessibilityMode[];
  reason: string;
  actionTaken: boolean;
  generatedAt: string;
  confidenceScore: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timeAgo: string;
  type: "ai_insight" | "quiz" | "sync" | "student_status";
  isRead: boolean;
  targetRole: UserRole | "all";
}

export interface LearningActivityRecord {
  id: string;
  studentId: string;
  materialTitle: string;
  timestamp: string;
  durationMinutes: number;
  deviceType: "smartwatch" | "smart_board" | "smart_lab";
  score?: number;
  interactionNotes: string;
}
