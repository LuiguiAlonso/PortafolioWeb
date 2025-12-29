// Definimos la estructura exacta que debe tener un proyecto
export type ProjectCategory = 'MVP' | 'PROTOTYPE' | 'GAME';

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    link?: string; // El signo ? significa que es opcional (por si alguno no tiene link aún)
    imageUrl?: string;
    category: ProjectCategory;
}