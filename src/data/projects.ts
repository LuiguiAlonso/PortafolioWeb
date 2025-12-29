import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: "Serious Game for Math Education",
        description: "Interactive learning system integrating Unity and Firebase. Applied Nielsen’s Heuristics to ensure an effective learning curve for high school students. Features real-time leaderboards and auth.",
        techStack: ["Unity", "C#", "Firebase", "Game Design"],
        category: "GAME",
        link: "#" // Aquí pondrás tu video de YouTube luego
    },
    {
        id: 2,
        title: "Independent Android Apps",
        description: "Native mobile applications developed with Flutter and published on the Google Play Store. Focused on clean architecture, state management, and Android ecosystem standards.",
        techStack: ["Flutter", "Dart", "Google Play Console", "Mobile"],
        category: "MVP",
        link: "#"
    },
    {
        id: 3,
        title: "UX/UI Audit & Interactive Prototypes",
        description: "Comprehensive audit of digital ecosystems applying UX Laws (Hick’s, Fitts’s). Created high-fidelity interactive prototypes in Figma focusing on conversion funnels and usability.",
        techStack: ["Figma", "UX Research", "Prototyping", "UCD"],
        category: "PROTOTYPE",
        link: "#" // Aquí pondrás tu link a Figma
    }
];