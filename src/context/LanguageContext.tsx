"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/lib/i18n";

type Lang = "pt" | "en";
type Direction = "left" | "right";

type ContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations.pt;
  direction: Direction;
  setDirection: (dir: Direction) => void;
};

const LanguageContext = createContext<ContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const [direction, setDirection] = useState<Direction>("right");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang");

    if (saved === "pt" || saved === "en") {
      setLang(saved);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", lang);
    }
  }, [lang, mounted]);

  const t = translations[lang];

  // 🚫 evita flicker
  if (!mounted) return null;

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t, direction, setDirection }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}