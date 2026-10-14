import { useEffect, useState } from 'react'
import PageHero, { SectionHeading } from '../components/PageHero.jsx'

const stories = [
  { image: 'news-story-skills.jpg', topic: 'Livelihoods', title: 'Practical skills that open doors', text: 'How vocational training helps women turn their skills into income for their families.' },
  { image: 'news-story-learning.jpg', topic: 'Education', title: 'Safe spaces to learn and grow', text: 'Community learning circles give women room to read, share and build confidence together.' },
  { image: 'news-story-rural.jpg', topic: 'Agriculture', title: 'Farming for a changing climate', text: 'Working with rural households on practices that protect harvests and livelihoods.' },
]
const gallery = [
  ['news-gal-1.jpg', 'Women studying together in a classroom'], ['news-gal-2.jpg', 'A facilitator writing on a whiteboard during a session'],
  ['news-gal-3.jpg', 'A mountain village beside a river'], ['news-gal-4.jpg', 'Women tending crops in a field'],
  ['news-gal-5.jpg', 'A group of women in a learning circle'], ['news-gal-6.jpg', 'Snow-capped mountains above a pine valley'],
]

export default function NewsPage() {
  const [filter, setFilter] = useState('All')
  const [photo, setPhoto] = useState(null)
  const stepPhoto = (direction) => setPhoto((current) => (current + direction + gallery.length) % gallery.length)
  useEffect(() => {
    if (photo === null) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setPhoto(null)
      if (event.key === 'ArrowRight') stepPhoto(1)
      if (event.key === 'ArrowLeft') stepPhoto(-1)
    }
    document.body.classList.add('no-scroll')
    window.addEventListener('keydown', onKeyDown)
    return () => { document.body.classList.remove('no-scroll'); window.removeEventListener('keydown', onKeyDown) }
  }, [photo])

  return <div className="page-news">
    <PageHero title="Stories from our communities." intro="Activity updates, field stories and photography from our work with women and communities across Afghanistan." image="news-hero.jpg" parent={{ href: '/news', label: 'News' }} />
    <section className={`section news-main ${filter !== 'All' && filter !== 'Stories' ? 'is-bare' : ''}`}>
      <div className="container"><div className="toolbar"><div className="segmented" role="tablist" aria-label="Filter content">{['All', 'Stories', 'Gallery'].map((item) => <button role="tab" aria-selected={filter === item} type="button" key={item} onClick={() => setFilter(item)}>{item}</button>)}</div><a href="mailto:Info.pwso2017@gmail.com?subject=Media%20enquiry" className="link-arrow"><span>Media enquiries</span><span aria-hidden="true">→</span></a></div>
        {(filter === 'All' || filter === 'Stories') && <><article className="feature-story rv"><div className="media feature-story-media"><img src="/assets/img/news-feature-activity.jpg" alt="A woman embroidering colourful fabric in a training workshop" /></div><div className="feature-story-body"><p className="story-topic">Community activities</p><h2>Building skills, knowledge and <em>opportunity, together.</em></h2><p className="section-text">PWSO works with women and communities to support local initiatives that build skills, knowledge and opportunities, from vocational training to community learning and awareness sessions.</p><a className="link-arrow" href="/programs"><span>How our programs work</span><span aria-hidden="true">→</span></a></div></article><div className="grid cols-3 stories">{stories.map((story) => <article className="story" key={story.title}><div className="media"><img src={`/assets/img/${story.image}`} alt="" loading="lazy" /></div><p className="story-topic">{story.topic}</p><h3>{story.title}</h3><p>{story.text}</p></article>)}</div></>}
      </div>
    </section>
    {(filter === 'All' || filter === 'Gallery') && <section className="section section-tint" id="gallery"><div className="container"><SectionHeading eyebrow="Photo gallery" title="Life, learning and local action." action={<img className="gallery-art" src="/assets/img/il/stories.svg" alt="" aria-hidden="true" loading="lazy" />}>Select a photo to view it larger.</SectionHeading><div className="gallery">{gallery.map(([image, alt], index) => <button className="gallery-item" type="button" key={image} onClick={() => setPhoto(index)} aria-label={`View photo: ${alt}`}><img src={`/assets/img/${image}`} alt="" loading="lazy" /><span className="gallery-zoom" aria-hidden="true">⌕</span></button>)}</div></div></section>}
    <section className="section"><div className="container"><SectionHeading eyebrow="Our programs" title="See how we work with communities.">Explore the five program areas through which we support resilient, self-reliant communities.</SectionHeading><div className="btn-row"><a className="btn btn-primary" href="/programs">Our programs</a><a className="btn btn-secondary" href="/projects">Our projects</a></div></div></section>
    {photo !== null && <div className="lightbox" onClick={() => setPhoto(null)} role="dialog" aria-modal="true" aria-label="Photo viewer"><figure onClick={(event) => event.stopPropagation()}><img src={`/assets/img/${gallery[photo][0]}`} alt={gallery[photo][1]} /><figcaption><span>{gallery[photo][1]}</span><span className="lb-count">{photo + 1} / {gallery.length}</span></figcaption></figure><button className="lb-btn lb-prev" type="button" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); stepPhoto(-1) }}>‹</button><button className="lb-btn lb-next" type="button" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); stepPhoto(1) }}>›</button><button className="lb-btn lb-close" type="button" aria-label="Close photo viewer" onClick={() => setPhoto(null)}>×</button></div>}
  </div>
}
