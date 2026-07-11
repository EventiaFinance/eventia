'use client'

import { useLanguage } from '@/lib/language-context'

export function CreditPageIntro() {
  const { t } = useLanguage()

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
        <h1 className="text-balance text-3xl font-bold md:text-4xl">{t.form.pageTitle}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
          {t.form.pageSubtitle}
        </p>
      </div>
    </section>
  )
}
