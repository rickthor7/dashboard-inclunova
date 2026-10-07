"use client";

import React from "react";
import { Volume2, Eye, Hand, MessageSquare } from "lucide-react";
import { AccessibilityMode } from "@/types";

interface BadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "accent" | "blue" | "pink" | "muted" | "outline";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "primary",
  size = "md",
  icon,
  className = ""
}) => {
  const variantStyles = {
    primary: "bg-[#EEF0FF] text-[#5B5FEF] border border-[#C7D2FE]",
    secondary: "bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]",
    accent: "bg-[#FEF9C3] text-[#A16207] border border-[#FEF08A]",
    blue: "bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]",
    pink: "bg-[#FFE4E6] text-[#BE123C] border border-[#FECDD3]",
    muted: "bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]",
    outline: "bg-white text-[#64748B] border border-[#CBD5E1]"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 rounded-full font-medium",
    md: "text-xs px-2.5 py-1 rounded-full font-semibold"
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 transition-all ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {label}
    </span>
  );
};

export const AccessibilityBadge: React.FC<{ mode: AccessibilityMode; size?: "sm" | "md" }> = ({
  mode,
  size = "sm"
}) => {
  switch (mode) {
    case "audio":
      return <Badge label="Audio TTS" variant="blue" size={size} icon={<Volume2 className="w-3 h-3" />} />;
    case "visual":
      return <Badge label="Visual Kontras" variant="accent" size={size} icon={<Eye className="w-3 h-3" />} />;
    case "haptic":
      return <Badge label="Getaran Haptik" variant="primary" size={size} icon={<Hand className="w-3 h-3" />} />;
    case "sign_language":
      return <Badge label="Bahasa Isyarat" variant="pink" size={size} icon={<MessageSquare className="w-3 h-3" />} />;
    default:
      return null;
  }
};
