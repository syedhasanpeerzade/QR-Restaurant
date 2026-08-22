"use client";

import { FoodItem } from "@/types";
import VegIndicator from "./VegIndicator";
import { formatPrice } from "@/lib/utils";
import { Plus } from "lucide-react";

interface FoodCardProps {
  food: FoodItem;
  onSelect: (food: FoodItem) => void;
  onAdd: (food: FoodItem) => void;
}

export default function FoodCard({ food, onSelect, onAdd }: FoodCardProps) {
  return (
    <article
      className="group bg-surface rounded-2xl border border-border overflow-hidden transition-shadow hover:shadow-md cursor-pointer"
      onClick={() => onSelect(food)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${food.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(food);
        }
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
        {food.image ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${food.image})`,
              backgroundColor: "var(--surface-alt)",
            }}
            role="img"
            aria-label={food.name}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
            No image
          </div>
        )}
        {!food.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold text-sm tracking-wide uppercase">
              Unavailable
            </span>
          </div>
        )}
        {food.tags && food.tags.length > 0 && food.available && (
          <div className="absolute top-2 left-2 flex gap-1.5 flex-wrap">
            {food.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-wider bg-accent text-white px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2 min-w-0">
            <VegIndicator isVeg={food.isVeg} size="sm" />
            <h3 className="font-semibold text-sm sm:text-base leading-tight truncate">
              {food.name}
            </h3>
          </div>
        </div>
        <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
          {food.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-base sm:text-lg">
            {formatPrice(food.price)}
          </span>
          {food.available && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAdd(food);
              }}
              className="flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              aria-label={`Add ${food.name} to order`}
            >
              <Plus size={14} strokeWidth={2.5} />
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
