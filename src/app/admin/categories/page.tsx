import { categories } from "@/data";
import { foodItems } from "@/data";

export default function AdminCategories() {
  const displayCategories = categories.filter((c) => c.id !== "all");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Categories</h1>
        <button
          disabled
          className="text-sm font-medium bg-accent text-white px-4 py-2 rounded-xl opacity-50 cursor-not-allowed"
          aria-label="Add category (coming soon)"
        >
          + Add Category
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayCategories.map((cat) => {
          const count = foodItems.filter(
            (f) => f.categoryId === cat.id
          ).length;
          return (
            <div
              key={cat.id}
              className="p-4 bg-surface rounded-xl border border-border flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold">{cat.name}</h3>
                <p className="text-xs text-muted mt-0.5">
                  {count} {count === 1 ? "item" : "items"}
                </p>
              </div>
              <span className="text-xs text-muted bg-surface-alt px-2.5 py-1 rounded-lg">
                #{cat.sortOrder}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
