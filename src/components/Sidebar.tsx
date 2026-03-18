"use client";

import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Sidebar() {
  const { t } = useLanguage();

  return (
    <aside
      className="
        w-full
        lg:w-64
        lg:h-screen
        lg:border-r
        lg:border-gray-800
        lg:p-8
        lg:fixed
        bg-[#0a0a0a]
        flex flex-col justify-between
      "
    >
      {/* PARTE DE CIMA */}
      <div className="flex flex-col items-center">
        {/* IMAGEM */}
        <div className="relative w-[90px] h-[90px] mb-6 flex justify-center">
          <div
            className="
            absolute inset-0 rounded-full
            bg-gradient-to-tr from-blue-500 to-purple-500
            blur-lg opacity-30
          "
          />

          <Image
            src="/perfil.JPEG"
            width={90}
            height={90}
            alt="Pedro Oliveira"
            className="rounded-full relative border border-gray-800 object-cover"
          />
        </div>

        {/* NOME */}
        <h1 className="text-xl font-semibold hover:text-blue-400 transition flex items-center justify-center gap-1 text-center">
          Pedro Oliveira
          <MdVerified className="text-blue-500 text-lg" />
        </h1>

        {/* EMAIL */}
        <p className="text-gray-400 text-sm mb-6 text-center">
          @oliveiraaw peoliveira0101@gmail.com
        </p>

        {/* STATUS */}
        <p className="text-gray-400 text-sm mb-8 text-center">
          {t.sidebar.available}
        </p>

        {/* BOTÕES */}
        <div className="flex flex-col gap-3 text-sm w-full">
          {/* GitHub */}
          <a
            href="https://github.com/PepOliveira"
            target="_blank"
            className="
              flex items-center gap-3
              border border-gray-800
              rounded-lg px-4 py-2
              hover:border-white hover:text-white
              hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
              transition
            "
          >
            <FaGithub className="text-lg text-white" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pedro-oliveira-834812268"
            target="_blank"
            className="
              flex items-center gap-3
              border border-gray-800
              rounded-lg px-4 py-2
              hover:border-[#0A66C2]
              hover:shadow-[0_0_15px_rgba(10,102,194,0.5)]
              transition
            "
          >
            <FaLinkedin className="text-lg text-[#0A66C2]" />
            LinkedIn
          </a>

          {/* CV BR */}
          <a
            href="/Curriculo-Pedro-Oliveira.pdf"
            className="
              flex items-center gap-3
              border border-gray-800
              rounded-lg px-4 py-2
              hover:border-green-500
              hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]
              transition
            "
          >
            <FaDownload className="text-lg text-green-500" />
            <span>{t.sidebar.cv}</span>
          </a>

          {/* CV EUROPASS */}
          <a
            href="/CV-Europass-Pedro-Portugal.pdf"
            className="
              flex items-center gap-3
              border border-gray-800
              rounded-lg px-4 py-3
              hover:border-green-500
              hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]
              transition
            "
          >
            <FaDownload className="text-[19px] text-green-500 flex-shrink-0" />
            <span className="leading-tight text-xs">
              {t.sidebar.cvEu}
            </span>
          </a>
        </div>
      </div>

      {/* PARTE DE BAIXO */}
      <div className="mt-10 pt-6 border-t border-zinc-800 flex justify-center">
        <LanguageToggle />
      </div>
    </aside>
  );
}