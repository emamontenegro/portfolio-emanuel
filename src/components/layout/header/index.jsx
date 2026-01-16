import { NavLink } from "react-router";
import { useLanguage } from "../../../context/LanguageContext";
import "./index.css";

const Header = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        EM
      </NavLink>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Projects
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Contact
        </NavLink>
      </nav>

      <button className="lang-switch" onClick={toggleLanguage}>
        {lang.toUpperCase()}
      </button>
    </header>
  );
};

export default Header;
