import Navbar from "./components/Navbar";
import FadeInSection from "./components/FadeInSection";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
    <ScrollProgress />
      <Navbar />

      <main className="overflow-hidden">
        <Hero />

        <FadeInSection>
          <About />
        </FadeInSection>

        <FadeInSection>
          <Experience />
        </FadeInSection>

        <FadeInSection>
          <Projects />
        </FadeInSection>

        <FadeInSection>
          <Achievements />
        </FadeInSection>

        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <BackToTop />
    </>
  );
}

export default App;