import {
  Wrench,
  SprayCan,
  Hammer,
  Ruler,
  ShieldCheck,
  Droplets,
  Sparkles,
  Eraser,
} from "lucide-react";

const services = [
  {
    label: "COLLISION REPAIR",
    icon: Wrench,
    color: "text-orange-400",
    bg: "bg-orange-400/15",
  },
  {
    label: "PAINT & REFINISHING",
    icon: SprayCan,
    color: "text-sky-400",
    bg: "bg-sky-400/15",
  },
  {
    label: "DENT REMOVAL",
    icon: Hammer,
    color: "text-violet-400",
    bg: "bg-violet-400/15",
  },
  {
    label: "FRAME STRAIGHTENING",
    icon: Ruler,
    color: "text-cyan-400",
    bg: "bg-cyan-400/15",
  },
  {
    label: "INSURANCE CLAIMS",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-400/15",
  },
  {
    label: "RUST REPAIR",
    icon: Droplets,
    color: "text-amber-400",
    bg: "bg-amber-400/15",
  },
  {
    label: "AUTO DETAILING",
    icon: Sparkles,
    color: "text-pink-400",
    bg: "bg-pink-400/15",
  },
  {
    label: "SCRATCH REMOVAL",
    icon: Eraser,
    color: "text-rose-400",
    bg: "bg-rose-400/15",
  },
];

// Order deliberately interleaves brand hues (reds, blues, chromes, blacks)
// so no two same-tone logos land next to each other in the strip.
const insurers = [
  { name: "Intact Insurance", src: "/insurance/intact.svg" },
  { name: "Aviva Canada", src: "/insurance/aviva.svg" },
  { name: "TD Insurance", src: "/insurance/td.png" },
  { name: "The Co-operators", src: "/insurance/cooperators.svg" },
  { name: "Allstate", src: "/insurance/allstate.svg" },
  { name: "Desjardins Insurance", src: "/insurance/desjardins.svg" },
  { name: "CAA Insurance", src: "/insurance/caa.svg" },
  { name: "Scotia Insurance", src: "/insurance/scotia.svg" },
  { name: "Pembridge", src: "/insurance/pembridge.svg" },
  { name: "Economical Insurance", src: "/insurance/economical.svg" },
  { name: "RBC Insurance", src: "/insurance/rbc.svg" },
  { name: "belairdirect", src: "/insurance/belairdirect.svg" },
  { name: "Chubb", src: "/insurance/chubb.svg" },
  { name: "Definity", src: "/insurance/definity.png" },
  { name: "Travelers", src: "/insurance/travelers.jpg" },
];

