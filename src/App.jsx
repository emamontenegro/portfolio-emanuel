import Header from "./components/layout/header";
import Home from "./pages/home";
import Footer from "./components/layout/footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;