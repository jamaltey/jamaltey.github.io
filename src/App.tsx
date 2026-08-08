import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

type SectionId = 'about' | 'projects' | 'experience' | 'contact';

const App = () => {
  const [activeSection] = useState<SectionId | null>(null); // TODO: implement active section

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main className="container px-8 md:px-7 lg:px-5" id="home">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default App;
