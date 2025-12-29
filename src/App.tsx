import { projects } from './data/projects';
import { ProjectCard } from './components/ProjectCard';

// Nota: Ya no importamos './App.css' porque usaremos Tailwind directo

function App() {
  return (
    // 1. Contenedor principal: Fondo gris muy suave y altura mínima de toda la pantalla
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* 2. Wrapper para centrar el contenido y limitar el ancho máximo */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header: Centrado y con tipografía grande */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl tracking-tight">
            Alonso's <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Driving digital transformation through innovative technological solutions.
          </p>
        </header>

        {/* Grid: 
            - grid-cols-1 (1 columna en celulares)
            - md:grid-cols-2 (2 columnas en tablets)
            - lg:grid-cols-3 (3 columnas en PC grandes)
            - gap-8 (Espacio entre tarjetas)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default App