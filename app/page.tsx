import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { LoanSimulator } from '@/components/home/loan-simulator'
import { TestimonialsSection } from '@/components/home/testimonials-section'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <LoanSimulator />
        <TestimonialsSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
