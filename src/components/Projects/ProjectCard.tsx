"use client";

import Image from "next/image";

type Props = {

  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;

};

export default function ProjectCard({

  title,
  description,
  tech,
  link,
  image

}: Props) {

  return (

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        block
        border border-gray-800
        rounded-xl
        overflow-hidden

        hover:border-blue-500
        hover:shadow-2xl
        hover:shadow-blue-500/10

        hover:-translate-y-1

        transition-all
        duration-300
      "
    >

      {}

      <div className="relative w-full h-48 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {}

        <div
          className="
            absolute inset-0
            bg-black/40
            opacity-0
            group-hover:opacity-100
            transition
          "
        />

      </div>

      {}

      <div className="p-5">

        <h3 className="text-lg font-semibold mb-2">

          {title}

        </h3>

        <p className="text-sm text-gray-400 mb-4">

          {description}

        </p>

        <div className="flex gap-2 flex-wrap mb-4">

          {tech.map((item, index) => (

            <span
              key={index}
              className="
                text-xs
                border border-gray-700
                px-2 py-1
                rounded
              "
            >

              {item}

            </span>

          ))}

        </div>

        <span
          className="
            text-sm
            text-blue-400
            group-hover:text-blue-300
          "
        >

          View Project →

        </span>

      </div>

    </a>

  );

}