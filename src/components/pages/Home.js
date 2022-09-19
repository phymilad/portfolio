import React from "react"
import ProjectCard from "../common/ProjectCard"
import styles from "./Home.module.css"

const projects = [
  {
    title: "First project",
    description: "First project description",
    technologies: ["React", "Redux", "Material-UI"],
    link: "google.com",
  },
  {
    title: "Second project",
    description: "Second project description",
    technologies: ["Redux", "Material-UI", "Nextjs"],
    link: "google.com",
  },
  {
    title: "Third project",
    description: "Third project description",
    technologies: ["React", "Redux", "Tailwind"],
    link: "google.com",
  },
  {
    title: "Forth project",
    description: "Forth project description",
    technologies: ["Redux", "Material-UI", "Nextjs"],
    link: "google.com",
  },
  {
    title: "Fifth project",
    description: "Fifth project description",
    technologies: ["React", "Redux", "Ant-Design"],
    link: "google.com",
  },
  {
    title: "Sixth project",
    description: "Sixth project description",
    technologies: ["React", "Redux", "Bootstrap", "Nextjs"],
    link: "google.com",
  },
  {
    title: "Seventh project",
    description: "Seventh project description",
    technologies: ["Nextjs", "Tailwind"],
    link: "google.com",
  },
  {
    title: "Eighth project",
    description: "Eighth project description",
    technologies: ["Bootstrap", "Nextjs"],
    link: "google.com",
  },
  {
    title: "Ninth project",
    description: "Ninth project description",
    technologies: ["Ant-Design", "Nextjs"],
    link: "google.com",
  },
  {
    title: "Tenth project",
    description: "Tenth project description",
    technologies: ["React", "Redux", "Material-UI"],
    link: "google.com",
  },
  {
    title: "Eleventh project",
    description: "Eleventh project description",
    technologies: ["Redux", "Material-UI", "Nextjs"],
    link: "google.com",
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.introduction}>
        <h1>Milad Mohammadi</h1>
        <h4>Frontend Developer</h4>
      </section>
      <h2>Projects</h2>
      <section className={styles.projects}>
        {projects.map((item) => {
          return (
            <ProjectCard
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              link={item.link}
            />
          )
        })}
      </section>
    </div>
  )
}
