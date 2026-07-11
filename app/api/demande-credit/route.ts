import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Handlebars from 'handlebars'

const emailTemplate = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Nouvelle demande de crédit - EVENTIA FINANCE</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 0;
      color: #363636;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f8f9fa;
      padding: 30px 10px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e9ecef;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    }
    .header {
      background-color: #363636;
      color: #ffffff;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .content {
      padding: 35px 30px;
    }
    .intro {
      font-size: 16px;
      line-height: 1.6;
      color: #495057;
      margin-top: 0;
      margin-bottom: 25px;
    }
    .section-title {
      font-size: 16px;
      font-weight: 700;
      color: #CF4E2A;
      margin-top: 30px;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      border-bottom: 2px solid #CF4E2A;
      padding-bottom: 6px;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 25px;
    }
    .data-table th, .data-table td {
      padding: 12px 10px;
      text-align: left;
      border-bottom: 1px solid #dee2e6;
      font-size: 15px;
    }
    .data-table th {
      width: 40%;
      font-weight: 600;
      color: #6c757d;
      background-color: #f8f9fa;
    }
    .data-table td {
      color: #212529;
      font-weight: 500;
    }
    .message-box {
      background-color: #f8f9fa;
      border-left: 4px solid #363636;
      padding: 18px;
      font-style: italic;
      font-size: 14px;
      line-height: 1.5;
      color: #495057;
      margin-top: 10px;
      white-space: pre-wrap;
      border-radius: 0 8px 8px 0;
    }
    .footer {
      background-color: #f1f3f5;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      color: #868e96;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>EVENTIA FINANCE</h1>
      </div>
      <div class="content">
        <p class="intro">Bonjour,</p>
        <p class="intro">Une nouvelle demande de simulation de crédit a été soumise sur votre site internet. Voici le récapitulatif détaillé des informations fournies par le client :</p>
        
        <div class="section-title">Informations Personnelles</div>
        <table class="data-table">
          <tr>
            <th>Prénom</th>
            <td>{{firstName}}</td>
          </tr>
          <tr>
            <th>Nom</th>
            <td>{{lastName}}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td><a href="mailto:{{email}}" style="color: #CF4E2A; text-decoration: none;">{{email}}</a></td>
          </tr>
          <tr>
            <th>Téléphone</th>
            <td>{{#if phone}}<a href="tel:{{phone}}" style="color: #CF4E2A; text-decoration: none;">{{phone}}</a>{{else}}Non renseigné{{/if}}</td>
          </tr>
        </table>

        <div class="section-title">Détails du Projet</div>
        <table class="data-table">
          <tr>
            <th>Type de crédit</th>
            <td>{{creditTypeLabel}}</td>
          </tr>
          <tr>
            <th>Montant souhaité</th>
            <td>{{amount}} €</td>
          </tr>
          <tr>
            <th>Durée souhaitée</th>
            <td>{{duration}} mois</td>
          </tr>
        </table>

        <div class="section-title">Situation Financière</div>
        <table class="data-table">
          <tr>
            <th>Situation professionnelle</th>
            <td>{{professionLabel}}</td>
          </tr>
          <tr>
            <th>Revenus mensuels nets</th>
            <td>{{income}} €</td>
          </tr>
        </table>

        {{#if message}}
        <div class="section-title">Message / Commentaires</div>
        <div class="message-box">{{message}}</div>
        {{/if}}
      </div>
      <div class="footer">
        Cet email a été généré automatiquement par le serveur de EVENTIA FINANCE.<br>
        Pour toute assistance technique, veuillez ne pas répondre directement à cet e-mail.
      </div>
    </div>
  </div>
</body>
</html>
`

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Map raw select values to friendly labels (French fallback for display in backend emails)
    const creditTypeLabels: Record<string, string> = {
      personal: 'Prêt Personnel',
      mortgage: 'Prêt Immobilier',
      consolidation: 'Rachat de Crédit',
      auto: 'Prêt Auto'
    }

    const professionLabels: Record<string, string> = {
      employee: 'Salarié(e)',
      selfEmployed: 'Indépendant / Chef d\'entreprise',
      civilServant: 'Fonctionnaire',
      retired: 'Retraité(e)',
      other: 'Autre'
    }

    const templateData = {
      ...data,
      creditTypeLabel: creditTypeLabels[data.creditType] || data.creditType,
      professionLabel: professionLabels[data.profession] || data.profession || 'Non spécifié',
      amount: data.amount ? Number(data.amount).toLocaleString('fr-FR') : 'Non renseigné',
      income: data.income ? Number(data.income).toLocaleString('fr-FR') : 'Non renseigné',
      duration: data.duration || 'Non renseigné'
    }

    const compiledTemplate = Handlebars.compile(emailTemplate)
    const htmlOutput = compiledTemplate(templateData)

    const smtpHost = process.env.SMTP_HOST || 'mail.eventiafinance.com'
    const smtpPort = Number(process.env.SMTP_PORT) || 465
    const smtpUser = process.env.SMTP_USER || 'contact@eventiafinance.com'
    const smtpPass = process.env.SMTP_PASS
    const smtpTo = process.env.SMTP_TO || 'info@eventiafinance.com'

    // Setup nodemailer transport with the environment credentials
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      },
      tls: {
        rejectUnauthorized: false // Prevents certificate handshake errors
      }
    })

    // Send the email to the recipient configured in env
    await transporter.sendMail({
      from: `"EVENTIA FINANCE" <${smtpUser}>`,
      to: smtpTo,
      subject: `[EVENTIA FINANCE] Nouvelle demande de crédit - ${data.firstName} ${data.lastName}`,
      html: htmlOutput
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error sending email via nodemailer:', error)
    return NextResponse.json(
      { error: error?.message || 'Une erreur est survenue lors de la transmission.' },
      { status: 500 }
    )
  }
}
