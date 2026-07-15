import React, { useState, useEffect } from 'react'
import { navLinks } from '../data/navLinks'
import styles from '../styles/components/Navbar.module.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.navbar_scrolled : ''}`}
      aria-label="Main navigation"
    >
      <div className={styles.navbar__container}>
        <a href="#" className={styles.navbar__brand} onClick={(e) => handleClick(e, 'hero')}>
          <img src="/logo.png" alt="Vedran Kovacevic logo" className={styles.navbar__logo} />
        </a>
        <ul className={styles.navbar__links}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${styles.navbar__link} ${activeSection === link.id ? styles.navbar__link_active : ''}`}
                onClick={(e) => handleClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
