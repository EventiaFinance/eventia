'use client'

import Link from 'next/link'
import { Wallet, Home, Layers, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    { icon: Wallet, title: t.services.personal.title, desc: t.services.personal.desc },
    { icon: Home, title: t.services.mortgage.title, desc: t.services.mortgage.desc },
    { icon: Layers, title: t.services.consolidation.title, desc: t.services.consolidation.desc },
  ]

  const reasons = [
    { icon: ShieldCheck, title: t.why.security.title, desc: t.why.security.desc },
    { icon: Zap, title: t.why.speed.title, desc: t.why.speed.desc },
    { icon: Users, title: t.why.support.title, desc: t.why.support.desc },
  ]

  return (
    <>
      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-primary md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.services.subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-primary">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              <Link
                href="/demande-credit"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground"
              >
                <span className="text-primary group-hover:underline">{t.services.discover}</span>
                <ArrowRight className="size-4 text-primary" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-balance text-center text-3xl font-bold text-primary md:text-4xl">
            {t.why.title}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex flex-col items-center gap-3 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <reason.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-primary">{reason.title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
