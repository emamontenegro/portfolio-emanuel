import { useLanguage } from "../../../context/LanguageContext";
import "./index.css";

const ContactCard = ({
  label,
  value,
  href,
  icon,
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

        {icon && (
          <img 
            src={icon} 
            alt={label} 
            className="contact-icon-img" 
          />
        )}
        
        <div className="contact-info">
          <span className="contact-label">{label}</span>
          <span className="contact-value">{value}</span>
        </div>
      </a>
    </div>
  );
};

export default ContactCard;