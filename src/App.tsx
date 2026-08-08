import { useEffect, useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

type SectionId = 'about' | 'projects' | 'experience' | 'contact';

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null); // TODO: implement active section

  useEffect(() => {
    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <Hero />
      <main className="p-4" id="home">
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default App;
