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
      className="p-5 relative overflow-hidden rounded-2xl border border-slate-400 dark:border-slate-700 cursor-pointer 
                bg-gradient-to-b from-white/95 to-white/100 dark:from-gray-800/80 dark:to-gray-800/90 
                transition-transform duration-300 ease-in-out transform hover:scale-105 motion-safe:animate-fadeInUp"
      onClick={() => push(`/${locale}/projects/${project.id}`)}
    >
      {/* Title */}
      <div className="pb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          {project.title}
        </h3>
      </div>

      {/* Image container */}
      <div className="flex flex-row justify-center gap-3 w-full">
        <div className="relative w-3/4 rounded-xl overflow-hidden aspect-[4/3]">
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

        <div className="relative w-1/4 rounded-xl overflow-hidden aspect-[9/16]">
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

      {/* Description */}
      <div className="py-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {project.shortDescription}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 dark:border-slate-700"></div>

      {/* Skills / Tags */}
      <div className="pt-4">
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-slate-100 dark:bg-gray-700 border border-slate-200 dark:border-gray-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

  );
};
