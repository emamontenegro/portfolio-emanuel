import { useLanguage } from "../../../context/LanguageContext";
import projectImages from "../../../assets/projects";
import "./index.css";

const ProjectCard = ({ project }) => {
  const { lang, t } = useLanguage();

  return (
    <article className="project-card">
      <img
        src={projectImages[project.image]}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description[lang]}</p>

        <ul className="project-stack">
          {project.stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={project.demo} target="_blank" rel="noreferrer">
            {t.projects.demo}
          </a>
          <a href={project.code} target="_blank" rel="noreferrer">
            {t.projects.code}
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
