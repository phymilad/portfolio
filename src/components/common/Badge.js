import React from "react"
import styles from "./Badge.module.css"

export default function Badge(props) {
  return <div className={styles.container}>{<p>{props.title}</p>}</div>
}
