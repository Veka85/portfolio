import React from 'react'
import SectionWrapper from '../SectionWrapper'
import { skillsData } from '../../data/content'
import styles from '../../styles/sections/SkillsSection.module.css'

const skillCategories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'cmsTools', label: 'CMS & Tools' },
  { key: 'other', label: 'Other' },
]

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className={styles.skills}>
        {skillCategories.map(({ key, label }) => (
          <div key={key} className={styles.skills__card}>
            <h3 className={styles.skills__categoryTitle}>{label}</h3>
            <ul className={styles.skills__list}>
              {skillsData[key].map((skill) => (
                <li key={skill} className={styles.skills__item}>
                  <span className={styles.skills__pill}>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
