"use client";

import React, { useState } from "react";
import { mockParentTasks } from "@/data/mockData";
import {
  CheckSquare,
  Clock,
  UserCheck,
  CheckCircle2,
  Play,
  HeartHandshake,
  AlertCircle
} from "lucide-react";

export const ParentTasks: React.FC = () => {
  const [tasks, setTasks] = useState(mockParentTasks);

  const handleToggleComplete = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? {
              ...t,
              status: t.status === "completed" ? "ongoing" : "completed",
              progress: t.status === "completed" ? 70 : 100
            }
          : t
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
          Tugas dan Materi Pendampingan Rumah
        </h1>
        <p className="text-sm text-[#64748B] font-medium mt-1">
          Dampingi ananda belajar dengan santai, tanpa tekanan, sesuai instruksi dari guru kelas.
        </p>
      </div>

      {/* Parental Tip Banner */}
      <div className="card-friendly-static p-5 bg-gradient-to-r from-[#DCFCE7]/60 via-white to-[#EEF0FF]/50 dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#0F172A] border border-[#BBF7D0] dark:border-[#334155]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#22C55E] text-white flex items-center justify-center flex-shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-[#172033] dark:text-[#F8FAFC]">
              Tips Pendampingan Hari Ini dari Bu Rina (Guru Kelas)
            </h4>
            <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-0.5">
              &quot;Cukup luangkan waktu 10-15 menit bermain sambil belajar. Berikan pelukan hangat saat Alya berhasil menyelesaikan soal!&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Task List Cards */}
      <div className="space-y-4">
        {tasks.map((task) => {
          const isDone = task.status === "completed";

          return (
            <div
              key={task.id}
              className={`card-friendly p-6 bg-white dark:bg-[#1E293B] border transition-all ${
                isDone ? "border-[#22C55E]/40 dark:border-[#22C55E]/30 bg-[#F0FDF4]/30 dark:bg-[#14532D]/20" : "border-[#E2E8F0] dark:border-[#334155]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EEF0FF] text-[#5B5FEF]">
                    {task.subject}
                  </span>
                  <span className="text-xs text-[#64748B] flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                    {task.deadline}
                  </span>
                </div>

                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto ${
                    isDone ? "bg-[#DCFCE7] text-[#15803D]" : "bg-[#FEF9C3] text-[#A16207]"
                  }`}
                >
                  {isDone ? "✓ Selesai Bersama Bunda" : "Sedang Berjalan"}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-[#172033] mb-1">
                {task.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                {task.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-1 mb-5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#64748B]">Kemajuan Pengerjaan</span>
                  <span className={isDone ? "text-[#22C55E]" : "text-[#5B5FEF]"}>
                    {task.progress}%
                  </span>
                </div>
                <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isDone ? "bg-[#22C55E]" : "bg-[#5B5FEF]"
                    }`}
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
                <span className="text-xs text-[#64748B] font-medium flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-[#5B5FEF]" />
                  Ditugaskan oleh: {task.assignedBy}
                </span>

                <button
                  onClick={() => handleToggleComplete(task.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                    isDone
                      ? "bg-white text-[#64748B] border border-[#CBD5E1] hover:bg-[#F8FAFC]"
                      : "bg-[#22C55E] hover:bg-[#16A34A] text-white shadow-[#22C55E]/30"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isDone ? "Tandai Belum Selesai" : "Tandai Sudah Selesai"}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
