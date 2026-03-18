"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import {
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiDocker,
  SiHtml5,
  SiReact,
  SiCss3,
  SiMongodb,
  SiBootstrap,
  SiSpringboot,
  SiAngular,
  SiFirebase,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

export default function StackIcons() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("All");

  const stackGroups = {
    Languages: [
      { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
      { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
      { icon: FaJava, color: "#f89820", name: "Java" },
    ],

    Frontend: [
      { icon: SiHtml5, color: "#E34F26", name: "HTML" },
      { icon: SiCss3, color: "#1572B6", name: "CSS" },
      { icon: SiReact, color: "#61DAFB", name: "React" },
      { icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
      { icon: SiAngular, color: "#DD0031", name: "Angular" },
      { icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },
    ],

    Backend: [
      { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
      { icon: SiNestjs, color: "#E0234E", name: "NestJS" },
      { icon: SiSpringboot, color: "#6DB33F", name: "Spring Boot" },
    ],

    Database: [
      { icon: SiMysql, color: "#4479A1", name: "MySQL" },
      { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
      { icon: SiFirebase, color: "#a26b47", name: "Firebase" },
    ],

    Tools: [
      { icon: SiGit, color: "#F05032", name: "Git" },
      { icon: SiDocker, color: "#2496ED", name: "Docker" },
    ],
  };

  const tabs = ["All", ...Object.keys(stackGroups)];

  const filteredStacks =
    activeTab === "All"
      ? Object.values(stackGroups).flat()
      : stackGroups[activeTab as keyof typeof stackGroups];

  return (
    <div className="mb-20 mt-10">

      {/* TITLE */}
      <h2 className="
        text-2xl
        font-semibold
        mb-6
        bg-gradient-to-r
        from-white
        to-zinc-400
        bg-clip-text
        text-transparent
      ">
        {t.skills.title}
      </h2>

      {/* TABS */}
      <div className="flex gap-3 mb-8 flex-wrap relative">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative px-4 py-1.5 rounded-full text-sm border transition
              ${activeTab === tab
                ? "text-black"
                : "border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
              }
            `}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}

            <span className="relative z-10">
              {tab === "All" ? t.skills.tabs.all :
               tab === "Languages" ? t.skills.tabs.languages :
               tab === "Frontend" ? t.skills.tabs.frontend :
               tab === "Backend" ? t.skills.tabs.backend :
               tab === "Database" ? t.skills.tabs.database :
               tab === "Tools" ? t.skills.tabs.tools : tab}
            </span>
          </button>
        ))}

      </div>

      {/* GRID COM ANIMAÇÃO */}
      <AnimatePresence mode="wait">

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-5"
        >

          {filteredStacks.map((Stack, index) => (

            <motion.div
              key={Stack.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="group relative"
            >

              {/* ICON CARD */}
              <motion.div
                whileHover={{ scale: 1.15, y: -6 }}
                className="
                  w-14 h-14
                  flex items-center justify-center
                  rounded-2xl
                  bg-zinc-900
                  border border-zinc-800
                  transition-all duration-300
                "
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 25px ${Stack.color}`;
                  e.currentTarget.style.borderColor = Stack.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#27272a";
                }}
              >
                <Stack.icon size={26} color={Stack.color} />
              </motion.div>

              {/* TOOLTIP */}
              <span className="
                absolute
                -top-10
                left-1/2
                -translate-x-1/2
                opacity-0
                group-hover:opacity-100
                transition
                text-[11px]
                bg-zinc-800
                px-3 py-1
                rounded-lg
                whitespace-nowrap
              ">
                {Stack.name}
              </span>

            </motion.div>

          ))}

        </motion.div>

      </AnimatePresence>

    </div>
  );
}