"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Project } from "@/content/projects";
import { Card } from "@/components/ui/card";

export const ProjectCard = ({ project }: { project: Project }) => {
  const { push } = useRouter()
  const hasDesktop = !!project.image?.desktop;
  const hasMobile = !!project.image?.mobile;

  return (
    <Card
      interactive
      className="cursor-pointer overflow-hidden"
    >
      <div onClick={() => push(`/projects/${project.id}`)}>
        {/* Title */}
        <div className="pb-4">
          <h3 className="font-display text-heading">{project.title}</h3>
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
          <p className="text-sm text-fg-muted leading-relaxed">{project.shortDescription}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-line"></div>

        {/* Skills / Tags */}
        <div className="pt-4">
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-sunken text-fg-muted border border-line"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
