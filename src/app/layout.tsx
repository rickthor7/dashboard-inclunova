import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "INCLUNOVA — Platform Pembelajaran Adaptif & Inklusif",
  description: "Pusat monitoring dan pengelolaan pembelajaran ekosistem INCLUNOVA: Teacher Dashboard, Parent Dashboard, Smartwatch Siswa, Smart Board, dan AI Adaptive Engine.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F8FAFC] text-[#172033]">
        {children}
      </body>
    </html>
  );
}
