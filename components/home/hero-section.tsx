'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

const CAROUSEL_IMAGES = [
  '/images/hero-carousel-1.png',
  '/images/hero-carousel-2.png',
  '/images/hero-carousel-3.png',
  '/images/hero-carousel-4.png',
]

export function HeroSection() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length)
    }, 5000) // Transition every 5 seconds

    return () => clearInterval(timer)
  }, [currentIndex])

  useEffect(() => {
    setFade(false)
    const timeout = setTimeout(() => {
      setDisplayIndex(currentIndex)
      setFade(true)
    }, 300)
    return () => clearTimeout(timeout)
  }, [currentIndex])

  const slides = [
    {
      title: t.hero.welcome,
      description: t.hero.description,
    },
    {
      title: t.services.personal.title,
      description: t.services.personal.desc,
    },
    {
      title: t.services.mortgage.title,
      description: t.services.mortgage.desc,
    },
    {
      title: t.services.consolidation.title,
      description: t.services.consolidation.desc,
    },
  ]

  const currentSlide = slides[displayIndex] || slides[0]

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 size-full">
        {CAROUSEL_IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-25' : 'opacity-0'
            }`}
          />
        ))}
        {/* Subtle overlay to guarantee readability */}
        <div className="absolute inset-0 bg-primary/20" />
      </div>

      {/* Vertical Carousel Indicators */}
      <div 
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2.5"
        role="tablist"
        aria-label="Carousel slides"
      >
        {CAROUSEL_IMAGES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 rounded-full transition-all duration-300 outline-none ${
              idx === currentIndex 
                ? 'h-8 bg-accent' 
                : 'h-4 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center md:py-28">
        <div
          className={`flex flex-col items-center gap-6 transition-all duration-300 ease-in-out ${
            fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {currentSlide.title}
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
            {currentSlide.description}
          </p>
        </div>
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
