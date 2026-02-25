'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const TYPING_STRINGS = [
'Desenvolvedor Web',
'Front-end',
'Acessibilidade Web e SEO',
'Fanático por desempenho',
'Design Limpo'];


const CODE_SNIPPET = `// my-portfolio
const app = createServer({
  framework: 'Next.js 16',
  runtime: 'Node.js',
  deploy: 'Vercel',
})

app.use(middleware({
  auth: true,
  cache: 'stale-while-revalidate',
}))

export default app.listen(3000)`;

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [stringIdx, setStringIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const floatCard1Ref = useRef<HTMLDivElement>(null);
  const floatCard2Ref = useRef<HTMLDivElement>(null);
  const floatCard3Ref = useRef<HTMLDivElement>(null);

  // Typing animation
  useEffect(() => {
    const current = TYPING_STRINGS[stringIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 65);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setStringIdx((i) => (i + 1) % TYPING_STRINGS.length);
    }

    setTypedText(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, stringIdx]);

  // Cursor parallax on hero
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      if (floatCard1Ref.current) {
        floatCard1Ref.current.style.transform = `translateY(-12px) rotate(-3deg) translate(${x * 18}px, ${y * 12}px)`;
      }
      if (floatCard2Ref.current) {
        floatCard2Ref.current.style.transform = `translateY(-8px) rotate(4deg) translate(${x * -14}px, ${y * 10}px)`;
      }
      if (floatCard3Ref.current) {
        floatCard3Ref.current.style.transform = `translateY(-6px) rotate(-2deg) translate(${x * 10}px, ${y * -8}px)`;
      }
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP headline reveal
  useEffect(() => {
    let gsapInstance: any;
    let ctx: any;

    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      ctx = gsap.context(() => {
        // Stagger in hero elements
        gsap.fromTo(
          '.hero-line',
          { y: 100, opacity: 0, skewY: 3 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.1,
            ease: 'power4.out',
            stagger: 0.12,
            delay: 0.3
          }
        );

        gsap.fromTo(
          '.hero-sub',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.7 }
        );

        gsap.fromTo(
          '.hero-cta',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.0 }
        );

        gsap.fromTo(
          '.hero-stats',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 1.1 }
        );

        // Float cards entrance
        gsap.fromTo(
          '.float-card',
          { scale: 0.8, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'back.out(1.7)',
            stagger: 0.2,
            delay: 0.8
          }
        );
      });
    };

    initGSAP();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden animated-gradient grid-pattern pt-24">
      
      {/* Ambient blobs */}
      <div
        className="blob absolute w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #7C3AED, #06B6D4)',
          top: '-10%',
          right: '-10%',
          filter: 'blur(80px)'
        }} />
      
      <div
        className="blob absolute w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #A78BFA, #7C3AED)',
          bottom: '5%',
          left: '-5%',
          filter: 'blur(60px)'
        }} />
      

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left — Text content */}
          <div className="flex flex-col">
            {/* Status badge */}
            <div className="hero-sub flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-violet border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
                </span>
                <span className="font-mono text-xs text-green font-medium">Aberto a novas oportunidades</span>
              </div>
              <span className="font-mono text-xs text-foreground-subtle">São Paulo, SP</span>
            </div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <h1 className="hero-line font-display text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.9] tracking-[-0.04em] text-foreground">
                Construindo
              </h1>
            </div>
            <div className="overflow-hidden mb-2">
              <h1 className="hero-line font-display text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.9] tracking-[-0.04em] gradient-text-warm italic">
                Produtos
              </h1>
            </div>
            <div className="overflow-hidden mb-8">
              <h1 className="hero-line font-display text-[clamp(3.5rem,8vw,7rem)] font-black leading-[0.9] tracking-[-0.04em] text-foreground">
                Digitais.
              </h1>
            </div>

            {/* Typing subtitle */}
            <div className="hero-sub flex items-center gap-3 mb-6">
              <span className="font-mono text-sm text-foreground-subtle">{'>'}</span>
              <span className="font-mono text-base md:text-lg text-primary-light font-medium">
                {typedText}
                <span className="typing-cursor" />
              </span>
            </div>

            <p className="hero-sub text-foreground-muted text-lg leading-relaxed max-w-md mb-10">
              2 anos desenvolvendo aplicações web. Apaixonado por código, interface e experiências desafiadoras!
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="magnetic-btn group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-primary text-white font-semibold text-base transition-all duration-300 hover:bg-primary/90 glow-violet">
                
                Ver projetos
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform duration-300">
                  
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="magnetic-btn inline-flex items-center gap-3 px-7 py-4 rounded-full glass border border-[rgba(255,255,255,0.08)] text-foreground-muted hover:text-foreground font-semibold text-base transition-all duration-300 hover:border-primary/30">
                
                Entrar em contato
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 flex-wrap">
              {[
              { value: '90+', label: 'Contribuições' },
              { value: '5+', label: 'Certificados' }].
              map((stat) =>
              <div key={stat.label} className="hero-stats">
                  <p className="font-display text-2xl font-black gradient-text">{stat.value}</p>
                  <p className="font-mono text-xs text-foreground-subtle mt-0.5">{stat.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right — Floating cards */}
          <div className="relative h-[520px] hidden lg:block">
            {/* Code card */}
            <div
              ref={floatCard1Ref}
              className="float-card glass absolute top-0 left-8 w-80 rounded-2xl p-5 shadow-card transition-transform duration-300"
              style={{ '--rot': '-3deg' } as React.CSSProperties}>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber/70" />
                <div className="w-3 h-3 rounded-full bg-green/70" />
                <span className="font-mono text-xs text-foreground-subtle ml-2">server.ts</span>
              </div>
              <pre className="font-mono text-xs leading-relaxed overflow-hidden">
                {CODE_SNIPPET.split('\n').map((line, i) =>
                <div key={i} className="flex gap-3">
                    <span className="text-foreground-subtle select-none w-4 text-right shrink-0">{i + 1}</span>
                    <span
                    dangerouslySetInnerHTML={{
                      __html: line.
                      replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>').
                      replace(/('.*?'|".*?")/g, '<span class="code-string">$1</span>').
                      replace(/\b(const|export|default|true)\b/g, '<span class="code-keyword">$1</span>').
                      replace(/\b(createServer|use|middleware|listen)\b/g, '<span class="code-fn">$1</span>').
                      replace(/\b(\d+)\b/g, '<span class="code-num">$1</span>')
                    }} />
                  
                  </div>
                )}
              </pre>
            </div>

            {/* Metrics card */}
            <div
              ref={floatCard2Ref}
              className="float-card glass-violet absolute top-8 right-0 w-52 rounded-2xl p-5 shadow-card transition-transform duration-300"
              style={{ '--rot': '4deg' } as React.CSSProperties}>
              
              <p className="font-mono text-xs text-foreground-subtle mb-3">Performance</p>
              {[
              { label: 'Front-end', value: 85, color: '#10D9A0' },
              { label: 'Back-end', value: 50, color: '#A78BFA' },
              { label: 'DevOPS', value: 20, color: '#06B6D4' }].
              map((m) =>
              <div key={m.label} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-[10px] text-foreground-subtle">{m.label}</span>
                    <span className="font-mono text-[10px] font-bold" style={{ color: m.color }}>{m.value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                    <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${m.value}%`, background: m.color }} />
                  
                  </div>
                </div>
              )}
            </div>

            {/* Card: Stack`s */}
            <div
              ref={floatCard3Ref}
              className="float-card glass absolute bottom-16 left-16 w-64 rounded-2xl p-5 shadow-card transition-transform duration-300"
              style={{ '--rot': '-2deg' } as React.CSSProperties}>
              
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-xs text-foreground-subtle">Stack`s</p>
                <span className="font-mono text-[10px] text-green bg-green/10 px-2 py-0.5 rounded-full">2026</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'PostgreSQL', 'Git'].map((tech) =>
                <span
                  key={tech}
                  className="font-mono text-[10px] px-2 py-1 rounded-md glass-violet text-primary-light border border-primary/20">
                  
                    {tech}
                  </span>
                )}
              </div>
            </div>

            {/* Avatar */}
            <div className="absolute bottom-0 right-8 w-40 h-40 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow-violet">
              <AppImage
                src="/images/Vitor.jpeg"
                alt="Retrato do Albert Vitor"
                className="w-full h-full object-cover" />              
            </div>
          </div>
        </div>
      </div>
    </section>);

}