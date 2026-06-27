import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader label="Competencies" title="Skills & Expertise" number="02" />
        <div className="grid-two">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 100}>
              <article className="panel skill-panel">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="skill-dot" aria-hidden="true" />
                      {item}
                    </li>
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
