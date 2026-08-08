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
          <h2 className="pb-1 pl-2 font-mono text-xl md:text-3xl">Hello(); I'm</h2>
          <h1 className="pb-4 text-4xl font-bold md:text-6xl">Jamal Teymurov</h1>
          <h2 className="pl-1 text-xl md:text-3xl">A Full-stack web developer</h2>
        </div>
        <a
          href="#about"
          className={cn(
            'absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce duration-200',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <ArrowDown size={30} />
        </a>
        <div className="absolute top-1/2 right-6 -z-10 -translate-y-1/2 animate-pulse [animation-duration:5s] lg:right-[-12%]">
          <div className="pointer-events-none h-10 w-15 scale-x-[4] scale-y-[20] rounded-full bg-blue-900/60 blur-xl will-change-[filter] md:w-md md:scale-x-[3] md:blur-3xl" />
        </div>
      </div>
    </>
  );
};

export default Hero;
