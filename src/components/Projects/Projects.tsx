import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ProjectCard
          title="AutiCare"
          description="AI-powered platform to support people with Autism Spectrum Disorder (ASD)."
          tech={["Next.js", "OpenAI", "TypeScript"]}
          link="https://linktr.ee/auticare_tea"
          image="/auticare.png"
          
        />

        <ProjectCard
          title="CondoCommunity"
          description="Web system for communication and security in residential condominiums."
          tech={["React", "Node.js", "MongoDB"]}
          link="https://condocommunity.vercel.app/loginCC.html"
          image="/condo.png"
        />

        <ProjectCard
          title="Finance App"
          description="Mobile app developed in Android Studio for financial management."
          tech={["Java", "Firebase"]}
          link="https://github.com/PepOliveira/FinanceApp"
          image="/finance.png"
        />
      </div>
    </section>
  );
}
