import { useMemo, useState } from 'react'
import PageHero, { SectionHeading } from '../components/PageHero.jsx'

const documents = [
  { kind: 'Reports', title: 'Annual reports', text: 'An overview of our work, activities and learning each year.' },
  { kind: 'Reports', title: 'Financial & audit reports', text: 'Our financial information and audit reports.' },
  { kind: 'Policies', title: 'Policies & procedures', text: 'The organizational policies and procedures that guide our work.' },
]

export default function ResourcesPage() {
  const [kind, setKind] = useState('All')
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => documents.filter((item) => (kind === 'All' || item.kind === kind) && `${item.title} ${item.text}`.toLowerCase().includes(query.trim().toLowerCase())), [kind, query])

  return <div className="page-resources">
    <PageHero title="Transparency builds trust." intro="We are committed to openness, accountability and learning. Explore our profile, reports and policies." image="resources-hero.jpg" parent={{ href: '/resources', label: 'Resources' }} />
    <section className="section section-tight"><div className="container"><article className="profile-card"><div className="doc-thumb" aria-hidden="true"><span className="doc-thumb-lines"><i /><i /><i /></span><b>PWSO</b></div><div><p className="profile-card-kicker">Organization profile</p><h2>PWSO Organization Profile</h2><p>Our mission, vision, structure, focus areas, ways of working and documented projects in one document.</p></div><a className="btn btn-secondary" href="/contact">Request a copy</a></article></div></section>
    <section className="section section-tint" id="library"><div className="container"><SectionHeading eyebrow="Document library" title="Reports & policies." action={<img className="lib-art" src="/assets/img/il/resources.svg" alt="" aria-hidden="true" loading="lazy" />}>Key documents are published here as they are approved. For anything you cannot find, contact us and we will help.</SectionHeading>
      <div className="toolbar"><div className="segmented" role="tablist" aria-label="Filter documents">{['All', 'Reports', 'Policies'].map((item) => <button role="tab" aria-selected={kind === item} type="button" key={item} onClick={() => setKind(item)}>{item}</button>)}</div><label className="search"><span className="sr-only">Search documents</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search documents" /></label></div>
      {filtered.length ? <ul className="doc-list">{filtered.map((item) => <li className="doc-row" key={item.title}><span className="doc-icon" aria-hidden="true">▤</span><div className="doc-row-text"><h3>{item.title}</h3><p>{item.text}</p></div><span className="doc-kind">{item.kind}</span><span className="badge badge-neutral">Publishing soon</span></li>)}</ul> : <div className="empty-state"><h2>No documents match your search</h2><p>Try a different keyword or contact us to request a document.</p><button className="btn btn-secondary btn-sm" onClick={() => { setKind('All'); setQuery('') }}>Clear filters</button></div>}
      <p className="doc-help"><span aria-hidden="true">ⓘ</span><span>Need a document that isn’t listed? <a href="/contact">Request it from our team</a>.</span></p>
    </div></section>
    <section className="section" id="feedback"><div className="container split split-start feedback"><div className="media"><img src="/assets/img/resources-feedback.jpg" alt="Women talking together during a community feedback session" loading="lazy" /></div><div><p className="eyebrow">Community feedback</p><h2>Your voice <em>matters.</em></h2><p className="section-text">We welcome feedback, questions and suggestions from community members, partners and other stakeholders. Your input helps us improve and stay accountable.</p><div className="btn-row"><a className="btn btn-primary" href="/contact?category=Feedback">Share feedback →</a><a className="text-link" href="/contact">Other ways to reach us</a></div></div></div></section>
    <section className="section section-tint"><div className="container"><SectionHeading eyebrow="Our governance approach" title="Three principles guide our work" action={<img className="gov-art" src="/assets/img/il/research.svg" alt="" aria-hidden="true" loading="lazy" />} /><div className="grid cols-3">{[['Responsible stewardship', 'We aim to use resources responsibly and act with integrity in all our activities.'], ['Listening and accountability', 'We welcome questions and feedback and respond respectfully.'], ['Learning and transparency', 'We share information and use learning to strengthen our programs.']].map(([title, text]) => <article className="card principle-card" key={title}><span aria-hidden="true">✦</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Questions?" title="Talk to our team.">We welcome your questions about our documents, governance and partnership opportunities.</SectionHeading><div className="btn-row"><a className="btn btn-primary" href="/contact">Contact us</a><a className="btn btn-secondary" href="/about">About PWSO</a></div></div></section>
  </div>
}
