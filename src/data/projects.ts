import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: "Space Explorer", 
        description: "Juego de exploración espacial...",
        techStack: ["Unity", "C#", "Photon"],
        category: "GAME",
        status: "PRODUCTION", 
        link: "https://youtube.com"
    },
    {
        id: 2,
        title: "App de Gestión", 
        description: "Aplicación móvil para...",
        techStack: ["Flutter", "Dart"],
        category: "MOBILE",
        status: "MVP",       
        link: "https://github.com"
    },
    {
        id: 3,
        title: "Dashboard SaaS", 
        description: "Panel de control para...",
        techStack: ["React", "Tailwind", "Vite"],
        category: "WEB",
        status: "PROTOTYPE", 
        link: "#"
    }
];