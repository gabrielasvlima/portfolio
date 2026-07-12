import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { type CaseBlock, type CaseStudy } from '../data/cases'

function CaseBlocks({ blocks }: { blocks: CaseBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <Reveal as="h2" key={i}>
                {block.text}
              </Reveal>
            )
          case 'p':
            return (
              <Reveal as="p" key={i} dangerouslySetInnerHTML={{ __html: block.html }} />
            )
          case 'ul':
            return (
              <Reveal as="ul" key={i}>
                {block.items.map((item) => (
                  <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </Reveal>
            )
          case 'figure':
            return (
              <Reveal as="figure" key={i}>
                <img src={block.src} alt={block.alt} loading="lazy" />
                <figcaption>{block.caption}</figcaption>
              </Reveal>
            )
          case 'pull':
            return (
              <Reveal as="p" key={i} className="pull">
                {block.text}
              </Reveal>
            )
          default:
            return null
        }
      })}
    </>
  )
}

type CaseStudyPageProps = {
  study: CaseStudy
}

export function CaseStudyPage({ study }: CaseStudyPageProps) {
  return (
    <>
      <Seo
        title={study.seoTitle}
        description={study.seoDescription}
        path={study.path}
        image={study.ogImage}
        type="article"
      />

      <header className="case-header">
        <div className="wrap">
          <span className="eyebrow">Case study</span>
          <h1>{study.title}</h1>
          <p className="dek">{study.dek}</p>
          <div className="meta-row">
            {study.meta.map((m) => (
              <div key={m.label}>
                <div className="k">{m.label}</div>
                <div className="v">{m.value}</div>
              </div>
            ))}
          </div>
          <Reveal className="case-hero-img">
            <img src={study.heroImage} alt={study.heroAlt} loading="eager" />
          </Reveal>
        </div>
      </header>

      <section className="tight">
        <div className="wrap">
          <Reveal className="case-impact">
            {study.impact.map((item) => (
              <div className="item" key={item.txt}>
                <div className="num">{item.num}</div>
                <div className="txt">{item.txt}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="tight">
        <div className="wrap case-body">
          <CaseBlocks blocks={study.blocks} />
        </div>
      </section>

      <div className="wrap">
        <div className="case-nav-next">
          {study.nav.prev ? (
            study.nav.prev.href.startsWith('/#') ? (
              <a href={study.nav.prev.href}>{study.nav.prev.label}</a>
            ) : (
              <Link to={study.nav.prev.href}>{study.nav.prev.label}</Link>
            )
          ) : (
            <span />
          )}
          {study.nav.next &&
            (study.nav.next.href.startsWith('/#') ? (
              <a href={study.nav.next.href}>{study.nav.next.label}</a>
            ) : (
              <Link to={study.nav.next.href}>{study.nav.next.label}</Link>
            ))}
        </div>
      </div>
    </>
  )
}
