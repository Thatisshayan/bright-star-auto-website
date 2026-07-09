import { ReactNode } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishDate: string; // ISO 8601, e.g. "2026-06-15"
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: ReactNode;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-do-after-a-car-accident-ontario",
    title: "What to Do After a Car Accident in Ontario: A Step-by-Step Guide",
    description:
      "A calm, practical checklist for what to do immediately after a collision in Ontario — from documenting the scene to filing your insurance claim and choosing a repair shop.",
    category: "Insurance Tips",
    publishDate: "2026-06-15",
    readTime: "6 min read",
    coverImage: "/gallery/stock-structural.jpg",
    excerpt:
      "The minutes after a collision are stressful and confusing. Here's exactly what to do, in order, to protect yourself and your claim.",
    content: (
      <>
        <p>
          Nobody plans for a car accident, and in the moment it's easy to forget
          the basics. Having a mental checklist ready — before you ever need it
          — makes the whole process faster and less stressful. Here's what to
          do, in order.
        </p>

        <h2>1. Check for injuries and move to safety</h2>
        <p>
          Before anything else, check yourself and any passengers for injuries.
          If the vehicle is drivable and it's safe to do so, move it out of
          traffic. If anyone is hurt, call 911 immediately.
        </p>

        <h2>2. Call the police if required</h2>
        <p>
          In Ontario, you're required to report a collision to police if there
          are injuries, or if the combined damage appears to exceed $2,000. Many
          municipalities, including Toronto and North York, have Collision
          Reporting Centres where you can file a report within 24 hours if the
          accident doesn't require police to attend the scene.
        </p>

        <h2>3. Document everything</h2>
        <ul>
          <li>
            Take photos of all vehicles, license plates, and the overall scene
          </li>
          <li>Note the time, location, weather, and road conditions</li>
          <li>
            Get the other driver's name, phone number, license plate, and
            insurance policy number
          </li>
          <li>Get contact info for any witnesses</li>
        </ul>

        <h2>4. Exchange information — but avoid admitting fault</h2>
        <p>
          Stick to facts when speaking with the other driver. Fault is
          determined later by the insurance companies (or the Fault
          Determination Rules under Ontario law), not by what's said at the
          scene.
        </p>

        <h2>5. Contact your insurance company</h2>
        <p>
          Report the accident to your insurer as soon as possible — most
          policies require prompt notification. They'll open a claim and assign
          an adjuster.
        </p>

        <h2>6. Choose your own repair shop</h2>
        <p>
          This is the step most drivers don't realize they control. Your
          insurance company may recommend a "preferred" shop, but in Ontario you
          have the legal right to choose any licensed repair facility you want.
          Choosing an independent shop doesn't affect your coverage or void any
          warranty — it just means you get to pick who you trust with your
          vehicle.
        </p>
        <p>
          At Bright Star Auto, we handle direct communication with your
          insurance adjuster, provide a transparent estimate, and manage the
          whole repair process so you don't have to navigate it alone.
        </p>

        <h2>7. Get a free estimate before repairs begin</h2>
        <p>
          A reputable shop will always give you a free, no-obligation estimate
          and walk you through exactly what's being repaired and why — before
          any work starts.
        </p>
      </>
    ),
  },
  {
    slug: "can-i-choose-my-own-auto-body-shop-ontario",
    title:
      "Can I Choose My Own Auto Body Shop? Your Rights in Ontario Explained",
    description:
      "Ontario drivers have the legal right to pick their own collision repair shop — not the one their insurance company recommends. Here's what that actually means for your claim.",
    category: "Insurance Tips",
    publishDate: "2026-06-29",
    readTime: "5 min read",
    coverImage: "/gallery/stock-shopfloor.jpg",
    excerpt:
      "Your insurer can suggest a shop — but they can't require you to use it. Here's what Ontario law actually says, and why it matters for your repair.",
    content: (
      <>
        <p>
          After an accident, your insurance company will often suggest a
          "preferred" or "direct repair" shop. It's a natural assumption that
          you have to use it — but that's not true, and understanding your
          rights here can make a real difference in the quality of your repair.
        </p>

        <h2>What the law actually says</h2>
        <p>
          Under Ontario's insurance regulations, insurers are prohibited from
          requiring you to use a specific repair facility as a condition of your
          coverage. You are entitled to choose any licensed collision repair
          shop you trust — full stop. An insurer can recommend a shop, and can
          require that repairs meet certain standards, but the choice of who
          does the work is yours.
        </p>

        <h2>Why insurers push their preferred shops</h2>
        <p>
          Direct repair programs exist because they streamline the insurer's
          process and, in many cases, help control repair costs. That's not
          necessarily bad — but it means the shop's relationship is with the
          insurance company, not exclusively with you as the customer.
        </p>

        <h2>What changes if you pick an independent shop</h2>
        <ul>
          <li>
            <strong>Nothing about your coverage.</strong> Choosing an
            independent shop does not void your policy or reduce your claim
            payout.
          </li>
          <li>
            <strong>Nothing about your warranty.</strong> As long as repairs
            follow manufacturer-correct procedures — which any reputable shop
            will do — your vehicle's existing warranties stay intact.
          </li>
          <li>
            <strong>Who advocates for your repair quality.</strong> An
            independent shop works for you, and can push back on an insurer's
            estimate if it doesn't reflect what your vehicle actually needs.
          </li>
        </ul>

        <h2>How to make the switch smoothly</h2>
        <p>
          Simply tell your adjuster which shop you'd like to use. A good shop —
          like ours — will coordinate directly with the insurance company on
          your behalf, including sending supplemental estimates if hidden damage
          is found once the vehicle is opened up.
        </p>

        <h2>The bottom line</h2>
        <p>
          You're not required to use your insurer's recommended shop. Choosing a
          shop you trust — one that's upfront about pricing, timelines, and
          repair quality — is entirely your call, and it's worth exercising that
          right.
        </p>
      </>
    ),
  },
  {
    slug: "oem-vs-aftermarket-parts-what-insurance-wont-tell-you",
    title:
      "OEM vs. Aftermarket Parts: What Your Insurance Company Won't Tell You",
    description:
      "OEM and aftermarket collision parts aren't the same thing, and the difference can affect fit, safety, and resale value. Here's what to ask before you approve a repair estimate.",
    category: "Repair Education",
    publishDate: "2026-07-06",
    readTime: "5 min read",
    coverImage: "/gallery/stock-polishing.jpg",
    excerpt:
      'Your estimate might list "aftermarket" or "LKQ" parts without explaining what that means. Here\'s the difference, and when it\'s worth asking questions.',
    content: (
      <>
        <p>
          If you've read a collision repair estimate closely, you may have
          noticed line items marked "OEM," "aftermarket," or "LKQ"
          (used/recycled). These aren't interchangeable, and the choice can
          affect how your repaired vehicle fits, performs, and holds its value.
        </p>

        <h2>What "OEM" means</h2>
        <p>
          OEM stands for Original Equipment Manufacturer — parts made by, or
          for, your vehicle's manufacturer to the exact original specification.
          They're guaranteed to fit correctly and typically carry a manufacturer
          warranty.
        </p>

        <h2>What "aftermarket" means</h2>
        <p>
          Aftermarket parts are made by third-party manufacturers, not your
          vehicle's original maker. Quality varies significantly between brands
          — some aftermarket parts meet or exceed OEM specifications, while
          others fit poorly or use thinner-gauge steel that behaves differently
          in a future collision.
        </p>

        <h2>What "LKQ" means</h2>
        <p>
          LKQ ("Like Kind and Quality") parts are used, recycled parts pulled
          from other vehicles. They can be a reasonable option for older
          vehicles where matching exact factory specification matters less, but
          they come with unknown history — prior wear, hidden damage, or
          corrosion.
        </p>

        <h2>Why insurers often default to aftermarket or LKQ</h2>
        <p>
          These parts are typically less expensive than OEM, and insurance
          companies are naturally cost-conscious when approving an estimate.
          That's a reasonable business decision on their end — but it's not
          automatically the right decision for your vehicle.
        </p>

        <h2>Questions worth asking your shop</h2>
        <ul>
          <li>
            Which specific parts on my estimate are OEM vs. aftermarket vs. LKQ?
          </li>
          <li>Does the aftermarket brand being used carry a warranty?</li>
          <li>
            For structural or safety-related parts (frame rails, airbags,
            crumple zones), is OEM required or recommended?
          </li>
          <li>
            Will using aftermarket parts affect my vehicle's resale value or
            CarFax history?
          </li>
        </ul>

        <h2>Our approach at Bright Star Auto</h2>
        <p>
          We're transparent about exactly which parts are being used on your
          vehicle and why, and we'll flag when we think OEM is worth insisting
          on with your insurer — particularly for structural and safety
          components. You always get the final say.
        </p>
      </>
    ),
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}
