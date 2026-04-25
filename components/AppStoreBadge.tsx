const APP_STORE_URL = "https://apps.apple.com/us/app/citydogs/id6761141597";

export default function AppStoreBadge({
  light = false,
  big = false,
}: {
  light?: boolean;
  big?: boolean;
}) {
  const bg = light ? "#F2EBDA" : "#1A1410";
  const fg = light ? "#1A1410" : "#F2EBDA";
  return (
    <a
      className="appstore"
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener"
      style={{
        background: bg,
        color: fg,
        borderColor: bg,
        padding: big ? "14px 22px" : "10px 18px",
      }}
    >
      <svg
        width={big ? 26 : 22}
        height={big ? 30 : 26}
        viewBox="0 0 24 28"
        fill={fg}
      >
        <path d="M17.5 14.9c0-3 2.5-4.4 2.6-4.5-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.6 1.1-4.6 1.1-.9 0-2.4-1.1-3.9-1-2 0-3.9 1.2-5 3-2.1 3.7-.5 9.1 1.5 12.1 1 1.5 2.2 3.1 3.8 3.1 1.5-.1 2.1-1 3.9-1 1.9 0 2.4 1 4 .9 1.6 0 2.7-1.5 3.7-3 .7-1 1.2-2.1 1.6-3.3-.1-.1-3.2-1.2-3.2-5zm-3-9c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.6.8-3.5 1.8-.8.9-1.4 2.3-1.2 3.6 1.4.1 2.7-.7 3.5-1.6z" />
      </svg>
      <span>
        <span className="small" style={{ color: fg, opacity: 0.75 }}>
          Download on the
        </span>
        <span className="big" style={{ color: fg }}>
          App Store
        </span>
      </span>
    </a>
  );
}
