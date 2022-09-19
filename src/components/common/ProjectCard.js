import React from "react"
import styles from "./ProjectCard.module.css"

export default function ProjectCard(props) {
  return (
    <div
      style={{ border: "1px solid red", width: "100%", height: "100%" }}
      className={styles.cardContainer}
    >
      <h3>{props.title}</h3>
      <h6>{props.description}</h6>
    </div>
  )
}
