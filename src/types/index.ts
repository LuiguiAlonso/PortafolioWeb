import type { LucideIcon } from 'lucide-react';

export type ProjectCategory = 'WEB' | 'MOBILE' | 'GAME' | 'DESKTOP';

export type ProjectStatus = 'MVP' | 'PROTOTYPE' | 'PRODUCTION' | 'DEMO';

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    category: ProjectCategory; 
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

export interface CategoryTab {
    id: string;
    label: string;
    icon: LucideIcon | null; 
}

export interface Project {
    githubUrl?: string;   
    liveUrl?: string;      
    demoLinkText?: string; 
    youtubeUrl?: string;    
}