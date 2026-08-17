import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

type SectionId = 'hero' | 'about' | 'projects' | 'experience' | 'contact';

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const contactSelectedRef = useRef(false);
  const isScrollingUpRef = useRef(false);
  const previousScrollYRef = useRef(0);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const contactSection = sections.find(section => section.id === 'contact');

    const restoreActiveSection = () => {
      const currentSection = [...sections]
        .reverse()
        .find(
          section =>
            section.id !== 'contact' && section.getBoundingClientRect().top <= window.innerHeight
        );

      if (currentSection) {
        setActiveSection(currentSection.id as SectionId);
      }
    };

    const handleScroll = () => {
      const isScrollingUp = window.scrollY < previousScrollYRef.current;
      isScrollingUpRef.current = isScrollingUp;

      if (
        isScrollingUp &&
        contactSelectedRef.current &&
        (contactSection ? contactSection.getBoundingClientRect().top >= window.innerHeight : false)
      ) {
        contactSelectedRef.current = false;
        restoreActiveSection();
      }

      previousScrollYRef.current = window.scrollY;
    };

    const observer = new IntersectionObserver(
      entries => {
        if (contactSelectedRef.current) {
          return;
        }

        const visibleSection = entries.find(entry => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id as SectionId);
        }
      },
      { rootMargin: '-35% 0px -55%' }
    );
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isScrollingUpRef.current) {
          contactSelectedRef.current = true;
          setActiveSection('contact');
        }
      },
      { threshold: 0.01 }
    );

    sections.forEach(section => observer.observe(section));
    if (contactSection) {
      contactObserver.observe(contactSection);
    }
    previousScrollYRef.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      contactObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        activeSection={activeSection}
        onContactClick={() => {
          contactSelectedRef.current = true;
          setActiveSection('contact');
        }}
      />
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
