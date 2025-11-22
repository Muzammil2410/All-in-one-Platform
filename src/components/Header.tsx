import { useState } from 'react'
import { MapPin, Menu, X, User, Globe, ShoppingCart } from 'lucide-react'
import { useApp } from '../context/AppContext'
import LocationModal from './LocationModal'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'Arabic' },
  { code: 'ur', name: 'Urdu' },
]

export default function Header() {
  const { language, setLanguage, location, setIsLocationModalOpen } = useApp()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const currentLang = languages.find((l) => l.code === language)?.name || 'English'

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
            <a
              href="/"
              className="text-2xl md:text-3xl font-bold text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
              aria-label="SourcesIn Home"
            >
              ألمصدر إن
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse" aria-label="Main navigation">
            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              aria-label="Set delivery location"
            >
              <MapPin className="w-5 h-5 text-primary-600" aria-hidden="true" />
              <span className="text-sm font-medium">
                {location || 'Set Location'}
              </span>
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                aria-label="Select language"
                aria-expanded={isLangMenuOpen}
                aria-haspopup="true"
              >
                <Globe className="w-5 h-5" aria-hidden="true" />
                <span className="hidden sm:inline text-sm font-medium">{currentLang}</span>
              </button>
              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangMenuOpen(false)}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20"
                    role="menu"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as 'en' | 'ar' | 'ur')
                          setIsLangMenuOpen(false)
                          document.documentElement.setAttribute('dir', lang.code === 'ar' ? 'rtl' : 'ltr')
                          document.documentElement.setAttribute('lang', lang.code)
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                          language === lang.code ? 'bg-primary-50 text-primary-600 font-medium' : ''
                        }`}
                        role="menuitem"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Cart */}
            <button
              className="relative p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" aria-hidden="true" />
              <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Login */}
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              aria-label="Login"
            >
              <User className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline font-medium">Login</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200" role="navigation" aria-label="Mobile navigation">
            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="w-full flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-left"
            >
              <MapPin className="w-5 h-5 text-primary-600" aria-hidden="true" />
              <span className="font-medium">{location || 'Set Location'}</span>
            </button>
            <div className="mt-4 space-y-2">
              <a
                href="#become-vendor"
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              >
                Become a Vendor
              </a>
              <a
                href="#become-rider"
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              >
                Become a Rider
              </a>
            </div>
          </div>
        )}
      </div>
      <LocationModal />
    </header>
  )
}

