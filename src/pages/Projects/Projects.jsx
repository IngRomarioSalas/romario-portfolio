
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./Projects.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "Portfolio Interactivo",
    description: "Mi portafolio personal con efectos visuales avanzados, partículas animadas y diseño responsivo moderno.",
    image: "https://via.placeholder.com/400x240/2563eb/ffffff?text=Portfolio+Interactivo",
    demoLink: "https://github.com",
    githubLink: "https://github.com",
    technologies: ["React", "CSS3", "JavaScript", "Responsive"],
    category: "frontend",
    badge: "Destacado",
    badgeColor: "#f43f5e",
    status: "completed",
    year: "2024"
  },
  {
    title: "Sistema de Gestión Empresarial",
    description: "Aplicación completa para gestión de inventarios, ventas y reportes con dashboard administrativo en tiempo real.",
    image: "https://via.placeholder.com/400x240/7c3aed/ffffff?text=Sistema+Gestion",
    demoLink: "https://github.com",
    githubLink: "https://github.com",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    badge: "Comercial",
    badgeColor: "#10b981",
    status: "completed",
    year: "2024"
  },
  {
    title: "App de Predicciones Deportivas",
    description: "Plataforma que consume APIs deportivas para análisis estadístico y generación de pronósticos inteligentes.",
    image: "https://via.placeholder.com/400x240/f59e0b/ffffff?text=Predicciones+Deportivas",
    demoLink: "#",
    githubLink: "https://github.com",
    technologies: ["React", "Python", "APIs", "Machine Learning"],
    category: "ai",
    badge: "IA",
    badgeColor: "#3b82f6",
    status: "development",
    year: "2024"
  },
  {
    title: "E-commerce Moderno",
    description: "Tienda online completa con carrito de compras, pasarela de pagos, gestión de productos y panel de administración.",
    image: "https://via.placeholder.com/400x240/ec4899/ffffff?text=E-commerce",
    demoLink: "#",
    githubLink: "https://github.com",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "fullstack",
    badge: "Pro",
    badgeColor: "#8b5cf6",
    status: "completed",
    year: "2024"
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control con visualización de datos en tiempo real, gráficos interactivos y reportes automatizados.",
    image: "https://via.placeholder.com/400x240/06b6d4/ffffff?text=Dashboard+Analytics",
    demoLink: "#",
    githubLink: "https://github.com",
    technologies: ["React", "D3.js", "Node.js", "WebSockets"],
    category: "frontend",
    badge: "Nuevo",
    badgeColor: "#34d399",
    status: "completed",
    year: "2023"
  },
  {
    title: "Chatbot Inteligente",
    description: "Asistente virtual con procesamiento de lenguaje natural y integración con múltiples plataformas de mensajería.",
    image: "https://via.placeholder.com/400x240/14b8a6/ffffff?text=Chatbot+IA",
    demoLink: "#",
    githubLink: "https://github.com",
    technologies: ["Python", "OpenAI", "FastAPI", "Docker"],
    category: "ai",
    badge: "Experimental",
    badgeColor: "#f59e0b",
    status: "development",
    year: "2024"
  }
];

const categories = [
  { id: 'all', name: '🚀 Todos', count: projects.length },
  { id: 'frontend', name: '🎨 Frontend', count: projects.filter(p => p.category === 'frontend').length },
  { id: 'fullstack', name: '⚡ Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'ai', name: '🤖 IA & ML', count: projects.filter(p => p.category === 'ai').length }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      if (selectedCategory === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === selectedCategory));
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    if (categoryId !== selectedCategory) {
      setSelectedCategory(categoryId);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'development': return '🚧';
      case 'planning': return '📋';
      default: return '🔧';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'development': return 'En desarrollo';
      case 'planning': return 'Planificación';
      default: return 'En progreso';
    }
  };

  return (
    <Layout>
      <section className="projects">
        {/* Header */}
        <div className="projects-header">
          <h1 className="projects-title">
            <span className="title-icon">💼</span>
            Mis Proyectos
          </h1>
          <p className="projects-subtitle">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web moderno, 
            inteligencia artificial y soluciones innovadoras.
          </p>
        </div>

        {/* Stats */}
        <div className="projects-stats">
          <div className="stat-card">
            <span className="stat-number">{projects.length}</span>
            <span className="stat-label">Proyectos</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{projects.filter(p => p.status === 'completed').length}</span>
            <span className="stat-label">Completados</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{new Set(projects.flatMap(p => p.technologies)).size}</span>
            <span className="stat-label">Tecnologías</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
              <span className="category-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`projects-container ${isLoading ? 'loading' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={`${project.title}-${index}`}
            >
              {/* Badge */}
              {project.badge && (
                <span 
                  className="project-badge" 
                  style={{ backgroundColor: project.badgeColor }}
                >
                  {project.badge}
                </span>
              )}

              {/* Status */}
              <div className="project-status">
                <span className="status-icon">{getStatusIcon(project.status)}</span>
                <span className="status-text">{getStatusText(project.status)}</span>
                <span className="project-year">{project.year}</span>
              </div>

              {/* Image */}
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="image-overlay">
                  <div className="overlay-buttons">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-btn demo-btn"
                    >
                      👁️ Ver Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-btn github-btn"
                    >
                      💻 Código
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a 
                    className="action-btn primary" 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    🚀 Demo en vivo
                  </a>
                  <a 
                    className="action-btn secondary" 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>📂 Repositorio</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && !isLoading && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No hay proyectos en esta categoría</h3>
            <p>Prueba seleccionando otra categoría o revisa pronto para nuevos proyectos.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="projects-cta">
          <h3>¿Tienes un proyecto en mente?</h3>
          <p>Trabajemos juntos para crear algo increíble</p>
          <a href="/contacto" className="cta-btn">
            💬 Hablemos
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
