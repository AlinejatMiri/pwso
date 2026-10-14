import { useMemo, useState } from 'react'
import PageHero, { SectionHeading } from '../components/PageHero.jsx'

const projects = [
  { category: 'Livelihoods', title: 'Food processing & marketing training', location: 'Badakhshan', year: '2018', reach: '100 women', funder: 'PWSO Core Fund', duration: '7 days', image: 'projects-card-food.jpg', summary: 'Women in Badakhshan were trained in food processing and marketing, with a focus on preparing pickles to a saleable standard and taking them to local markets.', focus: 'Pickle preparation and marketing', investment: '$1,500' },
  { category: 'Community Awareness', title: 'Awareness of harmful traditional practices', location: 'Badakhshan', year: '2019', reach: '150 men and women', funder: 'AKF', duration: 'One month', image: 'projects-card-awareness.jpg' },
  { category: 'Capacity Strengthening', title: 'Organizational capacity strengthening', location: 'Kabul', scope: 'Policy, systems and strategy development', funder: 'medica mondiale', image: 'projects-card-capacity.jpg' },
]

function ProjectCard({ project }) {
  const facts = [project.reach && ['Reach', project.reach], project.scope && ['Scope', project.scope], project.duration && ['Duration', project.duration], ['Supported by', project.funder]].filter(Boolean)
  return <article className="project-card"><div className="media"><img src={`/assets/img/${project.image}`} alt="" loading="lazy" /><span className="badge badge-light project-card-tag">{project.category}</span></div><div className="project-card-body"><ul className="meta"><li>{project.location}, Afghanistan</li>{project.year && <li>{project.year}</li>}</ul><h3>{project.title}</h3><dl className="project-facts">{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></article>
}

export default function ProjectsPage() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const categories = ['All', ...new Set(projects.map((project) => project.category))]
  const filtered = useMemo(() => projects.filter((project) => (category === 'All' || project.category === category) && (!query.trim() || `${project.title} ${project.location} ${project.funder} ${project.category}`.toLowerCase().includes(query.trim().toLowerCase()))), [category, query])
  const featured = projects[0]

  return <div className="page-projects">
    <PageHero title="Our work, clearly documented." intro="Explore initiatives recorded in PWSO’s organization profile, including where they took place, who took part and who supported them." image="projects-hero.jpg" parent={{ href: '/programs', label: 'Our Work' }} />
    <section className="section"><div className="container">
      <div className="toolbar"><div className="segmented" role="tablist" aria-label="Filter projects by category">{categories.map((item) => <button role="tab" aria-selected={category === item} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search"><span className="sr-only">Search projects</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" /></label></div>
      <p className="result-count" aria-live="polite">Showing {filtered.length} of {projects.length} documented projects</p>
      {filtered.length ? <div className="grid cols-3">{filtered.map((project) => <ProjectCard key={project.title} project={project} />)}</div> : <div className="empty-state"><h2>No projects match your search</h2><p>Try a different keyword or show all categories.</p><button className="btn btn-secondary btn-sm" onClick={() => { setCategory('All'); setQuery('') }}>Clear filters</button></div>}
    </div></section>
    <section className="section section-tint"><div className="container split featured"><div className="media"><img src="/assets/img/projects-featured.jpg" alt="Women preparing pickles during food processing training" loading="lazy" /></div><div><p className="eyebrow">Featured project</p><h2>{featured.title}</h2><ul className="meta featured-meta"><li>{featured.location}, Afghanistan</li><li>{featured.year}</li><li>{featured.duration}</li></ul><p className="section-text">{featured.summary}</p><dl className="featured-facts"><div><dt>Participants</dt><dd>{featured.reach}</dd></div><div><dt>Investment</dt><dd>{featured.investment}</dd></div><div><dt>Training focus</dt><dd>{featured.focus}</dd></div><div><dt>Supported by</dt><dd>{featured.funder}</dd></div></dl></div></div></section>
    <section className="section section-tight"><div className="container profile-card"><div><p className="eyebrow">The complete organization profile</p><h2>Learn more about PWSO’s documented projects.</h2><p>Our official profile includes our mission, structure and full details of documented projects.</p></div><a className="btn btn-secondary" href="/resources">View resources</a></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Project inquiry" title="Interested in our projects?">Get in touch to learn more about our work and explore opportunities to collaborate.</SectionHeading><div className="btn-row"><a className="btn btn-primary" href="/contact">Start a conversation</a><a className="btn btn-secondary" href="/programs">Our programs</a></div></div></section>
  </div>
}
