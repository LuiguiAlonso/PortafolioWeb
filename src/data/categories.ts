import { Monitor, Smartphone, Gamepad2, AppWindow } from "lucide-react";
import type { CategoryTab } from "../types";

export const categories: CategoryTab[] = [
  { 
    id: "ALL", 
    label: "Todos", 
    icon: null 
  },
  { 
    id: "WEB", 
    label: "Web", 
    icon: Monitor 
  },
  { 
    id: "MOBILE", 
    label: "Móvil", 
    icon: Smartphone 
  },
  { 
    id: "GAME", 
    label: "Juegos", 
    icon: Gamepad2 
  },
  { 
    id: "DESKTOP", 
    label: "Escritorio", 
    icon: AppWindow 
  },
];