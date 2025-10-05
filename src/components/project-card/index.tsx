"use client"

import Image from "next/image";
import { Project } from "./types";
import { useRouter } from "next/navigation";
import { Locale } from "../language-selector";

export const ProjectCard = ({ project, locale }: { project: Project, locale: Locale }) => {
  const { push } = useRouter()
  const hasDesktop = !!project.image?.desktop;
  const hasMobile = !!project.image?.mobile;

  return (
    <div 
      className="p-5 relative overflow-hidden rounded-2xl shadow-lg group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:shadow-xl"
      onClick={() => push(`/${locale}/projects/${project.id}`)}
    >
      
      {/* Title at the top */}
      <div className="pb-5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {project.title}
        </h3>
      </div>

      {/* Image container with reduced vertical spacing */}
      <div className="flex flex-row justify-center gap-4 w-full">
        {/* Desktop slot */}
        <div className="relative w-3/4 rounded-xl overflow-hidden">
          {hasDesktop && (
            <Image
              src={project.image?.desktop as string}
              alt={`${project.title} desktop`}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority
            />
          )}
        </div>

        {/* Mobile slot */}
        <div className="relative w-1/4 aspect-[9/16] rounded-xl overflow-hidden">
          {hasMobile && (
            <Image
              src={project.image?.mobile as string}
              alt={`${project.title} mobile`}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 33vw, 100vw"
              priority
            />
          )}
        </div>
      </div>

      {/* Description below images */}
      <div className="py-5">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 dark:border-slate-700"></div>

      {/* Skills / tags */}
      <div className="pt-5">
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill.name}
              className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              {skill.icon} {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
