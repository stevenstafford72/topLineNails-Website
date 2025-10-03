"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const enter = mounted
    ? "opacity-100 translate-x-0"
    : "opacity-0 -translate-x-10"; // 👈 slide in from left

  return (
    <section
      role="region"
      aria-label="Top of the Line Nails — Hero"
      className="relative isolate"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_160px_80px_rgba(0,0,0,0.45)]" />
      </div>

      {/* Content wrapper */}
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[100svh] pt-24 md:pt-28 grid place-items-center">
          {/* Centered content */}
          <div
            className={[
              "text-center transition-all duration-700 ease-out will-change-transform",
              enter,
            ].join(" ")}
            style={{ transitionDelay: "150ms" }}
          >
            <h1 className="font-serif tracking-tight text-white drop-shadow-sm text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Elegance at your fingertips
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              Friendly techs, a pristine studio, and designs that last. Treat your nails to a little luxury.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <Link
                href="#book"
                className="group inline-flex items-center justify-center rounded-md
                           bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400
                           px-6 py-3 font-semibold text-black shadow-lg
                           transition-all hover:scale-[1.03] active:scale-95
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                aria-label="Book Your Appointment"
              >
                <CalendarDays className="h-5 w-5 mr-2" />
                Book Now
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md
                           border border-white/20 bg-white/10 backdrop-blur-md
                           px-6 py-3 font-medium text-white
                           transition-all hover:bg-white/20 hover:border-white/40
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                aria-label="Explore Our Services"
              >
                View Our Services
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
}
