import { restaurant } from "@/data";

export default function AdminSettings() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Restaurant Settings</h1>

      <div className="max-w-xl space-y-6">
        <div className="space-y-4 p-5 bg-surface rounded-xl border border-border">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            General Information
          </h2>

          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Restaurant Name
            </label>
            <input
              type="text"
              defaultValue={restaurant.name}
              disabled
              className="w-full px-3.5 py-2.5 bg-surface-alt border border-border rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Description
            </label>
            <textarea
              defaultValue={restaurant.description}
              disabled
              rows={3}
              className="w-full px-3.5 py-2.5 bg-surface-alt border border-border rounded-xl text-sm resize-none disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Address
            </label>
            <input
              type="text"
              defaultValue={restaurant.address}
              disabled
              className="w-full px-3.5 py-2.5 bg-surface-alt border border-border rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <div className="space-y-4 p-5 bg-surface rounded-xl border border-border">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Contact
          </h2>

          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue={restaurant.phone}
              disabled
              className="w-full px-3.5 py-2.5 bg-surface-alt border border-border rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              WhatsApp Number
            </label>
            <input
              type="tel"
              defaultValue={restaurant.whatsappNumber}
              disabled
              className="w-full px-3.5 py-2.5 bg-surface-alt border border-border rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Opening Hours
            </label>
            <input
              type="text"
              defaultValue={restaurant.openingHours}
              disabled
              className="w-full px-3.5 py-2.5 bg-surface-alt border border-border rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <div className="space-y-4 p-5 bg-surface rounded-xl border border-border">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Menu URL & QR
          </h2>

          <div>
            <label className="block text-xs font-medium text-muted mb-1.5">
              Menu URL
            </label>
            <input
              type="url"
              defaultValue={restaurant.menuUrl}
              disabled
              className="w-full px-3.5 py-2.5 bg-surface-alt border border-border rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <div className="p-4 bg-surface-alt rounded-xl border border-border text-center">
          <p className="text-xs text-muted">
            Settings are read-only. Connect Supabase to enable editing.
          </p>
        </div>
      </div>
    </div>
  );
}
