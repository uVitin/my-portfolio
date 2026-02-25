'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let ctx: any;
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          '.contact-headline',
          { y: 80, opacity: 0, skewY: 2 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.1,
            ease: 'power4.out',
            stagger: 0.1,
            scrollTrigger: { trigger: '.contact-headline', start: 'top 85%' },
          }
        );

        gsap.fromTo(
          '.contact-sub',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: 0.3,
            scrollTrigger: { trigger: '.contact-headline', start: 'top 85%' },
          }
        );

        // Floating orb
        gsap.to('.contact-orb', {
          y: -30,
          duration: 4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }, sectionRef);
    };

    initGSAP();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-40 px-6 section-sep relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Floating orb */}
      <div
        className="contact-orb absolute w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, #7C3AED, #06B6D4)',
          top: '10%',
          right: '-5%',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="contact-sub font-mono text-xs text-primary-light tracking-widest uppercase mb-6">
          {'// 05 — Let\'s Build Together'}
        </p>

        <div className="overflow-hidden mb-4">
          <h2 className="contact-headline font-display text-[clamp(3rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.04em] text-foreground">
            Got a project
          </h2>
        </div>
        <div className="overflow-hidden mb-10">
          <h2 className="contact-headline font-display text-[clamp(3rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.04em] gradient-text italic">
            in mind?
          </h2>
        </div>

        <p className="contact-sub text-foreground-muted text-lg leading-relaxed max-w-lg mx-auto mb-12">
          I'm currently open to new freelance projects and full-time opportunities. Let's talk about what we can build together.
        </p>

        {/* Main CTA */}
        <div className="contact-sub flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="albertvitor_1@hotmail.com"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="magnetic-btn group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-primary text-white font-bold text-xl transition-all duration-300 hover:bg-primary/90 glow-violet"
          >
            <span>albertvitor_1@hotmail.com</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-300 ${hovered ? 'translate-x-1 -translate-y-1' : ''}`}
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Social links */}
        <div className="contact-sub flex items-center justify-center gap-8">
          {[
            { label: 'GitHub', href: 'https://github.com/uVitin' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ae-vitor/' },
            { label: 'Instagram', href: 'https://www.instagram.com/ae.vitor_/' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="hover-underline font-mono text-sm text-foreground-subtle hover:text-primary-light transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Availability indicator */}
        <div className="contact-sub mt-12 inline-flex items-center gap-3 px-5 py-3 rounded-full glass border border-green/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green" />
          </span>
          <span className="font-mono text-sm text-green font-medium">
            Available from March 2026
          </span>
        </div>
      </div>
    </section>
  );
}