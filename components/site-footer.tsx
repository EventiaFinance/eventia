'use client'

import Link from 'next/link'
import { Landmark, MapPin, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10">
                <Landmark className="size-5 text-accent" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold">
                EVENTIA <span className="text-accent">FINANZ</span>
              </span>
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
                <a href="mailto:infos@eventiafinanz.com" className="hover:underline">
                  infos@eventiafinanz.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t.footer.navigation}
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/" className="hover:underline">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:underline">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/#simulateur" className="hover:underline">
                  {t.nav.simulator}
                </Link>
              </li>
              <li>
                <Link href="/demande-credit" className="hover:underline">
                  {t.nav.request}
                </Link>
              </li>
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
            {' EVENTIA FINANZ. '}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
