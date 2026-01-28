import "./index.css";
import Skills from "../../components/common/skills";
import Certifications from "../../components/common/certifications";
import { useLanguage } from "../../context/LanguageContext";
import cves from "../../assets/cvs/Emanuel_Montenegro_CVes.pdf";
import cven from "../../assets/cvs/Emanuel_Montenegro_CVen.pdf";

const About = () => {
  
  const { t } = useLanguage();

  return (
    <section className="about">
      <div className="about-container">
        <h1 className="section-title-about">{t.about.title}</h1>

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

        <div className="about-cv-container">
          <a
            href={cves}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary about-cv"
            download
          >
            Download CV (ES)
          </a>

          <a
            href={cven}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary about-cv"
            download
          >
            Download CV (EN)
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
