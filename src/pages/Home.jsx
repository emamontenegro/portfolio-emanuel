import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";
import Hero from "../components/sections/Hero";
import { useLanguage } from "../context/LanguageContext";
import About from "../components/sections/about";


const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
