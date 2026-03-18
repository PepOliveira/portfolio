type Props = {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
};

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  tech,
}: Props) {
  return (
    <div
      className="
        relative
        border border-zinc-800
        rounded-xl
        p-5
        hover:border-blue-500
        hover:shadow-lg
        hover:shadow-blue-500/10
        transition-all
        duration-300
      "
    >

      {/* LINHA TIMELINE */}
      <div className="absolute -left-6 top-6 w-3 h-3 bg-blue-500 rounded-full shadow-md shadow-blue-500/50" />

      <h3 className="text-lg font-semibold">
        {role}
      </h3>

      <p className="text-sm text-zinc-400 mb-1">
        {company}
      </p>

      <span className="text-xs text-zinc-500 mb-3 block">
        {period}
      </span>

      <p className="text-sm text-zinc-400 mb-4 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="
              text-xs
              border border-zinc-700
              px-2 py-1
              rounded
              text-zinc-300
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}