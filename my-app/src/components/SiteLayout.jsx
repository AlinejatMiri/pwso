import { useState } from 'react'

const navItems = [
  ['About', '/about'], ['Programs', '/programs'], ['Priorities', '/priorities'],
  ['Projects', '/projects'], ['Resources', '/resources'], ['News', '/news'],
  ['Partnerships', '/partnerships'],
]

export function SiteLink({ to, children, ...props }) {
  return <a href={to} {...props}>{children}</a>
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  return <header className="header">
    <div className="spectrum" aria-hidden="true" />
    <div className="container header-inner">
      <a className="brand" href="/" aria-label="PWSO home">
        <span className="brand-mark"><img src="/assets/img/logo.png" alt="" width="112" height="54" /></span>
        <span className="brand-name">Poor Women<br />Support Organization<small>Afghan-led · Since 2017</small></span>
      </a>
      <nav id="main-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <ul className="nav-list">
          {navItems.map(([label, to]) => <li className="nav-item" key={to}>
            <a className={`nav-link ${path === to ? 'active' : ''}`} href={to} onClick={() => setOpen(false)}>{label}</a>
          </li>)}
        </ul>
        <div className="nav-mobile-extra"><a className="nav-link" href="/careers">Careers</a></div>
      </nav>
      <div className="header-tools"><a className="btn btn-primary header-cta" href="/contact">Contact us</a>
        <button className="icon-btn nav-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen(!open)}><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>
}

export function SiteFooter() {
  return <footer className="footer">
    <span className="wheel wheel-spin footer-wheel" aria-hidden="true" />
    <div className="container footer-top">
      <div className="footer-about"><a className="brand brand-light" href="/" aria-label="PWSO home"><span className="brand-mark"><img src="/assets/img/logo.png" alt="" width="112" height="54" /></span></a>
        <p>Supporting Afghan women and vulnerable communities through education, health and sustainable livelihoods.</p>
      </div>
      <div className="footer-sub"><h2 className="footer-sub-title">Explore</h2><ul className="footer-links">
        {navItems.map(([label, to]) => <li key={to}><a href={to}>{label}</a></li>)}
      </ul></div>
      <div><h2 className="footer-sub-title">Get in touch</h2><div className="footer-contact"><a href="/contact">Contact our team</a><a href="/partnerships">Work with PWSO</a><a href="/careers">Careers</a></div></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Poor Women Support Organization</span><span>Afghan-led. Community-focused.</span></div>
  </footer>
}

export default function SiteLayout({ children }) {
  return <><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></>
}
