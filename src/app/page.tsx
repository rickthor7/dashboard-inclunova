"use client";

import React, { useState, useEffect } from "react";
import { UserRole, Student, Material, Quiz, AIRecommendation, NotificationItem } from "@/types";
import {
  mockStudents,
  mockMaterials,
  mockQuizzes,
  mockAIRecommendations,
  mockNotifications,
  mockActivityHistory
} from "@/data/mockData";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { TeacherOverview } from "@/components/teacher/TeacherOverview";
import { ClassMonitoring } from "@/components/teacher/ClassMonitoring";
import { MaterialManager } from "@/components/teacher/MaterialManager";
import { QuizManager } from "@/components/teacher/QuizManager";
import { SmartBoardView } from "@/components/teacher/SmartBoardView";
import { SmartLabView } from "@/components/teacher/SmartLabView";
import { AIRecommendationView } from "@/components/teacher/AIRecommendationView";
import { StudentAnalyticsView } from "@/components/teacher/StudentAnalyticsView";
import { ParentOverview } from "@/components/parent/ParentOverview";
import { ParentProgress } from "@/components/parent/ParentProgress";
import { ParentActivity } from "@/components/parent/ParentActivity";
import { ParentTasks } from "@/components/parent/ParentTasks";
import { ParentMonitoring } from "@/components/parent/ParentMonitoring";
import { ParentMobileNav } from "@/components/parent/ParentMobileNav";
import { SmartwatchSimulator } from "@/components/simulator/SmartwatchSimulator";
import { StudentDetailModal } from "@/components/modals/StudentDetailModal";
import { CreateMaterialModal } from "@/components/modals/CreateMaterialModal";
import { CreateQuizModal } from "@/components/modals/CreateQuizModal";
import { NotificationDrawer } from "@/components/modals/NotificationDrawer";
import { SyncInfoModal } from "@/components/modals/SyncInfoModal";
import { Watch, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Home() {
  const [currentRole, setCurrentRole] = useState<UserRole>("teacher");
  const [activeTeacherTab, setActiveTeacherTab] = useState("overview");
  const [activeParentTab, setActiveParentTab] = useState("home");

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("inclunova_theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("inclunova_theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("inclunova_theme", "light");
      }
      return next;
    });
  };

  // Dynamic Data States
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [materials, setMaterials] = useState<Material[]>(mockMaterials);
  const [quizzes, setQuizzes] = useState<Quiz[]>(mockQuizzes);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>(mockAIRecommendations);
  const [notifications, setNotifications] = useState<NotificationItem[]>(mockNotifications);

  // Modals & Drawers
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isCreateMaterialOpen, setIsCreateMaterialOpen] = useState(false);
  const [isCreateQuizOpen, setIsCreateQuizOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSyncInfoOpen, setIsSyncInfoOpen] = useState(false);

  // Smartwatch Simulator
  const [isWatchOpen, setIsWatchOpen] = useState(false);
  const [watchNotificationMessage, setWatchNotificationMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Trigger push to smartwatch
  const handlePushToWatch = (title: string, type: "materi" | "kuis" | "cheer" | "ai") => {
    setIsWatchOpen(true);
    setWatchNotificationMessage(title);

    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: `Dikirim ke Smartwatch Siswa`,
      message: `${title} telah terkirim via LoRa/Cloud Gateway.`,
      timeAgo: "Baru saja",
      type: "sync",
      isRead: false,
      targetRole: "all"
    };
    setNotifications((prev) => [newNotif, ...prev]);

    showToast(`Berhasil dikirim ke Smartwatch Siswa!`);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.9, x: 0.9 }
    });
  };

  const handleSendMaterialToWatch = (mat: Material) => {
    handlePushToWatch(`Modul baru: "${mat.title}"`, "materi");
  };

  const handleSendQuizToWatch = (qz: Quiz) => {
    handlePushToWatch(`Tantangan Kuis: "${qz.title}"`, "kuis");
  };

  const handleSendHapticBuzz = (student: Student) => {
    handlePushToWatch(`Ketukan Haptik Semangat untuk ${student.nickname}`, "cheer");
  };

  const handleSendCheerToAll = () => {
    handlePushToWatch(`Semangat Haptik Terkirim ke 24 Smartwatch Kelas 4A!`, "cheer");
  };

  const handleApplyRecommendation = (rec: AIRecommendation) => {
    handlePushToWatch(`Rekomendasi AI: "${rec.recommendedMaterialTitle}" untuk ${rec.studentName}`, "ai");
  };

  const handleCreateMaterial = (newMat: Material) => {
    setMaterials((prev) => [newMat, ...prev]);
    showToast(`Materi "${newMat.title}" berhasil dibuat!`);
    if (newMat.syncStatus === "tersinkron") {
      handlePushToWatch(`Materi baru: "${newMat.title}"`, "materi");
    }
  };

  const handleCreateQuiz = (newQz: Quiz) => {
    setQuizzes((prev) => [newQz, ...prev]);
    showToast(`Kuis "${newQz.title}" berhasil diterbitkan!`);
    handlePushToWatch(`Kuis baru: "${newQz.title}"`, "kuis");
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    showToast(`Semua notifikasi ditandai dibaca.`);
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const childAlya = students[0]; // Alya

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B0F19] text-[#172033] dark:text-[#F8FAFC] transition-colors">
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-[#1E293B] text-[#172033] dark:text-white px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold border border-[#E2E8F0] dark:border-white/10 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        currentRole={currentRole}
        onRoleChange={(role) => setCurrentRole(role)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onToggleWatchSimulator={() => setIsWatchOpen(!isWatchOpen)}
        onOpenSyncInfo={() => setIsSyncInfoOpen(true)}
        unreadNotifCount={unreadCount}
        isWatchOpen={isWatchOpen}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto pb-16 md:pb-6">
        {/* Sidebar */}
        <Sidebar
          currentRole={currentRole}
          activeTab={currentRole === "teacher" ? activeTeacherTab : activeParentTab}
          onTabChange={(tabId) => {
            if (currentRole === "teacher") {
              setActiveTeacherTab(tabId);
            } else {
              setActiveParentTab(tabId);
            }
          }}
          onOpenSyncInfo={() => setIsSyncInfoOpen(true)}
        />

        {/* Main Workspace Area */}
        <main className="flex-1 p-4 lg:p-8 min-w-0">
          {currentRole === "teacher" ? (
            /* TEACHER DASHBOARD VIEWS */
            <>
              {activeTeacherTab === "overview" && (
                <TeacherOverview
                  students={students}
                  onSelectStudent={(s) => setSelectedStudent(s)}
                  onOpenCreateMaterial={() => setIsCreateMaterialOpen(true)}
                  onOpenCreateQuiz={() => setIsCreateQuizOpen(true)}
                  onNavigateTab={(tab) => setActiveTeacherTab(tab)}
                  onSendCheerToAll={handleSendCheerToAll}
                />
              )}

              {activeTeacherTab === "classes" && (
                <ClassMonitoring
                  students={students}
                  onSelectStudent={(s) => setSelectedStudent(s)}
                  onSendHapticBuzz={handleSendHapticBuzz}
                />
              )}

              {activeTeacherTab === "materials" && (
                <MaterialManager
                  materials={materials}
                  onOpenCreateModal={() => setIsCreateMaterialOpen(true)}
                  onSendToWatch={handleSendMaterialToWatch}
                />
              )}

              {activeTeacherTab === "quiz" && (
                <QuizManager
                  quizzes={quizzes}
                  onOpenCreateQuizModal={() => setIsCreateQuizOpen(true)}
                  onSendQuizToWatch={handleSendQuizToWatch}
                />
              )}

              {activeTeacherTab === "smartboard" && (
                <SmartBoardView
                  onBroadcastToWatch={() =>
                    handlePushToWatch("Materi Smart Board diproyeksikan ke jam!", "materi")
                  }
                />
              )}

              {activeTeacherTab === "smartlab" && <SmartLabView />}

              {activeTeacherTab === "ai_adaptive" && (
                <AIRecommendationView
                  recommendations={recommendations}
                  onApplyRecommendation={handleApplyRecommendation}
                />
              )}

              {activeTeacherTab === "analytics" && (
                <StudentAnalyticsView
                  students={students}
                  onSelectStudent={(s) => setSelectedStudent(s)}
                />
              )}
            </>
          ) : (
            /* PARENT DASHBOARD VIEWS */
            <>
              {activeParentTab === "home" && (
                <ParentOverview
                  child={childAlya}
                  onNavigateTab={(tab) => setActiveParentTab(tab)}
                  onStartLearningTogether={() => {
                    handlePushToWatch("Sesi Latihan Belajar Bersama Bunda Dimulai!", "materi");
                    setActiveParentTab("tasks");
                  }}
                />
              )}

              {activeParentTab === "progress" && <ParentProgress child={childAlya} />}

              {activeParentTab === "activity" && (
                <ParentActivity child={childAlya} activities={mockActivityHistory} />
              )}

              {activeParentTab === "tasks" && <ParentTasks />}

              {activeParentTab === "monitoring" && <ParentMonitoring child={childAlya} />}
            </>
          )}
        </main>
      </div>

      {/* Floating Action Button for Watch Simulator (if closed) */}
      {!isWatchOpen && (
        <button
          onClick={() => setIsWatchOpen(true)}
          className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-white hover:bg-[#F8FAFC] text-[#172033] dark:bg-[#1E293B] dark:hover:bg-[#0F172A] dark:text-white shadow-xl border-2 border-[#5B5FEF] flex items-center gap-2.5 text-xs font-bold transition-all hover:scale-105"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B5FEF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5B5FEF]"></span>
          </span>
          <Watch className="w-4 h-4 text-[#38BDF8]" />
          <span>Buka Smartwatch Siswa</span>
        </button>
      )}

      {/* Interactive Wearable Smartwatch Simulator */}
      <SmartwatchSimulator
        isOpen={isWatchOpen}
        onClose={() => setIsWatchOpen(false)}
        activeStudent={selectedStudent || childAlya}
        incomingNotification={watchNotificationMessage}
      />

      {/* Mobile Parent Bottom Navigation */}
      {currentRole === "parent" && (
        <ParentMobileNav
          activeTab={activeParentTab}
          onTabChange={(tab) => setActiveParentTab(tab)}
        />
      )}

      {/* Modals */}
      <StudentDetailModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
        onSendRecommendationToWatch={(s) => {
          handlePushToWatch(`Rekomendasi Pembelajaran untuk ${s.nickname}`, "ai");
          setSelectedStudent(null);
        }}
      />

      <CreateMaterialModal
        isOpen={isCreateMaterialOpen}
        onClose={() => setIsCreateMaterialOpen(false)}
        onCreate={handleCreateMaterial}
      />

      <CreateQuizModal
        isOpen={isCreateQuizOpen}
        onClose={() => setIsCreateQuizOpen(false)}
        onCreate={handleCreateQuiz}
      />

      <NotificationDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllAsRead={handleMarkAllRead}
      />

      <SyncInfoModal isOpen={isSyncInfoOpen} onClose={() => setIsSyncInfoOpen(false)} />
    </div>
  );
}
