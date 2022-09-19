import React from "react"
import ProjectCard from "../common/ProjectCard"
import styles from "./Home.module.css"

const projects = [
  { title: "First project", description: "First project description" },
  { title: "Second project", description: "Second project description" },
  { title: "Third project", description: "Third project description" },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.introduction}>
        <h1>Milad Mohammadi</h1>
        <h4>Frontend Developer</h4>
      </section>
      <section className={styles.projects}>
        <h2>Projects</h2>
        <div>
          {projects.map((item) => {
            return (
              <ProjectCard title={item.title} description={item.description} />
            )
          })}
        </div>
      </section>
    </div>
  )
}
