import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white"
      aria-labelledby="newsletter-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-primary-200" aria-hidden="true" />
          <h2
            id="newsletter-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            News Letter
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter to get latest updates
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            aria-label="Newsletter subscription form"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-12 pr-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300"
                aria-label="Email address"
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              aria-label="Subscribe to newsletter"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>Subscribing...</span>
                </>
              ) : isSubmitted ? (
                <>
                  <span>✓</span>
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" aria-hidden="true" />
                  <span>Subscribe</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

