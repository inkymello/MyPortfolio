import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader label="Work" title="Featured Projects" number="06" />
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 120}>
              <article className={`panel project-panel${i === 0 ? ' featured' : ''}`}>
                {i === 0 && (
                  <span className="featured-badge">Featured</span>
                )}
                <div className="panel-accent-bar" aria-hidden="true" />
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tag-row">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="link-row">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {link.label}
                      <span className="btn-underline" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
