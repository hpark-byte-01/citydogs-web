import Stamp from "./Stamp";

export default function Masthead() {
  return (
    <header
      className="px-6 sm:px-16"
      style={{
        paddingTop: 32,
        paddingBottom: 22,
        borderBottom: "3px double #1A1410",
      }}
    >
      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2.5">
        <div
          className="font-sans"
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Vol. I · No. 01 · Spring 2026
        </div>
        <div
          className="font-sans flex items-center gap-2"
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <Stamp icon="pin" size={14} tint="ink" />
          Filed from New York City
        </div>
      </div>

      {/* Title */}
      <h1
        className="font-serif"
        style={{
          fontSize: "clamp(72px, 12vw, 152px)",
          letterSpacing: "-0.035em",
          lineHeight: 0.9,
          margin: "6px 0 28px",
          fontWeight: 400,
        }}
      >
        CityDogs<span className="text-accent">.</span>
      </h1>

      {/* Bottom row */}
      <div
        className="flex justify-between items-center font-sans"
        style={{
          fontSize: 13,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        <span>citydogs.ai</span>
      </div>
    </header>
  );
}
