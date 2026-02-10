import { Link } from "react-scroll";
import { useLanguage } from "../../../context/LanguageContext";
import "./index.css";
import { act, useState } from "react";

const scrollProps = {
  smooth: true,
  duration: 300,
  offset: -90,
  spy: true,
  activeClass: "active",
};

const Header = () => {
  const { t, lang, toggleLanguage } = useLanguage();

  const [activeNav, setActiveNav] = useState('home');

  return (
    <header className="header">
      <Link to="home" 
            className="logo"
            {...scrollProps}
            onClick={() => setActiveNav('home')}
            >
        EM
      </Link>

      <nav className="nav">
        <Link to="home" 
              {...scrollProps}
              onSetActive={() => setActiveNav('home')}
              onClick={() => setActiveNav('home')}
              className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}>
          {t.header.home}
        </Link>

        <Link to="about" 
              {...scrollProps}
              onSetActive={() => setActiveNav('about')}
              onClick={() => setActiveNav('about')}
              className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}>
          {t.header.about}
        </Link>

        <Link to="projects" 
              {...scrollProps}
              onSetActive={() => setActiveNav('projects')}
              onClick={() => setActiveNav('projects')}
              className={`nav-link ${activeNav === 'projects' ? 'active' : ''}`}>
          {t.header.projects}
        </Link>

        <Link to="contact" 
              {...scrollProps}
              onSetActive={() => setActiveNav('contact')}
              onClick={() => setActiveNav('contact')}
              className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`}>
          {t.header.contact}
        </Link>
      </nav>

      <button className="lang-switch" onClick={toggleLanguage}>
        {lang.toUpperCase()}
      </button>
    </header>
  );
};

export default Header;
