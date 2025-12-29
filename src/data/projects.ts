import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Plataforma completa con carrito de compras y pasarela de pagos.",
        techStack: ["React", "Node.js", "MongoDB"],
        category: "WEB",
        status: "MVP",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80", 
        githubUrl: "https://github.com",
        liveUrl: "https://google.com"
    },
    {
        id: 2,
        title: "Space Explorer Game",
        description: "Juego de exploración espacial con físicas realistas en 3D.",
        techStack: ["Unity", "C#", "Blender"],
        category: "GAME",
        status: "PRODUCTION",
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80", 
        githubUrl: "https://github.com",
        liveUrl: "#"
    },
    {
        id: 3,
        title: "Finance Tracker App",
        description: "App móvil para gestión de finanzas personales.",
        techStack: ["Flutter", "Dart", "Firebase"],
        category: "MOBILE",
        status: "PROTOTYPE",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        githubUrl: "https://github.com"
    }
];