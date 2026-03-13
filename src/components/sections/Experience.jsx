import { useLanguage } from "../../context/LanguageContext";
import "../../styles/experience.css";

const Experience = () => {
  const { t } = useLanguage();
  const job = t.experience.agronomy;

  return (
    <section className="experience" id="experience">
      
      <h2 className="section-title">{t.experience.title}</h2>

      <div className="experience-card">

        <div className="experience-header">

          <h3 className="experience-role">{job.role}</h3>

          <p className="experience-company">{job.company} · {job.period}</p>

          <p className="experience-location">{job.location}</p>

        </div>

        <p className="experience-description">{job.description}</p>

        <ul className="experience-tasks">
          {job.tasks.map((task, index) => (<li key={index}>{task}</li>))}
        </ul>

        <p className="experience-skills">{job.skills}</p>

      </div>

    </section>
  );
};

export default Experience;