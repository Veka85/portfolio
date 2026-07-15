import React from 'react'
import styles from '../styles/components/BlogPostPage.module.css'

export default function BlogPostPage({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <a href="#blog" className={styles.backLink}>
          ← Back to blog
        </a>

        <header className={styles.header}>
          {post.tag && <span className={styles.tag}>{post.tag}</span>}
          <time className={styles.date} dateTime={post.date}>
            {formattedDate}
          </time>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.lead}>{post.intro}</p>
          <p className={styles.lead}>{post.intro2}</p>
        </header>

        <div className={styles.body}>
          {post.sections.map((section) => (
            <section key={section.heading} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.heading}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.code && (
                <pre className={styles.codeBlock}>
                  <code>{section.code}</code>
                </pre>
              )}

              {section.notesHeading && <h3 className={styles.notesHeading}>{section.notesHeading}</h3>}
              {section.notes?.length > 0 && (
                <ul className={styles.list}>
                  {section.notes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.subsections?.map((subsection) => (
                <div key={subsection.heading} className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{subsection.heading}</h3>

                  {subsection.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {subsection.code && (
                    <pre className={styles.codeBlock}>
                      <code>{subsection.code}</code>
                    </pre>
                  )}

                  {subsection.notes?.length > 0 && (
                    <ul className={styles.list}>
                      {subsection.notes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
