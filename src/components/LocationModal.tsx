import { useState } from 'react'
import { X, MapPin, Search, Navigation } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function LocationModal() {
  const { isLocationModalOpen, setIsLocationModalOpen, setLocation } = useApp()
  const [searchQuery, setSearchQuery] = useState('')

  if (!isLocationModalOpen) return null

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation('Current Location')
          setIsLocationModalOpen(false)
        },
        () => {
          alert('Unable to get your location')
        }
      )
    } else {
      alert('Geolocation is not supported by your browser')
    }
  }

  const handleSelectLocation = (loc: string) => {
    setLocation(loc)
    setIsLocationModalOpen(false)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      onClick={() => setIsLocationModalOpen(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 id="location-modal-title" className="text-2xl font-bold text-gray-900">
            Set Location
          </h2>
          <button
            onClick={() => setIsLocationModalOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            aria-label="Close location modal"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-gray-600 mb-6">Select delivery address</p>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for area, street name..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              aria-label="Search location"
            />
          </div>

          {/* Map Placeholder */}
          <div className="mb-6 h-64 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" aria-hidden="true" />
              <p className="text-gray-500">Map View</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <button
              onClick={handleUseCurrentLocation}
              className="w-full flex items-center space-x-3 px-4 py-3 bg-primary-50 border border-primary-200 rounded-lg hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-left"
            >
              <Navigation className="w-5 h-5 text-primary-600" aria-hidden="true" />
              <span className="font-medium text-primary-700">Use current location</span>
            </button>

            <button
              onClick={() => handleSelectLocation('Selected Location')}
              className="w-full flex items-center space-x-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-left"
            >
              <MapPin className="w-5 h-5 text-gray-600" aria-hidden="true" />
              <span className="font-medium text-gray-700">Use Selected Location</span>
            </button>
          </div>

          {/* Popular Locations */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Popular Locations</h3>
            <div className="space-y-2">
              {['Downtown', 'City Center', 'Shopping District', 'Residential Area'].map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleSelectLocation(loc)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="text-gray-700">{loc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

