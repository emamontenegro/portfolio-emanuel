import { useLanguage } from "../../../context/LanguageContext";
import "./index.css";

const ContactCard = ({
  label,
  value,
  href,
  target = "_blank",
}) => {
  const { t } = useLanguage();

  return (
    <div className="contact-card">
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className="contact-main"
      >
        <span className="contact-label">{label}</span>
        <span className="contact-value">{value}</span>
      </a>
    </div>
  );
};

export default ContactCard;
