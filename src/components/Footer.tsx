import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

interface FooterProps {
  onVATClick: () => void
}

export default function Footer({ onVATClick }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms and Conditions', href: '#terms' },
    { label: 'Blog', href: '#blog' },
  ]

  const policyLinks = [
    { label: 'User Agreement', href: '#user-agreement' },
    { label: 'Rider Privacy Policy', href: '#rider-privacy' },
    { label: 'Partner Privacy Policy', href: '#partner-privacy' },
    { label: 'View All', href: '#policies' },
  ]

  const accountLinks = [
    { label: 'Profile', href: '#profile' },
    { label: 'Addresses', href: '#addresses' },
    { label: 'My Orders', href: '#orders' },
    { label: 'Become a Vendor', href: '#become-vendor' },
    { label: 'Become a Rider', href: '#become-rider' },
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#facebook' },
    { icon: Twitter, label: 'Twitter', href: '#twitter' },
    { icon: Instagram, label: 'Instagram', href: '#instagram' },
    { icon: Linkedin, label: 'LinkedIn', href: '#linkedin' },
    { icon: Youtube, label: 'YouTube', href: '#youtube' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ألمصدر إن</h3>
            <p className="text-gray-400 mb-6">
              Your ultimate destination for all your daily needs in one platform.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">My Account</h4>
            <ul className="space-y-2">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white focus:outline-none focus:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white focus:outline-none focus:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Condition Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Policy Condition Links</h4>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white focus:outline-none focus:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ألمصدر إن. All rights reserved.
            </p>
            <button
              onClick={onVATClick}
              className="text-primary-400 hover:text-primary-300 focus:outline-none focus:text-primary-300 transition-colors text-sm font-medium"
              aria-label="View VAT number"
            >
              VAT Number: 300943765700003
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

