import { Search } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 md:py-32"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            All Your Needs in One Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Groceries, Restaurants, Delivery, Services & More
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search for products, restaurants, services..."
                className="w-full pl-14 pr-4 py-4 text-gray-900 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 text-lg"
                aria-label="Search for products, restaurants, services"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all shadow-lg"
            >
              Explore Services
            </a>
            <a
              href="#become-vendor"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all"
            >
              Become a Vendor
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" aria-hidden="true" />
    </section>
  )
}

