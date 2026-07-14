import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { aboutContent } from '../../data/content'
import styles from '../../styles/sections/AboutSection.module.css'

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="About Me" variant="light">
      <div className={styles.about}>
        <div className={styles.about__main}>
          <p className={styles.about__text}>{aboutContent.summary}</p>
        </div>
        <div className={styles.about__sidebar}>
          <div className={styles.about__block}>
            <h3 className={styles.about__blockTitle}>What I focus on</h3>
            <ul className={styles.about__list}>
              {aboutContent.focus.map((item) => (
                <li key={item} className={styles.about__listItem}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
