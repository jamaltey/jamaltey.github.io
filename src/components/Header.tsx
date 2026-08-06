import { useInView } from 'react-intersection-observer';
import { cn } from '../lib/cn';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const { ref, inView } = useInView({
    initialInView: true,
  });

  return (
    <>
      <div ref={ref} aria-hidden="true" className="absolute top-6 h-px w-px" />
      <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 md:fixed">
        <nav
          className={cn(
            'mx-auto flex h-16 max-w-6xl items-center justify-between px-6 transition-all duration-300 md:px-8',
            inView
              ? 'border border-transparent bg-transparent'
              : 'rounded-full border border-white/10 bg-black/20 shadow-lg shadow-black/10 backdrop-blur-xl'
          )}
        >
          <a
            href="#home"
            aria-label="Go to the top of the page"
            className="text-xl font-semibold tracking-tight text-white"
          >
            Jamal<span className="text-blue-500">.</span>
          </a>

          <ul className="mx-auto hidden items-center gap-8 md:flex">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-2 text-[15px] font-medium tracking-wide text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  {link.label}

                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
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
