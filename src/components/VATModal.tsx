import { X, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface VATModalProps {
  onClose: () => void
}

export default function VATModal({ onClose }: VATModalProps) {
  const vatNumber = '300943765700003'
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(vatNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vat-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 id="vat-modal-title" className="text-2xl font-bold text-gray-900">
            VAT Number
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            aria-label="Close VAT modal"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              VAT Number
            </label>
            <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-4">
              <span className="text-2xl font-bold text-gray-900 font-mono">
                {vatNumber}
              </span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                aria-label="Copy VAT number"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-600" aria-hidden="true" />
                )}
              </button>
            </div>
            {copied && (
              <p className="mt-2 text-sm text-green-600">Copied to clipboard!</p>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-gray-900">Payment method</p>
                <p className="text-sm text-gray-600">Multiple payment options available</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-gray-900">Secure transactions</p>
                <p className="text-sm text-gray-600">All payments are secure and encrypted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

