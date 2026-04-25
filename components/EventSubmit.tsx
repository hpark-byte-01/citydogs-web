import Stamp from "./Stamp";

const ACCENT = "#B54A2C";

export default function EventSubmit() {
  return (
    <section
      id="events"
      className="px-6 sm:px-14"
      style={{
        paddingTop: 40,
        paddingBottom: 46,
        borderTop: "3px double #1A1410",
        background: "#EADFC7",
        position: "relative",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left column */}
        <div>
          {/* Eyebrow */}
          <div
            className="font-sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: 10,
              fontWeight: 700,
            }}
          >
            § Bulletin Board §
          </div>

          {/* Heading */}
          <h3
            className="font-serif"
            style={{
              fontSize: "clamp(36px, 4.5vw, 54px)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              margin: "0 0 18px",
              fontWeight: 400,
            }}
          >
            Running a dog event
            <br />
            in the city?
          </h3>

          {/* Body */}
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.55,
              color: "#2D241D",
              maxWidth: 460,
              margin: "0 0 24px",
            }}
          >
            Yappy hours, group walks, adoption days, puppy meetups. If it&rsquo;s
            dog-adjacent and happens within the five boroughs, we&rsquo;ll post
            it on the map for free.
          </p>

          {/* Submit button */}
          <a
            href="/submit-event"
            className="btn font-sans"
            style={{
              background: ACCENT,
              borderColor: ACCENT,
              color: "#F2EBDA",
            }}
          >
            <Stamp icon="plus" size={18} tint="cream" />
            Submit your event
          </a>

          {/* Helper text */}
          <div
            className="font-hand"
            style={{
              fontSize: 18,
              color: "#1A1410",
              marginTop: 14,
            }}
          >
            ~2 minutes · we review by friday
          </div>
        </div>

        {/* Right column — Sample classified ad */}
        <div
          style={{
            background: "#F2EBDA",
            border: "1.5px solid #1A1410",
            padding: 22,
            position: "relative",
            transform: "rotate(-1.5deg)",
            boxShadow: "4px 6px 0 rgba(26,20,16,0.12)",
          }}
        >
          {/* Tape strips */}
          <div className="tape" style={{ top: -12, left: 30 }} />
          <div className="tape r" style={{ top: -12, right: 30 }} />

          {/* Label */}
          <div
            className="font-sans"
            style={{
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#8B7E6A",
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            CLASSIFIED · SAMPLE LISTING
          </div>

          {/* Title */}
          <div
            className="font-serif"
            style={{
              fontSize: 26,
              lineHeight: 1.05,
              marginBottom: 8,
            }}
          >
            Pup-Cup Social
            <br />@ Prospect Park
          </div>

          {/* Details */}
          <div
            style={{
              borderTop: "1px solid rgba(26,20,16,0.3)",
              margin: "8px 0",
              paddingTop: 8,
              fontSize: 14,
              lineHeight: 1.55,
            }}
          >
            Saturday, May 10 · 10am
            <br />
            Long Meadow, near 9th St entrance
            <br />
            All sizes welcome · bring your own bowl
          </div>

          {/* Location */}
          <div
            className="font-sans"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 10,
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: ACCENT,
              fontWeight: 700,
            }}
          >
            <Stamp icon="pin" size={16} tint={ACCENT} /> Park Slope, Brooklyn
          </div>
        </div>
      </div>
    </section>
  );
}
