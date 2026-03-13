import "./index.css";
import skills from "../../../assets/skills/skills";
import { useLanguage } from "../../../context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="skills">
      <h2 className="section-title">{t.skills.title}</h2>

      {skills.map((group) => (
        <div key={group.category} className="skills-category">

          <h3 className="skills-category-title">{t.skills[group.category]}</h3>

          <div className="skills-grid">
            {group.items.map((skill) => (
              <div
                key={skill.name}
                className={`skill-card 
                ${!skill.logo ? "text-skill" : ""} 
                ${skill.name === "GitHub" ? "github" : ""}`}
              >

                {skill.logo && (<img src={skill.logo} alt={skill.name} />)}

                <span>{skill.name}</span>

              </div>
            ))}
          </div>

        </div>
      ))}
    </section>
  );
};

export default Skills;