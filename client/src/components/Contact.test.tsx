import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Contact, { encode } from "./Contact";

describe("encode", () => {
  it("url-encodes keys and values and joins with &", () => {
    expect(encode({ name: "Jane Doe", email: "jane@example.com" })).toBe(
      "name=Jane%20Doe&email=jane%40example.com"
    );
  });
});

describe("Contact form", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
  });

  it("submits form data via fetch and shows the success state", async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Your name"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("(416) 000-0000"), {
      target: { value: "4160000000" },
    });
    fireEvent.change(screen.getByPlaceholderText("your@email.com"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(
      screen.getByPlaceholderText(
        "Tell us about your vehicle and what you need..."
      ),
      {
        target: { value: "I need collision repair for my Honda Civic" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", { name: /get my free estimate/i })
    );

    await waitFor(() => {
      expect(screen.getByText("Request Received")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    const [, init] = (fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(String(init.body)).toContain("name=Jane%20Doe");
  });

  it("silently drops the submission when the honeypot field is filled", async () => {
    const { container } = render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Your name"), {
      target: { value: "Bot" },
    });
    fireEvent.change(screen.getByPlaceholderText("(416) 000-0000"), {
      target: { value: "4160000000" },
    });
    fireEvent.change(screen.getByPlaceholderText("your@email.com"), {
      target: { value: "bot@example.com" },
    });
    fireEvent.change(
      screen.getByPlaceholderText(
        "Tell us about your vehicle and what you need..."
      ),
      {
        target: { value: "I need collision repair for my Honda Civic" },
      }
    );
    // The honeypot is aria-hidden by design (invisible to real users and
    // screen readers), so it must be queried directly rather than by label.
    const honeypot = container.querySelector('input[name="bot-field"]')!;
    fireEvent.change(honeypot, { target: { value: "im-a-bot" } });

    fireEvent.click(
      screen.getByRole("button", { name: /get my free estimate/i })
    );

    await waitFor(() => {
      expect(screen.getByText("Request Received")).toBeInTheDocument();
    });

    expect(fetch).not.toHaveBeenCalled();
  });
});
