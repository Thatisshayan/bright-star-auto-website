import { describe, expect, it, beforeEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import SEO from "./SEO";

function setMetaTag(selector: string, content: string) {
  const el = document.createElement("meta");
  const [, attr, value] = selector.match(/\[(\w+)="([^"]+)"]/)!;
  el.setAttribute(attr, value);
  el.setAttribute("content", content);
  document.head.appendChild(el);
}

describe("SEO", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
    document.title = "Original Title";
    setMetaTag('meta[name="description"]', "Original description");
    setMetaTag('meta[property="og:title"]', "Original OG title");
    setMetaTag('meta[property="og:description"]', "Original OG description");
  });

  it("sets document title and meta tags on mount", () => {
    render(<SEO title="Page Title" description="Page description" />);

    expect(document.title).toBe("Page Title");
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content")
    ).toBe("Page description");
    expect(
      document
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content")
    ).toBe("Page Title");
  });

  it("restores the previous tags on unmount", () => {
    const { unmount } = render(
      <SEO title="Page Title" description="Page description" />
    );
    unmount();
    cleanup();

    expect(document.title).toBe("Original Title");
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content")
    ).toBe("Original description");
  });
});
