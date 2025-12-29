import {Code2, Palette, Rocket, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "React, Next.js, Node.js, TypeScript y más tecnologías modernas.",
    color: "text-primary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Diseño de interfaces intuitivas y experiencias de usuario memorables.",
    color: "text-accent",
  },
  {
    icon: Rocket,
    title: "Apps Móviles",
    description: "Desarrollo nativo y cross-platform con React Native y Flutter.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Game Dev",
    description: "Creación de videojuegos con Unity, Godot y Unreal Engine.",
    color: "text-green-400",
  },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "React Native", "Flutter", "Unity", "C#", "PostgreSQL",
  "MongoDB", "Firebase", "AWS", "Docker", "Git"
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container relative z-10 px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column - About text */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Sobre <span className="text-gradient-primary">Mí</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy un desarrollador apasionado con más de 5 años de experiencia creando 
                soluciones digitales innovadoras. Mi enfoque combina creatividad técnica 
                con un profundo entendimiento de las necesidades del usuario.
              </p>
              <p>
                Desde aplicaciones web empresariales hasta videojuegos indie, cada proyecto 
                es una oportunidad para superar límites y entregar experiencias excepcionales.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-elegant opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`mb-4 inline-flex rounded-lg bg-secondary p-3 ${skill.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}