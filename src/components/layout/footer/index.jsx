import { useLanguage } from "../../../context/LanguageContext";
import "./index.css";

const Footer = () => {

  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        
        <span className="footer-name">{t.footer.name}</span>
        <span className="footer-role">{t.footer.role}</span>
        <span className="footer-stack">{t.footer.stack}</span>
        <span className="footer-built">{t.footer.built}</span>

        <div className="footer-links">
          <a
            href="https://github.com/emamontenegro"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/emanuel-montenegro-12a5943a5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        
        <span className="footer-copyright">© {new Date().getFullYear()} Emanuel Montenegro</span>
      </div>
    </footer>
  );
};

export default Footer;
