'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Locale, type Translations } from './translations'

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr')

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale
    if (saved && ['fr', 'en', 'de', 'es', 'pt'].includes(saved)) {
      setLocaleState(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: translations[locale] as Translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
