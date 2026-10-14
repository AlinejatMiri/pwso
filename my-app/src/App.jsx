import { useEffect } from 'react'
import SiteLayout from './components/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import LeadershipPage from './pages/LeadershipPage.jsx'
import ProgramsPage from './pages/ProgramsPage.jsx'
import PrioritiesPage from './pages/PrioritiesPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import PartnershipsPage from './pages/PartnershipsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const routes = {
  '/': ['PWSO | Supporting Afghan Women and Communities', HomePage],
  '/about': ['About PWSO', AboutPage],
  '/about/leadership': ['Leadership', LeadershipPage],
  '/programs': ['Our Programs', ProgramsPage],
  '/priorities': ['Our Priorities', PrioritiesPage],
  '/projects': ['Our Projects', ProjectsPage],
  '/resources': ['Resources', ResourcesPage],
  '/news': ['News & Stories', NewsPage],
  '/careers': ['Careers', CareersPage],
  '/partnerships': ['Partnerships', PartnershipsPage],
  '/contact': ['Contact PWSO', ContactPage],
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const [title, Page] = routes[path] ?? ['Page not found', NotFoundPage]

  useEffect(() => {
    document.title = `${title} | PWSO`
  }, [title])

  return <SiteLayout><Page /></SiteLayout>
}
