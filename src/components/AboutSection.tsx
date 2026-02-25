'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from './ui/AppImage';

const TESTIMONIALS = [
{
  quote: "Delivered a 3x performance improvement on our checkout flow. Conversion rates jumped 18% the week after launch. Genuinely rare to find someone this technically sharp.",
  name: 'Marcus Chen',
  role: 'CTO, Nexus Commerce',
  avatar: "/images/Vitor.jpeg",
  avatarAlt: 'Marcus Chen - man with glasses smiling in professional headshot',
  accent: '#7C3AED'
},
{
  quote: "Built our entire data platform from scratch in 8 weeks. The architecture was clean, the code was documented, and it scaled to 50k users without a single incident.",
  name: 'Priya Nair',
  role: 'Head of Product, Orbit Analytics',
  avatar: "/images/Vitor.jpeg",
  avatarAlt: 'Priya Nair - woman with dark hair smiling in professional photo',
  accent: '#06B6D4'
},
{
  quote: "The design system they built reduced our frontend dev time by 60%. Every component was accessible, tested, and documented. Absolute professional.",
  name: 'Jordan Williams',
  role: 'Design Lead, Flux Studio',
  avatar: "/images/Vitor.jpeg",
  avatarAlt: 'Jordan Williams - person with casual smile in outdoor setting',
  accent: '#10D9A0'
}];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: any;
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          '.about-text',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: { trigger: '.about-content', start: 'top 80%' }
          }
        );

        gsap.fromTo(
          '.about-image-wrap',
          { scale: 0.9, opacity: 0, rotateY: -10 },
          {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.about-content', start: 'top 80%' }
          }
        );

        gsap.fromTo(
          '.testimonial-card',
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: { trigger: '.testimonials-row', start: 'top 80%' }
          }
        );
      }, sectionRef);
    };

    initGSAP();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 section-sep relative overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)'
        }} />
      

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="about-text font-mono text-xs text-primary-light tracking-widest uppercase mb-3">
        </p>

        {/* About content */}
        <div className="about-content grid lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="about-text font-display text-[clamp(2.5rem,5vw,4rem)] font-black leading-[0.92] tracking-tight text-foreground">
              Contruo softwares visando
              <br />
              <span className="gradient-text italic">meu desenvolvimento.</span>
            </h2>

            <p className="about-text text-foreground-muted text-lg leading-relaxed max-w-xl">
              Residente de São Paulo Capital. Atualmente estuando desenvolvimento web e buscando a oportunidade de iniciar carreira na área de programação.
            </p>

            <p className="about-text text-foreground-muted text-base leading-relaxed max-w-xl">
              Quando não está programando, está estudando novas funcionalidades no ecossistema javascript ou pesquisando as atualidades do mundo de tecnologia.
            </p>

            {/* Quick facts */}
            <div className="about-text grid grid-cols-2 gap-4 pt-4">
              {[
              { label: 'Atualmente em:', value: 'Freelance / Open Source' },
              { label: 'Educação', value: 'Análise e Desenvolvimento de Sistemas - UNICID' },
              { label: 'Certificados', value: 'Engenheiro Front-end - EBAC - Desenvolvimento Back-end - Alura' },
              { label: 'Idiomas', value: 'Português - Ingles (Técnico)' }].
              map((f) =>
              <div key={f.label} className="glass rounded-xl p-4 border border-[rgba(255,255,255,0.06)]">
                  <p className="font-mono text-[10px] text-foreground-subtle mb-1">{f.label}</p>
                  <p className="font-semibold text-foreground text-sm">{f.value}</p>
                </div>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 about-image-wrap">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }} />
              
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-glow-violet">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_189f1d326-1766864732876.png"
                  alt="Desenvolvedor trabalhando com dois monitores, com o código visível nas telas, em um escritório escuro."
                  className="w-full h-80 object-cover" />
                
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30 shrink-0">
                    <AppImage
                      src="/images/Vitor.jpeg"
                      alt="Developer profile photo"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Albert Vitor</p>
                    <p className="font-mono text-[10px] text-foreground-subtle">Desenvolvedor Web</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
                    </span>
                    <span className="font-mono text-[10px] text-green">Dispónivel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-4">
          <p className="font-mono text-xs text-foreground-subtle tracking-widest uppercase mb-10">
            What clients say
          </p>
        </div>
        <div className="testimonials-row grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) =>
          <div
            key={t.name}
            className="testimonial-card glass rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
            
              {/* Quote mark */}
              <div
              className="text-4xl font-display font-black mb-4 leading-none"
              style={{ color: `${t.accent}60` }}>
              
                "
              </div>

              <p className="text-foreground-muted text-sm leading-relaxed mb-6 flex-1">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <div className="w-10 h-10 rounded-full overflow-hidden border shrink-0" style={{ borderColor: `${t.accent}40` }}>
                  <AppImage
                  src={t.avatar}
                  alt={t.avatarAlt}
                  className="w-full h-full object-cover" />
                
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="font-mono text-[10px] text-foreground-subtle">{t.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}