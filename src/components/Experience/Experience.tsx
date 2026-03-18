"use client";

import { useLanguage } from "@/context/LanguageContext";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const { t } = useLanguage();
  const experiences = [
  {
    role: t.experience.items.funap.role,
    company: t.experience.items.funap.company,
    period: t.experience.items.funap.period,
    description: t.experience.items.funap.description,
    tech: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    role: t.experience.items.laveClean.role,
    company: t.experience.items.laveClean.company,
    period: t.experience.items.laveClean.period,
    description: t.experience.items.laveClean.description,
    tech: ["JavaScript", "Angular", "Node.js", "Spring Boot", "Database"],
  },
  {
    role: t.experience.items.freelancer.role,
    company: t.experience.items.freelancer.company,
    period: t.experience.items.freelancer.period,
    description: t.experience.items.freelancer.description,
    tech: ["React", "Node.js", "TypeScript", "MySQL"],
  },
  {
    role: t.experience.items.tcc.role,
    company: t.experience.items.tcc.company,
    period: t.experience.items.tcc.period,
    description: t.experience.items.tcc.description,
    tech: ["Java", "Spring Boot", "API REST"],
  },
];

  return (
    <section className="mb-20 mt-20">

      {/* TITLE */}
      <h2
        className="
          text-2xl
          font-semibold
          mb-10
          bg-gradient-to-r
          from-white
          to-zinc-400
          bg-clip-text
          text-transparent
        "
      >
        {t.experience.title}
      </h2>

      {/* TIMELINE */}
      <div className="relative border-l border-zinc-800 pl-8 space-y-10">

        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}

      </div>

    </section>
  );
}