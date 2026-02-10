import avatarBlack from "../../assets/avatar-black-cuadrado.png";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import cves from "../../assets/cvs/CV_Emanuel_Montenegro_ES.pdf";
import cven from "../../assets/cvs/CV_Emanuel_Montenegro_EN.pdf";
import { heroContainer, heroItem, heroAvatar } from "../../utils/motions/hero.motions";
import "../../styles/hero.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      id="home"
      className="hero"
      variants={heroContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={avatarBlack}
        alt="Emanuel Montenegro"
        className="hero-avatar"
        variants={heroAvatar}
      />

      <motion.div className="hero-text" variants={heroItem}>
        <h1 className="hero-name">Emanuel Montenegro</h1>
        <span className="hero-role">Junior Frontend Developer</span>
        <p className="hero-description">{t.home.description}</p>
      </motion.div>

      <motion.div className="hero-buttons" variants={heroItem}>
        <a
          href={cves}
          className="btn primary hero-cv"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download CV (ES)
        </a>

        <a
          href={cven}
          className="btn secondary hero-cv"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download CV (EN)
        </a>
      </motion.div>

      <Link to="about" smooth duration={500} className="scroll-indicator">
        <div className="arrow" />
      </Link>
    </motion.section>
  );
};

export default Hero;
