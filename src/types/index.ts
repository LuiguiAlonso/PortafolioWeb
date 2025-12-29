import type { LucideIcon } from 'lucide-react';

export type Category = 'WEB' | 'MOBILE' | 'GAME';

export type ProjectStatus = 'MVP' | 'PROTOTYPE' | 'PRODUCTION' | 'DEMO';

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    category: Category;     
    status: ProjectStatus;   
    image: string;      
    githubUrl?: string; 
    liveUrl?: string;   
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: LucideIcon;
    ariaLabel: string;
}