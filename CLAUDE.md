# CLAUDE.md - Bright Star Auto Website Codebase Guide

This document provides a complete overview of the Bright Star Auto website codebase for developers and AI assistants working on the project.

---

## Project Overview

**Bright Star Auto Ltd** is a premium auto bodyshop website showcasing collision repair, paint refinishing, and restoration services in North York, ON.

- **Live Site:** https://brightstarautobody.ca
- **Tech Stack:** React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion
- **Hosting:** Netlify (SPA with Forms)
- **Design:** Dark luxury aesthetic with gold accents (OKLCH color model)

---

## Repository Structure

```
bright-star-auto-website/
├── client/                          # Frontend React app
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ui/                  # shadcn/ui components (auto-generated)
│   │   │   ├── Hero.tsx             # Hero section with parallax
│   │   │   ├── Services.tsx         # Services grid (Bento-style)
│   │   │   ├── Reviews.tsx          # Static curated reviews carousel
│   │   │   ├── GoogleReviewsWidget.tsx  # Live Google reviews (needs Place ID)
│   │   │   ├── Contact.tsx          # Contact form with validation
│   │   │   ├── Gallery.tsx          # Before/after image gallery
│   │   │   ├── MarqueeTicker.tsx    # Animated service list
│   │   │   ├── Navbar.tsx           # Navigation with theme toggle
│   │   │   ├── Footer.tsx           # Footer with map embed
│   │   │   └── ... (other components)
│   │   ├── pages/                   # Page components (wouter routes)
│   │   │   ├── Home.tsx             # Main landing page
│   │   │   ├── About.tsx            # About page
│   │   │   ├── Services.tsx         # Services detail page
│   │   │   ├── Gallery.tsx          # Full gallery page
│   │   │   ├── Blog.tsx             # Blog listing
│   │   │   ├── BlogPost.tsx         # Individual blog post
│   │   │   ├── FAQ.tsx              # FAQ with accordion
│   │   │   ├── PrivacyPolicy.tsx    # Legal pages
│   │   │   └── TermsOfService.tsx
│   │   ├── contexts/                # React Context providers
│   │   │   └── ThemeContext.tsx     # Dark/light theme toggle
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useMobile.tsx        # Mobile/desktop detection
│   │   │   └── ... (other hooks)
│   │   ├── lib/                     # Utility libraries
│   │   │   ├── utils.ts             # shadcn helpers (cn() function)
│   │   │   └── sentry.ts            # Sentry error tracking init
│   │   ├── App.tsx                  # Router setup (wouter)
│   │   ├── main.tsx                 # App entry point
│   │   └── index.css                # Global styles + animations
│   ├── public/                      # Static assets (served as-is)
│   │   ├── brand/                   # Logo and branding assets
│   │   ├── gallery/                 # High-res before/after images
│   │   ├── logos/                   # Insurance/brand logos
│   │   └── insurance/               # Insurance provider logos
│   ├── index.html                   # HTML template + Netlify form detection
│   └── vite.config.ts               # Vite bundler config
├── server/                          # Express server (optional, for production)
│   └── index.ts                     # Server entry point
├── shared/                          # Shared code (client + server)
│   └── const.ts                     # Business info, constants
├── netlify.toml                     # Netlify build & redirect config
├── tsconfig.json                    # TypeScript config
├── tailwind.config.js               # Tailwind CSS theme (dark, colors)
├── vite.config.ts                   # Vite build config
├── package.json                     # Dependencies & scripts
├── DOMAIN_SETUP.md                  # DNS configuration guide
├── GOOGLE_BUSINESS_SETUP.md         # Google Business Profile guide
└── CLAUDE.md                        # This file
```

---

## Key Files & Patterns

### Design System

**Colors (OKLCH format in Tailwind):**

