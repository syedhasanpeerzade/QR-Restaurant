import { foodItems, categories } from "@/data";
import { UtensilsCrossed, Tag, TrendingUp, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const totalItems = foodItems.length;
  const totalCategories = categories.filter((c) => c.id !== "all").length;
  const availableItems = foodItems.filter((f) => f.available).length;
  const featuredItems = foodItems.filter((f) => f.featured).length;

  const stats = [
    {
      label: "Total Items",
      value: totalItems,
      icon: UtensilsCrossed,
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
    },
    {
      label: "Categories",
      value: totalCategories,
      icon: Tag,
      color: "text-purple-600 bg-purple-100 dark:bg-purple-900/30",
    },
    {
      label: "Available",
      value: availableItems,
      icon: CheckCircle,
      color: "text-green-600 bg-green-100 dark:bg-green-900/30",
    },
    {
      label: "Featured",
      value: featuredItems,
      icon: TrendingUp,
      color: "text-amber-600 bg-amber-100 dark:bg-amber-900/30",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-4 bg-surface rounded-xl border border-border"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}>
                <Icon size={20} />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted mt-0.5">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-surface-alt rounded-xl border border-border text-center">
        <p className="text-muted text-sm mb-2">
          Admin panel is ready for Supabase integration.
        </p>
        <p className="text-xs text-muted">
          Connect a database to manage menu items, categories, and restaurant
          settings.
        </p>
      </div>
    </div>
  );
}
