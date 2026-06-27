import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

export default function About({ about, facts }) {
  return (
    <section id="about" className="section section-surface">
      <div className="container">
        <SectionHeader label="Profile" title="About Me" number="01" />
        <div className="split-content">
          <div className="stack-body">
            {about.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <p>{paragraph}</p>
              </ScrollReveal>
            ))}
          </div>
          <div className="meta-list">
            {facts.map((fact, i) => (
              <ScrollReveal key={fact.label} delay={i * 80}>
                <div className="meta-item">
                  <h3>{fact.label}</h3>
                  <p>{fact.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
