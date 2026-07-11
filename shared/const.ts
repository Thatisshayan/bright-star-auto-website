export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

export const BUSINESS = {
  name: "Bright Star Auto Ltd",
  address: {
    street: "51 Toro Road North, Unit #3",
    city: "North York",
    region: "ON",
    postalCode: "M3J 2A4",
    country: "CA",
    full: "51 Toro Road North, Unit 3, North York, ON M3J 2A4",
  },
  phones: [
    { display: "+1 (416) 635-0812", href: "tel:+14166350812" },
    { display: "+1 (416) 833-9252", href: "tel:+14168339252" },
  ],
  // Used for the WhatsApp/SMS click-to-chat button — E.164, no "+" or
  // formatting, since that's what wa.me and sms: URIs expect.
  whatsappNumber: "14168339252",
  smsNumber: "+14168339252",
  email: "Brightstarautoltd@gmail.com",
  hours: {
    weekday: "9:00 AM – 6:00 PM",
    saturday: "9:00 AM – 4:00 PM",
    sunday: "Closed",
  },
  url: "https://brightstarautobody.ca",
} as const;
