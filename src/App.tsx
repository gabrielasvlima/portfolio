import { Routes, Route, useParams, Navigate } from 'react-router-dom'
import { SiteNav } from './components/SiteNav'
import { SiteFooter } from './components/SiteFooter'
import { PageTransition } from './components/PageTransition'
import { HomePage } from './pages/HomePage'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { getCase } from './data/cases'

function CaseRoute() {
  const { slug } = useParams<{ slug: string }>()
  const study = slug ? getCase(slug) : undefined
  if (!study) return <Navigate to="/" replace />
  return <CaseStudyPage study={study} />
}

export default function App() {
  return (
    <>
      <SiteNav />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CaseRoute />} />
          <Route path="/work-picpay.html" element={<Navigate to="/work/picpay" replace />} />
          <Route path="/work-axur.html" element={<Navigate to="/work/axur" replace />} />
          <Route path="/work-sanar.html" element={<Navigate to="/work/sanar" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
      <SiteFooter />
    </>
  )
}
