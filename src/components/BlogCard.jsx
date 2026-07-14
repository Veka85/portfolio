import React from 'react'
import styles from '../styles/components/BlogCard.module.css'

export default function BlogCard({ title, excerpt, slug, date, tag }) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <article className={styles.card}>
      <div className={styles.card__header}>
        {tag && <span className={styles.card__tag}>{tag}</span>}
        <time className={styles.card__date} dateTime={date}>
          {formattedDate}
        </time>
      </div>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__excerpt}>{excerpt}</p>
      <a href={`#/blog/${slug}`} className={styles.card__link}>
        Read more
      </a>
    </article>
  )
}
