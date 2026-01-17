import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import certifications from "../../../data/certifications.json";
import certificationImages from "../../../assets/certifications";
import Modal from "../../common/modal";
import "./index.css";

const Certifications = () => {
  const { lang, t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certifications">
      <h2 className="section-title">
        {t.certifications.title}
      </h2>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            className="cert-card"
            onClick={() => setSelectedCert(cert)}
          >
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

      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      >
        {selectedCert && (
          <img
            src={certificationImages[selectedCert.image]}
            alt={selectedCert.title[lang]}
          />
        )}
      </Modal>
    </section>
  );
};

export default Certifications;
