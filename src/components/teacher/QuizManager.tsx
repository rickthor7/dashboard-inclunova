"use client";

import React, { useState } from "react";
import { Quiz, QuizQuestion } from "@/types";
import confetti from "canvas-confetti";
import {
  Gamepad2,
  PlusCircle,
  Watch,
  Trophy,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
  Users,
  Flame,
  Volume2
} from "lucide-react";

interface QuizManagerProps {
  quizzes: Quiz[];
  onOpenCreateQuizModal: () => void;
  onSendQuizToWatch: (quiz: Quiz) => void;
}

export const QuizManager: React.FC<QuizManagerProps> = ({
  quizzes,
  onOpenCreateQuizModal,
  onSendQuizToWatch
}) => {
  const [activeQuizSession, setActiveQuizSession] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const startLiveSession = (quiz: Quiz) => {
    setActiveQuizSession(quiz);
    setCurrentQuestionIndex(0);
    setStudentAnswers({});
    setIsLiveActive(true);
    setSessionCompleted(false);

    // Simulate immediate responses coming from students via smartwatch
    setTimeout(() => {
      setStudentAnswers({
        Alya: "opt-1",
        Caca: "opt-1",
        Fajar: "opt-1"
      });
    }, 1200);

    setTimeout(() => {
      setStudentAnswers((prev) => ({
        ...prev,
        Bima: "opt-1",
        Dito: "opt-2",
        Hana: "opt-1"
      }));
    }, 2400);
  };

  const handleNextQuestion = () => {
    if (!activeQuizSession) return;
    if (currentQuestionIndex < activeQuizSession.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setStudentAnswers({});
      setTimeout(() => {
        setStudentAnswers({
          Alya: "opt-4",
          Bima: "opt-4",
          Caca: "opt-4",
          Dito: "opt-4",
          Fajar: "opt-4",
          Hana: "opt-4"
        });
      }, 1500);
    } else {
      setSessionCompleted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetSession = () => {
    setActiveQuizSession(null);
    setIsLiveActive(false);
    setSessionCompleted(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
            Kuis & Aktivitas Interaktif
          </h1>
          <p className="text-sm text-[#64748B] font-medium mt-1">
            Jalankan kuis adaptif dan pantau jawaban langsung dari smartwatch siswa di kelas.
          </p>
        </div>

        <button onClick={onOpenCreateQuizModal} className="btn-primary">
          <PlusCircle className="w-5 h-5" />
          <span>+ Buat Kuis Baru</span>
        </button>
      </div>

      {/* Live Interactive Session View if Active */}
      {isLiveActive && activeQuizSession && (
        <div className="card-friendly-static p-6 sm:p-8 bg-gradient-to-br from-[#5B5FEF]/5 via-white to-[#EEF0FF] dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#0F172A] border-2 border-[#5B5FEF]/30 dark:border-[#5B5FEF]/40 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0] dark:border-[#334155]">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-2xl bg-[#5B5FEF] text-white">
                <Flame className="w-5 h-5 animate-pulse" />
              </span>
              <div>
                <span className="text-[11px] font-extrabold uppercase text-[#5B5FEF] dark:text-[#A5B4FC] tracking-wider">
                  Sesi Kuis Langsung Terhubung ke Smartwatch
                </span>
                <h2 className="text-xl font-extrabold text-[#172033] dark:text-[#F8FAFC]">{activeQuizSession.title}</h2>
              </div>
            </div>

            <button
              onClick={resetSession}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-[#0F172A] text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F8FAFC] border border-[#E2E8F0] dark:border-[#334155]"
            >
              Tutup Sesi Live
            </button>
          </div>

          {!sessionCompleted ? (
            <div className="mt-6 space-y-6">
              {/* Question Header */}
              <div className="bg-white dark:bg-[#0F172A] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm">
                <div className="flex items-center justify-between text-xs text-[#64748B] dark:text-[#94A3B8] font-bold mb-2">
                  <span>
                    Soal {currentQuestionIndex + 1} dari {activeQuizSession.questions.length}
                  </span>
                  <span className="flex items-center gap-1 text-[#5B5FEF] dark:text-[#A5B4FC]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Mode Adaptif Aktif
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#172033] dark:text-[#F8FAFC] mb-4">
                  {activeQuizSession.questions[currentQuestionIndex]?.questionText}
                </h3>

                {/* Options List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeQuizSession.questions[currentQuestionIndex]?.options.map((opt) => (
                    <div
                      key={opt.id}
                      className={`p-4 rounded-2xl border text-sm font-bold flex items-center gap-3 transition-all ${
                        opt.isCorrect
                          ? "bg-[#DCFCE7]/40 dark:bg-[#14532D]/40 border-[#22C55E]/60 text-[#15803D] dark:text-[#86EFAC]"
                          : "bg-[#F8FAFC] dark:bg-[#1E293B] border-[#E2E8F0] dark:border-[#334155] text-[#172033] dark:text-[#F8FAFC]"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/80 dark:bg-black/20 flex items-center justify-center text-[#5B5FEF] dark:text-[#A5B4FC]">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span>{opt.text}</span>
                        {opt.isCorrect && (
                          <span className="block text-[10px] font-bold text-[#22C55E] dark:text-[#4ADE80]">Kunci Benar</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-time Student Responses from Watch */}
              <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#5B5FEF]" />
                    <span className="text-sm font-bold text-[#172033]">
                      Respon Smartwatch Siswa ({Object.keys(studentAnswers).length} / 6 Terjawab)
                    </span>
                  </div>
                  <span className="text-xs text-[#22C55E] font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping"></span>
                    Menerima Data
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {["Alya", "Bima", "Caca", "Dito", "Fajar", "Hana"].map((name) => {
                    const answered = studentAnswers[name];
                    return (
                      <div
                        key={name}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          answered
                            ? "bg-[#DCFCE7] border-[#22C55E] text-[#15803D]"
                            : "bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B]"
                        }`}
                      >
                        <span className="text-xs font-bold block">{name}</span>
                        <span className="text-[10px] font-medium mt-1 block">
                          {answered ? "✓ Terjawab" : "Menjawab..."}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Session Controls */}
              <div className="flex justify-end gap-3">
                <button onClick={handleNextQuestion} className="btn-primary">
                  <span>
                    {currentQuestionIndex < activeQuizSession.questions.length - 1
                      ? "Kirim Soal Selanjutnya →"
                      : "Selesaikan Sesi Kuis"}
                  </span>
                </button>
              </div>
            </div>
          ) : (
            /* Celebration State */
            <div className="py-10 text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-[#FEF9C3] flex items-center justify-center animate-bounce shadow-md">
                <Trophy className="w-10 h-10 text-[#A16207]" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#172033]">
                Kuis Selesai! Semua Siswa Menerima Umpan Balik Haptik!
              </h3>
              <p className="text-sm text-[#64748B] max-w-md mx-auto">
                Rata-rata skor kelas 4A: 92/100. Data jawaban otomatis disinkronkan ke AI Adaptive Engine dan Parent Dashboard.
              </p>
              <button onClick={resetSession} className="btn-primary">
                Kembali ke Daftar Kuis
              </button>
            </div>
          )}
        </div>
      )}

      {/* Quizzes List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="card-friendly p-6 bg-white border border-[#E2E8F0] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EEF0FF] text-[#5B5FEF]">
                  {quiz.subject}
                </span>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    quiz.status === "aktif"
                      ? "bg-[#DCFCE7] text-[#15803D]"
                      : quiz.status === "terjadwal"
                      ? "bg-[#FEF9C3] text-[#A16207]"
                      : "bg-[#F1F5F9] text-[#64748B]"
                  }`}
                >
                  {quiz.status.toUpperCase()}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-[#172033] mb-2">{quiz.title}</h3>
              <p className="text-xs text-[#64748B] mb-4">
                {quiz.questionsCount} Butir Soal • Mode Adaptif:{" "}
                <span className="font-bold text-[#5B5FEF]">
                  {quiz.adaptiveMode ? "Aktif (Sensorik)" : "Standar"}
                </span>
              </p>

              <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#64748B]">Tersinkron ke Smartwatch</span>
                  <span className="font-bold text-[#172033]">
                    {quiz.syncedToSmartwatchCount} / {quiz.totalTargetStudents} Siswa
                  </span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#22C55E] h-full rounded-full"
                    style={{ width: `${quiz.completionRate}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-[#E2E8F0]">
              <button
                onClick={() => startLiveSession(quiz)}
                className="flex-1 py-2 px-3 rounded-xl bg-[#5B5FEF] hover:bg-[#4B4FDF] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Mulai Kuis Live</span>
              </button>

              <button
                onClick={() => onSendQuizToWatch(quiz)}
                title="Kirim notifikasi kuis ke semua jam tangan"
                className="p-2 rounded-xl bg-[#EEF0FF] hover:bg-[#E0E4FE] text-[#5B5FEF] border border-[#C7D2FE] transition-colors"
              >
                <Watch className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
