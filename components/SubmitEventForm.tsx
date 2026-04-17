"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export default function SubmitEventForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFree, setIsFree] = useState(true);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const businessName = fd.get("business_name") as string;
    const contactEmail = fd.get("contact_email") as string;
    const eventTitle = fd.get("event_title") as string;
    const eventDescription = (fd.get("event_description") as string) || null;
    const eventDate = (fd.get("event_date") as string) || null;
    const venueAddress = (fd.get("venue_address") as string) || null;
    const websiteUrl = (fd.get("website_url") as string) || null;
    const priceStr = (fd.get("price") as string) || null;
    const price = isFree ? 0 : priceStr ? parseFloat(priceStr) : null;

    // Photo uploads (up to 10)
    const photoUrls: string[] = [];
    const photoFiles = fd.getAll("photos") as File[];
    for (const file of photoFiles) {
      if (!file || file.size === 0) continue;
      const ext = file.name.split(".").pop();
      const path = `event-submissions/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from("dog-event-photos-submitted")
        .upload(path, file);

      if (uploadError) {
        setError("Photo upload failed. Please try again.");
        setLoading(false);
        return;
      }

      const { data: urlData } = supabase.storage
        .from("dog-event-photos-submitted")
        .getPublicUrl(path);
      photoUrls.push(urlData.publicUrl);
    }

    const { error: insertError } = await supabase
      .from("event_submissions")
      .insert({
        business_name: businessName,
        contact_email: contactEmail,
        event_title: eventTitle,
        event_description: eventDescription,
        event_date: eventDate ? new Date(eventDate).toISOString() : null,
        venue_address: venueAddress,
        website_url: websiteUrl,
        price,
        photo_urls: photoUrls.length > 0 ? photoUrls : null,
      });

    if (insertError) {
      setError("Something went wrong. Please try again.");
      console.error(insertError);
    } else {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-10 text-center shadow-sm">
        <span className="text-5xl">🎉</span>
        <h2 className="mt-4 text-2xl font-bold text-navy">Event Submitted!</h2>
        <p className="mt-2 text-navy/60">
          Thanks for submitting your event. We&apos;ll review it and get back to
          you soon.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 rounded-2xl bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy/90"
        >
          Submit Another Event
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-5 rounded-2xl bg-white p-8 shadow-sm"
    >
      {error && (
        <p className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <Field label="Business Name" name="business_name" required />
      <Field label="Contact Email" name="contact_email" type="email" required />
      <Field label="Event Title" name="event_title" required />

      <div>
        <label className="mb-1 block text-sm font-semibold text-navy">
          Event Description
        </label>
        <textarea
          name="event_description"
          rows={3}
          className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm outline-none transition focus:border-navy/40 focus:ring-1 focus:ring-navy/20"
        />
      </div>

      <Field label="Event Date & Time" name="event_date" type="datetime-local" />
      <Field label="Venue Address" name="venue_address" />
      <Field label="Event Website URL" name="website_url" type="url" placeholder="https://" />

      <div>
        <label className="mb-1 block text-sm font-semibold text-navy">
          Price
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-navy/70">
            <input
              type="radio"
              checked={isFree}
              onChange={() => setIsFree(true)}
              className="accent-navy"
            />
            Free
          </label>
          <label className="flex items-center gap-2 text-sm text-navy/70">
            <input
              type="radio"
              checked={!isFree}
              onChange={() => setIsFree(false)}
              className="accent-navy"
            />
            Ticketed
          </label>
        </div>
        {!isFree && (
          <input
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            className="mt-2 w-full rounded-xl border border-navy/15 px-4 py-3 text-sm outline-none transition focus:border-navy/40 focus:ring-1 focus:ring-navy/20"
          />
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-navy">
          Photos (optional, up to 10)
        </label>
        <input
          name="photos"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 10) {
              setError("You can upload up to 10 photos.");
              e.target.value = "";
            } else {
              setError(null);
            }
          }}
          className="w-full text-sm text-navy/60 file:mr-3 file:rounded-lg file:border-0 file:bg-navy/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-navy hover:file:bg-navy/20"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-navy px-6 py-4 text-base font-bold text-white shadow-md transition hover:bg-navy/90 active:scale-[0.98] disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Event"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm outline-none transition focus:border-navy/40 focus:ring-1 focus:ring-navy/20"
      />
    </div>
  );
}
