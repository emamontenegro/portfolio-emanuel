import Skills from "../common/skills";
import Certifications from "../common/certifications";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/about.css";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h1 className="section-title-about">
          {t.about.title}
        </h1>

        <p className="about-text">
          {t.about.p1}
        </p>

        <p className="about-text">
          {t.about.p2}
        </p>

        <div className="about-block">
          <Skills />
        </div>

        <div className="about-block">
          <Certifications />
        </div>
      </div>
    </section>
  );
};

export default About;
