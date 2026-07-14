import React from 'react'
import SectionWrapper from '../SectionWrapper'
import ProjectCard from '../ProjectCard'
import { projectsData } from '../../data/content'
import styles from '../../styles/sections/ProjectsSection.module.css'

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Projects" variant="light">
      <div className={styles.projects}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
