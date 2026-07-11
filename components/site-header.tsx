'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { locales, type Locale } from '@/lib/translations'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const { locale, setLocale, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/prets-personnels', label: t.nav.personal },
    { href: '/prets-immobiliers', label: t.nav.mortgage },
    { href: '/rachat-credit', label: t.nav.rachat },
    { href: '/credit-travaux', label: t.nav.travaux },
    { href: '/assurances', label: t.nav.assurances },
    { href: '/a-propos', label: t.nav.about },
  ]

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm">
          <a
            href="mailto:infos@eventiafinance.com"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail className="size-4" aria-hidden="true" />
            <span>infos@eventiafinance.com</span>
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm hover:bg-primary-foreground/10"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
            >
              <span className="text-base select-none">
                {locales.find((l) => l.code === locale)?.flag}
              </span>
              <span className="hidden sm:inline font-medium">
                {locales.find((l) => l.code === locale)?.label}
              </span>
              <ChevronDown className="size-4 opacity-75" aria-hidden="true" />
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 top-full z-50 mt-1 w-40 overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-lg"
              >
                {locales.map((l) => (
                  <li key={l.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={locale === l.code}
                      onClick={() => {
                        setLocale(l.code as Locale)
                        setLangOpen(false)
                      }}
                      className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm hover:bg-secondary ${
                        locale === l.code ? 'bg-secondary font-semibold' : ''
                      }`}
                    >
                      <span className="text-base select-none">
                        {l.flag}
                      </span>
                      <span>{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" className="h-10 w-auto object-contain" alt="EVENTIA FINANCE" />
          </Link>

          <nav className="hidden items-center gap-4 lg:flex" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button render={<Link href="/demande-credit" />}>
              {t.nav.apply}
            </Button>
          </nav>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="border-t border-border bg-card px-4 py-4 lg:hidden"
            aria-label="Navigation mobile"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1 text-sm font-medium text-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  className="w-full"
                  render={
                    <Link href="/demande-credit" onClick={() => setMobileOpen(false)} />
                  }
                >
                  {t.nav.apply}
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
