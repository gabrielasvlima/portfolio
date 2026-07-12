import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { ContactForm } from '../components/ContactForm'
import { Seo } from '../components/Seo'
import { Timeline } from '../components/Timeline'
import {
  heroReadouts,
  workCards,
  impactItems,
  timeline,
  testimonials,
  socialLinks,
} from '../data/home'

export function HomePage() {
  return (
    <>
      <Seo
        title="Gabriela Lima — Staff Product Designer & Design Leader"
        description="Staff Product Designer and Design Leader. Building high-impact products, healthy design organizations, and systems with business outcomes."
        path="/"
      />

      <header className="hero">
        <div className="wrap">
          <span className="eyebrow">Staff Product Design · Design Leadership</span>
          <h1>
            I turn product chaos into <em>systems people trust.</em>
          </h1>
          <p className="lede">
            Brazilian Product Designer and design leader building <strong>high-impact products</strong>,{' '}
            <strong>healthy design organizations</strong>, and <strong>systems tied to business outcomes</strong>.
            Currently shaping design at Hotmart — previously Axur Cybersecurity, PicPay, Sanar & Arco. Co-founder at
            Writeopia.
          </p>
          <div className="readouts">
            {heroReadouts.map((r, i) => (
              <div className="readout" key={r.label} style={{ '--readout-i': i } as CSSProperties}>
                <div className="eq">
                  <span className="before">{r.before}</span>
                  <span className="arrow">→</span>
                  <span className="after">{r.after}</span>
                </div>
                <div className="label">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="work">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Selected work</span>
            <h2>Case studies from the inside of real transformations</h2>
            <p>Three projects, three different kinds of scale: a product, an organization, and a market of students.</p>
          </Reveal>
          <div className="work-grid">
            {workCards.map((card, i) => (
              <Reveal as="article" className="work-card" key={card.slug} delay={i * 80}>
                <div className="media">
                  <img src={card.image} alt={card.imageAlt} loading="lazy" />
                </div>
                <div className="body">
                  <span className="meta">{card.meta}</span>
                  <h3>{card.title}</h3>
                  <p>{card.summary}</p>
                  <div className="stat-row">
                    {card.pills.map((pill) => (
                      <span className={`pill${pill.coral ? ' coral' : ''}`} key={pill.text}>
                        {pill.text}
                      </span>
                    ))}
                  </div>
                  <Link className="go" to={`/work/${card.slug}`}>
                    Read the case study <span className="arrow-anim">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-band">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--light">Leadership, in numbers</span>
            <h2>Scaling people scales the product</h2>
            <p>
              My biggest lever has never been headcount. It's building stronger designers, clearer systems, and tighter
              collaboration with Engineering.
            </p>
          </Reveal>
          <Reveal className="impact-grid">
            {impactItems.map((item) => (
              <div className="impact-item" key={item.label}>
                <div className="num">
                  {item.type === 'transform' ? (
                    <>
                      <span>{item.from}</span>
                      <span className="arrow">→</span>
                      <span>{item.to}</span>
                    </>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
                <div className="txt">{item.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">About</span>
            <h2>From pixels to organizations</h2>
            <p className="about-lede">
              I'm a Brazilian Product Designer passionate about building high-impact products, design
              organizations, and systems with business outcomes. I've spent the last few years moving between
              hands-on craft and design leadership — usually both at once — across fintech, cybersecurity and
              edtech.
            </p>
          </Reveal>

          <div className="about-grid">
            <Reveal>
              <div className="portrait">
                <img
                  src="/images/shared/portrait.png"
                  alt="Illustrated portrait representing Gabriela Lima"
                  loading="lazy"
                />
              </div>
              <div className="motto">
                <p className="pt">"Design é como aprendi a criar, observar, ouvir e aprender."</p>
                <p className="en">— "Design is how I learned to create, observe, listen, and learn."</p>
              </div>
            </Reveal>

            <Reveal className="about-timeline-col">
              <Timeline items={timeline} />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Feedback</span>
            <h2>What it's like to work together</h2>
          </Reveal>
          <div className="testi-grid">
            {testimonials.map((t) => (
              <Reveal className="testi" key={t.name + t.role}>
                <p>
                  "{t.quote}" {t.note && <span className="testi-note">{t.note}</span>}
                </p>
                <div className="who">
                  <img src={t.logo} alt={t.logoAlt} loading="lazy" width={34} height={34} />
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <Reveal className="contact">
            <span className="eyebrow eyebrow--light">Let's talk</span>
            <h2>
              Building a design org, a product,
              <br />
              or just want to trade notes?
            </h2>
            <p>
              I'm always up for a good conversation about design leadership, systems, or scaling teams without losing
              craft.
            </p>
            <ContactForm />
            <div className="contact-links">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener">
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
