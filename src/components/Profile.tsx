"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Profile() {
  const { t } = useLanguage();

  return (
    <section className="mb-12 pb-8 border-b border-gray-800/70">

      <h1 className="text-4xl font-bold mb-4">
        {t.profile.greeting}
      </h1>

      <p className="text-sm text-gray-400 mb-6">
        {t.profile.location}
      </p>

      <h2 className="text-lg font-semibold text-gray-200 mb-4">
        {t.profile.role}
      </h2>

      <p className="text-gray-400 max-w-2xl leading-relaxed text-justify" style={{ whiteSpace: 'pre-line' }}>
        {t.profile.description}
      </p>
    </section>
  );
}