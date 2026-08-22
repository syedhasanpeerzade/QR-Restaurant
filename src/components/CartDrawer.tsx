"use client";

import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import VegIndicator from "./VegIndicator";
import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const items = useCartStore((s) => s.items);
  const orderDetails = useCartStore((s) => s.orderDetails);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);
  const setOrderDetails = useCartStore((s) => s.setOrderDetails);
  const subtotal = useCartStore((s) => s.subtotal());

  const [showConfirmClear, setShowConfirmClear] = useState(false);

  const handleWhatsApp = () => {
    if (items.length === 0) return;
    const url = generateWhatsAppUrl(items, orderDetails, subtotal);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-surface shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Your order"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border">
              <h2 className="text-lg font-bold">Your Order</h2>
              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={() => setShowConfirmClear(true)}
                    className="text-xs text-muted hover:text-red-500 font-medium transition-colors px-2 py-1"
                    aria-label="Clear all items"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-surface-alt transition-colors"
                  aria-label="Close order drawer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Confirm Clear Dialog */}
            {showConfirmClear && (
              <div className="px-4 py-3 bg-red-50 dark:bg-red-950/20 border-b border-border flex items-center justify-between gap-3">
                <span className="text-sm text-red-700 dark:text-red-400">Clear entire order?</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowConfirmClear(false)}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-surface border border-border"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      clearCart();
                      setShowConfirmClear(false);
                    }}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-red-600 text-white"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-muted mb-3">
                    <ShoppingBagIcon />
                  </div>
                  <p className="text-muted text-sm">Your order is empty</p>
                  <p className="text-muted text-xs mt-1">
                    Add items from the menu to get started
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.foodId}
                      className="flex gap-3 p-3 bg-surface-alt rounded-xl"
                    >
                      {/* Thumbnail */}
                      <div
                        className="w-16 h-16 rounded-lg bg-border shrink-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${item.food.image})`,
                          backgroundColor: "var(--border-color)",
                        }}
                        role="img"
                        aria-label={item.food.name}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <VegIndicator isVeg={item.food.isVeg} size="sm" />
                            <h4 className="font-semibold text-sm truncate">
                              {item.food.name}
                            </h4>
                          </div>
                          <button
                            onClick={() => removeItem(item.foodId)}
                            className="shrink-0 text-muted hover:text-red-500 p-1 transition-colors"
                            aria-label={`Remove ${item.food.name}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity controls */}
                          <div className="flex items-center gap-0 bg-surface rounded-lg border border-border overflow-hidden">
                            <button
                              onClick={() =>
                                updateQuantity(item.foodId, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              className="p-1.5 hover:bg-surface-alt disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                              aria-label={`Decrease quantity of ${item.food.name}`}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm font-semibold tabular-nums min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.foodId, item.quantity + 1)
                              }
                              className="p-1.5 hover:bg-surface-alt transition-colors"
                              aria-label={`Increase quantity of ${item.food.name}`}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="font-semibold text-sm">
                            {formatPrice(item.food.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Customer Details */}
              {items.length > 0 && (
                <div className="mt-6 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Your Details
                  </h3>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={orderDetails.name}
                    onChange={(e) => setOrderDetails({ name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    aria-label="Your name"
                  />
                  <input
                    type="text"
                    placeholder="Table number"
                    value={orderDetails.tableNumber}
                    onChange={(e) =>
                      setOrderDetails({ tableNumber: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    aria-label="Table number"
                  />
                  <textarea
                    placeholder="Any special instructions? (optional)"
                    value={orderDetails.notes}
                    onChange={(e) => setOrderDetails({ notes: e.target.value })}
                    rows={2}
                    className="w-full px-3.5 py-2.5 bg-surface border border-border rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    aria-label="Special instructions"
                  />
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-muted">Total</span>
                  <span className="text-xl font-bold">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-surface"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ShoppingBagIcon() {
  return (
    <svg
      width="48"
      height="48"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
}
