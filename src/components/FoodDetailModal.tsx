"use client";

import { FoodItem } from "@/types";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import VegIndicator from "./VegIndicator";
import { X, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface FoodDetailModalProps {
  food: FoodItem | null;
  onClose: () => void;
}

export default function FoodDetailModal({ food, onClose }: FoodDetailModalProps) {
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);

  if (!food) return null;

  const cartItem = items.find((i) => i.foodId === food.id);
  const quantity = cartItem?.quantity ?? 0;

  const handleAdd = () => {
    addItem(food);
  };

  return (
    <AnimatePresence>
      {food && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto bg-surface rounded-t-3xl sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-lg sm:w-full sm:rounded-2xl sm:max-h-[85vh]"
            role="dialog"
            aria-modal="true"
            aria-label={`Details for ${food.name}`}
          >
            {/* Image */}
            <div className="relative aspect-[16/10] bg-surface-alt">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${food.image})`,
                  backgroundColor: "var(--surface-alt)",
                }}
                role="img"
                aria-label={food.name}
              />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
              {!food.available && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white font-bold text-lg uppercase tracking-wide">
                    Currently Unavailable
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-3">
                <VegIndicator isVeg={food.isVeg} />
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                    {food.name}
                  </h2>
                  {food.tags && food.tags.length > 0 && (
                    <div className="flex gap-1.5 mt-1.5 flex-wrap">
                      {food.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-4">
                {food.description}
              </p>

              {/* Ingredients */}
              {food.ingredients.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {food.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-xs bg-surface-alt text-foreground px-2.5 py-1 rounded-lg border border-border"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Price & Add */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-2xl font-bold">
                  {formatPrice(food.price)}
                </span>

                {food.available && (
                  <div className="flex items-center gap-3">
                    {quantity > 0 && (
                      <span className="text-sm text-muted">
                        {quantity} in order
                      </span>
                    )}
                    <button
                      onClick={handleAdd}
                      className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
                    >
                      <Plus size={16} strokeWidth={2.5} />
                      Add to Order
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
