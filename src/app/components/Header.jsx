"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // 👈 for enter animations

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    setMounted(true); // trigger enter animation after mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerHeight = scrolled ? "h-16" : "h-24";
  const logoWidthDesktop = scrolled ? "w-40 xl:w-48" : "w-64 xl:w-72";
  const logoWidthMobile = scrolled ? "w-28" : "w-36";

  // Shared enter animation classes for the logo
  const logoEnter = mounted
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 -translate-y-2 scale-95";

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300
        ${scrolled ? "bg-black/50 shadow-md border-b border-neutral-800" : "bg-transparent"}
      `}
    >
      {/* Full-bleed background; inner content gets a wider max width */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          {/* Desktop Row */}
          <div
            className={`hidden md:grid ${headerHeight} grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-10 transition-all`}
          >
            {/* Left: Desktop Nav */}
            <nav className="flex items-center gap-6 lg:gap-8" aria-label="Primary Navigation">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/90 hover:text-amber-300 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Center: Logo (desktop) */}
            <div className="flex justify-center">
              <Link href="/" aria-label="Top of the Line Nails — Home">
                <Image
                  src="/Logo.png"
                  alt="Top of the Line Nails logo"
                  priority
                  width={288}
                  height={96}
                  sizes="(max-width: 1280px) 256px, 288px"
                  className={[
                    "h-auto transition-all duration-500 ease-out will-change-transform",
                    logoWidthDesktop,
                    logoEnter, // 👈 pop-in on load
                  ].join(" ")}
                  style={{ transitionDelay: "120ms" }} // tiny stagger feels smoother
                />
              </Link>
            </div>

            {/* Right: Desktop CTAs */}
            <div className="flex justify-end items-center gap-3 lg:gap-4">
              <a
                href="tel:16156028657"
                className="inline-flex items-center gap-2 rounded-md border border-amber-300/40 bg-radial-[at_50%_75%] font-semibold from-amber-200 via-amber-300 to-amber-400 to-90% px-4 py-2 hover:border-2 hover:border-white text-black hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 active:scale-90"
              >
                <PhoneCall className="w-4 h-4" />
                <span className="whitespace-nowrap">Call Now</span>
              </a>
              <Link
                href="#book"
                className="rounded-md bg-radial-[at_50%_75%] from-amber-200 via-amber-300 to-amber-400 to-90% px-4 py-2 font-semibold text-black shadow-lg hover:bg-amber-400 hover:border-2 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black active:scale-90"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Row (logo centered; phone left; menu right) */}
          <div className="md:hidden relative flex items-center justify-center py-3">
            {/* Phone Button (float + pulse) */}
            <a
              href="tel:16156028657"
              className={[
                "absolute left-4 z-10",
                "inline-flex h-11 w-11 items-center justify-center rounded-full",
                "bg-white/8 backdrop-blur-md border border-white/10",
                "text-amber-300",
                "transition-all duration-200 hover:bg-white/12 active:scale-95",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70",
                "phone-float phone-pulse", // 👈 animations
              ].join(" ")}
              aria-label="Call Top of the Line Nails"
            >
              <PhoneCall className="w-6 h-6" />
              <span className="sr-only">Call</span>
            </a>

            {/* Centered Logo (mobile) */}
            <Link href="/" aria-label="Top of the Line Nails — Home">
              <Image
                src="/Logo.png"
                alt="Top of the Line Nails logo"
                priority
                width={180}
                height={64}
                sizes="160px"
                className={[
                  "h-auto transition-all duration-500 ease-out will-change-transform",
                  logoWidthMobile,
                  logoEnter, // 👈 pop-in on load
                ].join(" ")}
                style={{ transitionDelay: "80ms" }}
              />
            </Link>

            {/* Menu on right */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="absolute right-4 text-white hover:text-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded-md p-1"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 space-y-2" aria-label="Mobile Navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-300 transition-colors py-2"
            >
              {label}
            </Link>
          ))}

          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <a
              href="tel:16156028657"
              className="block text-center bg-radial-[at_50%_75%] from-gray-600 via-gray-700 to-gray-900 text-white hover:bg-neutral-800 py-2.5 rounded-md transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Call (615) 602-8657
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=3041+Dickerson+Pike+STE+8,+Nashville,+TN+37207"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-radial-[at_50%_75%] from-gray-200 via-gray-300 to-gray-400 to-90% text-black font-bold py-2.5 rounded-md transition-all"
            >
              Directions
            </a>

            <Link
              href="#book"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-radial-[at_50%_75%] from-amber-200 via-amber-300 to-amber-400 to-90% text-black font-bold py-2.5 rounded-md transition-all"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>

      {/* minimal CSS for float + pulse; respects reduced motion */}
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          .phone-float {
            animation: tln-float 3.2s ease-in-out infinite;
          }
          @keyframes tln-float {
            0% { transform: translateY(0) }
            50% { transform: translateY(-2px) }
            100% { transform: translateY(0) }
          }

          .phone-pulse::after {
            content: "";
            position: absolute;
            inset: -4px;
            border-radius: 9999px;
            box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.28); /* amber-300 */
            animation: tln-pulse 2.6s ease-out infinite;
          }
          @keyframes tln-pulse {
            0%   { box-shadow: 0 0 0 0 rgba(251,191,36,0.28) }
            70%  { box-shadow: 0 0 0 14px rgba(251,191,36,0) }
            100% { box-shadow: 0 0 0 0 rgba(251,191,36,0) }
          }
        }
      `}</style>
    </header>
  );
}
