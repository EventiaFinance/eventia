'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { useLanguage } from '@/lib/language-context'

export default function PrivacyPolicyPage() {
  const { locale } = useLanguage()

  const frContent = (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold text-primary mb-3">1. Introduction</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          EVENTIA FINANCE accorde une grande importance à la protection de la vie privée et des données personnelles des utilisateurs de son site internet. La présente politique décrit comment nous collectons, utilisons et protégeons vos informations personnelles dans le respect du Règlement Général sur la Protection des Données (RGPD) et de la loi Informatique et Libertés.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">2. Collecte des données personnelles</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Nous collectons uniquement les informations nécessaires au traitement de vos demandes de financement. Ces informations incluent :
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground flex flex-col gap-1 mb-2">
          <li><strong>Identité :</strong> Nom de famille, prénom</li>
          <li><strong>Coordonnées :</strong> Adresse e-mail, numéro de téléphone</li>
          <li><strong>Situation financière :</strong> Type de crédit demandé, montant souhaité, durée souhaitée, revenus mensuels nets, et situation professionnelle.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">3. Finalité du traitement</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Vos données sont traitées pour évaluer la faisabilité de votre demande de prêt, élaborer des simulations de financement personnalisées, et vous recontacter par téléphone ou par e-mail afin de vous soumettre nos propositions de crédit. Vos données ne sont jamais vendues ou louées à des fins publicitaires.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">4. Conservation des données</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Conformément aux recommandations de la CNIL, les données des prospects sont conservées pour une durée maximale de 3 ans à compter de leur collecte ou du dernier contact actif de la part de l'utilisateur. Si un contrat de prêt est signé, les données sont conservées pendant toute la durée du crédit augmentée des délais légaux de prescription.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">5. Destinataires des données</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Les destinataires de vos données sont les conseillers agréés d'EVENTIA FINANCE chargés d'étudier votre dossier, ainsi que nos établissements de crédit partenaires (banques) si le dépôt officiel de votre demande l'exige.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">6. Vos droits</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Conformément à la réglementation européenne, vous disposez des droits suivants sur vos données :
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground flex flex-col gap-1">
          <li>Droit d'accès et de rectification</li>
          <li>Droit à l'effacement ("droit à l'oubli")</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit d'opposition au traitement</li>
        </ul>
        <p className="text-sm leading-relaxed text-muted-foreground mt-3">
          Pour exercer ces droits, vous pouvez nous adresser votre demande à tout moment par e-mail à l'adresse suivante : <strong>info@eventiafinance.com</strong>.
        </p>
      </div>
    </div>
  )

  const ptContent = (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold text-primary mb-3">1. Introdução</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A EVENTIA FINANCE atribui grande importância à proteção da privacidade e dos dados pessoais dos utilizadores do seu site. Esta política descreve como recolhemos, utilizamos e protegemos as suas informações em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">2. Recolha de dados pessoais</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Recolhemos apenas as informações necessárias para processar e analisar o seu pedido de financiamento, tais como:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground flex flex-col gap-1">
          <li>Nome e apelido</li>
          <li>Endereço de e-mail e número de telefone</li>
          <li>Tipo de crédito, montante pretendido, duração, rendimento mensal e situação profissional.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">3. Finalidade do tratamento</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Os seus dados são tratados com o objetivo de analisar a viabilidade do seu crédito, elaborar simulações de financiamento personalizadas e contactá-lo por telefone ou e-mail.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">4. Os seus direitos</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Tem o direito de aceder, retificar, limitar ou apagar os seus dados pessoais a qualquer momento. Para exercer estes direitos, contacte-nos através do e-mail: <strong>info@eventiafinance.com</strong>.
        </p>
      </div>
    </div>
  )

  const enContent = (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold text-primary mb-3">1. Introduction</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          EVENTIA FINANCE attaches great importance to protecting the privacy and personal data of website users. This policy describes how we collect, use, and protect your personal information in compliance with the General Data Protection Regulation (GDPR).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">2. Data Collection</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          We collect only the necessary information to evaluate and process your credit application:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground flex flex-col gap-1">
          <li>First name and last name</li>
          <li>Email address and phone number</li>
          <li>Desired loan type, amount, duration, net monthly income, and professional situation.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">3. Purpose of Processing</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Your data is processed to assess the feasibility of your loan request, generate custom credit proposals, and contact you via email or phone. Your data will never be sold or rented.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-primary mb-3">4. Your Rights</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          You have the right to access, rectify, restrict, or delete your personal data. To exercise these rights, you can contact us at: <strong>info@eventiafinance.com</strong>.
        </p>
      </div>
    </div>
  )

  const content = locale === 'pt' ? ptContent : locale === 'en' ? enContent : frContent
  const title = locale === 'pt' ? 'Política de Privacidade' : locale === 'en' ? 'Privacy Policy' : locale === 'de' ? 'Datenschutzerklärung' : locale === 'es' ? 'Política de Privacidad' : 'Politique de Confidentialité'
  const subtitle = locale === 'pt' ? 'Como protegemos e tratamos os seus dados pessoais' : locale === 'en' ? 'How we protect and manage your personal data' : 'Comment nous protégeons et gérons vos données personnelles'

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
