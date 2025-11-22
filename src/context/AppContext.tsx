import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'ar' | 'ur'

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  location: string | null
  setLocation: (loc: string | null) => void
  isLocationModalOpen: boolean
  setIsLocationModalOpen: (open: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [location, setLocation] = useState<string | null>(null)
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        location,
        setLocation,
        isLocationModalOpen,
        setIsLocationModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

