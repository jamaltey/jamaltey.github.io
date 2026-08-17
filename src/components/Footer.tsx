import { MailIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-30 flex min-h-90 flex-col items-center justify-center rounded-t-[50px] border-t border-[#292929] bg-zinc-950 px-4 text-center md:mt-45">
      <section className="mb-5" id="contact">
        <h3
          className="text-4xl text-white md:text-5xl"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-once
        >
          Get in touch
        </h3>
        <a
          href="mailto:hello@jamalteymurov.com"
          className="mt-3 flex text-lg font-medium tracking-wider"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-delay={50}
          data-aos-anchor="#contact"
          data-aos-once
        >
          <span className="inline-flex items-center justify-center gap-1.5 duration-250 hover:scale-102">
            <MailIcon />
            hello@jamalteymurov.com
          </span>
        </a>
        <div
          className="mt-5 flex justify-center gap-4"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-delay={100}
          data-aos-anchor="#contact"
          data-aos-once
        >
          <a
            href="https://www.linkedin.com/in/jamalteymurov"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex size-13 items-center justify-center rounded-full border border-white text-white duration-250 hover:scale-104 hover:bg-zinc-800/60"
          >
            <img className="ml-1.25" src="logos/linkedin.svg" alt="" />
          </a>
          <a
            href="https://github.com/jamaltey"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex size-13 items-center justify-center rounded-full border border-white text-white duration-250 hover:scale-104 hover:bg-zinc-800/60"
          >
            <img src="logos/github.svg" alt="" />
          </a>
        </div>
      </section>
      <p className="absolute bottom-4 text-gray-500/60">
        &copy; {new Date().getFullYear()} Jamal Teymurov
      </p>
    </footer>
  );
};

export default Footer;
