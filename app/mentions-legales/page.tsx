'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { useLanguage } from '@/lib/language-context'

export default function LegalNoticesPage() {
  const { locale } = useLanguage()

  const frContent = (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold text-primary mb-3">1. Présentation du site</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet d'EVENTIA FINANCE l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">2. Éditeur de l'offre et du site</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Le site internet est édité par la société <strong>EVENTIA FINANCE</strong>, société à responsabilité limitée (SARL).
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground flex flex-col gap-1">
          <li><strong>Siège social :</strong> 55 Place Charles de Gaulle, 59500 Douai, France</li>
          <li><strong>Capital social :</strong> 17 000 000 €</li>
          <li><strong>SIREN :</strong> 494 831 191</li>
          <li><strong>SIRET :</strong> 494 831 191 00056</li>
          <li><strong>Code APE / NAF :</strong> 6492Z (Autre distribution de crédit)</li>
          <li><strong>N° TVA Intracommunautaire :</strong> FR56 494831191</li>
          <li><strong>RCS :</strong> Enregistrée au Registre du Commerce et des Sociétés de Paris sous le n° 424 264 281</li>
          <li><strong>Directeur de la publication :</strong> Équipe de Direction d'EVENTIA FINANCE</li>
          <li><strong>Contact e-mail :</strong> info@eventiafinance.com</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">3. Hébergement du site</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Le site internet est hébergé par la société <strong>Vercel Inc.</strong>, situé au 650 California St, San Francisco, CA 94108, États-Unis (téléphone : +1 (951) 383-6876, site web : https://vercel.com).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">4. Activité d'intermédiation en crédit</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          EVENTIA FINANCE est agréée en qualité d'intermédiaire en opérations de banque et en services de paiement (COIOBSP). Son activité est soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR), sise 4 Place de Budapest, CS 92459, 75436 Paris Cedex 09.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">5. Propriété intellectuelle</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Tous les éléments du site internet d'EVENTIA FINANCE (textes, graphiques, logos, icônes, images) sont la propriété exclusive de la société, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires. Toute reproduction, représentation ou diffusion, en tout ou en partie, du contenu de ce site sur quelque support que ce soit est strictement interdite sans autorisation écrite préalable.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">6. Responsabilité</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          EVENTIA FINANCE s'efforce de fournir sur son site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d'évoluer.
        </p>
      </div>
    </div>
  )

  const ptContent = (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold text-primary mb-3">1. Apresentação do site</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Em conformidade com a legislação aplicável, informa-se os utilizadores do site da EVENTIA FINANCE sobre a identidade dos diferentes intervenientes na sua criação e manutenção.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">2. Editor da oferta e do site</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Este site é editado pela empresa <strong>EVENTIA FINANCE</strong>, sociedade por quotas de responsabilidade limitada (SARL).
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground flex flex-col gap-1">
          <li><strong>Sede social:</strong> 55 Place Charles de Gaulle, 59500 Douai, França</li>
          <li><strong>Capital social:</strong> 17 000 000 €</li>
          <li><strong>SIREN:</strong> 494 831 191</li>
          <li><strong>SIRET:</strong> 494 831 191 00056</li>
          <li><strong>Código APE / NAF:</strong> 6492Z (Outra distribuição de crédito)</li>
          <li><strong>N.º IVA Intracomunitário:</strong> FR56 494831191</li>
          <li><strong>RCS:</strong> Registada no Registo do Comércio e das Sociedades de Paris sob o n.º 424 264 281</li>
          <li><strong>Diretor da publicação:</strong> Equipa de Direção da EVENTIA FINANCE</li>
          <li><strong>E-mail de contacto:</strong> info@eventiafinance.com</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">3. Alojamento do site</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          O alojamento do site é assegurado pela empresa <strong>Vercel Inc.</strong>, com sede em 650 California St, San Francisco, CA 94108, Estados Unidos da América (https://vercel.com).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">4. Atividade de intermediação de crédito</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A EVENTIA FINANCE está autorizada a atuar como intermediária em operações bancárias e serviços de pagamento. A sua atividade está sujeita à supervisão das autoridades reguladoras competentes.
        </p>
      </div>
    </div>
  )

  const enContent = (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold text-primary mb-3">1. Website Presentation</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          In accordance with the law, users of the EVENTIA FINANCE website are informed of the identity of the various parties involved in its creation and monitoring.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">2. Website Publisher</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          This website is published by <strong>EVENTIA FINANCE</strong>, a limited liability company (SARL).
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground flex flex-col gap-1">
          <li><strong>Registered Office:</strong> 55 Place Charles de Gaulle, 59500 Douai, France</li>
          <li><strong>Share Capital:</strong> €17,000,000</li>
          <li><strong>SIREN:</strong> 494 831 191</li>
          <li><strong>SIRET:</strong> 494 831 191 00056</li>
          <li><strong>VAT Number:</strong> FR56 494831191</li>
          <li><strong>RCS Registration:</strong> Registered under RCS Paris No. 424 264 281</li>
          <li><strong>Publication Director:</strong> Management Board of EVENTIA FINANCE</li>
          <li><strong>Contact Email:</strong> info@eventiafinance.com</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">3. Website Hosting</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          This website is hosted by <strong>Vercel Inc.</strong>, located at 650 California St, San Francisco, CA 94108, USA (https://vercel.com).
        </p>
      </div>
    </div>
  )

  // Use FR for de, es, pt if specific translations are not required, but since we support all, let's fall back gracefully.
  const content = locale === 'pt' ? ptContent : locale === 'en' ? enContent : frContent
  const title = locale === 'pt' ? 'Avisos Legais' : locale === 'en' ? 'Legal Notices' : locale === 'de' ? 'Impressum' : locale === 'es' ? 'Aviso Legal' : 'Mentions Légales'
  const subtitle = locale === 'pt' ? 'Informações legais da EVENTIA FINANCE' : locale === 'en' ? 'Legal information of EVENTIA FINANCE' : 'Informations légales réglementaires d\'EVENTIA FINANCE'

  return (
    <>
      <SiteHeader />
      <main className="bg-background min-h-screen">
        {/* Banner */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
            <h1 className="text-balance text-3xl font-bold md:text-4xl">{title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
              {subtitle}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-4 py-16">
          <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
            {content}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
