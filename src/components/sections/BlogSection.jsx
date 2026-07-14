import React from 'react'
import SectionWrapper from '../SectionWrapper'
import BlogCard from '../BlogCard'
import { blogData } from '../../data/content'
import styles from '../../styles/sections/BlogSection.module.css'

export default function BlogSection() {
  return (
    <SectionWrapper id="blog" title="Blog">
      <div className={styles.blog}>
        {blogData.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </SectionWrapper>
  )
}