// Same interleaving idea: mainstream / prestige / original-launch makes are
// round-robined below (see buildMakes) instead of listed in one flat block,
// so reds, blues, and chrome wordmarks don't cluster together visually.
const originalMakes = [
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

const mainstreamMakes = [
  { name: "Ford", src: "/logos/ford.svg" },
  { name: "Chevrolet", src: "/logos/chevrolet.svg" },
  { name: "Kia", src: "/logos/kia.svg" },
  { name: "Mazda", src: "/logos/mazda.svg" },
  { name: "Subaru", src: "/logos/subaru.png" },
  { name: "Acura", src: "/logos/acura.svg" },
  { name: "Jeep", src: "/logos/jeep.png" },
  { name: "Cadillac", src: "/logos/cadillac.png" },
  { name: "Chrysler", src: "/logos/chrysler.png" },
  { name: "Ram", src: "/logos/ram.svg" },
  { name: "Volvo", src: "/logos/volvo.jpg" },
  { name: "MINI", src: "/logos/mini.svg" },
  { name: "Mitsubishi", src: "/logos/mitsubishi.svg" },
  { name: "Fiat", src: "/logos/fiat.png" },
  { name: "Infiniti", src: "/logos/infiniti.svg" },
  { name: "Suzuki", src: "/logos/suzuki.svg" },
  { name: "Peugeot", src: "/logos/peugeot.png" },
];

const prestigeMakes = [
  { name: "Porsche", src: "/logos/porsche.svg" },
  { name: "Tesla", src: "/logos/tesla.svg" },
  { name: "Rolls-Royce", src: "/logos/rollsroyce.png" },
  { name: "Bentley", src: "/logos/bentley.png" },
  { name: "Ferrari", src: "/logos/ferrari.svg" },
  { name: "Lamborghini", src: "/logos/lamborghini.png" },
  { name: "Maserati", src: "/logos/maserati.svg" },
  { name: "Aston Martin", src: "/logos/astonmartin.png" },
  { name: "Polestar", src: "/logos/polestar.png" },
  { name: "McLaren", src: "/logos/mclaren.svg" },
  { name: "Koenigsegg", src: "/logos/koenigsegg.png" },
  { name: "Bugatti", src: "/logos/bugatti.png" },
];

/** Round-robins across buckets instead of concatenating them, so visually
 *  similar/loud logos (the prestige bucket) are spaced out rather than
 *  bunched at one end of the strip. */
function interleave<T>(...lists: T[][]): T[] {
  const max = Math.max(...lists.map(l => l.length));
  const out: T[] = [];
  for (let i = 0; i < max; i++) {
    for (const list of lists) {
      if (list[i]) out.push(list[i]);
    }
  }
  return out;
}

const makes = interleave(originalMakes, mainstreamMakes, prestigeMakes);

/** Repeats a short list until it's long enough that a single "copy" of the
 *  marquee track is guaranteed wider than any real viewport - otherwise the
 *  CSS loop (which shifts by exactly one copy's width) runs out of content
 *  before reaching the edge of the screen and the track goes blank partway
 *  through the animation. */
function loopFill<T>(items: T[], minLength = 24): T[] {
  if (items.length === 0) return items;
  const repeats = Math.ceil(minLength / items.length);
  return Array.from({ length: repeats }, () => items).flat();
}

/** Fixed-height logo tile so every brand reads at the same visual scale;
 *  width is intrinsic (not boxed) so square icon-style marks don't leave
 *  dead space next to wide wordmark logos. Loaded eagerly (not lazily) and
 *  decoded off the main thread so tiles never pop in blank mid-scroll. */
function LogoTile({ name, src }: { name: string; src: string }) {
  return (
    <div className="h-12 md:h-14 flex items-center justify-center shrink-0 mx-5">
      <img
        src={src}
        alt={name}
        title={name}
        loading="eager"
        decoding="async"
        fetchPriority="low"
        className="h-full w-auto max-w-[130px] object-contain"
      />
    </div>
  );
}

export default function MarqueeTicker() {
  const serviceLoop = loopFill(services);
  const insurerLoop = loopFill(insurers);
  const makeLoop = loopFill(makes);

  return (
    <div className="relative z-10">
      {/* Services ticker - icon + label pills with a subtle "breathing"
          pulse per item so the strip feels active even while stationary.
          Same background treatment as the logo strips below it for visual
          consistency, instead of a separate tinted band. */}
      <section className="bg-background border-b border-white/10 py-6 overflow-hidden">
        <div
          className="marquee flex gap-3 whitespace-nowrap w-max"
          style={{ animationDuration: "70s" }}
        >
          {[...serviceLoop, ...serviceLoop].map((service, i) => {
            const Icon = service.icon;
            const delay = `${(i % services.length) * 0.18}s`;
            return (
              <div
                key={i}
                className="group flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full border border-white/10 text-base font-display font-semibold tracking-wide text-foreground/90 transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full ${service.bg}`}
                >
                  <Icon
                    size={15}
                    className={`service-icon-breathe ${service.color}`}
                    style={{ animationDelay: delay }}
                  />
                </span>
                <span>{service.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Insurance partners ticker - real logos, always fully visible */}
      <section className="bg-background border-b border-white/10 py-8 overflow-hidden">
        <p className="container text-center text-xs font-semibold tracking-[0.2em] text-foreground/40 uppercase mb-6">
          Approved &amp; trusted by leading insurance providers
        </p>
        <div
          className="marquee flex items-center whitespace-nowrap w-max"
          style={{ animationDuration: "50s" }}
        >
          {[...insurerLoop, ...insurerLoop].map((ins, i) => (
            <LogoTile key={i} name={ins.name} src={ins.src} />
          ))}
        </div>
      </section>

      {/* Trusted makes ticker - real logos, always fully visible */}
      <section className="bg-background border-b border-white/10 py-8 overflow-hidden">
        <p className="container text-center text-xs font-semibold tracking-[0.2em] text-foreground/40 uppercase mb-6">
          We repair all makes &amp; models
        </p>
        <div
          className="marquee flex items-center whitespace-nowrap w-max"
          style={{ animationDuration: "110s" }}
        >
          {[...makeLoop, ...makeLoop].map((make, i) => (
            <LogoTile key={i} name={make.name} src={make.src} />
          ))}
        </div>
      </section>
    </div>
  );
}
