'use client'

import { useEffect, useState } from 'react'
import { navLinks } from '../lib/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '24px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'border-color 0.3s, background 0.3s',
    }}>
      <a href="#" style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 14,
        color: 'var(--accent)',
        letterSpacing: '0.1em',
        textDecoration: 'none',
      }}>
        DEV<span style={{ color: 'var(--muted)' }}>.</span>PORTFOLIO
      </a>

      <ul style={{ display: 'flex', gap: 40, listStyle: 'none' }}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavLinkItem href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

function NavLinkItem({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        color: hovered ? 'var(--accent)' : 'var(--muted)',
        textDecoration: 'none',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        transition: 'color 0.2s',
        position: 'relative',
        paddingBottom: 4,
      }}
    >
      {label}
      <span style={{
        position: 'absolute',
        bottom: 0, left: 0,
        width: hovered ? '100%' : 0,
        height: 1,
        background: 'var(--accent)',
        transition: 'width 0.3s',
        display: 'block',
      }} />
    </a>
  )
}