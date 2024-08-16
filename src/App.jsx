import "./App.css";
import About from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <section>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
}

export default App;
