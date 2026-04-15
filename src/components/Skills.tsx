'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { skillGroups } from '../lib/data'
import type { SkillGroup } from '../types'

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-title', {
        scrollTrigger: { trigger: '.skills-title', start: 'top 88%' },
        opacity: 0, y: 24, duration: 0.8, ease: 'power3.out',
      })
      gsap.utils.toArray<HTMLElement>('.skill-group-card').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 90%' },
          opacity: 0, y: 30, duration: 0.6, delay: i * 0.12, ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,60px)',
        background: 'var(--bg2)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 11,
        color: 'var(--accent)',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        marginBottom: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}>
        <span style={{ color: 'var(--muted)' }}>02 —</span> Stack técnica
      </div>

      <h2 className="skills-title" style={{
        fontSize: 'clamp(32px,5vw,56px)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.05,
      }}>
        Ferramentas que<br />domino.
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 2,
        marginTop: 60,
      }}>
        {skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ group }: { group: SkillGroup }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="skill-group-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(0,245,196,0.25)' : 'var(--border)'}`,
        padding: 32,
        transition: 'border-color 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <span style={{ fontSize: 28, marginBottom: 20, display: 'block' }}>{group.icon}</span>
      <div style={{
        fontFamily: "'Space Mono',monospace",
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--text)',
        letterSpacing: '0.05em',
        marginBottom: 20,
      }}>
        {group.title}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {group.tags.map((tag) => <SkillTag key={tag} label={tag} />)}
      </div>
    </div>
  )
}

function SkillTag({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 11,
        padding: '5px 12px',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        color: hovered ? 'var(--accent)' : 'var(--muted)',
        background: hovered ? 'rgba(0,245,196,0.05)' : 'transparent',
        letterSpacing: '0.05em',
        transition: 'border-color 0.2s, color 0.2s, background 0.2s',
        cursor: 'default',
      }}
    >
      {label}
    </span>
  )
}
