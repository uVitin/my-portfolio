'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stats } from '../lib/data'
import type { Stat } from '../types'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        scrollTrigger: { trigger: '.about-title', start: 'top 88%' },
        opacity: 0, y: 24, duration: 0.8, ease: 'power3.out',
      })
      gsap.from('.about-text', {
        scrollTrigger: { trigger: '.about-text', start: 'top 88%' },
        opacity: 0, x: -30, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.about-stats', {
        scrollTrigger: { trigger: '.about-stats', start: 'top 88%' },
        opacity: 0, x: 30, duration: 0.9, ease: 'power3.out',
      })

      sectionRef.current?.querySelectorAll<HTMLElement>('.stat-num').forEach((el) => {
        const val = parseInt(el.dataset.val ?? '0')
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          onEnter: () => {
            const obj = { n: 0 }
            gsap.to(obj, {
              n: val, duration: 1.5, ease: 'power2.out',
              onUpdate() { el.textContent = String(Math.round(obj.n)) },
            })
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="sobre" ref={sectionRef} style={{
      padding: 'clamp(80px,10vw,120px) clamp(24px,5vw,60px)',
      position: 'relative',
      zIndex: 1,
    }}>
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
        <span style={{ color: 'var(--muted)' }}>01 —</span> Sobre mim
      </div>

      <h2 className="about-title" style={{
        fontSize: 'clamp(32px,5vw,56px)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.05,
      }}>
        Construindo experiências<br />
        <em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>digitais</em> que importam.
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(40px,6vw,80px)',
        alignItems: 'center',
        marginTop: 60,
      }}>
        <div className="about-text">
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--muted)', marginBottom: 20 }}>
            Sou um desenvolvedor <strong style={{ color: 'var(--text)' }}>full stack apaixonado</strong> por criar
            interfaces modernas e experiências excepcionais. Trabalho na interseção entre{' '}
            <span style={{ color: 'var(--accent)' }}>design e engenharia</span>.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--muted)', marginBottom: 20 }}>
            Com mais de <strong style={{ color: 'var(--text)' }}>1 ano de experiência</strong>, construíndo produtos
            com foco em{' '}
            <span style={{ color: 'var(--accent)' }}>performance, acessibilidade</span> e código limpo.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--muted)' }}>
            Quando não estou codando, estou explorando novas tecnologias,{' '}
            <strong style={{ color: 'var(--text)' }}>contribuindo para open source</strong> ou tomando bastante café.
          </p>
        </div>

        <div className="about-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {stats.map((s) => <StatCard key={s.label} stat={s} />)}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }: { stat: Stat }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(0,245,196,0.3)' : 'var(--border)'}`,
        padding: 28,
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 2,
        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.4s',
      }} />
      <div
        className="stat-num"
        data-val={stat.value}
        style={{
          fontFamily: "'Space Mono',monospace",
          fontSize: 42,
          fontWeight: 700,
          color: 'var(--accent)',
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        0
      </div>
      <div style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 11,
        color: 'var(--muted)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        {stat.label}
      </div>
    </div>
  )
}