import AppStoreBadge from "./AppStoreBadge";

const ACCENT = "#B54A2C";

export default function Footer() {
  return (
    <footer
      className="px-6 sm:px-14 flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center"
      style={{
        paddingTop: 28,
        paddingBottom: 28,
        borderTop: "1.5px solid #1A1410",
        background: "#1A1410",
        color: "#F2EBDA",
      }}
    >
      {/* Left */}
      <div>
        <div
          className="font-serif"
          style={{
            fontSize: 28,
            letterSpacing: "-0.01em",
          }}
        >
          CityDogs<span style={{ color: ACCENT }}>.</span>
        </div>
        <div
          className="font-sans"
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: 0.7,
            marginTop: 4,
          }}
        >
          Made in NYC · 2026
        </div>
      </div>

      {/* Right */}
      <div
        className="font-sans flex flex-wrap gap-5 items-center"
        style={{ fontSize: 13 }}
      >
        <a
          href="https://instagram.com/citydogs.ai"
          target="_blank"
          rel="noopener"
          style={{
            color: "#F2EBDA",
            textDecoration: "none",
            borderBottom: "1px dotted #F2EBDA",
          }}
        >
          Instagram
        </a>
        <a
          href="https://tiktok.com/@citydogs.ai"
          target="_blank"
          rel="noopener"
          style={{
            color: "#F2EBDA",
            textDecoration: "none",
            borderBottom: "1px dotted #F2EBDA",
          }}
        >
          TikTok
        </a>
        <a
          href="mailto:hello@citydogs.ai"
          style={{
            color: "#F2EBDA",
            textDecoration: "none",
            borderBottom: "1px dotted #F2EBDA",
          }}
        >
          Contact
        </a>
        <AppStoreBadge light />
      </div>
    </footer>
  );
}
