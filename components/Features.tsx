const features = [
  {
    title: "Bark Feed",
    description:
      "Share photos and updates about your pup. Like, comment, and connect with fellow dog parents nearby.",
    icon: "🐾",
  },
  {
    title: "Dog Events",
    description:
      "Find dog-friendly events happening in your city — from yappy hours to adoption days and everything in between.",
    icon: "📅",
  },
  {
    title: "Dog Walks",
    description:
      "Discover popular walking routes and join group walks with other dog owners in your neighborhood.",
    icon: "🦮",
  },
  {
    title: "Community",
    description:
      "Build real friendships through your dogs. Chat, share tips, and make your city a little more dog-friendly.",
    icon: "💛",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-navy">
        What makes CityDogs special
      </h2>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="text-3xl">{f.icon}</span>
            <h3 className="mt-3 text-lg font-bold text-navy">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/60">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
