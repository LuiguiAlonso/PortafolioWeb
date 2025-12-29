import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "../types";

export const socialLinks: SocialLink[] = [
    {
        platform: "GitHub",
        url: "https://github.com/LuiguiAlonso", 
        icon: Github,
        ariaLabel: "Ver perfil de GitHub"
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/luiguialonsoparedes", 
        icon: Linkedin,
        ariaLabel: "Conectar en LinkedIn"
    },
    {
        platform: "Email",
        url: "luiguiparedes20@gmail.com",
        icon: Mail,
        ariaLabel: "Enviar correo electrónico"
    }
];