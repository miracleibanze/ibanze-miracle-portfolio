import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "IMMovies",
    category: "Entertainment",
    description:
      "A lively movie discovery experience, designed around clear navigation, responsive layouts, and the joy of finding something to watch.",
    image: "/project-immovies.png",
    imageAlt: "IMMovies responsive movie discovery interface",
    technologies: ["React", "Tailwind CSS", "Vite"],
    live: "https://immovies.vercel.app/",
    repo: "https://github.com/miracleibanze/IMMovies",
  },
  {
    number: "02",
    name: "Mukingi Secondary School",
    category: "Education",
    description:
      "A welcoming school hub for news, events, and useful information, built to make everyday updates easy to find on any screen.",
    image: "/project-mukingi.png",
    imageAlt: "Mukingi Secondary School website on desktop and mobile",
    technologies: ["React", "Tailwind CSS", "Vite"],
    live: "https://e-s-mukingi.vercel.app/",
    repo: "https://github.com/miracleibanze/E.S.Mukingi",
  },
  {
    number: "03",
    name: "BrainWave",
    category: "Productivity",
    description:
      "A calm, minimal space for focus and inspiration, pairing gentle visual storytelling with a responsive interface.",
    image: "/project-brainwave.png",
    imageAlt: "BrainWave productivity application preview",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    live: "https://imbrainwave.vercel.app/",
    repo: "https://github.com/miracleibanze/Brainwave",
  },
  {
    number: "04",
    name: "IMBONI Learn",
    category: "Learning",
    description:
      "An online learning platform with structured lessons, quizzes, assignments, and progress tools that help students keep moving.",
    image: "/project-imboni.png",
    imageAlt: "IMBONI Learn online learning platform",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    live: "https://imboni-learn.vercel.app/",
    repo: "https://github.com/miracleibanze/IMBONI-Learn",
  },
  {
    number: "05",
    name: "IMConnect",
    category: "Community",
    description:
      "A full-stack communication concept for messages, group conversations, and media sharing, with a familiar, human-centered feel.",
    image: "/project-imconnect.jpg",
    imageAlt: "IMConnect messaging application preview",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://imconnect.netlify.app/",
    repo: "https://github.com/miracleibanze/IMConnect-client",
  },
  {
    number: "06",
    name: "Duhuze Real Estate",
    category: "Property",
    description:
      "A property discovery experience for browsing homes, land, and listings with a straightforward path from search to enquiry.",
    image: "/project-duhuze.png",
    imageAlt: "Duhuze Real Estate property website",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://duhuze.netlify.app/",
    repo: "https://github.com/miracleibanze2/Duhuze",
  },
];

const skills = [
  { title: "Front of the experience", items: "React · Next.js · JavaScript" },
  { title: "The details people feel", items: "Responsive UI · Accessibility · Tailwind CSS" },
  { title: "Behind the interface", items: "Node.js · Express · MongoDB · REST APIs" },
];

export default function Home() {
  return (
    <>
      <div className="water-backdrop" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Miracle, home">
          Miracle<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-hello" href="mailto:miracleibanze@gmail.com">
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Full-stack developer · building with care</p>
            <h1 id="hero-title">
              Good ideas deserve
              <br />
              <span>a thoughtful</span> interface.
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>Miracle Ibanze</strong>. I build scalable, user-focused web
              applications that solve real-world problems, and make the small
              details feel just as considered as the big ones.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="mailto:miracleibanze@gmail.com">
                Let&apos;s talk <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-footnote">
              <span>Thoughtful by design</span>
              <span className="footnote-line" />
              <span>Useful by nature</span>
            </div>
          </div>

          <div className="portrait-stage">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <Image
                src="/light-profile.webp"
                alt="Portrait of Miracle Ibanze"
                width={828}
                height={828}
                priority
                sizes="(max-width: 760px) 76vw, 36vw"
              />
            </div>
            <div className="glass-note">
              <span className="note-mark" aria-hidden="true">✳</span>
              <span>Curiosity, shaped<br />into useful things.</span>
            </div>
            <span className="portrait-caption">A little intention goes a long way.</span>
          </div>
        </section>

        <section className="intro-strip section-wrap" aria-label="A little about my work">
          <p>Design-minded engineering, from the first sketch to the last interaction.</p>
          <a href="#about">A little about me <span aria-hidden="true">↓</span></a>
        </section>

        <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">A bit about me</p>
            <h2 id="about-title">I care about how it works.<br /><em>And how it feels.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m a developer who enjoys bringing the moving parts together:
              the clear interface, the dependable logic behind it, and the small
              moments that make a product feel welcoming.
            </p>
            <p>
              From a school information hub to a full-stack messaging concept,
              every project starts with the same question: what would make this
              genuinely easier for someone?
            </p>
            <a className="text-link" href="https://github.com/miracleibanze/" target="_blank" rel="noreferrer">
              More of my code <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-wrap">
            <div className="skills-heading">
              <div>
                <p className="eyebrow">Tools in my hands</p>
                <h2 id="skills-title">The craft, <em>in layers.</em></h2>
              </div>
              <p>Good work happens where design sense meets solid engineering.</p>
            </div>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <article className="skill-row" key={skill.title}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                  <span className="skill-spark" aria-hidden="true">✳</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects" aria-labelledby="projects-title">
          <div className="projects-heading">
            <div>
              <p className="eyebrow">Selected work · 2022—2025</p>
              <h2 id="projects-title">Made with <em>people in mind.</em></h2>
            </div>
            <p>A few different problems, one steady focus: make the useful feel natural.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a className="project-image" href={project.live} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1298}
                    height={900}
                    sizes="(max-width: 700px) 92vw, (max-width: 1040px) 45vw, 30vw"
                  />
                  <span className="image-arrow" aria-hidden="true">↗</span>
                </a>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.number} / 06</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list" aria-label="Technologies">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a>
                  <a href={project.repo} target="_blank" rel="noreferrer">Source <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-glass">
            <div className="contact-copy">
              <p className="eyebrow">Have something good in mind?</p>
              <h2 id="contact-title">Let&apos;s make it<br /><em>feel just right.</em></h2>
              <p>I&apos;m always glad to hear about a thoughtful idea, a useful problem, or a good collaboration.</p>
              <a className="button button-light" href="mailto:miracleibanze@gmail.com">
                miracleibanze@gmail.com <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-links">
              <span className="eyebrow">Elsewhere</span>
              <a href="https://github.com/miracleibanze/" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://www.linkedin.com/in/miracleibanze/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href="https://facebook.com/MiracleCode/" target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-watermark" aria-hidden="true">MI</div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">Miracle<span>.</span></a>
        <p>Made with intention, and a little curiosity.</p>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}
