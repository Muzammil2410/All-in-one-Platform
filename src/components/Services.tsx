import { useState } from 'react'
import { services } from '../data/services'
import { useApp } from '../context/AppContext'

export default function Services() {
  const { language } = useApp()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What we offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover all the services available on SourcesIn platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const isHovered = hoveredId === service.id
            const title = language === 'ar' ? service.titleAr : service.title
            const description = language === 'ar' ? service.descriptionAr : service.description

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                role="article"
                aria-labelledby={`service-${service.id}-title`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3
                  id={`service-${service.id}-title`}
                  className="text-xl font-bold text-gray-900 mb-2"
                >
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {description}
                </p>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  aria-hidden="true"
                />

                {/* Arrow Indicator */}
                <div
                  className={`absolute bottom-6 right-6 transform transition-all duration-300 ${
                    isHovered ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-2 translate-y-2 opacity-0'
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

