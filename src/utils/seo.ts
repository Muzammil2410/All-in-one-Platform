export const updateMetaTags = (title: string, description: string, image?: string) => {
  document.title = title
  
  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name'
    let meta = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attribute, name)
      document.head.appendChild(meta)
    }
    
    meta.setAttribute('content', content)
  }
  
  updateMetaTag('description', description)
  updateMetaTag('og:title', title, true)
  updateMetaTag('og:description', description, true)
  updateMetaTag('twitter:title', title)
  updateMetaTag('twitter:description', description)
  
  if (image) {
    updateMetaTag('og:image', image, true)
    updateMetaTag('twitter:image', image)
  }
}

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SourcesIn',
    url: 'https://sourcesin.com',
    logo: 'https://sourcesin.com/logo.png',
    description: 'Your ultimate destination for groceries, e-commerce, fresh produce, restaurants, delivery services, and more.',
    sameAs: [
      'https://www.facebook.com/sourcesin',
      'https://www.twitter.com/sourcesin',
      'https://www.instagram.com/sourcesin',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic', 'Urdu'],
    },
  }
}

