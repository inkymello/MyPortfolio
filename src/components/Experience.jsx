import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

export default function Experience({ experiences }) {
  return (
    <section id="experience" className="section section-surface">
      <div className="container">
        <SectionHeader label="Career" title="Professional Experience" number="03" />
        <div className="timeline">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.role} delay={i * 120}>
              <article className="timeline-item">
                <span className="timeline-index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="timeline-period">{exp.period}</p>
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="timeline-summary">{exp.summary}</p>
                <ul>
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {exp.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
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
