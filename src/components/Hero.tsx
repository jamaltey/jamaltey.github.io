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
      <div ref={ref} className="relative container flex h-screen items-center p-8 md:p-5" id="hero">
        <div className="">
          <h2 className="pb-1 pl-2 font-mono text-xl md:text-3xl">Hello(); I'm</h2>
          <h1 className="pb-4 text-4xl font-bold md:text-6xl">Jamal Teymurov</h1>
          <h2 className="pl-1 text-xl md:text-3xl">A Full-stack web developer</h2>
        </div>
        <a
          href="#about"
          className={cn(
            'absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce duration-200',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <ArrowDown size={30} />
        </a>
      </div>
      <div className="absolute top-[50vh] right-6 -z-10 animate-pulse [animation-duration:6s] sm:right-[-30%] lg:right-[-20%]">
        <div className="pointer-events-none h-10 w-15 scale-x-[5] scale-y-[8] rounded-full bg-blue-900/60 blur-xl will-change-[filter] sm:w-25 sm:scale-y-[20] sm:blur-3xl md:w-md md:scale-x-[2] lg:scale-x-[3]" />
      </div>
    </>
  );
};

export default Hero;
