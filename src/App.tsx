import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { AboutSection } from "./components/sections/AboutSection";
import {Footer} from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;