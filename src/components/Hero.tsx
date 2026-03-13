'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { typingPhrases } from '../lib/data'

export default function Hero() {
  const tagRef      = useRef<HTMLDivElement>(null)
  const nameRef     = useRef<HTMLHeadingElement>(null)
  const typingRef   = useRef<HTMLDivElement>(null)
  const ctasRef     = useRef<HTMLDivElement>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)
  const [typedText, setTypedText] = useState('')

  // GSAP entrance
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    const words = nameRef.current?.querySelectorAll('.word') ?? []

    tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 })
      .to(nameRef.current, { opacity: 1, duration: 0.01 }, '-=0.2')
      .from(words, { yPercent: 110, duration: 0.8, stagger: 0.08, ease: 'power4.out' }, '-=0.1')
      .to(typingRef.current, { opacity: 1, duration: 0.4 }, '-=0.2')
      .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.1')
      .to(scrollRef.current, { opacity: 1, duration: 0.6 }, '-=0.3')
  }, [])

  // Typing loop
  useEffect(() => {
    let pi = 0, ci = 0, deleting = false
    let timer: ReturnType<typeof setTimeout>

    const loop = () => {
      const phrase = typingPhrases[pi]
      if (!deleting) {
        setTypedText(phrase.slice(0, ci + 1))
        ci++
        if (ci === phrase.length) {
          deleting = true
          timer = setTimeout(loop, 1800)
          return
        }
        timer = setTimeout(loop, 55)
      } else {
        setTypedText(phrase.slice(0, ci - 1))
        ci--
        if (ci === 0) {
          deleting = false
          pi = (pi + 1) % typingPhrases.length
          timer = setTimeout(loop, 400)
          return
        }
        timer = setTimeout(loop, 28)
      }
    }
    timer = setTimeout(loop, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 60px) 80px',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Grid BG */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,245,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,196,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900 }}>
        {/* Tag */}
        <div ref={tagRef} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          color: 'var(--accent)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          opacity: 0,
        }}>
          <span style={{ width: 32, height: 1, background: 'var(--accent)', display: 'block' }} />
          Desenvolvedor Web Full Stack
        </div>

        {/* Name */}
        <h1 ref={nameRef} style={{
          fontSize: 'clamp(52px, 8vw, 96px)',
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          marginBottom: 24,
          opacity: 0,
        }}>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="word" style={{ display: 'inline-block' }}>Olá,&nbsp;</span>
            <span className="word" style={{ display: 'inline-block', color: 'var(--muted)' }}>eu sou</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="word" style={{ display: 'inline-block', color: 'var(--accent)' }}>Albert&nbsp;</span>
            <span className="word" style={{ display: 'inline-block' }}>Vitor.</span>
          </span>
        </h1>

        {/* Typing */}
        <div ref={typingRef} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(16px, 2.5vw, 22px)',
          color: 'var(--muted)',
          marginBottom: 48,
          minHeight: 32,
          opacity: 0,
        }}>
          <span style={{ color: 'var(--text)' }}>{typedText}</span>
          <span style={{
            display: 'inline-block',
            width: 2, height: '1.1em',
            background: 'var(--accent)',
            marginLeft: 2,
            verticalAlign: 'text-bottom',
            animation: 'blink 0.9s step-end infinite',
          }} />
        </div>

        {/* CTAs */}
        <div ref={ctasRef} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', opacity: 0 }}>
          <a href="#projects" style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '14px 32px',
            background: 'var(--accent)',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            fontWeight: 700,
            transition: 'box-shadow 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,196,0.4)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
          >
            Ver Projetos
          </a>

          <a href="#contact" style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '13px 32px',
            background: 'transparent',
            color: 'var(--text)',
            border: '1px solid var(--border)',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'border-color 0.3s, color 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
          >
            Falar Comigo
          </a>

          <a
            href="/curriculo-albert-vitor.pdf"
            download="curriculo-albert-vitor.pdf"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '13px 28px',
              background: 'transparent',
              color: 'var(--accent)',
              border: '1px solid rgba(0,245,196,0.35)',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,245,196,0.07)'
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,196,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(0,245,196,0.35)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span style={{ animation: 'bounce-down 1.6s ease-in-out infinite' }}>↓</span>
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} style={{
        position: 'absolute',
        bottom: 40, left: 'clamp(24px, 5vw, 60px)',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: 'var(--muted)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        opacity: 0,
      }}>
        <span style={{ width: 48, height: 1, background: 'var(--muted)', position: 'relative', overflow: 'hidden', display: 'block' }}>
          <span style={{
            position: 'absolute', top: 0, left: '-100%',
            width: '100%', height: '100%',
            background: 'var(--accent)',
            animation: 'scan 2s linear infinite',
          }} />
        </span>
        scroll
      </div>
    </section>
  )
}