- `oklch(8% 0 0)` - Deep black background (professional, luxury)
- `oklch(72% 0.18 75)` / `#C9922A` - Primary gold (brand accent)
- `oklch(80% 0.22 75)` - Gold glow (hover, emphasis)
- `oklch(96% 0 0)` - Near-white text (readability)

**Typography:**

- **Display font:** Bebas Neue (headings, impact text)
- **Body font:** Inter (readable, modern)
- **Fluid scaling:** Using `clamp()` for responsive typography

**Animation:**

- Framer Motion for entrance/hover/scroll animations
- Duration: 0.3-2s depending on context
- Respects `prefers-reduced-motion` media query
- Staggered children at 0.1s intervals for cinematic effect

### Business Constants

**File:** `shared/const.ts`

```typescript
export const BUSINESS = {
  name: "Bright Star Auto Ltd",
  address: { street, city, region, postalCode, country, full },
  phones: [{ display, href }, ...],
  email: "Brightstarautoltd@gmail.com",
  url: "https://brightstarautobody.ca",
  hours: { weekday: "9:00 AM – 6:00 PM", ... }
}
```

Update this object to change business info across all pages.

### Routing

**Router:** Wouter (lightweight client-side routing)  
**Setup:** `src/App.tsx`

```typescript
<Route path="/" component={Home} />
<Route path="/about" component={About} />
<Route path="/services" component={ServicesPage} />
<Route path="/gallery" component={GalleryPage} />
<Route path="/blog/:slug" component={BlogPost} />
// ... etc
```

Add new routes by:

1. Create page component in `src/pages/`
2. Import and add `<Route>` in `App.tsx`
3. Update navigation links in `Navbar.tsx`

### Forms

**Contact Form (Netlify Forms)**

- Form name: "contact" (must match `name="contact"` in Contact.tsx)
- Static replica in `index.html` so Netlify's build bot detects it
- Honeypot field `bot-field` for spam protection (hidden from users)
- Validation: Zod schema in `Contact.tsx`
- Form notifications: Configured in `netlify.toml`

**Submission Flow:**

1. User submits form → React handler validates
2. `fetch("/", { method: "POST", body: encoded-form })` posts to Netlify
3. Netlify triggers form notifications (email to BUSINESS.email)
4. Success message displays

---

## Environment Variables

**File:** `.env.example` (copy to `.env` for local development)

```bash
# Google Maps API (for live reviews widget)
VITE_FRONTEND_FORGE_API_KEY=...
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev

# Google Business (live reviews from Google)
VITE_GOOGLE_PLACE_ID=...

# Cloudflare Web Analytics (lightweight, privacy-friendly)
VITE_CLOUDFLARE_ANALYTICS_TOKEN=...

# Sentry Error Tracking (production monitoring)
VITE_SENTRY_DSN=...

# Umami Analytics (optional alternative)
VITE_ANALYTICS_ENDPOINT=...
VITE_ANALYTICS_WEBSITE_ID=...
```

