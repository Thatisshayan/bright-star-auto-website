/**
 * Live Google Reviews widget.
 *
 * Pulls real-time reviews via the Google Maps JS "places" library
 * (Place.fetchFields), reusing the same Maps proxy already configured for
 * Map.tsx. Requires two env vars to activate:
 *   - VITE_FRONTEND_FORGE_API_KEY  (already used by Map.tsx)
 *   - VITE_GOOGLE_PLACE_ID         (Bright Star Auto's Google Place ID)
 *
 * Without a configured Place ID this renders nothing — the static,
 * hand-curated <Reviews /> carousel above already covers that case, so
 * there's no broken/empty state shown to visitors.
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

declare global {
  interface Window {
    google?: typeof google;
  }
}

const API_KEY = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;
const FORGE_BASE_URL =
  import.meta.env.VITE_FRONTEND_FORGE_API_URL ||
  "https://forge.butterfly-effect.dev";
const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;

interface LiveReview {
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
}

function loadPlacesScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.maps?.places) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}&v=weekly&libraries=places`;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Failed to load Google Maps Places script"));
    document.head.appendChild(script);
  });
}

export default function GoogleReviewsWidget() {
  const [reviews, setReviews] = useState<LiveReview[] | null>(null);
  const [placeUrl, setPlaceUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
    "idle"
  );

  useEffect(() => {
    if (!API_KEY || !PLACE_ID) return;

    let cancelled = false;
    setStatus("loading");

    loadPlacesScript()
      .then(async () => {
        if (cancelled || !window.google) return;
        const place = new window.google.maps.places.Place({ id: PLACE_ID });
        await place.fetchFields({ fields: ["reviews", "googleMapsURI"] });
        if (cancelled) return;

        const liveReviews: LiveReview[] = (place.reviews ?? [])
          .slice(0, 5)
          .map(r => ({
            authorName: r.authorAttribution?.displayName ?? "Google User",
            rating: r.rating ?? 5,
            text: r.text ?? "",
            relativeTime: r.relativePublishTimeDescription ?? "",
          }));

        setReviews(liveReviews);
        setPlaceUrl(place.googleMapsURI ?? null);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Not configured, still loading, or failed — stay silent. The curated
  // Reviews carousel already covers this section for visitors.
  if (!API_KEY || !PLACE_ID || status !== "ready" || !reviews?.length) {
    return null;
  }

  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-display font-bold text-white">
          Live From Google
        </h3>
        {placeUrl && (
          <a
            href={placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            View on Google
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="p-5 rounded-xl border border-white/10 bg-white/5"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: review.rating }).map((_, s) => (
                <Star key={s} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed line-clamp-4 mb-3">
              {review.text}
            </p>
            <p className="text-xs text-foreground/50">
              {review.authorName} &middot; {review.relativeTime}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
