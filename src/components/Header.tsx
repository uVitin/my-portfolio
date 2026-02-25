'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from './ui/AppLogo';

const navLinks = [
  { label: 'Inicio', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 glass border-b border-[rgba(255,255,255,0.06)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <AppLogo
          text="Albert Vitor"
          size={28}
          className="font-mono text-primary-light font-semibold tracking-tight"
        />

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              onClick={() => setActive(link?.href)}
              className={`hover-underline font-mono text-sm font-medium transition-colors duration-200 ${
                active === link?.href
                  ? 'text-foreground'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
            >
              <span className="text-primary-light mr-1">{'>'}</span>
              {link?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="magnetic-btn hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-violet text-primary-light font-mono text-sm font-medium hover:bg-primary/20 transition-all duration-300 border border-primary/30"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
          </span>
          Disponível para trabalho
        </a>

        {/* Mobile menu icon */}
        <button className="md:hidden text-foreground-muted" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="15" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}