'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Calculator } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

const RATES: Record<string, number> = {
  personal: 2,
  mortgage: 2,
  consolidation: 2,
  auto: 2,
}

function formatEUR(value: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function LoanSimulator() {
  const { t } = useLanguage()
  const [loanType, setLoanType] = useState('personal')
  const [amount, setAmount] = useState(50000)
  const [duration, setDuration] = useState(120)

  const results = useMemo(() => {
    const annualRate = RATES[loanType] ?? 4.9
    const monthlyRate = annualRate / 100 / 12
    const monthly =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -duration))
    const total = monthly * duration
    return {
      rate: annualRate,
      monthly,
      total,
      cost: total - amount,
    }
  }, [loanType, amount, duration])

  const years = Math.round((duration / 12) * 10) / 10

  return (
    <section id="simulateur" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-20">
      <div className="text-center">
        <h2 className="text-balance text-3xl font-bold text-primary md:text-4xl">
          {t.simulator.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{t.simulator.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* Parameters */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Calculator className="size-5 text-accent" aria-hidden="true" />
            {t.simulator.params}
          </h3>

          <div className="mt-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="loan-type" className="text-sm font-medium">
                {t.simulator.loanType}
              </label>
              <select
                id="loan-type"
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="h-10 rounded-md border border-input bg-card px-3 text-sm"
              >
                <option value="personal">{t.simulator.types.personal}</option>
                <option value="mortgage">{t.simulator.types.mortgage}</option>
                <option value="consolidation">{t.simulator.types.consolidation}</option>
                <option value="auto">{t.simulator.types.auto}</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="amount" className="text-sm font-medium">
                  {t.simulator.amount}
                </label>
                <span className="text-sm font-semibold text-primary">
                  {formatEUR(amount)}
                </span>
              </div>
              <input
                id="amount"
                type="range"
                min={1000}
                max={500000}
                step={1000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatEUR(1000)}</span>
                <span>{formatEUR(500000)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="duration" className="text-sm font-medium">
                  {t.simulator.duration}
                </label>
                <span className="text-sm font-semibold text-primary">
                  {duration} {t.simulator.months} ({years} {t.simulator.years})
                </span>
              </div>
              <input
                id="duration"
                type="range"
                min={12}
                max={360}
                step={6}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>12 {t.simulator.months}</span>
                <span>360 {t.simulator.months}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col rounded-xl bg-primary p-6 text-primary-foreground shadow-sm">
          <h3 className="text-lg font-semibold">{t.simulator.results}</h3>
          <dl className="mt-6 flex flex-col gap-4">
            <div className="flex items-baseline justify-between gap-4 border-b border-primary-foreground/15 pb-4">
              <dt className="text-sm text-primary-foreground/75">{t.simulator.monthly}</dt>
              <dd className="text-3xl font-bold text-accent">
                {formatEUR(results.monthly)}
                <span className="text-sm font-normal text-primary-foreground/75">
                  {' /'}
                  {t.simulator.months.slice(0, t.simulator.months.length > 5 ? 5 : undefined)}
                </span>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-sm text-primary-foreground/75">{t.simulator.rate}</dt>
              <dd className="font-semibold">{results.rate.toLocaleString('fr-FR')} %</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-sm text-primary-foreground/75">{t.simulator.totalCost}</dt>
              <dd className="font-semibold">{formatEUR(results.cost)}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-sm text-primary-foreground/75">{t.simulator.totalAmount}</dt>
              <dd className="font-semibold">{formatEUR(results.total)}</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-primary-foreground/60">
            {t.simulator.resultNote}
          </p>
          <Button
            size="lg"
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
            render={<Link href="/demande-credit" />}
          >
            {t.simulator.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
