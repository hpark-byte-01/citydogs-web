import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import Classifieds from "@/components/Classifieds";
import EventSubmit from "@/components/EventSubmit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1320px]">
      <Masthead />
      <Hero />
      <Classifieds />
      <EventSubmit />
      <Footer />
    </div>
  );
}
