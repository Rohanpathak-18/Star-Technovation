import Brand from "../components/Brand.jsx";
import SectionEyebrow from "../components/SectionEyebrow.jsx";

const legalContent = {
  privacy: {
    title: "Privacy, with care.",
    updated: "Draft for review · October 2026",
    sections: [
      {
        title: "Information you share",
        body: "When you send an enquiry, request a conversation, create an account, or join the newsletter, we store the details you submit so we can provide the requested service. Account passwords are stored as secure hashes.",
      },
      {
        title: "How we use it",
        body: "We use your information to respond to enquiries, manage accounts, provide requested product updates, and maintain the site. We do not sell personal information. Newsletter readers can unsubscribe from future messages.",
      },
      {
        title: "Storage and service providers",
        body: "During local development, records are stored in the configured MongoDB database or a local JSON file. If the site later connects to payment, email, analytics, or hosting providers, this page must be updated to describe those services and their data handling.",
      },
      {
        title: "Your choices",
        body: "You may contact hello@startechnovation.com to ask about, correct, or request deletion of information you have submitted. We will verify requests before making account changes.",
      },
    ],
  },
  terms: {
    title: "The terms, plainly.",
    updated: "Draft for review · October 2026",
    sections: [
      {
        title: "Using this site",
        body: "You may use this site to learn about Star Technovation, request a conversation, and create an account. Keep your account details accurate and protect your sign-in credentials. We may suspend access where needed to protect the service or its users.",
      },
      {
        title: "Product information",
        body: "Strategy charts and market values shown in this demo are illustrative sample content. They are not live market data, trading instructions, or a promise of future performance. Product plans and features may change before launch.",
      },
      {
        title: "Payments and availability",
        body: "Selecting a plan does not start a subscription or charge a payment method. UPI payments can be made by scanning the QR code shown on the site. Contact us to confirm the plan, amount, and payment before proceeding.",
      },
      {
        title: "Contact",
        body: "Questions about these terms can be sent to hello@startechnovation.com. These starter terms need review and completion for the business and jurisdictions where the production service will operate.",
      },
    ],
  },
  "risk-disclosure": {
    title: "Markets carry risk.",
    updated: "Draft for review · October 2026",
    sections: [
      {
        title: "No investment advice",
        body: "This website is a product and company overview. Nothing here is a recommendation to buy, sell, or hold a security, derivative, commodity, or other financial instrument.",
      },
      {
        title: "Trading can result in loss",
        body: "Trading involves risk, including the possible loss of some or all of the capital invested. Algorithmic systems can malfunction, behave unexpectedly, or perform differently as market conditions change. Backtests and historical results do not guarantee future outcomes.",
      },
      {
        title: "Make independent decisions",
        body: "Consider your objectives, experience, and ability to bear losses before trading. Seek advice from a qualified financial professional where appropriate. Confirm the regulatory status and permitted use of any production trading service in your location.",
      },
      {
        title: "Sample data",
        body: "All charts and quoted prices currently shown on the site are sample values for presentation purposes. They should not be used to make trading decisions.",
      },
    ],
  },
};

export default function LegalPage({ page }) {
  const content = legalContent[page];

  return (
    <main className="legal-page">
      <header className="legal-header">
        <Brand />
        <a className="underlined-link" href="/">
          Back to the studio
        </a>
      </header>

      <article className="legal-content">
        <SectionEyebrow>STAR TECHNOVATION / THE DETAILS</SectionEyebrow>
        <h1>{content.title}</h1>
        <p className="legal-date">{content.updated}</p>
        <div className="legal-draft-note">
          These starter pages are provided for the website draft and need review
          by the business before public launch.
        </div>
        {content.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <nav className="legal-nav" aria-label="Legal pages">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/risk-disclosure">Risk disclosure</a>
        </nav>
      </article>
    </main>
  );
}