**Note:** All `VITE_*` variables are exposed to the browser (they're public keys/tokens, not secrets).

---

## Development Workflow

### Local Setup

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Type check
pnpm check

# Build for production
pnpm build

# Format code
pnpm format
```

### Branching Strategy

- **Main branch:** Production-ready code
- **Feature branches:** `feature/feature-name` or `fix/bug-name`
- **PR reviews:** Use the PR template (if exists)

### Commit Messages

Format: `[type] Brief description`

- `[fix]` - Bug fixes
- `[feat]` - New features
- `[refactor]` - Code cleanup without behavior changes
- `[docs]` - Documentation updates
- `[perf]` - Performance improvements
- `[style]` - Formatting changes

Example: `[feat] Add form validation to contact form`

---

## Performance & Optimization

### Image Optimization Strategy

**Current Situation:**

- Hero image: 1.3MB JPG (should be ~200KB optimized)
- Gallery images: 94KB - 325KB each (acceptable but can improve)
- Issue: No WebP conversion, no responsive srcset

**Recommended Optimizations:**

1. **Convert to WebP format** (30-40% size reduction)

   ```bash
   # Using ffmpeg or ImageMagick
   cwebp -q 80 input.jpg -o input.webp
   ```

2. **Add responsive images** using `<picture>` element

   ```html
   <picture>
     <source srcset="image.webp" type="image/webp" />
     <img src="image.jpg" alt="..." loading="lazy" />
   </picture>
   ```

3. **Lazy load non-critical images**

   ```html
   <img src="..." loading="lazy" decoding="async" />
   ```

4. **Use srcset for different screen sizes**
   ```html
   <img
     src="image-1024w.jpg"
     srcset="image-640w.jpg 640w, image-1024w.jpg 1024w"
     sizes="(max-width: 640px) 100vw, 1024px"
   />
   ```

### Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): < 2.5s ✓
- **FID** (First Input Delay): < 100ms ✓
- **CLS** (Cumulative Layout Shift): < 0.1 ✓

**Improvements Made:**

- Hero image preload in `index.html` with `fetchpriority="high"`
- Framer Motion animations use only `transform` & `opacity` (GPU-accelerated)
- Images in `netlify.toml` have cache-control headers (1-year immutable)

---

## Common Tasks

### Add a New Page

1. Create `src/pages/NewPage.tsx`:

   ```typescript
   import Navbar from "@/components/Navbar";
   import Footer from "@/components/Footer";
   import SEO from "@/components/SEO";

   export default function NewPage() {
     return (
       <>
         <Navbar />
         <SEO title="Page Title" description="..." />
         {/* Page content */}
         <Footer />
       </>
     );
   }
   ```

2. Add route in `App.tsx`:

   ```typescript
   <Route path="/new-page" component={NewPage} />
   ```

3. Add nav link in `Navbar.tsx`:
   ```typescript
   { label: "New Page", href: "/new-page" }
   ```

### Update Business Information

Edit `shared/const.ts` and all references update automatically:

- Address, phone, email
- Hours of operation
- Website URL

### Change Color Scheme

Edit `tailwind.config.js` in the `colors` section:

```javascript
export default {
  theme: {
    colors: {
      primary: "oklch(72% 0.18 75)", // Gold
      background: "oklch(8% 0 0)", // Black
      // ...
    },
  },
};
```

### Add a New Component

1. Create `src/components/ComponentName.tsx`
2. Use shadcn/ui components as base (pre-installed)
3. Follow existing patterns: Framer Motion + Tailwind styling
4. Import and use in pages

### Modify Contact Form

- Form fields: Edit `src/components/Contact.tsx`
- Validation rules: Update `contactFormSchema` in same file
- Email notifications: Configure in `netlify.toml` `[forms]` section
- Static form for Netlify detection: Edit `client/index.html`

---

## Analytics & Monitoring

### Cloudflare Web Analytics

**Setup:** Add `VITE_CLOUDFLARE_ANALYTICS_TOKEN` to Netlify environment variables

- Get token: https://dash.cloudflare.com → Web Analytics
- No backend needed, runs on Cloudflare's edge
- Lightweight, privacy-friendly, no cookies

**View metrics:** https://dash.cloudflare.com → Web Analytics → Site

### Sentry Error Tracking

**Setup:** Add `VITE_SENTRY_DSN` to Netlify environment variables

- Get DSN: https://sentry.io → New Project (React)
- Captures unhandled errors and runtime exceptions
- Session replay (recordings of user interactions leading to errors)

**View issues:** https://sentry.io → Bright Star Auto project

---

## Styling Guidelines

### Tailwind Classes Organization

**Recommended order:**

1. Layout (`flex`, `grid`, `absolute`, etc.)
2. Sizing (`w-`, `h-`, `max-w-`, etc.)
3. Spacing (`p-`, `m-`, `gap-`, etc.)
4. Colors (`bg-`, `text-`, `border-`, etc.)
5. Effects (`shadow-`, `opacity-`, etc.)
6. Hover/focus states

```tsx
<div className="flex flex-col gap-4 p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all">
```

### Animations

**Entrance animations:** 0.6s duration, staggered children

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

**Hover effects:** 0.3s, subtle scale

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
```

---

## Testing

### Unit Tests

Located in `client/src/components/*.test.tsx`

**Run tests:**

```bash
pnpm test
```

**Example:**

```typescript
import { render, screen } from "@testing-library/react";
import Contact from "@/components/Contact";

test("renders contact form", () => {
  render(<Contact />);
  expect(screen.getByText("Get in Touch")).toBeInTheDocument();
});
```

### End-to-End Testing

Recommended tool: Playwright (pre-configured)

```bash
pnpm exec playwright test
```

---

## Deployment

### Netlify Configuration

**File:** `netlify.toml`

```toml
[build]
  command = "vite build"
  publish = "dist/public"

# Redirects for client-side routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables (Netlify Dashboard)

1. Go to https://app.netlify.com
2. Select site → **Site settings** → **Environment**
3. Add variables:
   - `VITE_CLOUDFLARE_ANALYTICS_TOKEN`
   - `VITE_SENTRY_DSN`
   - `VITE_GOOGLE_PLACE_ID`
   - etc.

### Form Notifications

Configured in `netlify.toml`:

```toml
[forms]
  [[forms.notification]]
    form = "contact"
    email = "Brightstarautoltd@gmail.com"
```

---

## Troubleshooting

### Common Issues

**"Variable XXX is undefined in browser"**

- Check variable starts with `VITE_` prefix
- Check it's set in Netlify environment variables

**"Form not submitting"**

- Verify form `name="contact"` matches in HTML and React
- Check honeypot field `bot-field` is hidden
- Verify static form in `index.html` exists (Netlify detection)

**"Animations not smooth"**

- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid animating `width`, `height`, `left`, etc.
- Check `prefers-reduced-motion` is respected

**"Images loading slowly"**

- Check image file sizes (hero should be ~200KB max)
- Enable WebP format conversion
- Add `loading="lazy"` to non-critical images
- Use `preload` for hero image

---

## Key Dependencies

### Frontend Framework

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS 4** - Utility-first CSS

### UI & Animations

- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible components
- **lucide-react** - Icon library
- **Recharts** - Charts/graphs

### Forms & Validation

- **React Hook Form** - Form state management
- **Zod** - Type-safe validation
- **@hookform/resolvers** - Zod integration

### Routing & State

- **Wouter** - Lightweight router (15KB)
- **Next Themes** - Dark/light mode toggle

### Development

- **TypeScript** - Type checking
- **Vitest** - Unit testing framework
- **Prettier** - Code formatting
- **ESLint** - Code linting

---

## Future Improvements

1. **Image Optimization** - Convert to WebP, add responsive srcset
2. **Dark Mode Variants** - Design all components for dark/light
3. **Blog CMS Integration** - Replace hardcoded blog posts with CMS
4. **Customer Login** - Track repair status, upload photos
5. **Mobile App** - React Native version
6. **Accessibility Audit** - WCAG 2.1 AAA compliance
7. **Automated E2E Tests** - Playwright CI/CD
8. **Performance Monitoring** - Real User Monitoring (RUM)

---

## Resources

- **Tailwind Docs:** https://tailwindcss.com
- **Framer Motion Docs:** https://www.framer.com/motion
- **Radix UI Docs:** https://www.radix-ui.com
- **Vite Docs:** https://vitejs.dev
- **Wouter Docs:** https://github.com/molefrog/wouter

---

## Support & Questions

For questions about this codebase:

1. Check this document first
2. Search for similar patterns in existing code
3. Check GitHub issues
4. Reach out to the development team

---

**Last Updated:** 2026-07-11  
**Maintained By:** Development Team  
**License:** MIT
