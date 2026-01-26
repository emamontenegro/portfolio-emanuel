import "./index.css";
import Skills from "../../components/common/skills";
import Certifications from "../../components/common/certifications";
import { useLanguage } from "../../context/LanguageContext";
import cves from "../../assets/cvs/Emanuel_Montenegro_CVes.pdf";
import cven from "../../assets/cvs/Emanuel_Montenegro_CVen.pdf";

const About = () => {
  
  const { lang, t } = useLanguage();
  const cv = lang === "es" ? cves : cven;

  return (
    <section className="about">
      <div className="about-container">
        <h1 className="section-title">{t.about.title}</h1>

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

        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary about-cv"
          download
        >
          {t.about.downloadCv}
        </a>
      </div>
    </section>
  );
};

export default About;
