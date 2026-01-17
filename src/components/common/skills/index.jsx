import "./index.css";
import skills from "../../../assets/skills/skills";
import { useLanguage } from "../../../context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="skills">
      <h2 className="section-title">{t.skills.title}</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name}
          className={`skill-card ${skill.name === "GitHub" ? "github" : ""}`}>
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
