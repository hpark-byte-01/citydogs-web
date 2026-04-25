import Footer from "@/components/Footer";
import SubmitEventForm from "@/components/SubmitEventForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit an Event — CityDogs",
  description:
    "Businesses and organizers can submit dog-friendly events to be featured on CityDogs.",
};

export default function SubmitEventPage() {
  return (
    <>
      <header className="flex flex-col items-center px-6 pt-12 pb-8 text-center">
        <h1 className="text-3xl font-extrabold text-navy">
          Submit Your Event
        </h1>
        <p className="mt-2 max-w-md text-navy/60">
          Tell us about your dog-friendly event and we&apos;ll feature it on
          CityDogs for local dog lovers to discover.
        </p>
      </header>

      <main className="flex-1 px-6 pb-16">
        <SubmitEventForm />
      </main>

      <Footer />
    </>
  );
}
