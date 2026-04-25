"use client";

import { useState } from "react";
import Stamp from "./Stamp";

const ACCENT = "#B54A2C";

const posters = [
  {
    title: "Pup-Cup Social",
    where: "Prospect Park",
    when: "Sat May 10 · 10am",
    nb: "Park Slope",
    bg: "#D9C89F",
  },
  {
    title: "Sunday Group Walk",
    where: "Hudson River Pk",
    when: "Sun May 11 · 9am",
    nb: "West Village",
    bg: "#C9A890",
  },
  {
    title: "Adoption Day",
    where: "Tompkins Sq",
    when: "Sat May 17 · 11am",
    nb: "East Village",
    bg: "#B8B29A",
  },
];

export default function MapPosterPreview() {
  const [activePoster, setActivePoster] = useState(0);

  const pins = [
    { x: 30, y: 35, active: activePoster === 0 },
    { x: 62, y: 28, active: activePoster === 1 },
    { x: 48, y: 56, active: activePoster === 2 },
    { x: 72, y: 62, active: false },
    { x: 22, y: 60, active: false },
    { x: 80, y: 42, active: false },
  ];

  return (
    <div className="phone-shell" style={{ width: 280, height: 580 }}>
      <div
        className="phone-screen"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "14px 24px 6px",
            fontSize: 12,
            fontWeight: 700,
            color: "#1A1410",
            fontFamily: "var(--font-work-sans), sans-serif",
            background: "#F2EBDA",
          }}
        >
          <span>9:41</span>
          <span style={{ display: "flex", gap: 4 }}>
            <span>●●●</span>
          </span>
        </div>

        {/* Header */}
        <div
          style={{
            padding: "4px 18px 10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#F2EBDA",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: 20,
              color: "#1A1410",
              letterSpacing: "-0.01em",
            }}
          >
            Events near you
          </div>
          <Stamp icon="profile" size={22} tint="ink" />
        </div>

        {/* Map */}
        <div
          style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            background: "#EADFC7",
          }}
        >
          <svg
            viewBox="0 0 280 360"
            preserveAspectRatio="xMidYMid slice"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {/* Water (East River) */}
            <path
              d="M 240 0 Q 220 80 250 160 T 240 360 L 280 360 L 280 0 Z"
              fill="#C9D8D2"
              opacity="0.7"
            />
            {/* Parks */}
            <path
              d="M 50 80 Q 110 60 130 130 Q 120 200 60 190 Q 30 150 50 80 Z"
              fill="#B8C2A8"
              opacity="0.55"
            />
            <path
              d="M 160 220 Q 200 210 210 260 Q 200 300 170 295 Q 150 270 160 220 Z"
              fill="#B8C2A8"
              opacity="0.55"
            />
            {/* Avenues */}
            {[40, 80, 120, 160, 200].map((x) => (
              <line
                key={`av-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="360"
                stroke="#1A1410"
                strokeWidth="0.6"
                opacity="0.18"
              />
            ))}
            {/* Streets */}
            {[40, 80, 120, 160, 200, 240, 280, 320].map((y) => (
              <line
                key={`st-${y}`}
                x1="0"
                y1={y}
                x2="240"
                y2={y}
                stroke="#1A1410"
                strokeWidth="0.4"
                opacity="0.13"
              />
            ))}
            {/* Major roads */}
            <line
              x1="0"
              y1="180"
              x2="240"
              y2="180"
              stroke="#1A1410"
              strokeWidth="1.4"
              opacity="0.35"
            />
            <path
              d="M 0 240 Q 100 220 240 260"
              stroke="#1A1410"
              strokeWidth="1.2"
              fill="none"
              opacity="0.3"
            />
            {/* Labels */}
            <text
              x="60"
              y="148"
              fontFamily="Work Sans"
              fontSize="8"
              fill="#1A1410"
              opacity="0.55"
              fontWeight="600"
            >
              PARK SLOPE
            </text>
            <text
              x="170"
              y="270"
              fontFamily="Work Sans"
              fontSize="8"
              fill="#1A1410"
              opacity="0.55"
              fontWeight="600"
            >
              EAST VILLAGE
            </text>
            <text
              x="245"
              y="80"
              fontFamily="Work Sans"
              fontSize="7"
              fill="#1A1410"
              opacity="0.4"
              fontStyle="italic"
            >
              East River
            </text>
          </svg>

          {/* Pins */}
          {pins.map((p, i) => (
            <div
              key={i}
              onClick={() =>
                !p.active && i < posters.length && setActivePoster(i)
              }
              style={{
                position: "absolute",
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: "translate(-50%, -100%)",
                cursor: "pointer",
                zIndex: p.active ? 3 : 2,
              }}
            >
              <div
                style={{
                  width: p.active ? 30 : 22,
                  height: p.active ? 38 : 28,
                  background: p.active ? ACCENT : "#1A1410",
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  position: "relative",
                  boxShadow: p.active
                    ? "0 4px 8px rgba(0,0,0,0.25)"
                    : "0 2px 4px rgba(0,0,0,0.2)",
                  transition: "all 0.2s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "38%",
                    transform: "translate(-50%, -50%)",
                    width: p.active ? 12 : 8,
                    height: p.active ? 12 : 8,
                    background: "#F2EBDA",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          ))}

          {/* "You are here" marker */}
          <div
            style={{
              position: "absolute",
              left: "40%",
              top: "48%",
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#1E5BBF",
              border: "3px solid #F2EBDA",
              boxShadow: "0 0 0 4px rgba(30, 91, 191, 0.25)",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Zoom controls */}
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "#F2EBDA",
              borderRadius: 8,
              border: "1px solid rgba(26,20,16,0.2)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid rgba(26,20,16,0.15)",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              +
            </div>
            <div
              style={{
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              −
            </div>
          </div>

          {/* Filter chip */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "#1A1410",
              color: "#F2EBDA",
              fontSize: 10,
              padding: "5px 10px",
              borderRadius: 999,
              fontFamily: "var(--font-work-sans), sans-serif",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: ACCENT,
              }}
            />{" "}
            This week · 6 events
          </div>
        </div>

        {/* Poster carousel */}
        <div
          style={{
            background: "#F2EBDA",
            borderTop: "1px solid rgba(26,20,16,0.15)",
            padding: "10px 0 6px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: "0 14px",
              overflow: "hidden",
            }}
          >
            {posters.map((p, i) => {
              const isActive = i === activePoster;
              return (
                <div
                  key={i}
                  onClick={() => setActivePoster(i)}
                  style={{
                    flex: isActive ? "0 0 170px" : "0 0 130px",
                    background: "#F2EBDA",
                    border: `1.5px solid ${isActive ? ACCENT : "rgba(26,20,16,0.2)"}`,
                    borderRadius: 10,
                    overflow: "hidden",
                    transition: "all 0.25s",
                    cursor: "pointer",
                    boxShadow: isActive
                      ? "0 6px 14px -4px rgba(26,20,16,0.2)"
                      : "none",
                    transform: isActive ? "translateY(-2px)" : "none",
                  }}
                >
                  <div
                    style={{
                      height: isActive ? 70 : 56,
                      background: p.bg,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 6,
                        left: 6,
                        background: "#1A1410",
                        color: "#F2EBDA",
                        fontSize: 8,
                        padding: "2px 6px",
                        borderRadius: 999,
                        fontFamily: "var(--font-work-sans), sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                      }}
                    >
                      EVENT
                    </div>
                  </div>
                  <div style={{ padding: "7px 9px 9px" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-dm-serif), serif",
                        fontSize: isActive ? 13 : 11,
                        lineHeight: 1.1,
                        color: "#1A1410",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        color: "#1A1410",
                        opacity: 0.7,
                        marginTop: 3,
                        fontFamily: "var(--font-work-sans), sans-serif",
                      }}
                    >
                      {p.when}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        color: ACCENT,
                        marginTop: 2,
                        fontFamily: "var(--font-work-sans), sans-serif",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <Stamp icon="pin" size={8} tint={ACCENT} /> {p.nb}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(26,20,16,0.15)",
            padding: "8px 0 16px",
            background: "#F2EBDA",
          }}
        >
          {[
            { k: "feed", icon: "earth", active: false },
            { k: "map", icon: "pin", active: true },
            { k: "post", icon: "plus", active: false },
            { k: "chat", icon: "chat", active: false },
            { k: "me", icon: "profile", active: false },
          ].map((t) => (
            <div
              key={t.k}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Stamp icon={t.icon} size={22} tint={t.active ? ACCENT : "ink"} />
            </div>
          ))}
        </div>
        <div
          style={{
            width: 100,
            height: 4,
            background: "#1A1410",
            margin: "0 auto 6px",
            borderRadius: 2,
            opacity: 0.8,
          }}
        />
      </div>
    </div>
  );
}
