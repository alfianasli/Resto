import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Menu from "./Components/Menu";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Menu />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
