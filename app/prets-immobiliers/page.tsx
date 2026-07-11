'use client'

import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export default function MortgageLoansPage() {
  const { t } = useLanguage()
  const pageData = t.pages?.mortgage

  if (!pageData) return null

  return (
    <>
      <SiteHeader />
      <main className="bg-background min-h-screen">
        {/* Banner */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <img
            src="/images/service-immobilier.png"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-20"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
            <h1 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">{pageData.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base md:text-lg leading-relaxed text-primary-foreground/85">
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

              {pageData.featuresTitle && pageData.features && (
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    {pageData.featuresTitle}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {pageData.features.map((feat: any, idx: number) => (
                      <div key={idx} className="rounded-lg border border-border bg-card p-4">
                        <h3 className="font-semibold text-primary">{feat.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
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
