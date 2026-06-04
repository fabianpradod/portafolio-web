import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

export function ProjectGrid() {
  const { lang } = useLanguage();

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">{lang === "en" ? "Projects" : "Proyectos"}</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}