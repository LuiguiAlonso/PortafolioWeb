export type Category = 'WEB' | 'MOBILE' | 'GAME';

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    category: Category;   
    status: string;
}

