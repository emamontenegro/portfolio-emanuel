import avatarBlack from "../../assets/avatar-black-cuadrado.png";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import cves from "../../assets/cvs/CV_Emanuel_Montenegro_ES.pdf";
import cven from "../../assets/cvs/CV_Emanuel_Montenegro_EN.pdf";
import "../../styles/home.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-left">
        <motion.img
          src={avatarBlack}
          alt="Emanuel Montenegro"
          className="hero-avatar"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.div
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="hero-name">Emanuel Montenegro</h1>
          <span className="hero-role">Junior Frontend Developer</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="hero-description">{t.home.description}</p>
        <div className="hero-buttons">
          <a
            href={cves}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary hero-cv"
            download
          >
            Download CV (ES)
          </a>

          <a
            href={cven}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary hero-cv"
            download
          >
            Download CV (EN)
          </a>
        </div>
      </motion.div>

      <Link to="about" smooth duration={500} className="scroll-indicator">
        <div className="arrow"></div>
      </Link>
    </motion.div>
  );
};

export default Hero;
