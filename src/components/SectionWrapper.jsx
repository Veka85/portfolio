import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from '../styles/components/SectionWrapper.module.css'

export default function SectionWrapper({ id, title, children, className = '', variant }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.section_visible : ''} ${variant ? styles[`section_${variant}`] : ''} ${className}`}
    >
      <div className={styles.container}>
        {title && (
          <h2 className={styles.title}>{title}</h2>
        )}
        {children}
      </div>
    </section>
  )
}
