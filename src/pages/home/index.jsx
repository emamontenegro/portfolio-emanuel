import avatarBlack from "../../assets/avatar-black-cuadrado.png";
import "./index.css";
import { useLanguage } from "../../context/LanguageContext";
import { NavLink } from "react-router";

const Home = () => {
  const { t } = useLanguage();

  return (
    <section className="home">
      <div className="hero">
        <div className="hero-left">
          <img
            src={avatarBlack}
            alt="Emanuel Montenegro"
            className="hero-avatar"
          />

          <div className="hero-text">
            <h1 className="hero-name">Emanuel Montenegro</h1>
            <span className="hero-role">Frontend Developer</span>
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-description">
            {t.home.description}
          </p>

          <div className="hero-actions">
            <NavLink to="/projects" className="btn primary">
              {t.home.buttons.projects}
            </NavLink>

            <NavLink to="/contact" className="btn secondary">
              {t.home.buttons.contact}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
