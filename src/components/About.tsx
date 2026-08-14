const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-10 pb-10 sm:px-1 md:scroll-mt-50 md:flex-row md:gap-12 lg:gap-20 lg:px-0"
    >
      <div className="flex-2">
        <h2 className="pb-5 text-4xl font-medium md:text-[2.75rem] lg:text-5xl" data-aos="fade-up">
          About me
        </h2>
        <p className="text-lg lg:text-xl" data-aos="fade-up" data-aos-delay={50}>
          I’m a high school student from Azerbaijan who enjoys building software that solves real
          problems. My interest in programming started with Minecraft—experimenting with commands
          and creating servers for my friends—and eventually grew into a passion for full-stack
          development and computer science.
          <br />
          <br />
          Today, I build full-stack web applications, participate in hackathons, and mentor younger
          students in programming. I’m especially interested in software engineering and artificial
          intelligence, and I’m always looking for opportunities to turn ideas into real products.
        </p>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="relative" data-aos="fade-up" data-aos-delay={100}>
          <img
            className="h-110 w-72 rounded-xl object-cover object-[43%] opacity-70 blur-lg md:h-100 md:blur-xl"
            src="jamal.jpg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="absolute inset-0 h-110 w-72 rounded-xl object-cover object-[43%] md:h-100"
            src="jamal.jpg"
            alt="Jamal"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
