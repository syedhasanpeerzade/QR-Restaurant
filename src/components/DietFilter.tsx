"use client";

import { DietFilter } from "@/types";
import { cn } from "@/lib/utils";

interface DietFilterProps {
  active: DietFilter;
  onChange: (filter: DietFilter) => void;
}

const filters: { value: DietFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "veg", label: "Veg" },
  { value: "nonveg", label: "Non-Veg" },
];

export default function DietFilterComponent({
  active,
  onChange,
}: DietFilterProps) {
  return (
    <div className="flex gap-1.5 bg-surface-alt rounded-xl p-1" role="radiogroup" aria-label="Dietary preference filter">
      {filters.map((filter) => {
        const isActive = active === filter.value;
        return (
          <button
            key={filter.value}
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(filter.value)}
            className={cn(
              "px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
              "focus:outline-none focus:ring-2 focus:ring-accent",
              isActive
                ? "bg-surface text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            )}
          >
            {filter.value === "veg" && (
              <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-1.5" />
            )}
            {filter.value === "nonveg" && (
              <span className="inline-block w-2 h-2 rounded-full bg-red-600 mr-1.5" />
            )}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
