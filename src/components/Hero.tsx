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
      <section
        ref={ref}
        data-aos="fade-down"
        data-aos-duration={700}
        className="relative flex h-screen items-center"
        id="hero"
      >
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
      </section>
      <div className="absolute -top-20 right-0 -z-10 h-[120vh] w-screen scale-150 animate-pulse bg-radial-[at_70%] from-blue-950/70 to-transparent to-50% will-change-transform [animation-duration:5s] md:right-[-15%] lg:w-[70vw]" />
    </>
  );
};

export default Hero;
