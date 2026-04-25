import Stamp from "./Stamp";
import AppStoreBadge from "./AppStoreBadge";
import MapPosterPreview from "./MapPosterPreview";

const ACCENT = "#B54A2C";

export default function Hero() {
  return (
    <section
      className="px-6 sm:px-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14"
      style={{
        paddingTop: 52,
        paddingBottom: 44,
        borderBottom: "1.5px solid #1A1410",
      }}
    >
      {/* Left column */}
      <div>
        {/* Eyebrow */}
        <div
          className="font-sans flex items-center gap-2.5"
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: ACCENT,
            marginBottom: 14,
          }}
        >
          <Stamp icon="earth" size={18} tint={ACCENT} />
          The Front Page
        </div>

        {/* Headline */}
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(42px, 6vw, 84px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            margin: "0 0 26px",
            fontWeight: 400,
          }}
        >
          Find your pup&rsquo;s{" "}
          <em style={{ fontStyle: "italic", color: ACCENT }}>people</em>,
          <br />a block at a time.
        </h2>

        {/* Body */}
        <p
          className="font-body"
          style={{
            fontSize: 21,
            lineHeight: 1.55,
            maxWidth: 600,
            color: "#2D241D",
            margin: "0 0 32px",
          }}
        >
          Playdates around the corner. A neighbor who&rsquo;ll walk your dog on
          Thursday, for pay or just for kicks. Friends who get why you keep
          seven kinds of bully stick. CityDogs is the app for New York dog
          owners, building real community one sidewalk hello at a time.
        </p>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          <AppStoreBadge big />
          <a
            href="/submit-event"
            className="dotted font-sans"
            style={{ fontSize: 14, fontWeight: 500 }}
          >
            or submit an event →
          </a>
        </div>

        {/* Pull quote */}
        <div
          style={{
            borderTop: "1px solid rgba(26,20,16,0.3)",
            borderBottom: "1px solid rgba(26,20,16,0.3)",
            padding: "20px 0",
            marginTop: 32,
            maxWidth: 600,
          }}
        >
          <div
            className="font-serif"
            style={{
              fontSize: 24,
              lineHeight: 1.3,
              fontStyle: "italic",
              color: "#1A1410",
            }}
          >
            &ldquo;I met my best friend on the app. Our dogs met first.&rdquo;
          </div>
          <div
            className="font-sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginTop: 10,
              color: "#8B7E6A",
              fontWeight: 600,
            }}
          >
            Ana &amp; Biscuit, Fort Greene
          </div>
        </div>
      </div>

      {/* Right column — Phone mockup */}
      <div
        className="relative flex justify-center"
        style={{ paddingTop: 12 }}
      >
        {/* Annotation: top-right */}
        <div
          className="font-hand hidden lg:block"
          style={{
            position: "absolute",
            top: -40,
            right: -10,
            fontSize: 20,
            color: ACCENT,
            transform: "rotate(-6deg)",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          every event,
          <br />
          on the map
          <div style={{ marginTop: 2 }}>
            <svg width="40" height="30" viewBox="0 0 40 30">
              <path
                d="M35 5 Q 20 10, 8 25"
                stroke={ACCENT}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M4 22 L 8 25 L 10 20"
                stroke={ACCENT}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <MapPosterPreview />

        {/* Annotation: bottom-left */}
        <div
          className="font-hand hidden lg:block"
          style={{
            position: "absolute",
            bottom: -10,
            left: -70,
            fontSize: 17,
            color: "#1A1410",
            transform: "rotate(-3deg)",
            maxWidth: 200,
            lineHeight: 1.2,
          }}
        >
          tap a pin, swipe
          <br />
          through the posters
        </div>
      </div>
    </section>
  );
}
