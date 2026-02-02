import ContactCard from "../common/contact-card";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/contact.css";

const EMAIL = "montenegroemanuel995@gmail.com";
const PHONE = "543416084290";

const Contact = () => {
  const { t } = useLanguage();

  const whatsappLink = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    t.contact.whatsapp.message
  )}`;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const emailLink = isMobile
    ? `mailto:${EMAIL}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

  return (
    <section className="contact" id="contact">
      <h1 className="section-title">{t.contact.title}</h1>

      <div className="contact-content">
        <p className="contact-intro">
          {t.contact.intro}
        </p>

        <div className="contact-cards">
          <ContactCard
            label="Email"
            value={EMAIL}
            href={emailLink}
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

          <ContactCard
            label={t.contact.whatsapp.label}
            value={t.contact.whatsapp.value}
            href={whatsappLink}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
