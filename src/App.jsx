import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"; // import the Navbar component
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />

        <Tech />
        <Works />
      </div>
    </BrowserRouter>
  );
}

export default App;
