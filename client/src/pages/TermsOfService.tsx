import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { BUSINESS } from "@shared/const";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <p>
        By accessing or using this website, you agree to be bound by these Terms
        of Service. If you do not agree with any part of these terms, please do
        not use this site.
      </p>
    ),
  },
  {
    id: "website-purpose",
    title: "About This Website",
    body: (
      <p>
        This website is an informational resource for {BUSINESS.name} — a
        collision repair, paint refinishing, and restoration shop located in
        North York, Ontario. Content on this site, including service
        descriptions and imagery, is provided for general informational purposes
        and does not constitute a binding offer or guarantee of specific pricing
        or outcomes.
      </p>
    ),
  },
  {
    id: "estimates",
    title: "Estimates & Repair Work",
    body: (
      <>
        <p>
          Any estimate requested or discussed through this website is
          preliminary and subject to change following an in-person inspection of
          your vehicle. Final pricing, timelines, and terms for actual repair
          work are agreed to separately, in person or in writing, and are not
          governed by these website Terms of Service.
        </p>
        <p>
          Warranties on completed repair work are provided under our shop's own
          workmanship warranty terms, communicated directly to customers at the
          time of service — not by this website.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    body: (
      <ul>
        <li>
          Do not attempt to disrupt, overload, or gain unauthorized access to
          this website or its systems
        </li>
        <li>
          Do not submit false, misleading, or spam content through our contact
          form
        </li>
        <li>
          Do not scrape, copy, or republish site content for commercial purposes
          without permission
        </li>
      </ul>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <p>
        All logos, text, graphics, and images on this site are the property of{" "}
        {BUSINESS.name} or used under license, unless otherwise noted, and may
        not be reproduced without our written permission.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services & Links",
    body: (
      <p>
        This site embeds third-party services, including Google Maps for
        location and directions, and Umami for privacy-focused analytics. These
        services operate under their own terms and privacy policies, which we
        encourage you to review independently.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: (
      <p>
        This website and its content are provided "as is," without warranties of
        any kind, express or implied. To the fullest extent permitted by law,{" "}
        {BUSINESS.name} is not liable for any indirect, incidental, or
        consequential damages arising from your use of this website. This
        limitation does not affect any statutory rights you have, or any
        separate warranty terms provided for completed repair work.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: (
      <p>
        These Terms of Service are governed by the laws of the Province of
        Ontario and the federal laws of Canada applicable therein, without
        regard to conflict-of-law principles.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may revise these Terms of Service at any time. Continued use of this
        website after changes are posted constitutes acceptance of the updated
        terms. The "Last updated" date at the top of this page reflects the most
        recent revision.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <p>
        Questions about these Terms of Service? Reach us at{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
        <a href={BUSINESS.phones[0].href}>{BUSINESS.phones[0].display}</a>. You
        can also visit us at {BUSINESS.address.full}.
      </p>
    ),
  },
];

export default function TermsOfService() {
  return (
    <LegalLayout
      seoTitle="Terms of Service | Bright Star Auto Ltd"
      seoDescription="The terms governing your use of the Bright Star Auto Ltd website, including estimates, third-party services, and liability."
      eyebrow="Terms of Service"
      title="The fine print — kept as plain as we can make it."
      lastUpdated="July 9, 2026"
      intro={
        <p>
          These terms cover your use of this website. They don't cover the terms
          of an actual repair job — those are agreed separately, in person,
          before any work begins.
        </p>
      }
      sections={sections}
    />
  );
}
