import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

/**
 * Lightweight per-route SEO manager. Sets document.title and the meta
 * description on mount/update. Avoids pulling in react-helmet-async for a
 * 3-route static site — this covers the two tags that actually change
 * per-page (title + description) without the extra dependency weight.
 */
export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute("content") ?? null;
    descriptionTag?.setAttribute("content", description);

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    const previousOgTitle = ogTitleTag?.getAttribute("content") ?? null;
    ogTitleTag?.setAttribute("content", title);

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    const previousOgDescription = ogDescriptionTag?.getAttribute("content") ?? null;
    ogDescriptionTag?.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) descriptionTag?.setAttribute("content", previousDescription);
      if (previousOgTitle !== null) ogTitleTag?.setAttribute("content", previousOgTitle);
      if (previousOgDescription !== null) ogDescriptionTag?.setAttribute("content", previousOgDescription);
    };
  }, [title, description]);

  return null;
}
