'use client'

import { useLanguage } from '@/lib/language-context'

const PARTNERS = [
  {
    name: 'BNP Paribas',
    logo: (
      <svg className="h-12 w-auto text-[#00965E]" viewBox="0 0 200 50" fill="currentColor">
        <circle cx="25" cy="25" r="18" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M25 15 L32 22 L25 29 L18 22 Z" />
        <text x="60" y="32" className="font-bold text-sm fill-foreground">BNP PARIBAS</text>
      </svg>
    ),
  },
  {
    name: 'Société Générale',
    logo: (
      <svg className="h-12 w-auto text-foreground" viewBox="0 0 200 50" fill="currentColor">
        <rect x="10" y="10" width="30" height="15" fill="#E60028" />
        <rect x="10" y="25" width="30" height="15" fill="#000000" />
        <rect x="10" y="23" width="30" height="4" fill="#FFFFFF" />
        <text x="55" y="32" className="font-bold text-sm fill-foreground">SOCIETE GENERALE</text>
      </svg>
    ),
  },
  {
    name: 'Crédit Agricole',
    logo: (
      <svg className="h-12 w-auto text-[#007A87]" viewBox="0 0 200 50" fill="currentColor">
        <path d="M15 35 L25 15 L35 35 M22 28 L28 28" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <text x="50" y="32" className="font-bold text-sm fill-foreground">CREDIT AGRICOLE</text>
      </svg>
    ),
  },
  {
    name: 'Caisse d’Épargne',
    logo: (
      <svg className="h-12 w-auto text-[#E2001A]" viewBox="0 0 200 50" fill="currentColor">
        <circle cx="25" cy="25" r="15" fill="currentColor" />
        <text x="55" y="32" className="font-bold text-sm fill-foreground">CAISSE D'EPARGNE</text>
      </svg>
    ),
  },
  {
    name: 'LCL',
    logo: (
      <svg className="h-12 w-auto text-[#002F6C]" viewBox="0 0 200 50" fill="currentColor">
        <rect x="10" y="10" width="30" height="30" rx="4" fill="#002F6C" />
        <text x="18" y="31" className="font-bold text-lg fill-white">L</text>
        <text x="50" y="32" className="font-bold text-sm fill-foreground">LCL Banque</text>
      </svg>
    ),
  },
  {
    name: 'Crédit Mutuel',
    logo: (
      <svg className="h-12 w-auto text-[#E30613]" viewBox="0 0 200 50" fill="currentColor">
        <path d="M10 15 L25 35 L40 15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <text x="50" y="32" className="font-bold text-sm fill-foreground">Crédit Mutuel</text>
      </svg>
    ),
  },
  {
    name: 'CIC',
    logo: (
      <svg className="h-12 w-auto text-[#005B94]" viewBox="0 0 200 50" fill="currentColor">
        <text x="10" y="35" className="font-extrabold text-2xl tracking-wider">CIC</text>
        <text x="60" y="32" className="font-bold text-sm fill-foreground">Banque CIC</text>
      </svg>
    ),
  },
  {
    name: 'BoursoBank',
    logo: (
      <svg className="h-12 w-auto text-[#E4007B]" viewBox="0 0 200 50" fill="currentColor">
        <text x="10" y="35" className="font-extrabold text-2xl italic tracking-tight">BoursoBank</text>
      </svg>
    ),
  },
  {
    name: 'Younited',
    logo: (
      <svg className="h-12 w-auto text-[#00D4B2]" viewBox="0 0 200 50" fill="currentColor">
        <circle cx="25" cy="25" r="16" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="25" cy="25" r="8" fill="currentColor" />
        <text x="55" y="32" className="font-bold text-sm fill-foreground">younited.</text>
      </svg>
    ),
  },
  {
    name: 'Cofidis',
    logo: (
      <svg className="h-12 w-auto text-[#FF6C00]" viewBox="0 0 200 50" fill="currentColor">
        <circle cx="25" cy="25" r="14" fill="#FFC700" />
        <path d="M25 10 L25 40 M10 25 L40 25" stroke="#FF6C00" strokeWidth="3" />
        <text x="50" y="32" className="font-bold text-sm fill-foreground">Cofidis</text>
      </svg>
    ),
  },
]

export function PartnersSection() {
  const { locale } = useLanguage()

  const titles: Record<string, string> = {
    fr: 'Nos Partenaires',
    en: 'Our Partners',
    de: 'Unsere partner',
    es: 'Nuestros Socios',
    pt: 'Os Nossos Parceiros',
  }

  const subtitles: Record<string, string> = {
    fr: 'Nous collaborons avec les plus grands établissements de crédit pour vous garantir les meilleurs taux du marché.',
    en: 'We collaborate with the largest credit institutions to guarantee you the best rates on the market.',
    de: 'Wir arbeiten mit den größten Kreditinstituten zusammen, um Ihnen die besten Marktzinsen zu garantieren.',
    es: 'Colaboramos con las mayores entidades de crédito para garantizarle las mejores condiciones del mercado.',
    pt: 'Colaboramos com as maiores instituições de crédito para lhe garantir as melhores taxas do mercado.',
  }

  const duplicatedPartners = [...PARTNERS, ...PARTNERS]

  return (
    <section className="border-t border-border bg-card py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 text-center mb-8 md:mb-10">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          {titles[locale] || titles.fr}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {subtitles[locale] || subtitles.fr}
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="animate-marquee flex gap-12 items-center py-4">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center min-w-40 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none cursor-pointer"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
