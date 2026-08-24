import { MoveUpRight, SquareArrowOutUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Newline Halo Clone',
    description:
      'An unofficial educational recreation of Newline Halo, built with React, Tailwind CSS, and Supabase as the final project for a frontend development course.',
    image: '/projects/newlinehalo.webp',
    tags: ['React', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://newlinehalo.vercel.app',
    githubUrl: 'https://github.com/jamaltey/newlinehalo',
  },
  {
    title: 'Trail AZ',
    description:
      'A web application for discovering hiking trails in Azerbaijan, built with React, TypeScript, Tailwind CSS, and Supabase for a national high-school hackathon.',
    image: '/projects/trailaz.webp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://trailaz.netlify.app',
    githubUrl: 'https://github.com/jamaltey/trailaz',
  },
  {
    title: 'Project X',
    description:
      'A full-stack e-commerce platform for browsing and purchasing consumer electronics, built with Django, Django REST Framework, and Bootstrap. Features include product search and filtering, variants, reviews, wishlists, cart and checkout flows, order tracking, and light/dark themes.',
    image: '/projects/projectx.webp',
    tags: ['Django', 'Django REST Framework', 'Bootstrap', 'jQuery', 'SQLite'],
    liveUrl: 'https://projectx.jamalteymurov.com',
    githubUrl: 'https://github.com/jamaltey/ProjectX',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto min-h-[50vh] max-w-6xl px-4 py-20 sm:px-6 md:-scroll-mt-8 md:pt-40"
    >
      <div className="mb-10">
        <h2
          className="text-center text-4xl font-medium md:text-start md:text-[2.75rem] lg:text-5xl"
          data-aos="fade-up"
          data-aos-anchor="#projects p[data-aos]"
        >
          Projects
        </h2>

        <p
          className="mt-3 max-w-xl text-center text-gray-400 sm:text-lg md:mt-4 md:text-start"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          A selection of projects I've built, designed, or contributed to.
        </p>
      </div>

      <div
        className="mt-8 grid gap-8 md:mt-6 md:grid-cols-2"
        data-aos="fade-up"
        data-aos-delay={150}
      >
        {projects.map(project => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/3 shadow-blue-700/10 transition duration-300 hover:border-white/20 hover:shadow-lg"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden"
            >
              <img
                className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                decoding="async"
              />
            </a>

            <div className="flex flex-1 flex-col gap-5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="text-lg text-gray-400 transition duration-200 hover:text-white"
                >
                  <SquareArrowOutUpRight />
                </a>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-gray-300 transition hover:text-white"
                >
                  <span>Live Demo</span>
                  <MoveUpRight size={16} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-gray-300 transition hover:text-white"
                >
                  <span>GitHub</span>
                  <MoveUpRight size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div
        className="mt-12 text-center"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-anchor="#projects .grid"
      >
        <a
          href="https://github.com/jamaltey"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-gray-400 transition hover:text-white"
        >
          <span>View more on GitHub</span>
          <MoveUpRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
