"use client";

interface VegIndicatorProps {
  isVeg: boolean;
  size?: "sm" | "md";
}

export default function VegIndicator({ isVeg, size = "md" }: VegIndicatorProps) {
  const sizeClasses = size === "sm" ? "w-4 h-4" : "w-[18px] h-[18px]";
  const dotSize = size === "sm" ? "w-[6px] h-[6px]" : "w-2 h-2";

  return (
    <div
      className={`${sizeClasses} rounded-[3px] border-2 flex items-center justify-center shrink-0 ${
        isVeg ? "border-green-600" : "border-red-600"
      }`}
      role="img"
      aria-label={isVeg ? "Vegetarian" : "Non-Vegetarian"}
    >
      <div
        className={`${dotSize} rounded-full ${
          isVeg ? "bg-green-600" : "bg-red-600"
        }`}
      />
    </div>
  );
}
