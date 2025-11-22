import { Star } from 'lucide-react'
import { featuredVendors } from '../data/vendors'

export default function FeaturedVendors() {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="vendors-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="vendors-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Featured Vendors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated partners and vendors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredVendors.map((vendor) => (
            <article
              key={vendor.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              aria-labelledby={`vendor-${vendor.id}-name`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={vendor.image}
                  alt={`${vendor.name} store`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    <span className="text-sm font-semibold text-gray-900">{vendor.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={`vendor-${vendor.id}-name`}
                  className="text-xl font-bold text-gray-900 mb-2"
                >
                  {vendor.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{vendor.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    <span className="font-medium">Delivery:</span> {vendor.deliveryTime}
                  </span>
                  <button
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors text-sm font-medium"
                    aria-label={`View ${vendor.name}`}
                  >
                    View Store
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all font-semibold shadow-lg hover:shadow-xl"
            aria-label="View all vendors"
          >
            View All Vendors
          </button>
        </div>
      </div>
    </section>
  )
}

