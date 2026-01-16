import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import "./index.css";

const ContactCard = ({
  label,
  value,
  href,
  target = "_blank",
  copy = false,
}) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // silencioso a propósito
    }
  };

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

      {copy && (
        <button
          className={`copy-btn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          aria-label={t.contact.copy}
        >
          {copied ? t.contact.copied : t.contact.copy}
        </button>
      )}
    </div>
  );
};

export default ContactCard;
