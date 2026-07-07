const services = [
  "COLLISION REPAIR",
  "PAINT & REFINISHING",
  "DENT REMOVAL",
  "FRAME STRAIGHTENING",
  "INSURANCE CLAIMS",
  "RUST REPAIR",
  "AUTO DETAILING",
  "SCRATCH REMOVAL",
];

const insurers = [
  { name: "Intact Insurance", src: "/insurance/intact.svg" },
  { name: "Desjardins Insurance", src: "/insurance/desjardins.svg" },
  { name: "Allstate", src: "/insurance/allstate.svg" },
  { name: "TD Insurance", src: "/insurance/td.png" },
  { name: "Chubb", src: "/insurance/chubb.svg" },
  { name: "Travelers", src: "/insurance/travelers.jpg" },
];

const makes = [
  { name: "Toyota", src: "/logos/toyota.svg" },
  { name: "Honda", src: "/logos/honda.svg" },
  { name: "BMW", src: "/logos/bmw.svg" },
  { name: "Mercedes-Benz", src: "/logos/mercedes.svg" },
  { name: "Audi", src: "/logos/audi.svg" },
  { name: "Volkswagen", src: "/logos/volkswagen.svg" },
  { name: "Nissan", src: "/logos/nissan.svg" },
  { name: "Hyundai", src: "/logos/hyundai.svg" },
  { name: "Lexus", src: "/logos/lexus.svg" },
];

/** Fixed-size logo tile so every brand reads at the same visual scale
 *  regardless of its native aspect ratio - shown in full color, always
 *  visible (no hover required to see it). */
function LogoTile({ name, src }: { name: string; src: string }) {
  return (
    <div className="w-28 h-14 md:w-32 md:h-16 flex items-center justify-center shrink-0 px-2">
      <img
        src={src}
        alt={name}
        title={name}
        className="max-w-full max-h-full w-auto h-auto object-contain"
      />
    </div>
  );
}

export default function MarqueeTicker() {
  return (
    <div className="relative z-10">
      {/* Services ticker - plain CSS marquee (no JS animation dependency) */}
      <section className="bg-primary/10 border-y border-primary/30 py-4 overflow-hidden">
        <div className="marquee flex gap-8 whitespace-nowrap w-max">
          {[...services, ...services].map((service, i) => (
            <div
              key={i}
              className="flex items-center gap-8 text-lg font-display font-semibold tracking-wide text-primary"
            >
              <span>{service}</span>
              <span className="text-primary/50">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance partners ticker - real logos, always fully visible */}
      <section className="bg-background border-b border-white/10 py-8 overflow-hidden">
        <p className="container text-center text-xs font-semibold tracking-[0.2em] text-foreground/40 uppercase mb-6">
          Approved &amp; trusted by leading insurance providers
        </p>
        <div className="marquee flex items-center whitespace-nowrap w-max" style={{ animationDuration: "28s" }}>
          {[...insurers, ...insurers].map((ins, i) => (
            <LogoTile key={i} name={ins.name} src={ins.src} />
          ))}
        </div>
      </section>

      {/* Trusted makes ticker - real logos, always fully visible */}
      <section className="bg-background border-b border-white/10 py-8 overflow-hidden">
        <p className="container text-center text-xs font-semibold tracking-[0.2em] text-foreground/40 uppercase mb-6">
          We repair all makes &amp; models
        </p>
        <div className="marquee flex items-center whitespace-nowrap w-max" style={{ animationDuration: "34s" }}>
          {[...makes, ...makes].map((make, i) => (
            <LogoTile key={i} name={make.name} src={make.src} />
          ))}
        </div>
      </section>
    </div>
  );
}
