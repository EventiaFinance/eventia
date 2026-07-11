'use client'

import { useState, type FormEvent } from 'react'
import { ShieldCheck, Clock, Users, CheckCircle2, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'

const inputClass =
  'h-10 w-full rounded-md border border-input bg-card px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring'

export function CreditRequestForm() {
  const { t, locale } = useLanguage()
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (email.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) {
      setError(t.form.emailMismatch)
      return
    }
    setError(null)
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData.entries())

      const res = await fetch('/api/demande-credit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok || result.error) {
        throw new Error(result.error || 'Erreur lors de la soumission.')
      }

      setSubmitted(true)
    } catch (err: any) {
      console.error(err)
      setError(err instanceof Error ? err.message : 'Une erreur est survenue, veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1fr_340px]">
      {/* Form */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <h2 className="text-xl font-bold text-primary">{t.form.formTitle}</h2>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center gap-4 rounded-lg bg-secondary p-8 text-center">
            <CheckCircle2 className="size-12 text-success" aria-hidden="true" />
            <p className="max-w-md text-pretty font-medium text-primary">{t.form.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-8">
            {/* Personal info */}
            <fieldset className="flex flex-col gap-4">
              <legend className="mb-3 border-b border-border pb-2 text-lg font-semibold text-primary">
                {t.form.personalInfo}
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    {t.form.firstName} *
                  </label>
                  <input id="firstName" name="firstName" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    {t.form.lastName} *
                  </label>
                  <input id="lastName" name="lastName" required className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t.form.email} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="confirmEmail" className="text-sm font-medium">
                    {t.form.confirmEmail} *
                  </label>
                  <input
                    id="confirmEmail"
                    name="confirmEmail"
                    type="email"
                    required
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    {t.form.phone}
                  </label>
                  <input id="phone" name="phone" type="tel" className={inputClass} />
                </div>
              </div>
            </fieldset>

            {/* Project */}
            <fieldset className="flex flex-col gap-4">
              <legend className="mb-3 border-b border-border pb-2 text-lg font-semibold text-primary">
                {t.form.project}
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="creditType" className="text-sm font-medium">
                    {t.form.creditType} *
                  </label>
                  <select id="creditType" name="creditType" required className={inputClass} defaultValue="">
                    <option value="" disabled>
                      {t.form.chooseType}
                    </option>
                    <option value="personal">{t.simulator.types.personal}</option>
                    <option value="mortgage">{t.simulator.types.mortgage}</option>
                    <option value="consolidation">{t.simulator.types.consolidation}</option>
                    <option value="auto">{t.simulator.types.auto}</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="amount" className="text-sm font-medium">
                    {t.form.desiredAmount}
                  </label>
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    min={1000}
                    step={500}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="duration" className="text-sm font-medium">
                    {t.form.desiredDuration}
                  </label>
                  <input
                    id="duration"
                    name="duration"
                    type="number"
                    min={12}
                    max={360}
                    className={inputClass}
                  />
                </div>
              </div>
            </fieldset>

            {/* Financial situation */}
            <fieldset className="flex flex-col gap-4">
              <legend className="mb-3 border-b border-border pb-2 text-lg font-semibold text-primary">
                {t.form.situation}
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="profession" className="text-sm font-medium">
                    {t.form.profession}
                  </label>
                  <select id="profession" name="profession" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      {t.form.selectSituation}
                    </option>
                    <option value="employee">{t.form.professions.employee}</option>
                    <option value="selfEmployed">{t.form.professions.selfEmployed}</option>
                    <option value="civilServant">{t.form.professions.civilServant}</option>
                    <option value="retired">{t.form.professions.retired}</option>
                    <option value="other">{t.form.professions.other}</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="income" className="text-sm font-medium">
                    {t.form.income}
                  </label>
                  <input id="income" name="income" type="number" min={0} className={inputClass} />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
                  />
                </div>
              </div>
            </fieldset>

            {error && (
              <p role="alert" className="text-sm font-medium text-destructive">
                {error}
              </p>
            )}

            <div className="flex flex-col gap-3">
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
                {loading
                  ? (locale === 'fr' ? 'Envoi en cours...' : locale === 'en' ? 'Sending...' : locale === 'de' ? 'Wird gesendet...' : 'Enviando...')
                  : t.form.submit}
              </Button>
              <p className="text-xs text-muted-foreground">{t.form.required}</p>
            </div>
          </form>
        )}
      </div>

      {/* Sidebar */}
      <aside className="flex flex-col gap-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary">{t.form.trust}</h2>
          <ul className="mt-4 flex flex-col gap-5">
            <li className="flex gap-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
              <div>
                <p className="font-medium">{t.form.secure}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.form.secureDesc}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
              <div>
                <p className="font-medium">{t.form.fast}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.form.fastDesc}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Users className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
              <div>
                <p className="font-medium">{t.form.advisors}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.form.advisorsDesc}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-primary p-6 text-primary-foreground shadow-sm">
          <h2 className="text-lg font-semibold">{t.form.advantages}</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {t.form.advantagesList.map((advantage) => (
              <li key={advantage} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {advantage}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-secondary p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Phone className="size-5 text-accent-foreground" aria-hidden="true" />
            {t.form.question}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{t.form.questionDesc}</p>
          <p className="mt-1 text-sm font-medium">{t.form.hours}</p>
          <a
            href="mailto:info@eventiafinance.com"
            className="mt-3 inline-block text-sm font-semibold text-primary underline"
          >
            info@eventiafinance.com
          </a>
        </div>
      </aside>
    </div>
  )
}
