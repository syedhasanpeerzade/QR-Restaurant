import { create } from "zustand";
import { CartItem, FoodItem, OrderDetails } from "@/types";

interface CartState {
  items: CartItem[];
  orderDetails: OrderDetails;
  addItem: (food: FoodItem) => void;
  removeItem: (foodId: string) => void;
  updateQuantity: (foodId: string, quantity: number) => void;
  clearCart: () => void;
  setOrderDetails: (details: Partial<OrderDetails>) => void;
  totalItems: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  orderDetails: {
    name: "",
    tableNumber: "",
    notes: "",
  },

  addItem: (food: FoodItem) => {
    set((state) => {
      const existing = state.items.find((item) => item.foodId === food.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.foodId === food.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { foodId: food.id, quantity: 1, food }],
      };
    });
  },

  removeItem: (foodId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.foodId !== foodId),
    }));
  },

  updateQuantity: (foodId: string, quantity: number) => {
    if (quantity < 1) return;
    set((state) => ({
      items: state.items.map((item) =>
        item.foodId === foodId ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  setOrderDetails: (details: Partial<OrderDetails>) => {
    set((state) => ({
      orderDetails: { ...state.orderDetails, ...details },
    }));
  },

  totalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  subtotal: () => {
    return get().items.reduce(
      (total, item) => total + item.food.price * item.quantity,
      0
    );
  },
}));
