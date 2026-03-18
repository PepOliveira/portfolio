"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">{t.projects.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ProjectCard
          title={t.projects.items.auticare.title}
          description={t.projects.items.auticare.description}
          tech={["Next.js", "OpenAI", "TypeScript"]}
          link="https://linktr.ee/auticare_tea"
          image="/auticare.png"

        />

        <ProjectCard
          title={t.projects.items.condocommunity.title}
          description={t.projects.items.condocommunity.description}
          tech={["React", "Node.js", "MongoDB"]}
          link="https://condocommunity.vercel.app/loginCC.html"
          image="/condo.png"
        />

        <ProjectCard
          title={t.projects.items.finance.title}
          description={t.projects.items.finance.description}
          tech={["Java", "Firebase"]}
          link="https://github.com/PepOliveira/FinanceApp"
          image="/finance.png"
        />

        <ProjectCard
          title={t.projects.items.orderApi.title}
          description={t.projects.items.orderApi.description}
          tech={["Node.js", "Express", "MongoDB"]}
          link="https://github.com/PepOliveira/order-api/tree/main"
          image="/order-api.png"
        />

        <ProjectCard
          title={t.projects.items.newProject.title}
          description={t.projects.items.newProject.description}
          tech={["Language", "Language", "Language"]}
          link="https://github.com/PepOliveira"
          image="/noimage.png"
        />

        <ProjectCard
          title={t.projects.items.newProject.title}
          description={t.projects.items.newProject.description}
          tech={["Language", "Language", "Language"]}
          link="https://github.com/PepOliveira"
          image="/noimage.png"
        />
      </div>
    </section>
  );
}
