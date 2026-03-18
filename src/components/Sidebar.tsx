import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="
        w-64
        h-screen
        border-r
        border-gray-800
        p-8
        fixed
        bg-[#0a0a0a]
        flex flex-col items-center
      ">

      {/* Container da Imagem Centralizado */}
<div className="relative w-[90px] h-[90px] mb-6 flex justify-center">
  <div
    className="
      absolute
      inset-0
      rounded-full
      bg-gradient-to-tr
      from-blue-500
      to-purple-500
      blur-lg
      opacity-30
    "
  ></div>

  <Image
    src="/WhatsApp Image 2026-02-25 at 16.59.26.JPEG"
    width={90}
    height={90}
    alt="Pedro Oliveira"
   
    className="rounded-full relative border border-gray-800 object-cover aspect-square object-cover"
  />
</div>

      

      {}
      <h1 className="text-xl font-semibold hover:text-blue-400 transition flex items-center justify-center gap-1 w-full text-center">
        Pedro Oliveira
        <MdVerified className="text-blue-500 text-lg flex-shrink-0" />
      </h1>

      {}
      <p className="text-gray-400 text-sm mb-10 text-center">
        @oliveiraaw  peoliveira0101@gmail.com
      </p>

      {}
      <p className="text-gray-400 text-sm mb-10 text-center">
      🟢 Available for work
      </p>

      {/* Botões de Contato - Mantendo o estilo original */}
      <div className="flex flex-col gap-3 mt-10 text-sm w-full">

{/* GitHub */}

<a
  href="https://github.com/PepOliveira"
  target="_blank"
  className="
    flex items-center gap-3
    border border-gray-800
    rounded-lg
    px-4 py-2

    hover:border-white
    hover:text-white

    hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]

    transition
    group
  "
>

  <FaGithub className="text-lg text-white" />

  GitHub

</a>


{/* LinkedIn */}

<a
  href="https://linkedin.com"
  target="_blank"
  className="
    flex items-center gap-3
    border border-gray-800
    rounded-lg
    px-4 py-2

    hover:border-[#0A66C2]

    hover:shadow-[0_0_15px_rgba(10,102,194,0.5)]

    transition
    group
  "
>

  <FaLinkedin className="text-lg text-[#0A66C2]" />

  LinkedIn

</a>


{/* Downloads de CV */}
        <a
          href="/Curriculo-Pedro-Oliveira.pdf"
          className="flex items-center gap-3 border border-gray-800 rounded-lg px-4 py-2 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition group"
        >
          <FaDownload className="text-lg text-green-500" />
          <span>CV (BR)</span>
        </a>

        <a
          href="/CV-Europass-Pedro-Portugal.pdf"
          className="flex items-center gap-3 border border-gray-800 rounded-lg px-4 py-3 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition group"
        >
          <FaDownload className="text-[19px] text-green-500 flex-shrink-0" />
          <span className="leading-tight text-xs">CV Europass (PT)</span>
        </a>
      </div>
    </aside>
  );
}
