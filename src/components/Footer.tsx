import { MailIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex min-h-100 items-center justify-center rounded-t-[50px] border-t border-[#292929] bg-zinc-950 text-center">
      <div id="contact" className="">
        <h3 className="text-4xl text-white md:text-5xl">Get in touch</h3>
        <a
          href="mailto:hello@jamalteymurov.com"
          className="mt-3 flex items-center justify-center font-semibold gap-2 text-lg"
        >
          <MailIcon />
          hello@jamalteymurov.com
        </a>
        <div className="mt-5 flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/jamalteymurov"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex size-13 items-center justify-center rounded-full border border-white text-white duration-250 hover:scale-103 hover:bg-zinc-900"
          >
            <img className="ml-1.25" src="logos/linkedin.svg" alt="" />
          </a>
          <a
            href="https://github.com/jamaltey"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex size-13 items-center justify-center rounded-full border border-white text-white duration-250 hover:scale-103 hover:bg-zinc-900"
          >
            <img src="logos/github.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
