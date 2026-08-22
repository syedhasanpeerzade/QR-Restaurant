import { foodItems, categories } from "@/data";
import { formatPrice } from "@/lib/utils";

export default function AdminMenu() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Menu Items</h1>
        <button
          disabled
          className="text-sm font-medium bg-accent text-white px-4 py-2 rounded-xl opacity-50 cursor-not-allowed"
          aria-label="Add new item (coming soon)"
        >
          + Add Item
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-3 pr-4 font-semibold text-muted text-xs uppercase tracking-wider">
                Item
              </th>
              <th className="pb-3 pr-4 font-semibold text-muted text-xs uppercase tracking-wider hidden sm:table-cell">
                Category
              </th>
              <th className="pb-3 pr-4 font-semibold text-muted text-xs uppercase tracking-wider">
                Price
              </th>
              <th className="pb-3 pr-4 font-semibold text-muted text-xs uppercase tracking-wider">
                Type
              </th>
              <th className="pb-3 font-semibold text-muted text-xs uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {foodItems.map((item) => {
              const category = categories.find(
                (c) => c.id === item.categoryId
              );
              return (
                <tr key={item.id} className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-surface-alt shrink-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundColor: "var(--surface-alt)",
                        }}
                      />
                      <span className="font-medium truncate max-w-[180px]">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-muted hidden sm:table-cell">
                    {category?.name ?? "—"}
                  </td>
                  <td className="py-3 pr-4 font-medium">
                    {formatPrice(item.price)}
                  </td>
                  <td className="py-3 pr-4">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium ${
                        item.isVeg ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.isVeg ? "bg-green-600" : "bg-red-600"
                        }`}
                      />
                      {item.isVeg ? "Veg" : "Non-Veg"}
                    </span>
                  </td>
                  <td className="py-3">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        item.available
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {item.available ? "Available" : "Unavailable"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
