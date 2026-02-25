'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from './ui/AppImage';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  metrics: string;
  year: string;
  span?: 'wide' | 'tall' | 'normal';
  accent: string;
}

const PROJECTS: Project[] = [
{
  id: 1,
  title: 'Nexus Commerce',
  description: 'A headless e-commerce platform processing $2M+ monthly GMV with sub-50ms API responses and 99.99% uptime.',
  tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a259989-1766490417832.png",
  imageAlt: 'Dashboard interface showing e-commerce analytics with dark theme and colorful charts',
  metrics: '$2M+ GMV / mo',
  year: '2025',
  span: 'wide',
  accent: '#7C3AED'
},
{
  id: 2,
  title: 'Orbit Analytics',
  description: 'Real-time data visualization platform for 50k+ daily active users. Custom WebSocket engine with React.',
  tags: ['React', 'D3.js', 'WebSockets', 'Node.js'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1437c4f01-1766116562360.png",
  imageAlt: 'Data visualization dashboard with multiple charts and graphs on dark background',
  metrics: '50k+ DAU',
  year: '2025',
  span: 'normal',
  accent: '#06B6D4'
},
{
  id: 3,
  title: 'Pulse CMS',
  description: 'Headless CMS with AI-assisted content generation, serving 200+ editorial teams globally.',
  tags: ['TypeScript', 'GraphQL', 'OpenAI', 'AWS'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_112d15507-1768656086567.png",
  imageAlt: 'Content management interface with clean minimal design and text editor on dark background',
  metrics: '200+ teams',
  year: '2024',
  span: 'normal',
  accent: '#10D9A0'
},
{
  id: 4,
  title: 'Flux Design System',
  description: '80+ component design system adopted by 12 product teams, reducing UI development time by 60%.',
  tags: ['React', 'Storybook', 'Figma API', 'CSS'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1233e4368-1767025086160.png",
  imageAlt: 'Design system component library showing various UI components in an organized grid layout',
  metrics: '60% faster dev',
  year: '2024',
  span: 'wide',
  accent: '#F59E0B'
}];


export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: any;
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          '.projects-title',
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: '.projects-title', start: 'top 85%' }
          }
        );

        gsap.fromTo(
          '.project-card',
          { y: 80, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' }
          }
        );
      }, sectionRef);
    };

    initGSAP();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="projects-title flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-xs text-primary-light tracking-widest uppercase mb-3">
              {'// 01 — Selected Work'}
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[0.9] tracking-tight text-foreground">
              Projects that
              <br />
              <span className="gradient-text italic">ship.</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground-muted hover:text-primary-light transition-colors group">
            
            View all work
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform">
              
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Bento grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project) =>
          <div
            key={project.id}
            className={`project-card group relative rounded-2xl overflow-hidden bg-bg-card border border-[rgba(255,255,255,0.06)] hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover cursor-pointer ${
            project.span === 'wide' ? 'md:col-span-2' : ''}`
            }
            style={{ minHeight: project.span === 'wide' ? '380px' : '320px' }}>
            
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-50" />
              
              </div>

              {/* Gradient overlay */}
              <div
              className="absolute inset-0 project-overlay"
              style={{
                background: `linear-gradient(135deg, ${project.accent}20 0%, transparent 60%)`
              }} />
            
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/70 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-7 h-full flex flex-col justify-end">
                {/* Top badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span
                  className="font-mono text-xs px-3 py-1 rounded-full border"
                  style={{
                    color: project.accent,
                    borderColor: `${project.accent}40`,
                    background: `${project.accent}10`
                  }}>
                  
                    {project.metrics}
                  </span>
                  <span className="font-mono text-xs text-foreground-subtle">{project.year}</span>
                </div>

                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-4 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) =>
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-md glass text-foreground-subtle border border-[rgba(255,255,255,0.08)]">
                    
                        {tag}
                      </span>
                  )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View case study</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div
              className="absolute bottom-0 right-0 w-24 h-24 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
              style={{
                background: `radial-gradient(circle at 100% 100%, ${project.accent}, transparent)`
              }} />
            
            </div>
          )}
        </div>
      </div>
    </section>);

}