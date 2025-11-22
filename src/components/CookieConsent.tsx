import { X } from 'lucide-react'

interface CookieConsentProps {
  onAccept: () => void
}

export default function CookieConsent({ onAccept }: CookieConsentProps) {
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    onAccept()
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3
              id="cookie-consent-title"
              className="text-lg font-semibold text-gray-900 mb-2"
            >
              We use cookies
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              We use cookies to enhance your experience. By using our website, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors font-medium"
              aria-label="Accept cookies"
            >
              Accept
            </button>
            <button
              onClick={handleAccept}
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              aria-label="Close cookie consent"
            >
              <X className="w-5 h-5 text-gray-600" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

