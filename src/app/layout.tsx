import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackgroundGlow from "@/components/BackgroundGlow";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageTransition from "@/components/LanguageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Pedro Oliveira",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <LanguageProvider>

          {/* BACKGROUND GLOBAL */}
          <BackgroundGlow />

          {/* 🔥 AQUI ESTÁ O SEGREDO */}
          <LanguageTransition>
            {children}
          </LanguageTransition>

        </LanguageProvider>
      </body>
    </html>
  );
}