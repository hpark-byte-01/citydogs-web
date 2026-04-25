const ICON: Record<string, string> = {
  profile: "/icons/profile.png",
  plus: "/icons/plus.png",
  earth: "/icons/earth.png",
  chat: "/icons/chat.png",
  pin: "/icons/pin.png",
};

const TINT_FILTERS: Record<string, string> = {
  ink: "brightness(0) saturate(100%)",
  cream:
    "brightness(0) saturate(100%) invert(93%) sepia(13%) saturate(370%) hue-rotate(1deg) brightness(98%) contrast(90%)",
  "#5A6B53":
    "brightness(0) saturate(100%) invert(38%) sepia(13%) saturate(900%) hue-rotate(70deg) brightness(95%) contrast(85%)",
  "#B54A2C":
    "brightness(0) saturate(100%) invert(30%) sepia(72%) saturate(1800%) hue-rotate(356deg) brightness(92%) contrast(92%)",
  "#D9A300":
    "brightness(0) saturate(100%) invert(60%) sepia(95%) saturate(1500%) hue-rotate(15deg) brightness(95%) contrast(95%)",
  "#1E5BBF":
    "brightness(0) saturate(100%) invert(28%) sepia(60%) saturate(2200%) hue-rotate(202deg) brightness(95%) contrast(92%)",
  "#3C3633":
    "brightness(0) saturate(100%) invert(20%) sepia(8%) saturate(400%) hue-rotate(2deg) brightness(80%) contrast(80%)",
};

function colorFilter(c: string) {
  return TINT_FILTERS[c] || TINT_FILTERS.ink;
}

export default function Stamp({
  icon,
  size = 44,
  tint = "ink",
  rotate = 0,
  style = {},
}: {
  icon: string;
  size?: number;
  tint?: string;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  const filter = colorFilter(tint);
  return (
    <img
      src={ICON[icon]}
      alt=""
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        filter,
        transform: `rotate(${rotate}deg)`,
        display: "inline-block",
        ...style,
      }}
    />
  );
}
