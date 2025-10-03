"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Globe,
  Star,
} from "lucide-react";

const ADDRESS_TEXT = "3041 Dickerson Pike STE 8, Nashville, TN 37207";
const PHONE_DISPLAY = "(615) 602-8657";
const PHONE_TEL = "tel:16156028657";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=3041+Dickerson+Pike+STE+8,+Nashville,+TN+37207";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-neutral-200 relative border-t border-white/10">
      {/* subtle top glow line */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
   
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">About Us</h3>
            <p className="text-sm leading-relaxed text-neutral-300">
              Top of the Line Nails in Nashville, TN offers meticulous manicures,
              relaxing pedicures, and detailed nail art—delivered with care. We
              accept credit cards and provide a comfortable, clean space inside
              the Grand Central Shopping Center.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-amber-300 shrink-0" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  {ADDRESS_TEXT}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-300" />
                <a
                  href={PHONE_TEL}
                  className="hover:text-amber-300 transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-300" />
                <a
                  href="mailto:info@topofthelinenails.com"
                  className="hover:text-amber-300 transition-colors"
                >
                  info@topofthelinenails.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Business Hours</h3>
            <ul className="text-sm space-y-1.5">
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-300" />
                <span>Mon – Thu: 10:30 AM – 6:30 PM</span>
              </li>
              <li className="pl-7">Fri: 10:30 AM – 6:30 PM</li>
              <li className="pl-7">Sat: 10:30 AM – 6:30 PM</li>
              <li className="pl-7">Sun: Closed</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
            <p className="text-sm text-neutral-300 mb-3">
              Tap below and come say hi on socials.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:text-[#1877F2]"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:text-[#E1306C]"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:text-[#34A853]"
                title="Google"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="https://yelp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:text-[#D32323]"
                title="Yelp"
              >
                <Star className="w-5 h-5" />
              </a>
              
            </div>
            <div className="flex flex-wrap items-center gap-3p py-2">
           
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-radial-[at_50%_75%] from-amber-200 via-amber-300 to-amber-400 to-90% px-4 py-2 font-semibold text-black shadow-lg hover:bg-amber-400 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-black active:scale-95"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-400">
            © {year} <span className="text-neutral-200">Top of the Line Nails</span>. All rights reserved. Developed by Steve
          </p>
          <div className="text-xs text-neutral-400">
            Nashville, Tennessee • Located in Grand Central Shopping Center
          </div>
        </div>
      </div>
    </footer>
  );
}
