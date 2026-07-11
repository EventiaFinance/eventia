'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img
        src="/images/hero-finance.png"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center md:py-28">
        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {t.hero.welcome}
        </h1>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
          {t.hero.description}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={<Link href="/demande-credit" />}
          >
            {t.hero.cta1}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            render={<Link href="/#simulateur" />}
          >
            {t.hero.cta2}
          </Button>
        </div>
        <p className="mt-4 max-w-lg text-xs leading-relaxed text-primary-foreground/60">
          {t.hero.legal}
        </p>
      </div>
    </section>
  )
}
