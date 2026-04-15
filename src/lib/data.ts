import type { NavLink, Project, SkillGroup, Stat, Social } from "../types";

export const navLinks: NavLink[] = [
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
];

export const typingPhrases: string[] = [
    "Criando interfaces incríveis.",
    "Desenvolvendo APIs robustas.",
    "Construindo aplicações do Zero ao Deploy.",
    "Transformando ideias em código.",
    "Construindo o futuro digital."
];

export const stats: Stat[] = [
    { value: 5, label: "Projetos entregues" },
    { value: 1, label: "Anos de experiência" },
    { value: 4, label: "Clientes satisfeitos" },
    { value: 67, label: "% Score" },
];

export const skillGroups: SkillGroup[] = [
  {
    icon: '⬡',
    title: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind', 'GSAP',],
  },
  {
    icon: '◈',
    title: 'Backend',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'GraphQL', 'REST'],
  }
];

export const projects: Project[] = [
  {
    num: "001",
    name: "AI-Dashboard Financeiro",
    description: "O FinanceAI Dashboard é uma aplicação web fullstack para controle financeiro pessoal, com assistente de inteligência artificial integrado. O projeto foi desenvolvido 100% sem frameworks — Node.js puro no backend e HTML/CSS/JS puro no frontend — como forma de aprofundar o entendimento dos fundamentos do desenvolvimento web.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL", "Railway", "Vercel"],
    href: "https://ai-dashboard-financeiro.vercel.app/",
  },
  {
    num: "002",
    name: "Kanban App",
    description: "Aplicação de gerenciamento de tarefas no estilo Kanban, inspirada no Trello. Desenvolvida com React no frontend e NestJS no backend, com suporte a múltiplos quadros, drag and drop, checklists e datas de vencimento.",
    tech: ["React", "TypeScript", "Tailwindcss", "Nest.js", "Node.js", "PostgreSQL", "Vercel", "Railway",],
    href: "https://kanban-app-one-sigma.vercel.app/",
  },
];

export const socials: Social[] = [
  { label: "GitHub",   href: "https://github.com/uVitin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ae-vitor/" },
  { label: "Instagram",  href: "https://www.instagram.com/ae.vitor_" },
];