'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../lib/data'
import type { Project } from '../types'

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        scrollTrigger: { trigger: '.projects-title', start: 'top 88%' },
        opacity: 0, y: 24, duration: 0.8, ease: 'power3.out',
      })
      gsap.utils.toArray<HTMLElement>('.project-item').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%' },
          opacity: 0, y: 24, duration: 0.7, ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projetos"
      ref={sectionRef}
      style={{
        padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,60px)',
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
        <span style={{ color: 'var(--muted)' }}>03 —</span> Trabalhos selecionados
      </div>

      <h2 className="projects-title" style={{
        fontSize: 'clamp(32px,5vw,56px)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.05,
      }}>
        Projetos que me<br />orgulho.
      </h2>

      <div style={{ marginTop: 60}}>
        {projects.map((project) => (
          <ProjectItem key={project.num} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectItem({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)
  const itemRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = itemRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(itemRef.current, { x: x * 0.04, y: y * 0.04, duration: 0.4, ease: 'power2.out' })
  }

  const handleMouseLeave = () => {
    setHovered(false)
    gsap.to(itemRef.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
  }

  return (
    <a
      ref={itemRef}
      href={project.href ?? '#'}
      className="project-item"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr auto',
        alignItems: 'start',
        gap: 32,
        padding: '36px 0',
        borderBottom: `1px solid ${hovered ? 'rgba(0,245,196,0.2)' : 'var(--border)'}`,
        transition: 'border-color 0.3s',
        cursor: 'pointer',
        textDecoration: 'none',
        position: 'relative',
      }}
    >
      {/* Hover glow overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(0,245,196,0.03) 0%, transparent 60%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      <div style={{
        fontFamily: "'Space Mono',monospace",
        fontSize: 13,
        color: 'var(--muted)',
        paddingTop: 4,
      }}>
        {project.num}
      </div>

      <div>
        <div style={{
          fontSize: 26,
          fontWeight: 800,
          letterSpacing: '-0.02em',
          marginBottom: 10,
          color: hovered ? 'var(--accent)' : 'var(--text)',
          transition: 'color 0.2s',
        }}>
          {project.name}
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 13,
          color: 'var(--muted)',
          lineHeight: 1.6,
          maxWidth: 480,
          marginBottom: 16,
        }}>
          {project.description}
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10,
              letterSpacing: '0.08em',
              padding: '3px 10px',
              background: 'rgba(123,97,255,0.1)',
              border: '1px solid rgba(123,97,255,0.2)',
              color: 'var(--accent2)',
              textTransform: 'uppercase',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        fontSize: 20,
        color: hovered ? 'var(--accent)' : 'var(--muted)',
        paddingTop: 4,
        transform: hovered ? 'translate(4px, -4px)' : 'translate(0, 0)',
        transition: 'color 0.2s, transform 0.3s',
      }}>
        ↗
      </div>
    </a>
  )
}
