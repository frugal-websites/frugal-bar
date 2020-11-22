import React from "react"
import * as styles from "./container.module.scss"

export default function Container({ children }) {
  return <div className={styles.Container}>{children}</div>
}
