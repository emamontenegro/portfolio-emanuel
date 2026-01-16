import { useLanguage } from "../../../context/LanguageContext";
import certifications from "../../../data/certifications.json";
import certificationImages from "../../../assets/certifications";
import "./index.css";

const Certifications = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="certifications">
      <h2 className="section-title">
        {t.certifications.title}
      </h2>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <article key={cert.id} className="cert-card">
            <img
              src={certificationImages[cert.image]}
              alt={`Certificate ${cert.title[lang]}`}
              className="cert-image"
            />

            <h3>{cert.title[lang]}</h3>
            <span className="cert-institution">{cert.institution}</span>
            <span className="cert-year">{cert.year}</span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
