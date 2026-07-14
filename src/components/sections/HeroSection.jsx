import React from 'react'
import Button from '../Button'
import { siteData } from '../../data/content'
import styles from '../../styles/sections/HeroSection.module.css'

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.hero__bg} aria-hidden="true">
        <div className={styles.hero__grid} />
        <div className={styles.hero__glowA} />
        <div className={styles.hero__glowB} />
        <div className={styles.hero__glowC} />
        <div className={styles.hero__noise} />
      </div>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__headline}>{siteData.headline}</h1>
        <p className={styles.hero__name}>{siteData.name}</p>
        <p className={styles.hero__subtitle}>{siteData.subtitle}</p>
        <div className={styles.hero__badges}>
          {siteData.techBadges.map((badge) => (
            <span key={badge} className={styles.hero__badge}>{badge}</span>
          ))}
        </div>
        <div className={styles.hero__actions}>
          <Button onClick={() => scrollToSection('projects')}>View Projects</Button>
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>Contact Me</Button>
          <Button href={siteData.cvUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
            Download CV
          </Button>
        </div>
      </div>
    </section>
  )
}
