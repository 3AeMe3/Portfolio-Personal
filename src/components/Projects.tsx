import React, { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Landing Animada ",
      description: "Landing page animada con Astro y Gsap.",
      fullDescription:
        "Una lading page creada para practicar la integración de animaciones con GSAP en Astro y explorar el uso de TailwindCSS para el diseño responsive",
      image:
        "https://github.com/3AeMe3/Mendro-Landing-Page/raw/develop/public/screenshot.png",
      technologies: ["Astro", "Gsap", "TailwindCSS"],
      category: "landing",
      demoUrl: "https://mendro.netlify.app/",
      githubUrl: "https://github.com/3AeMe3/Mendro-Landing-Page",
      features: [
        "Recursos optimizados",
        "Animaciones fluidas",
        "Responsive design",
        "SEO optimizado",
      ],
    },
    {
      id: 2,
      title: "Tic Tac Toe",
      description: "Recreacion del juego Tic Tac Toe con React",
      fullDescription:
        "Proyecto desarrollado como práctica de fundamentos de React. Es una versión interactiva del clásico juego “Tres en Raya” donde dos jugadores pueden turnarse para marcar X y O en un tablero de 3x3.",
      image:
        "https://github.com/3AeMe3/Tic-Tac-Toe/raw/main/public/screenshot-ttt.png",
      technologies: ["React", "CSS"],
      category: "app",
      demoUrl: "https://ttt-videogame.netlify.app/",
      githubUrl: "https://github.com/3AeMe3/Tic-Tac-Toe",
      features: [
        "Juego interactivo",
        "Turnos dinámicos",
        "Detección de ganar o empate",
        "Componentes reutilizables en React ",
        "Historial de movimientos",
        "Cambio de nombre al jugador",
      ],
    },
    {
      id: 3,
      title: "Portfolio Personal",
      description:
        "Sitio web para mostrar mis proyectos, habilidades y experiencia",
      fullDescription:
        "Un sitio web desarrollado para mostrar mis capacidades como frontend. Diseñado con un enfoque moderno, animaciones y un diseño responsive para ofrecer una experiencia clara y atractiva :) ",
      image:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
      ],
      category: "web",
      demoUrl: "https://demo-restaurant.example.com",
      githubUrl: "https://github.com/example/restaurant",
      features: [
        "Sistema de reservas",
        "Menú interactivo",
        "Galería de fotos",
        "Integración con Google Maps",
        "Multi-idioma",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Web Apps" },
    { id: "app", label: "Aplicaciones" },
    { id: "landing", label: "Landing Pages" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Proyectos
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Una selección de proyectos que demuestran mis habilidades técnicas y
            creatividad.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-white text-slate-800 rounded-lg font-medium hover:bg-slate-100 transition-colors duration-300"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
