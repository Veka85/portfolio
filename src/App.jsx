import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import BlogSection from './components/sections/BlogSection'
import ContactSection from './components/sections/ContactSection'
import BlogPostPage from './components/BlogPostPage'
import { blogPostsContent } from './data/content'

const BLOG_HASH_PREFIX = '#/blog/'

function getCurrentSlug() {
  if (typeof window === 'undefined') return ''
  const hash = window.location.hash || ''
  if (!hash.startsWith(BLOG_HASH_PREFIX)) return ''
  return decodeURIComponent(hash.slice(BLOG_HASH_PREFIX.length)).trim()
}

function App() {
  const [currentSlug, setCurrentSlug] = useState(getCurrentSlug)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentSlug(getCurrentSlug())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const post = blogPostsContent[currentSlug]

  if (post) {
    return <BlogPostPage post={post} />
  }

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
