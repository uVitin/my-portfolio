'use client';

import React, { useEffect, useRef } from 'react';

const SKILLS = [
  { name: 'React / Next.js', level: 96, category: 'Frontend' },
  { name: 'TypeScript', level: 94, category: 'Frontend' },
  { name: 'Node.js / Express', level: 90, category: 'Backend' },
  { name: 'PostgreSQL / Redis', level: 85, category: 'Backend' },
  { name: 'AWS / DevOps', level: 80, category: 'Infrastructure' },
  { name: 'UI/UX Design', level: 88, category: 'Design' },
];

const TECH_LOGOS = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'Tailwind', color: '#38BDF8' },
  { name: 'Prisma', color: '#5A67D8' },
  { name: 'Vercel', color: '#FFFFFF' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Git', color: '#F05032' },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: any;
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Title
        gsap.fromTo(
          '.skills-title',
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.skills-title', start: 'top 85%' },
          }
        );

        // Skill bars
        gsap.fromTo(
          '.skill-item',
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: { trigger: '.skills-list', start: 'top 80%' },
          }
        );

        // Animate bar widths
        barsRef.current.forEach((bar, i) => {
          if (!bar) return;
          const target = SKILLS[i].level;
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: `${target}%`,
              duration: 1.4,
              ease: 'power3.out',
              delay: 0.1 * i,
              scrollTrigger: { trigger: '.skills-list', start: 'top 80%' },
            }
          );
        });

        // Marquee is CSS-driven, just fade in
        gsap.fromTo(
          '.tech-marquee',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.tech-marquee', start: 'top 90%' },
          }
        );

        // Services cards
        gsap.fromTo(
          '.service-card',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: { trigger: '.services-grid', start: 'top 80%' },
          }
        );
      }, sectionRef);
    };

    initGSAP();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 section-sep relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 100% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="skills-title mb-20">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            {'// 02 — Technical Arsenal'}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[0.9] tracking-tight text-foreground">
            Tools I{' '}
            <span className="italic" style={{ color: '#06B6D4' }}>
              master.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills list */}
          <div className="skills-list space-y-6">
            {SKILLS.map((skill, i) => (
              <div key={skill.name} className="skill-item">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-foreground-subtle">{skill.category}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground-subtle/40" />
                    <span className="font-semibold text-foreground text-sm">{skill.name}</span>
                  </div>
                  <span className="font-mono text-sm text-primary-light font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
                  <div
                    ref={(el) => { barsRef.current[i] = el; }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, #7C3AED, #06B6D4)`,
                      width: '0%',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Services cards */}
          <div className="services-grid grid grid-cols-2 gap-4">
            {[
              {
                icon: '⚡',
                title: 'Performance',
                desc: 'Sub-second load times. Lighthouse 99+. Core Web Vitals green.',
              },
              {
                icon: '🎨',
                title: 'UI Engineering',
                desc: 'Pixel-perfect implementation from Figma to production.',
              },
              {
                icon: '🔗',
                title: 'API Design',
                desc: 'RESTful and GraphQL APIs built for scale and developer experience.',
              },
              {
                icon: '🛡️',
                title: 'Security',
                desc: 'OWASP-compliant, auth best practices, encrypted at rest.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="service-card glass rounded-2xl p-5 border border-[rgba(255,255,255,0.06)] hover:border-primary/30 transition-all duration-300 group hover:shadow-glow-sm"
              >
                <span className="text-2xl block mb-3">{s.icon}</span>
                <h4 className="font-bold text-foreground mb-2 text-sm">{s.title}</h4>
                <p className="text-foreground-subtle text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech marquee */}
        <div className="tech-marquee mt-20 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, var(--bg), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, var(--bg), transparent)' }} />
          <div className="marquee-track">
            {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-3 px-6 py-3 mx-2 rounded-full glass border border-[rgba(255,255,255,0.06)] shrink-0"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: tech.color }}
                />
                <span className="font-mono text-xs text-foreground-muted whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}