import type { Project } from "../types/project";
import { useLanguage } from "../context/LanguageContext";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();

  return (
    <article className="project-card">
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__headline">{project.headline[lang]}</p>
      <p className="project-card__description">{project.description[lang]}</p>

      <ul className="project-card__tags">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="project-card__links">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          {lang === "en" ? "View Code" : "Ver Código"}
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            {lang === "en" ? "Live Demo" : "Demo en Vivo"}
          </a>
        )}
      </div>
    </article>
  );
}