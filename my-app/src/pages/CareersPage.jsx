import { useState } from 'react'
import PageHero, { SectionHeading } from '../components/PageHero.jsx'

const opportunities = {
  careers: { title: 'Careers', heading: 'No current vacancies', text: 'We share open positions when opportunities are available. Contact us to ask about upcoming roles.', image: 'careers.svg', subject: 'Careers at PWSO', action: 'Ask about opportunities' },
  procurement: { title: 'Procurement', heading: 'No current tenders', text: 'Supplier opportunities are shared here when available. Contact our team with procurement enquiries.', image: 'partnership.svg', subject: 'Procurement enquiry', action: 'Ask about procurement' },
}

export default function CareersPage() {
  const [tab, setTab] = useState('careers')
  const opportunity = opportunities[tab]

  return <div className="page-careers">
    <PageHero title="Work with purpose. Partner with integrity." intro="Join us in building stronger, more resilient communities across Afghanistan, as a member of our team or as a supplier." image="resources-hero.jpg" />
    <section className="section"><div className="container">
      <div className="toolbar"><p className="eyebrow">Opportunity type</p><div className="segmented" role="tablist" aria-label="Opportunity type">{Object.entries(opportunities).map(([key, item]) => <button role="tab" aria-selected={tab === key} type="button" key={key} onClick={() => setTab(key)}>{item.title}</button>)}</div></div>
      <div role="tabpanel" aria-label={opportunity.title}><article className="empty-state"><img className="empty-art" src={`/assets/img/il/${opportunity.image}`} alt="" /><p className="eyebrow">{opportunity.title}</p><h2>{opportunity.heading}</h2><p>{opportunity.text}</p><a className="btn btn-secondary btn-sm" href={`mailto:Info.pwso2017@gmail.com?subject=${encodeURIComponent(opportunity.subject)}`}>{opportunity.action}</a></article>
        <div className="careers-steps"><SectionHeading eyebrow={tab === 'careers' ? 'How to apply' : 'Supplier enquiries'} title={tab === 'careers' ? 'A clear, respectful process' : 'Working with PWSO'} /><ol className="steps">{(tab === 'careers' ? [['Review', 'Read the requirements for the opportunity.'], ['Apply', 'Send the requested information by the stated deadline.'], ['Follow up', 'Our team will contact shortlisted applicants.']] : [['Review', 'Check the scope and requirements of the tender.'], ['Submit', 'Provide the requested documents by the deadline.'], ['Follow up', 'Our team will contact suppliers as appropriate.']]).map(([title, text], index) => <li key={title}><span className="number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div>
      </div>
    </div></section>
    <section className="section section-tint"><div className="container contact-strip"><div><p className="eyebrow">Enquiries</p><h2>Questions about careers or procurement?</h2><p className="section-text">Our team can tell you about current and upcoming opportunities.</p></div><div className="contact-strip-actions"><a className="btn btn-primary" href="mailto:Info.pwso2017@gmail.com">Info.pwso2017@gmail.com</a><a className="btn btn-secondary" href="tel:+93795666304">+93 795 666 304</a></div></div></section>
  </div>
}
