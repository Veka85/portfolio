import React from 'react'
import Button from './Button'
import styles from '../styles/components/ProjectCard.module.css'

export default function ProjectCard({ title, description, technologies, codeUrl, demoUrl, variant }) {
  const cardClass = `${styles.card} ${variant === 'featured' ? styles.card_featured : ''}`

  return (
    <article className={cardClass}>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>
        <ul className={styles.card__tech} aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className={styles.card__techItem}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className={styles.card__actions}>
        {codeUrl && <Button href={codeUrl} variant="secondary">View Code</Button>}
        <Button href={demoUrl} variant="primary">Visit Website</Button>
      </div>
    </article>
  )
}
