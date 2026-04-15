'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { socials } from '../lib/data'
import type { Social } from '../types'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.contact-reveal').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%' },
          opacity: 0, y: 24, duration: 0.7, delay: i * 0.1, ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contato"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,60px)',
        background: 'var(--bg2)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="contact-reveal" style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 11,
          color: 'var(--accent)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
        }}>
          <span style={{ color: 'var(--muted)' }}>04 —</span> Contato
        </div>

        <h2 className="contact-reveal" style={{
          fontSize: 'clamp(32px,5vw,56px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
        }}>
          Vamos construir<br />algo juntos?
        </h2>

        <p className="contact-reveal" style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 14,
          color: 'var(--muted)',
          marginTop: 20,
          lineHeight: 1.7,
        }}>
          Aberto a projetos freelance, oportunidades full-time e<br />
          colaborações criativas interessantes.
        </p>

        <EmailLink />

        <div className="contact-reveal" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
          {socials.map((s) => <SocialLink key={s.label} social={s} />)}
        </div>
      </div>
    </section>
  )
}

function EmailLink() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="mailto:albertvitor_1@hotmail.com"
      className="contact-reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        fontFamily: "'Space Mono',monospace",
        fontSize: 'clamp(18px,3.5vw,42px)',
        color: 'var(--accent)',
        textDecoration: 'none',
        margin: '48px 0',
        letterSpacing: '-0.02em',
        position: 'relative',
      }}
    >
      albertvitor_1@hotmail.com
      <span style={{
        position: 'absolute',
        bottom: -4, left: 0, right: 0,
        height: 1,
        background: 'var(--accent)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0.2)',
        transformOrigin: 'left',
        transition: 'transform 0.4s',
        display: 'block',
      }} />
    </a>
  )
}

function SocialLink({ social }: { social: Social }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 12,
        color: hovered ? 'var(--accent)' : 'var(--muted)',
        textDecoration: 'none',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '10px 20px',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        transition: 'border-color 0.2s, color 0.2s',
      }}
    >
      {social.label}
    </a>
  )
}
