import { Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/abouts";
import Contact from "./pages/contact";
import MainLayout from "./components/layout/mainLayout";
import Projects from "./pages/projects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
