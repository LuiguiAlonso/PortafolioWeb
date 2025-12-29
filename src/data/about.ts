import { Code2, Palette, Rocket, Zap, type LucideIcon } from "lucide-react";

export interface Skill {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string; // Clase de Tailwind para el icono
}

export const skills: Skill[] = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "React, Next.js, Node.js, TypeScript y arquitecturas modernas.",
    color: "text-cyan-400", 
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Diseño de interfaces intuitivas y sistemas de diseño escalables.",
    color: "text-purple-400", 
  },
  {
    icon: Rocket,
    title: "Apps Móviles",
    description: "Desarrollo nativo y multiplataforma con Flutter y React Native.",
    color: "text-blue-400",
  },
  {
    icon: Zap,
    title: "Game Dev",
    description: "Lógica de videojuegos y shaders en Unity y Godot.",
    color: "text-emerald-400", 
  },
];

export const technologies = [
  "React", "TypeScript", "Next.js", "Node.js", "Python",
  "Tailwind CSS", "Flutter", "Unity", "C#", "PostgreSQL",
  "Docker", "Git", "Figma", "Firebase"
];