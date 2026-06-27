import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Hero({ hero, resumeUrl }) {
  const [imageReady, setImageReady] = useState(true)

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '4', label: 'Projects Built' },
    { value: '4', label: 'Certifications' },
    { value: 'MSc', label: 'Currently Pursuing' },
  ]

  return (
    <section className="hero-block">
      <div className="hero-grid">
        <div className="hero-text">
          <ScrollReveal>
            <p className="eyebrow">{hero.label}</p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="hero-title">
              {hero.firstName}
              <span className="hero-title-accent">{hero.lastName}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="hero-summary">{hero.summary}</p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="hero-actions">
              <a href={hero.primaryAction.href} className="button-primary">
                {hero.primaryAction.label}
                <span className="btn-underline" aria-hidden="true" />
              </a>
              <a href={hero.secondaryAction.href} className="button-secondary">
                {hero.secondaryAction.label}
              </a>
              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  Download Resume
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="hero-photo-wrapper">
            <div className="hero-photo" aria-label="Profile photo">
              {imageReady ? (
                <img
                  src={hero.photo.src}
                  alt={hero.photo.alt}
                  onError={() => setImageReady(false)}
                />
              ) : (
                <div className="photo-fallback">
                  {hero.firstName[0]}{hero.lastName[0]}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={500}>
        <div className="stats-strip">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
