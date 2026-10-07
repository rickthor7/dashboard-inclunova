"use client";

import React from "react";

interface ProgressRingProps {
  progress: number; // 0 - 100
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  label?: string;
  sublabel?: string;
  className?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 120,
  strokeWidth = 10,
  color = "#5B5FEF",
  backgroundColor = "#E2E8F0",
  label,
  sublabel,
  className = ""
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  const strokeDashoffset = circumference - (normalizedProgress / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        {label ? (
          <span className="text-xl font-extrabold text-[#172033] dark:text-[#F8FAFC] tracking-tight">{label}</span>
        ) : (
          <span className="text-2xl font-extrabold text-[#172033] dark:text-[#F8FAFC] tracking-tight">{normalizedProgress}%</span>
        )}
        {sublabel && (
          <span className="text-[11px] font-medium text-[#64748B] dark:text-[#94A3B8] mt-0.5">{sublabel}</span>
        )}
      </div>
    </div>
  );
};
