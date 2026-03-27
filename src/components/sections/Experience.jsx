import { useLanguage } from "../../context/LanguageContext";
import ExperienceCard from "../common/experience-card";
import "../../styles/experience.css";

const Experience = () => {
  const { t } = useLanguage();
  const jobs = t.experience.jobs;

  return (
    <section className="experience" id="experience">
      
      <h2 className="section-title"> {t.experience.title} </h2>

      {jobs.map((job, index) => ( <ExperienceCard key={index} job={job} /> ))}

    </section>
  );
};

export default Experience;