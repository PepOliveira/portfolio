"use client";

import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      role: "Junior Software Developer",
      company: "FUNAP Sorocaba",
      period: "2024",
      description:
        "Atuação na manutenção e evolução do Sistema Eletrônico de Informações (SEI), utilizado para gestão de processos administrativos. Desenvolvimento de novas funcionalidades e correções com foco em estabilidade, além de monitoramento contínuo do sistema e suporte técnico. Colaboração direta com equipes administrativas, fortalecendo organização e responsabilidade técnica.",
      tech: ["JavaScript", "React", "HTML", "CSS"],
    },
    {
      role: "Junior Full Stack Developer",
      company: "Lavanderia LaveClean",
      period: "2024",
      description:
        "Responsável pela manutenção e evolução do sistema interno para gestão de estoque e operações. Desenvolvimento de funcionalidades tanto no frontend quanto no backend, além de integração com APIs e banco de dados, garantindo melhor desempenho e organização dos processos da empresa.",
      tech: ["JavaScript", "Angular", "Node.js", "Spring Boot", "Database"],
    },
    {
      role: "Junior Full Stack Developer",
      company: "Projeto Freelancer",
      period: "2024 - Atual",
      description:
        "Desenvolvimento de aplicações web completas utilizando React, Node.js e bancos de dados relacionais e NoSQL. Criação de APIs, integração de sistemas e foco em performance e experiência do usuário.",
      tech: ["React", "Node.js", "TypeScript", "MySQL"],
    },
    {
      role: "Desenvolvedor Backend",
      company: "Projeto Acadêmico (TCC)",
      period: "2025",
      description:
        "Desenvolvimento de um chatbot inteligente para apoio a pessoas com TEA, com foco em acessibilidade. Implementação de APIs REST, integração com IA e aplicação de boas práticas de segurança.",
      tech: ["Java", "Spring Boot", "API REST", "OpenAI"],
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
        Experience
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