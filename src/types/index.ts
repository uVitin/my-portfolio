export interface NavLink {
    label: string
    href: string  
};

export interface Project {
    num: string
    name: string
    description: string
    tech: string[]
    href?: string
};

export interface SkillGroup {
    icon: string
    title: string
    tags: string[]
};

export interface Stat {
    value: number
    label: string
};

export interface Social {
    label: string
    href: string
};