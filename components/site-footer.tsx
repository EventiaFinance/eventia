'use client'

import Link from 'next/link'
import { MapPin, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img src="/logo.svg" className="h-10 w-auto object-contain bg-white px-3 py-1.5 rounded-lg" alt="EVENTIA FINANCE" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
              {t.footer.tagline}
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <a href="mailto:info@eventiafinance.com" className="hover:underline">
                  info@eventiafinance.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t.footer.navigation}
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li><Link href="/" className="hover:underline">{t.nav.home}</Link></li>
              <li><Link href="/prets-personnels" className="hover:underline">{t.nav.personal}</Link></li>
              <li><Link href="/prets-immobiliers" className="hover:underline">{t.nav.mortgage}</Link></li>
              <li><Link href="/rachat-credit" className="hover:underline">{t.nav.rachat}</Link></li>
              <li><Link href="/credit-travaux" className="hover:underline">{t.nav.travaux}</Link></li>
              <li><Link href="/assurances" className="hover:underline">{t.nav.assurances}</Link></li>
              <li><Link href="/a-propos" className="hover:underline">{t.nav.about}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t.footer.services}
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>{t.services.personal.title}</li>
              <li>{t.services.mortgage.title}</li>
              <li>{t.services.consolidation.title}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t.footer.legalInfo}
            </h3>
            <ul className="mt-4 flex flex-col gap-1.5 text-sm text-primary-foreground/80">
              <li>{t.footer.legal.form}</li>
              <li>{t.footer.legal.capital}</li>
              <li>{t.footer.legal.siren}</li>
              <li>{t.footer.legal.siret}</li>
              <li>{t.footer.legal.tva}</li>
              <li>{t.footer.legal.rcs}</li>
              <li>{t.footer.legal.rne}</li>
              <li>{t.footer.legal.staff}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6">
          <p className="text-center text-xs leading-relaxed text-primary-foreground/60">
            {t.footer.warning}
          </p>
          <p className="mt-3 text-center text-xs text-primary-foreground/60">
            {'© '}
            {new Date().getFullYear()}
            {' EVENTIA FINANCE. '}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
