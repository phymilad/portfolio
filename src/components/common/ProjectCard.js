import React from "react"
import styles from "./ProjectCard.module.css"
import project1Image from "../../assets/images/bg3.jpg"
import Badge from "./Badge"

export default function ProjectCard(props) {
  console.log(props)
  console.log(props.technologies)

  return (
    <div className={styles.cardContainer}>
      <img src={project1Image} alt="Image alternative" />
      <h3 className={styles.title}>{props.title}</h3>
      <h6 className={styles.description}>{props.description}</h6>
      <div className={styles.technologies}>
        {props.technologies.map((tech) => {
          return <Badge title={tech} />
        })}
      </div>
    </div>
  )
}
