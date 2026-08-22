"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { categories, foodItems } from "@/data";
import { restaurant } from "@/data";
import { FoodItem, DietFilter } from "@/types";
import { useCartStore } from "@/store/cart";

import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import DietFilterComponent from "@/components/DietFilter";
import FoodCard from "@/components/FoodCard";
import FoodDetailModal from "@/components/FoodDetailModal";
import CartButton from "@/components/CartButton";
import CartDrawer from "@/components/CartDrawer";
import { ArrowLeft } from "lucide-react";

export default function MenuContent() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [dietFilter, setDietFilter] = useState<DietFilter>("all");
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const addItem = useCartStore((s) => s.addItem);

  const filteredItems = useMemo(() => {
    let items = foodItems;

    // Category filter
    if (activeCategory !== "all") {
      items = items.filter((item) => item.categoryId === activeCategory);
    }

    // Diet filter
    if (dietFilter === "veg") {
      items = items.filter((item) => item.isVeg);
    } else if (dietFilter === "nonveg") {
      items = items.filter((item) => !item.isVeg);
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    return items;
  }, [search, activeCategory, dietFilter]);

  const handleSelect = useCallback((food: FoodItem) => {
    setSelectedFood(food);
  }, []);

  const handleAdd = useCallback(
    (food: FoodItem) => {
      addItem(food);
    },
    [addItem]
  );

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Top Row */}
          <div className="flex items-center gap-3 py-3">
            <Link
              href="/"
              className="shrink-0 p-2 -ml-2 rounded-xl hover:bg-surface-alt transition-colors"
              aria-label="Back to home"
            >
              <ArrowLeft size={20} />
            </Link>
            <div className="min-w-0 flex-1">
              <h1 className="font-bold text-base sm:text-lg truncate">
                {restaurant.name}
              </h1>
              <p className="text-xs text-muted truncate">Menu</p>
            </div>
          </div>

          {/* Search */}
          <div className="pb-3">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between gap-3 pb-3">
            <div className="flex-1 min-w-0 overflow-hidden">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
            <DietFilterComponent active={dietFilter} onChange={setDietFilter} />
          </div>
        </div>
      </header>

      {/* Grid */}
      <section className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-6xl mx-auto w-full">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-muted text-sm">No dishes found</p>
            <p className="text-muted text-xs mt-1">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredItems.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                onSelect={handleSelect}
                onAdd={handleAdd}
              />
            ))}
          </div>
        )}

        {/* Bottom spacer for floating cart button */}
        <div className="h-20" />
      </section>

      {/* Food Detail Modal */}
      {selectedFood && (
        <FoodDetailModal
          food={selectedFood}
          onClose={() => setSelectedFood(null)}
        />
      )}

      {/* Cart Button */}
      <CartButton onClick={() => setCartOpen(true)} />

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </main>
  );
}
