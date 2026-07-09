import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { BUSINESS } from "@shared/const";

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>
          We collect information you voluntarily provide when you use our
          contact form, including your name, phone number, email address,
          vehicle make/model, the service you're requesting, and any message you
          send us.
        </p>
        <p>
          We also collect limited technical information automatically through
          privacy-focused, cookie-free website analytics (Umami) — such as page
          views, referring pages, and general device/browser type — to
          understand how visitors use our site. This data is aggregated and
          cannot be used to identify you personally.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How We Use Your Information",
    body: (
      <ul>
        <li>To respond to estimate requests and general inquiries</li>
        <li>To schedule and coordinate vehicle repairs and services</li>
        <li>To communicate with you about your vehicle's status</li>
        <li>To improve our website and the services we offer</li>
        <li>To comply with legal and insurance-related obligations</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "How Your Information Is Shared",
    body: (
      <>
        <p>
          We do not sell your personal information. We share it only where
          necessary:
        </p>
        <ul>
          <li>
            <strong className="text-white">Form submissions</strong> are
            processed by Netlify Forms, our website hosting provider, solely to
            deliver your message to us.
          </li>
          <li>
            <strong className="text-white">Insurance companies</strong> may
            receive relevant claim and repair information, but only with your
            knowledge and as part of an active claim you've asked us to help
            with.
          </li>
          <li>
            <strong className="text-white">Map directions</strong> on this site
            are provided via an embedded Google Maps view, which is subject to
            Google's own privacy policy when interacted with.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    body: (
      <p>
        We retain contact form submissions and related customer records for as
        long as reasonably necessary to fulfil the purpose they were collected
        for — typically the duration of your repair, plus a period afterward to
        support warranty claims, insurance follow-up, and our own legal
        recordkeeping obligations.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>
          Under Canada's Personal Information Protection and Electronic
          Documents Act (PIPEDA), you have the right to:
        </p>
        <ul>
          <li>Ask what personal information we hold about you</li>
          <li>Request corrections to inaccurate information</li>
          <li>Request that we delete information we no longer need</li>
          <li>Withdraw consent for non-essential communications at any time</li>
        </ul>
        <p>
          To exercise any of these rights, contact us using the details at the
          bottom of this page.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    body: (
      <p>
        Our analytics provider (Umami) is designed to operate without cookies
        and without tracking individuals across sites. The only cookies you may
        encounter come from the embedded Google Maps view in our footer, which
        is controlled by Google, not us.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We take reasonable technical and organizational measures to protect the
        information you share with us. However, no method of transmission over
        the internet is 100% secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        Our website and services are intended for adults seeking vehicle repair
        services. We do not knowingly collect personal information from
        children.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for legal reasons. The "Last updated" date at the
        top of this page will always reflect the most recent version.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <p>
        Questions about this Privacy Policy or how your information is handled?
        Reach us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
        <a href={BUSINESS.phones[0].href}>{BUSINESS.phones[0].display}</a>. You
        can also write to us at {BUSINESS.address.full}.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      seoTitle="Privacy Policy | Bright Star Auto Ltd"
      seoDescription="How Bright Star Auto Ltd collects, uses, and protects your personal information when you use our website or request a repair estimate."
      eyebrow="Privacy Policy"
      title="Your privacy, handled the same way we handle your car — carefully."
      lastUpdated="July 9, 2026"
      intro={
        <p>
          This policy explains what information we collect through this website,
          why we collect it, and the choices you have. We keep it simple on
          purpose.
        </p>
      }
      sections={sections}
    />
  );
}
