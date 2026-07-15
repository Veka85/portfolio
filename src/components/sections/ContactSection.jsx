import React, { useState } from 'react'
import SectionWrapper from '../SectionWrapper'
import Button from '../Button'
import { socialLinks, contactMessage } from '../../data/content'
import styles from '../../styles/sections/ContactSection.module.css'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

const initialErrors = {
  name: '',
  email: '',
  message: '',
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState(initialErrors)

  const validate = () => {
    const newErrors = { ...initialErrors }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    const form = e.currentTarget
    const formPayload = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formPayload).toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setFormData(initialFormState)
      setErrors(initialErrors)
      window.alert('Message sent successfully.')
    } catch {
      window.alert('Something went wrong. Please try again.')
    }
  }

  return (
    <SectionWrapper id="contact" title="Contact">
      <div className={styles.contact}>
        <div className={styles.contact__info}>
          <h3 className={styles.contact__headline}>{contactMessage.headline}</h3>
          <p className={styles.contact__text}>{contactMessage.text}</p>
          <div className={styles.contact__social}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact__socialLink}
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact__socialLink}
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.email}
              className={styles.contact__socialLink}
              aria-label="Send email"
            >
              Email
            </a>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className={styles.contact__form}
          onSubmit={handleSubmit}
          noValidate
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden aria-hidden="true">
            <label>
              Do not fill this out:
              <input name="bot-field" />
            </label>
          </p>
          <div className={styles.contact__field}>
            <label htmlFor="contact-name" className={styles.contact__label}>
              Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.contact__input}
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className={styles.contact__error} role="alert">
                {errors.name}
              </span>
            )}
          </div>
          <div className={styles.contact__field}>
            <label htmlFor="contact-email" className={styles.contact__label}>
              Email
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.contact__input}
              placeholder="your@email.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className={styles.contact__error} role="alert">
                {errors.email}
              </span>
            )}
          </div>
          <div className={styles.contact__field}>
            <label htmlFor="contact-message" className={styles.contact__label}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.contact__textarea}
              placeholder="Your message"
              rows={5}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" className={styles.contact__error} role="alert">
                {errors.message}
              </span>
            )}
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </SectionWrapper>
  )
}
