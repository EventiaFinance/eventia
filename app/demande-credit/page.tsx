import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CreditRequestForm } from '@/components/credit-request-form'
import { CreditPageIntro } from '@/components/credit-page-intro'

export default function CreditRequestPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CreditPageIntro />
        <CreditRequestForm />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
