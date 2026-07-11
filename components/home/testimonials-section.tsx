'use client'

import Link from 'next/link'
import { Star } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <>
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold text-primary md:text-4xl">
              {t.testimonials.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.testimonials.subtitle}</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-accent text-accent" />
                ))}
              </span>
              <span className="text-sm font-semibold text-primary">5.0/5</span>
              <span className="text-sm text-muted-foreground">
                (6 {t.testimonials.reviews})
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.testimonials.items.map((item) => (
              <figure
                key={item.name}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <blockquote className="text-pretty leading-relaxed text-foreground">
                  {'"'}
                  {item.text}
                  {'"'}
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="font-semibold text-primary">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.city}</p>
                  <dl className="mt-3 flex flex-col gap-1 border-t border-border pt-3 text-sm">
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">{t.testimonials.loanType}</dt>
                      <dd className="font-medium">{item.type}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">{t.testimonials.amount}</dt>
                      <dd className="font-medium">{item.amount}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Guarantees */}
          <div className="mt-14">
            <h3 className="text-center text-xl font-semibold text-primary">
              {t.guarantees.title}
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-1 rounded-xl bg-card p-6 text-center shadow-sm">
                <span className="text-3xl font-bold text-accent-foreground">
                  <span className="text-primary">98%</span>
                </span>
                <span className="text-sm text-muted-foreground">{t.guarantees.satisfied}</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl bg-card p-6 text-center shadow-sm">
                <span className="text-3xl font-bold text-primary">24h</span>
                <span className="text-sm text-muted-foreground">{t.guarantees.response}</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl bg-card p-6 text-center shadow-sm">
                <span className="text-3xl font-bold text-primary">4.8/5</span>
                <span className="text-sm text-muted-foreground">{t.guarantees.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-16 text-center md:py-20">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">{t.cta.title}</h2>
          <p className="max-w-xl text-pretty text-primary-foreground/80">{t.cta.subtitle}</p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={<Link href="/demande-credit" />}
          >
            {t.cta.button}
          </Button>
        </div>
      </section>
    </>
  )
}
