import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Showreel from "./components/Showreel";
import Skills from "./components/Skills";
import Software from "./components/Software";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <div className="grain relative min-h-screen bg-ink text-zinc-200">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Showreel />
        <Software />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
