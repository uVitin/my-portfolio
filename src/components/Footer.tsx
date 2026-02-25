import React from 'react';
import AppLogo from './ui/AppLogo';

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + links */}
        <div className="flex items-center gap-8 flex-wrap justify-center">
          <AppLogo
            text="Albert Vitor"
            size={20}
            className="font-mono text-foreground-subtle text-sm"
          />
          {links?.map((l) => (
            <a
              key={l?.href}
              href={l?.href}
              className="text-sm font-medium text-foreground-subtle hover:text-foreground transition-colors duration-200"
            >
              {l?.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          {/* Social */}
          {[
            { label: 'GitHub', href: '#', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
            { label: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
            { label: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
          ]?.map((s) => (
            <a
              key={s?.label}
              href={s?.href}
              aria-label={s?.label}
              className="text-foreground-subtle hover:text-primary-light transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={s?.icon} />
              </svg>
            </a>
          ))}

          <span className="text-foreground-subtle text-sm font-mono">
            Todos os direitos reservados © 2026
          </span>
          <a href="#" className="text-sm text-foreground-subtle hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="text-sm text-foreground-subtle hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}