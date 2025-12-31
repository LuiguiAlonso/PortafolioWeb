import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: "BounceMath",
        description: "Juego Serio desarrollado como proyecto de investigacion para fortalecer el aprendizaje de matematicas. Implementé un backend con Firebase para gestionar la autenticación de usuarios, guardado de progreso en la nube y un Leaderboard basado en un sistema de recompensas. Incluye un módulo de feedback in-game para la comunicación directa con usuarios.",
        techStack: ["Unity", "C#", "Firebase"],
        category: "GAME",
        status: "PRODUCTION", 
        image: "/bounce_math.png", 
        githubUrl: "https://github.com/LuiguiAlonso/BounceMath",
        youtubeUrl: "https://youtube.com/watch?v=tu-trailsaser",
        liveUrl: "https://play.google.com/store/apps/details?id=com.bouncemath.app",
        demoLinkText: "Probar en Play Store"
    },
    // otros proyectos
];