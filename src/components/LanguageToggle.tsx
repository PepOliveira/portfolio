"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang, setDirection } = useLanguage();

  const isPT = lang === "pt";

  const handleLanguageChange = () => {
    // Define a direção ANTES de mudar a língua
    setDirection(isPT ? "right" : "left");
    // Depois muda a língua (dispara a animação)
    setLang(isPT ? "en" : "pt");
  };

  return (
    <div
      onClick={handleLanguageChange}
      className="
        relative
        w-[72px] h-[36px]
        rounded-full
        cursor-pointer
        flex items-center
        px-[4px]

        bg-zinc-900
        border border-zinc-700

        transition-all duration-300
      "
      style={{
        boxShadow: isPT
          ? "0 0 12px rgba(0,255,120,0.25)"
          : "0 0 12px rgba(0,140,255,0.25)",
      }}
    >
      {/* FUNDO FLAGS */}
      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-80">
        <img src="/flags/br.svg" alt="PT" className="w-4 h-4" />
        <img src="/flags/us.svg" alt="EN" className="w-4 h-4" />
      </div>

      {/* SWITCH */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="
          w-[28px] h-[28px]
          bg-white
          rounded-full
          flex items-center justify-center
          z-10

          shadow-md
        "
        style={{
          marginLeft: isPT ? 0 : "auto",
        }}
      >
        <img
          src={isPT ? "/flags/br.svg" : "/flags/us.svg"}
          alt="lang"
          className="w-4 h-4 rounded-sm"
        />
      </motion.div>
    </div>
  );
}