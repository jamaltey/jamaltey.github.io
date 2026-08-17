import { useInView } from 'react-intersection-observer';
import { cn } from '../lib/cn';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

type HeaderProps = {
  activeSection: string | null;
  onContactClick: () => void;
};

const Header = ({ activeSection, onContactClick }: HeaderProps) => {
  const { ref, inView } = useInView({
    initialInView: true,
    fallbackInView: false,
  });

  return (
    <>
      <div ref={ref} aria-hidden="true" className="absolute top-6 h-px w-px" />
      <header className="fixed inset-x-4 top-2 z-50 md:top-4" data-aos="fade-down">
        <nav
          className={cn(
            'mx-auto flex h-14 max-w-6xl scrollbar-none items-center overflow-auto px-4 duration-300 sm:h-15 sm:px-8 md:h-16',
            inView
              ? 'border border-transparent bg-transparent'
              : 'rounded-full border border-white/10 bg-black/20 shadow-lg shadow-black/10 backdrop-blur-md'
          )}
        >
          <a
            href="#home"
            aria-label="Go to the top of the page"
            className="hidden text-lg font-semibold tracking-tight text-white sm:inline md:text-xl"
          >
            Jamal<span className="text-blue-500">.</span>
          </a>

          <ul className="mx-auto flex items-center gap-5 duration-700 md:flex md:gap-8">
            {links.map((link, index) => (
              <li key={link.href} data-aos="fade-down" data-aos-delay={50 + index * 100}>
                <a
                  href={link.href}
                  onClick={link.href === '#contact' ? onContactClick : undefined}
                  className={cn(
                    'group relative py-2 text-[15px] font-medium tracking-wide text-gray-300 transition-colors duration-200 hover:text-white',
                    activeSection === link.href.slice(1) && 'text-white'
                  )}
                >
                  {link.label}

                  <span
                    className={cn(
                      'absolute inset-x-0 bottom-0 h-px origin-left bg-white transition-transform duration-300 sm:-bottom-0.5',
                      activeSection === link.href.slice(1)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/10">
          Resume
        </a> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
