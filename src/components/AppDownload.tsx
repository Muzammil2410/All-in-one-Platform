import { Smartphone, Download } from 'lucide-react'

export default function AppDownload() {
  return (
    <section
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="app-download-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                  <Smartphone className="w-12 h-12" aria-hidden="true" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2
                  id="app-download-heading"
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Download Our Apps
                </h2>
                <p className="text-xl text-primary-100 mb-6">
                  Get the SourcesIn app for the best experience on mobile devices
                </p>

                {/* App Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="#app-store"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all font-semibold shadow-lg hover:shadow-xl"
                    aria-label="Download from App Store"
                  >
                    <Download className="w-5 h-5" aria-hidden="true" />
                    <span>App Store</span>
                  </a>
                  <a
                    href="#play-store"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all font-semibold shadow-lg hover:shadow-xl"
                    aria-label="Download from Play Store"
                  >
                    <Download className="w-5 h-5" aria-hidden="true" />
                    <span>Play Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

