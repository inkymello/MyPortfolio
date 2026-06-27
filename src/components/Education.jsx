import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

export default function Education({ education }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader label="Academic Background" title="Education" number="04" />
        <div className="grid-two">
          {education.map((item, i) => (
            <ScrollReveal key={item.degree} delay={i * 100}>
              <article className="panel education-panel">
                <div className="panel-accent-bar" aria-hidden="true" />
                <p className="timeline-period">{item.period}</p>
                <h3>{item.degree}</h3>
                <p className="company">{item.school}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
