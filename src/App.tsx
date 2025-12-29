import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { AboutSection } from "./components/sections/AboutSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;