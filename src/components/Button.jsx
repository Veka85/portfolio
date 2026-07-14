import React from 'react'
import styles from '../styles/components/Button.module.css'

export default function Button({ children, variant = 'primary', href, onClick, type = 'button', ...props }) {
  const className = `${styles.button} ${styles[variant]}`

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
