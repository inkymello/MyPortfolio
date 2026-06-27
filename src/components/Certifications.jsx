import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section section-surface">
      <div className="container">
        <SectionHeader label="Professional Development" title="Licenses & Certifications" number="05" />
        <div className="grid-two">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={i * 100}>
              <article className="panel cert-panel">
                <div className="panel-accent-bar" aria-hidden="true" />
                <h3>{cert.name}</h3>
                <p className="company">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <p className="cert-id">
                  <span className="cert-id-label">Credential ID</span>
                  {cert.id}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
