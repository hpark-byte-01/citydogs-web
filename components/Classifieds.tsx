import Stamp from "./Stamp";

const ACCENT = "#B54A2C";

const columns = [
  {
    icon: "earth",
    kicker: "The Feed",
    title: "Your block, unleashed",
    body: "Posts from owners a few blocks away. Ask the question. Share the win. Find out who else walks the same loop at 7am.",
  },
  {
    icon: "chat",
    kicker: "Direct Messages",
    title: "Text the dachshund lady",
    body: "Make plans like friends, not strangers. DMs open after a sidewalk hello or a comment, no cold intros, ever.",
  },
  {
    icon: "plus",
    kicker: "Walks & Playdates",
    title: "For pay or for fun",
    body: "Schedule a run at Tompkins. Trade Thursday walks with a neighbor. Pay $20 or pay it forward, your call.",
  },
  {
    icon: "pin",
    kicker: "Neighborhood Groups",
    title: "The block you live on",
    body: "UES. Astoria. Park Slope. Tiny, quiet groups for the streets you actually walk, no Reddit, no algorithm.",
  },
];

export default function Classifieds() {
  return (
    <section className="px-6 sm:px-16" style={{ paddingTop: 48, paddingBottom: 44 }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div className="masthead-rule">
          <h3
            className="font-serif"
            style={{
              fontSize: 44,
              margin: 0,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            What&rsquo;s inside the app
          </h3>
        </div>
        <div
          className="font-sans"
          style={{
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8B7E6A",
            marginTop: 8,
            fontWeight: 500,
          }}
        >
          four columns · read in any order
        </div>
      </div>

      {/* 4-column grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        style={{
          gap: 0,
          borderTop: "1.5px solid #1A1410",
          borderBottom: "1.5px solid #1A1410",
        }}
      >
        {columns.map((f, i) => (
          <div
            key={f.kicker}
            className="flex flex-col gap-3 border-t border-ink/30 first:border-t-0 md:border-t-0 md:border-l md:border-ink/30 md:first:border-l-0 xl:[&:nth-child(3)]:border-l"
            style={{ padding: "26px 22px" }}
          >
            <Stamp icon={f.icon} size={44} tint="ink" rotate={i % 2 ? -4 : 3} />
            <div
              className="font-sans"
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: ACCENT,
                fontWeight: 700,
                marginTop: 4,
              }}
            >
              {f.kicker}
            </div>
            <div
              className="font-serif"
              style={{
                fontSize: 27,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              {f.title}
            </div>
            <div
              style={{
                fontSize: 15,
                lineHeight: 1.55,
                color: "#2D241D",
              }}
            >
              {f.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
