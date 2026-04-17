import { supabase } from "@/lib/supabase";

interface DogEvent {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  location_name: string | null;
  location_address: string | null;
}

async function getUpcomingEvents(): Promise<DogEvent[]> {
  try {
    const { data, error } = await supabase
      .from("dog_events")
      .select("id, title, description, event_date, location_name, location_address")
      .gte("event_date", new Date().toISOString())
      .order("event_date", { ascending: true })
      .limit(4);

    if (error) {
      console.error("Error fetching events:", error);
      return [];
    }
    return data ?? [];
  } catch {
    return [];
  }
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return "TBD";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function UpcomingEvents() {
  const events = await getUpcomingEvents();

  if (events.length === 0) {
    return (
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-navy">Upcoming Events</h2>
        <p className="mt-4 text-navy/60">
          No upcoming events right now — check back soon or{" "}
          <a href="/submit-event" className="font-semibold text-accent underline">
            submit your own
          </a>
          !
        </p>
      </section>
    );
  }

  return (
    <section className="px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-navy">
        Upcoming Events
      </h2>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              {formatDate(evt.event_date)}
            </p>
            <h3 className="mt-2 text-lg font-bold text-navy">{evt.title}</h3>
            {evt.location_name && (
              <p className="mt-1 text-sm text-navy/50">{evt.location_name}</p>
            )}
            {evt.description && (
              <p className="mt-2 text-sm leading-relaxed text-navy/60 line-clamp-3">
                {evt.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
