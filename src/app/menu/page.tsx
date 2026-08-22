import type { Metadata } from "next";
import MenuContent from "./MenuContent";

export const metadata: Metadata = {
  title: "Menu — Saffron Kitchen",
  description:
    "Browse our full menu of starters, biryanis, main course, breads, pizzas, burgers, desserts and beverages. Order via WhatsApp.",
};

export default function MenuPage() {
  return <MenuContent />;
}
