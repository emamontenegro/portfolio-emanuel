import "./index.css";
import ContactCard from "../../components/common/contact-card";
import { useLanguage } from "../../context/LanguageContext";

const EMAIL = "montenegroemanuel995@gmail.com";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="contact">
      <h1 className="section-title">{t.contact.title}</h1>

      <div className="contact-content">
        <p className="contact-intro">
          {t.contact.intro}
        </p>

        <div className="contact-cards">
          <ContactCard
            label="Email"
            value={EMAIL}
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
            copy
          />

          <ContactCard
            label="LinkedIn"
            value="/emanuel-montenegro"
            href="https://www.linkedin.com/in/emanuel-montenegro-12a5943a5/"
          />

          <ContactCard
            label="GitHub"
            value="/emamontenegro"
            href="https://github.com/emamontenegro"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
