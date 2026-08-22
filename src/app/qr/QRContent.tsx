"use client";

import Link from "next/link";
import { restaurant } from "@/data";
import QRGenerator from "@/components/QRGenerator";
import { ArrowLeft } from "lucide-react";

export default function QRContent() {
  return (
    <main className="flex-1 min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 py-4 border-b border-border max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 -ml-2 rounded-xl hover:bg-surface-alt transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-bold text-base sm:text-lg">QR Code</h1>
        </div>
      </header>

      {/* QR Content */}
      <section className="flex-1 flex flex-col items-center justify-center px-5 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          {restaurant.name}
        </h2>
        <p className="text-muted text-sm text-center mb-8 max-w-sm">
          Share this QR code with your customers so they can browse the menu from
          their phones.
        </p>
        <QRGenerator url={restaurant.menuUrl} size={220} />
        <p className="mt-6 text-xs text-muted text-center max-w-xs break-all">
          {restaurant.menuUrl}
        </p>
      </section>
    </main>
  );
}
