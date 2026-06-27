import SectionHeader from './SectionHeader'
import ScrollReveal from './ScrollReveal'

export default function Contact({ contact }) {
  const channels = [
    {
      title: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      display: contact.email,
    },
    {
      title: 'LinkedIn',
      value: 'imasha-ilamperuma',
      href: contact.linkedin,
      external: true,
    },
    {
      title: 'GitHub',
      value: 'inkymello',
      href: contact.github,
      external: true,
    },
  ]

  return (
    <section id="contact" className="section section-inverted">
      <div className="container">
        <SectionHeader label="Get In Touch" title="Let's Connect" number="07" />
        <div className="grid-three contact-cards">
          {channels.map((ch, i) => (
            <ScrollReveal key={ch.title} delay={i * 100}>
              <a
                href={ch.href}
                className="panel contact-panel"
                {...(ch.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <h3>{ch.title}</h3>
                <p>{ch.value}</p>
                <span className="contact-arrow" aria-hidden="true">→</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="resume-row">
            <p className="availability-text">Open to new opportunities and collaborations - let's build something great.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
