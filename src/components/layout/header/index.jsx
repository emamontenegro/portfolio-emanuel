import { NavLink } from "react-router";
import { useLanguage } from "../../../context/LanguageContext";
import "./index.css";

const Header = () => {
  const { t, lang, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        EM
      </NavLink>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {t.header.home}
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {t.header.projects}
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {t.header.about}
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          {t.header.contact}
        </NavLink>
      </nav>

      <button className="lang-switch" onClick={toggleLanguage}>
        {lang.toUpperCase()}
      </button>
    </header>
  );
};

export default Header;
