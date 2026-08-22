import Link from "next/link";
import { restaurant } from "@/data";
import {
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  UtensilsCrossed,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${restaurant.heroImage})`,
            backgroundColor: "#2a2520",
          }}
          role="img"
          aria-label={`${restaurant.name} restaurant`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <div className="relative z-10 w-full px-5 pb-10 pt-20 sm:px-8 lg:px-16 max-w-5xl">
          {/* Status Badge */}
          <div className="mb-4">
            {restaurant.isOpen ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-green-400 bg-green-400/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open Now
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-400/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Closed
              </span>
            )}
          </div>

          <p className="text-white/60 text-sm sm:text-base font-medium tracking-wide uppercase mb-2">
            {restaurant.tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-[1.1]">
            {restaurant.name}
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            {restaurant.description}
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
          >
            <UtensilsCrossed size={18} />
            View Menu
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="px-5 sm:px-8 lg:px-16 py-12 max-w-5xl mx-auto">
        <h2 className="text-lg font-bold mb-6">Visit Us</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Location */}
          <div className="flex gap-3 p-4 bg-surface rounded-xl border border-border">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                Location
              </h3>
              <p className="text-sm leading-relaxed">{restaurant.address}</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-3 p-4 bg-surface rounded-xl border border-border">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Clock size={20} />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                Hours
              </h3>
              <p className="text-sm leading-relaxed">
                {restaurant.openingHours}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-3 p-4 bg-surface rounded-xl border border-border">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                Contact
              </h3>
              <a
                href={`tel:${restaurant.phone}`}
                className="text-sm leading-relaxed hover:text-accent transition-colors"
              >
                {restaurant.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 sm:px-8 lg:px-16 py-8 border-t border-border text-center">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} {restaurant.name}. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
