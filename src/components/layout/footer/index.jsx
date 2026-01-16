import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-name">
          © {new Date().getFullYear()} Emanuel Montenegro
        </span>

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
      </div>
    </footer>
  );
};

export default Footer;
