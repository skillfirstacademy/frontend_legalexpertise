const CountriesAbout = ({
  image,
  imageAlt = "Legal Expertise Group",
  eyebrow = "Who We Are",
  title = "Welcome to",
  titleAccent = "Legal Expertise Group",
  body,
  services = [],
  tagline,
}) => {
  return (
    <section className="flex items-center justify-center py-20 px-6 bg-background">
      <div className="w-full max-w-[1120px] grid grid-cols-1 lg:grid-cols-2 border border-[hsl(42_30%_18%)] bg-[hsl(0_0%_8%)]">

        {/* ── Image panel ── */}
        <div className="relative flex items-center justify-center p-6 lg:p-10">

          {/* Shape container */}
          <div className="relative w-full h-[320px] lg:h-[520px] max-w-[420px]">

            {/* Organic shape */}
            <div
              className="absolute inset-0 overflow-hidden border border-[hsl(42_30%_18%)]"
              style={{
                clipPath:
                  "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                borderRadius: "28% 72% 65% 35% / 30% 30% 70% 70%",
              }}
            >
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="w-full h-full object-cover brightness-[0.88] saturate-110"
              />
            </div>

            {/* Soft overlay (no shadow, just depth) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath:
                  "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                borderRadius: "28% 72% 65% 35% / 30% 30% 70% 70%",
                background:
                  "linear-gradient(120deg, transparent 60%, rgba(255,255,255,0.04))",
              }}
            />

            {/* Minimal corner accents */}
            <span className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-primary/60" />
            <span className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-primary/60" />

          </div>
        </div>

        {/* ── Content panel ── */}
        <div className="relative flex flex-col justify-center px-7 py-10 lg:px-14 lg:py-16">

          {/* Top rule */}
          <div className="absolute top-0 left-7 right-7 lg:left-14 lg:right-14 h-px bg-gradient-to-r from-[hsl(42_30%_18%)] to-transparent" />

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <span
              className="block w-7 h-px flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, hsl(45 80% 70%), hsl(42 65% 52%) 50%, hsl(38 60% 38%))",
              }}
            />
            <span className="text-[10px] tracking-[0.38em] uppercase text-primary font-medium">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.08] font-semibold text-foreground">
            {title}{" "}
            <em className="gold-text not-italic">{titleAccent}</em>
          </h2>

          {/* Body */}
          {body && (
            <p className="mt-5 text-sm leading-[1.85] text-muted-foreground font-light max-w-[400px]">
              {body}
            </p>
          )}

          {/* Services list */}
          {services.length > 0 && (
            <ul className="mt-8 flex flex-col gap-[0.65rem] list-none p-0">
              {services.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm text-foreground/80 leading-relaxed"
                >
                  <span className="relative flex-shrink-0 w-[18px] h-[18px] rounded-full bg-primary/10 border border-primary/35">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-primary" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          )}

          {/* Tagline */}
          {tagline && (
            <p className="mt-10 pt-6 border-t border-[hsl(42_30%_18%)] text-[0.82rem] tracking-wide text-muted-foreground/80 italic font-display leading-[1.7]">
              {tagline}
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default CountriesAbout;