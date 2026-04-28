import { Link } from "react-scroll";
import { useLanguage } from "../../../context/LanguageContext";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useState, useRef } from "react";
import ThemeToggle from "../../common/themethoggle";
import "./index.css";

const scrollProps = {
  smooth: true,
  duration: 300,
  offset: -90,
  spy: true,
  activeClass: "active",
};

const Header = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);

  useOutsideClick(headerRef, () => {
    if (menuOpen) setMenuOpen(false);
  });

  const actions = (
    <>
      <ThemeToggle />
      <button className="lang-switch" onClick={toggleLanguage}>
        {lang.toUpperCase()}
      </button>
    </>
  );

  return (
    <header className="header" ref={headerRef}>
      <Link to="home" className="logo" {...scrollProps} onClick={() => { setActiveNav("home"); setMenuOpen(false); }}>
        EM
      </Link>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>

        <Link to="home" {...scrollProps} onSetActive={() => 
          setActiveNav("home")} 
          onClick={() => { 
            setActiveNav("home"); 
            setMenuOpen(false); }} 
            className={`nav-link ${activeNav === "home" ? "active" : ""}`}>
              {t.header.home}
        </Link>
        
        <Link to="about" {...scrollProps} onSetActive={() => 
          setActiveNav("about")} 
          onClick={() => { 
            setActiveNav("about"); 
            setMenuOpen(false); }} 
            className={`nav-link ${activeNav === "about" ? "active" : ""}`}>
              {t.header.about}
        </Link>
        
        <Link to="projects" {...scrollProps} onSetActive={() => 
          setActiveNav("projects")} 
          onClick={() => { 
            setActiveNav("projects"); 
            setMenuOpen(false); }} 
            className={`nav-link ${activeNav === "projects" ? "active" : ""}`}>
              {t.header.projects}
        </Link>
        
        <Link to="experience" {...scrollProps} onSetActive={() => 
          setActiveNav("experience")} 
          onClick={() => { 
            setActiveNav("experience"); 
            setMenuOpen(false); }} 
            className={`nav-link ${activeNav === "experience" ? "active" : ""}`}>
              {t.header.experience}
        </Link>
        
        <Link to="contact" {...scrollProps} onSetActive={() => 
          setActiveNav("contact")} 
          onClick={() => { 
            setActiveNav("contact"); 
            setMenuOpen(false); }} 
            className={`nav-link ${activeNav === "contact" ? "active" : ""}`}>
              {t.header.contact}
        </Link>

        <div className="mobile-actions">
          {actions}
        </div>
      </nav>

      <div className="header-actions">
        <div className="desktop-actions">
          {actions}
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"} 
        </button>
      </div>
    </header>
  );
};

export default Header;