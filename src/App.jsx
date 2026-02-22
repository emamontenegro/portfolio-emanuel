import Header from "./components/layout/header";
import Home from "./pages/Home";
import Footer from "./components/layout/footer";
import TechBackground from "./components/background/techBackground";

const App = () => {
  return (

    <>
      <TechBackground />

      <div className="app-container">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;