export default function PageHero({ eyebrow, title, intro, image, alt = '', parent, children }) {
  return <section className="page-hero">
    <div className="container page-hero-grid">
      <div className="page-hero-text">
        <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a>{parent && <><span aria-hidden="true">›</span><a href={parent.href}>{parent.label}</a></>}<span aria-hidden="true">›</span><span aria-current="page">{title}</span></nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1><p className="lead">{intro}</p>{children}
      </div>
      {image && <div className="page-hero-media"><img src={`/assets/img/${image}`} alt={alt} /><span className="pwso-tiles page-hero-stamp" aria-hidden="true">{['P', 'W', 'S', 'O'].map((letter) => <span className="ltile" key={letter}><span className="ltile-letter">{letter}</span></span>)}</span></div>}
    </div>
  </section>
}

export function SectionHeading({ eyebrow, title, children, action }) {
  return <div className="section-head"><div className="section-head-main">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{children && <p className="section-text">{children}</p>}</div>{action && <div className="section-action">{action}</div>}</div>
}

export function CardGrid({ items, columns = 3 }) {
  return <div className={`grid cols-${columns}`}>
    {items.map((item) => <article className="work-card" key={item.title}>
      {item.image && <div className="work-card-media"><img src={`/assets/img/${item.image}`} alt={item.alt ?? ''} loading="lazy" /></div>}
      <div className="work-card-body"><p className="work-card-kicker">{item.kicker}</p><h3>{item.title}</h3><p>{item.text}</p>{item.link && <a className="text-link" href={item.link}>Learn more <span aria-hidden="true">→</span></a>}</div>
    </article>)}
  </div>
}
