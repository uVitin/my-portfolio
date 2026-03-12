import type { NavLink, Project, SkillGroup, Stat, Social } from "../types";

export const navLinks: NavLink[] = [
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
];

export const typingPhrases: string[] = [
    "Criando interfaces incríves.",
    "Desenvolvendo APIs robustas.",
    "Otimizando performance web.",
    "Transformando ideias em código.",
    "Construindo o futuro digital."
];

export const stats: Stat[] = [
    { value: 50, label: "Projetos entregues" },
    { value: 5, label: "Anos de experiência" },
    { value: 30, label: "Clientes satisfeitos" },
    { value: 99, label: "% Score" },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: '⬡',
    title: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind', 'GSAP', 'Three.js', 'WebGL'],
  },
  {
    icon: '◈',
    title: 'Backend',
    tags: ['Node.js', 'Python', 'FastAPI', 'Express', 'PostgreSQL', 'Redis', 'GraphQL', 'REST'],
  },
  {
    icon: '◎',
    title: 'Infra & DevOps',
    tags: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux', 'Git', 'Nginx'],
  },
];

export const projects: Project[] = [
  {
    num: '001',
    name: 'NovaPay Dashboard',
    description: 'Plataforma financeira completa com analytics em tempo real, gráficos interativos e gestão de transações para 50k+ usuários ativos.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    href: '#',
  },
  {
    num: '002',
    name: 'AtlasAI Platform',
    description: 'Interface conversacional com IA para automação de processos empresariais, integrando múltiplos modelos de linguagem com UX sofisticada.',
    tech: ['Next.js', 'Python', 'FastAPI', 'OpenAI'],
    href: '#',
  },
  {
    num: '003',
    name: 'Orbit Design System',
    description: 'Sistema de design completo com 80+ componentes, documentação interativa e tokens de design para equipes de produto escaláveis.',
    tech: ['TypeScript', 'Storybook', 'Figma API'],
    href: '#',
  },
  {
    num: '004',
    name: 'Flux E-commerce',
    description: 'Plataforma de e-commerce de alta performance com checkout otimizado, sistema de recomendação e painel administrativo completo.',
    tech: ['Next.js', 'Stripe', 'Redis', 'AWS'],
    href: '#',
  },
];

export const socials: Social[] = [
  { label: "GitHub",   href: "https://github.com/uVitin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ae-vitor/" },
  { label: "Instagram",  href: "https://www.instagram.com/ae.vitor_" },
];