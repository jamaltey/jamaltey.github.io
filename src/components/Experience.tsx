import { MoveUpRight } from 'lucide-react';

const activities = [
  {
    title: 'Web Development Instructor',
    subtitle: 'IT Summer Camp at Div Academy Kids',
    description:
      'Taught younger students the fundamentals of HTML and CSS and helped them build their first web pages.',
    image: '/logos/div_kids.jpg',
    period: '3 weeks in summer 2026',
  },
  {
    title: 'Student Council - IT Head',
    subtitle: 'Landau Preparatory School (Leznik & Co.)',
    description:
      'Represent the IT area within the Student Council, contributing to council discussions and supporting technology-related matters when needed.',
    image: '/logos/leznik&co.jpg',
    period: 'November 2025 – Present',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 pb-30 md:pb-45">
      <h2 className="text-4xl md:text-5xl" data-aos="fade-up">
        Experience & Activities
      </h2>

      <div className="mt-16 space-y-12">
        {activities.map(({ title, subtitle, description, image, period }, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
            data-aos="fade-up"
            data-aos-offset={40}
            data-aos-delay={50 * (index + 1)}
          >
            <img className="size-24 rounded-xl object-cover" src={image} alt={subtitle} />

            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-1 text-gray-400">{subtitle}</p>
                </div>
                <p className="text-sm text-gray-500">{period}</p>
              </div>
              <p className="mt-3 max-w-2xl leading-relaxed text-gray-400 sm:mt-4">{description}</p>
            </div>
          </article>
        ))}
      </div>

      <div
        className="mt-12 text-center"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-anchor="#experience article:last-child"
      >
        <a
          href="https://www.linkedin.com/in/jamalteymurov"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-gray-400 transition hover:text-white"
        >
          <span>View more on LinkedIn</span>
          <MoveUpRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default Experience;
