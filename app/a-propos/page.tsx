'use client'

import Link from 'next/link'
import { CheckCircle2, Users, Award, ShieldCheck } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export default function AboutPage() {
  const { t, locale } = useLanguage()
  const pageData = t.pages?.about

  if (!pageData) return null

  return (
    <>
      <SiteHeader />
      <main className="bg-background min-h-screen">
        {/* Banner */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
            <h1 className="text-balance text-3xl font-bold md:text-4xl">{pageData.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
              {pageData.subtitle}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3 flex flex-col gap-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {pageData.desc}
              </p>

              {/* Company Stats Icons */}
              <div className="grid gap-4 sm:grid-cols-3 mt-4">
                <div className="flex flex-col items-center text-center p-4 rounded-lg border border-border bg-card">
                  <Users className="size-8 text-accent mb-2" />
                  <span className="text-2xl font-bold text-primary">43</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {locale === 'fr' ? 'Conseillers Experts' : locale === 'en' ? 'Expert Advisors' : locale === 'de' ? 'Expertenberater' : 'Asesores Expertos'}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border border-border bg-card">
                  <Award className="size-8 text-accent mb-2" />
                  <span className="text-2xl font-bold text-primary">19+</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {locale === 'fr' ? "Ans d'Expérience" : locale === 'en' ? 'Years of Experience' : locale === 'de' ? 'Jahre Erfahrung' : 'Años de Experiencia'}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-lg border border-border bg-card">
                  <ShieldCheck className="size-8 text-accent mb-2" />
                  <span className="text-2xl font-bold text-primary">10k+</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {locale === 'fr' ? 'Clients Satisfaits' : locale === 'en' ? 'Satisfied Clients' : locale === 'de' ? 'Zufriedene Kunden' : 'Clientes Satisfechos'}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <Button size="lg" className="w-fit" render={<Link href="/demande-credit" />}>
                  {t.nav.apply}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 shadow-sm h-fit">
              <h2 className="text-xl font-bold text-primary mb-6">
                {pageData.advantagesTitle}
              </h2>
              <ul className="flex flex-col gap-4">
                {pageData.advantages.map((adv: string, index: number) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                    <CheckCircle2 className="size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
