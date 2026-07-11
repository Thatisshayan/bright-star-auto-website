# TODO

Outstanding items from the site polish pass — not code changes, just things that need an account/credential only the client or Shayan has access to.

## 1. Contact form email notifications

Tried to wire this up automatically via the Netlify API (`netlify api createHookBySiteId`) but it kept returning an opaque "Unprocessable Entity" error even with a minimal payload — looks like Netlify has restricted/deprecated that part of their API for newer accounts and pushed form notifications to be dashboard-only now.

**Manual fix (~30 seconds):**

1. Go to https://app.netlify.com/projects/bright-star-auto/forms
2. Click into the "contact" form
3. Settings → Form notifications → Add notification → Email notification
4. Set it to `Brightstarautoltd@gmail.com`

Right now submissions land in Netlify's dashboard but nobody gets pinged — there's already one real submission from 2026-07-06 sitting there unread.

## 2. Live Google Reviews widget

The site has a `GoogleReviewsWidget` component (in `client/src/components/GoogleReviewsWidget.tsx`) that pulls live reviews from Google, but it needs `VITE_GOOGLE_PLACE_ID` set in Netlify's environment variables. Without it, the widget silently renders nothing (by design — no broken UI, just missing).

Couldn't find the real Place ID via automated lookup (Google blocks non-JS scraping of Maps data, and guessing risks pulling the wrong business's reviews).

**To get it:**

- Use Google's official Place ID Finder: https://developers.google.com/maps/documentation/places/web-service/place-id (search the business, click the pin, copy the ID shown)
- Or find it in the Google Business Profile dashboard if the client manages one

Once you have it: Netlify site settings → Environment variables → add `VITE_GOOGLE_PLACE_ID`, then trigger a redeploy.

## 3. Analytics

`index.html` has an Umami analytics script wired in via `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID`, both currently unset — so **no traffic analytics is being collected on the live site at all** right now.

Options:

- If there's already an Umami account (self-hosted or cloud), get the instance URL + website ID and set both env vars in Netlify.
- If not, consider a simpler alternative like **Cloudflare Web Analytics** (free, just a script tag, no account/hosting complexity) instead of standing up Umami from scratch — would need a small code change to swap the injected script.

## 4. Certas insurance logo

One insurer from the client's list — Certas — never had a working logo source found (their site redirects elsewhere, no standalone brand page located). Currently missing from the insurance ticker. Need either a direct logo file from the client or a link to their actual site.
