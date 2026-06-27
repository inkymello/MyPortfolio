import ScrollReveal from './ScrollReveal'

export default function SectionHeader({ label, title, number }) {
  return (
    <div className="section-head">
      {number && (
        <span className="section-number" aria-hidden="true">
          {number}
        </span>
      )}
      <ScrollReveal>
        <p className="eyebrow">{label}</p>
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <h2 className="section-title">{title}</h2>
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <span className="accent-rule" aria-hidden="true" />
      </ScrollReveal>
    </div>
  )
}
