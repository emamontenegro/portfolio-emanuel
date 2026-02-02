import { useLanguage } from "../../context/LanguageContext";
import projects from "../../data/projects.json";
import ProjectCard from "../common/project-card";
import "../../styles/projects.css";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="projects" id="projects">
      <h1 className="projects-title">{t.projects.title}</h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
