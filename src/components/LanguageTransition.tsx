"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function LanguageTransition({ children }: Props) {
  const { lang, direction } = useLanguage();

  // Efeito profissional: Flip 3D card
  const profesionalVariants = {
    initial: (dir: string) => ({
      opacity: 0,
      rotateY: dir === "right" ? 90 : -90,
      scale: 0.8,
    }),
    animate: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (dir: string) => ({
      opacity: 0,
      rotateY: dir === "right" ? -90 : 90,
      scale: 0.8,
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {/* Overlay light effect durante transição */}
      <motion.div
        key={`overlay-${lang}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 0.5,
        }}
        className="fixed inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-transparent"
        style={{
          zIndex: 999,
        }}
      />

      {/* Main content transition */}
      <motion.div
        key={lang}
        custom={direction}
        variants={profesionalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 30,
          mass: 0.8,
        }}
        style={{
          perspective: "1200px",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}