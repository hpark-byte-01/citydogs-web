import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <UpcomingEvents />

      {/* Business CTA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-navy sm:text-3xl">
          Have a dog-friendly event?
        </h2>
        <p className="mt-3 text-navy/60">
          Businesses and organizers can submit events to be featured on CityDogs.
        </p>
        <a
          href="/submit-event"
          className="mt-6 inline-block rounded-2xl bg-accent px-8 py-4 text-base font-bold text-white shadow-md transition hover:bg-accent/90 active:scale-[0.98]"
        >
          Submit Your Event
        </a>
      </section>

      <Footer />
    </>
  );
}
