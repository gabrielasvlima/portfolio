import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'Work', hash: '#work' },
  { label: 'About', hash: '#about' },
  { label: 'Feedback', hash: '#testimonials' },
  { label: 'Get in touch', hash: '#contact', cta: true },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const prefix = location.pathname === '/' ? '' : '/'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav${open ? ' is-open' : ''}${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="nav-mark">
          Gabriela Lima
        </Link>
        <div className="nav-links" id="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={`${prefix}${item.hash}`}
              className={item.cta ? 'cta' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
