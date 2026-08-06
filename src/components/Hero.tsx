import { ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '../lib/cn';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    initialInView: true,
  });

  return (
    <>
      <div ref={ref} className="container flex h-screen items-center p-8 md:p-5" id="hero">
        <div className="">
          <p className="pb-1 pl-2 font-mono text-xl md:text-3xl">Hello(); I'm</p>
          <p className="mb-2 text-4xl font-bold md:text-6xl">Jamal Teymurov</p>
        </div>
        <a
          href="#about"
          className={cn(
            'absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce duration-150',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <ArrowDown size={30} />
        </a>
        <div className="absolute -z-1 h-[80vh] w-70 animate-pulse rounded-full bg-blue-900 blur-[25rem] lg:right-[-15%] lg:w-150"></div>
      </div>
    </>
  );
};

export default Hero;
