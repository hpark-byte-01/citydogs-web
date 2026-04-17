export default function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/10 px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-navy">CityDogs</p>
          <p className="text-sm text-navy/50 font-display">
            when you want more dogs in your life
          </p>
        </div>

        <nav className="flex gap-6 text-sm font-semibold text-navy/60">
          <a href="/" className="hover:text-navy transition">
            Home
          </a>
          <a href="/submit-event" className="hover:text-navy transition">
            Submit Event
          </a>
        </nav>

        <p className="text-xs text-navy/40">
          &copy; {new Date().getFullYear()} CityDogs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
