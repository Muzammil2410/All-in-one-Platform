import { useState, useEffect, lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { AppProvider } from './context/AppContext'
import { generateStructuredData } from './utils/seo'

// Lazy load components for better performance
const Services = lazy(() => import('./components/Services'))
const FeaturedVendors = lazy(() => import('./components/FeaturedVendors'))
const Newsletter = lazy(() => import('./components/Newsletter'))
const AppDownload = lazy(() => import('./components/AppDownload'))
const Footer = lazy(() => import('./components/Footer'))
const CookieConsent = lazy(() => import('./components/CookieConsent'))
const VATModal = lazy(() => import('./components/VATModal'))

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false)
  const [showVATModal, setShowVATModal] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowCookieConsent(true)
    }

    // Add structured data for SEO
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(generateStructuredData())
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          <Hero />
          <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
            <Services />
          </Suspense>
          <Suspense fallback={<div className="h-64 bg-white animate-pulse" />}>
            <FeaturedVendors />
          </Suspense>
          <Suspense fallback={<div className="h-64 bg-primary-600 animate-pulse" />}>
            <Newsletter />
          </Suspense>
          <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
            <AppDownload />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer onVATClick={() => setShowVATModal(true)} />
        </Suspense>
        {showCookieConsent && (
          <Suspense fallback={null}>
            <CookieConsent onAccept={() => setShowCookieConsent(false)} />
          </Suspense>
        )}
        {showVATModal && (
          <Suspense fallback={null}>
            <VATModal onClose={() => setShowVATModal(false)} />
          </Suspense>
        )}
      </div>
    </AppProvider>
  )
}

export default App

