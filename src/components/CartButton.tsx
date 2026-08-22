"use client";

import { useCartStore } from "@/store/cart";
import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface CartButtonProps {
  onClick: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
  const totalItems = useCartStore((s) => s.totalItems());
  const subtotal = useCartStore((s) => s.subtotal());

  if (totalItems === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-3.5 rounded-2xl shadow-lg shadow-accent/25 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`View order: ${totalItems} items, total ${formatPrice(subtotal)}`}
    >
      <ShoppingBag size={20} />
      <span className="text-sm">{totalItems} {totalItems === 1 ? "item" : "items"}</span>
      <span className="w-px h-5 bg-white/30" aria-hidden="true" />
      <span className="text-sm font-bold">{formatPrice(subtotal)}</span>
    </button>
  );
}
