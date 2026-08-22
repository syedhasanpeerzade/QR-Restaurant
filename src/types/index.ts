export interface Restaurant {
  id: string;
  name: string;
  description: string;
  tagline: string;
  logo: string;
  heroImage: string;
  phone: string;
  whatsappNumber: string;
  address: string;
  openingHours: string;
  isOpen: boolean;
  menuUrl: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  sortOrder: number;
  icon?: string;
}

export interface FoodItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  ingredients: string[];
  available: boolean;
  featured: boolean;
  tags?: string[];
}

export interface CartItem {
  foodId: string;
  quantity: number;
  food: FoodItem;
}

export interface OrderDetails {
  name: string;
  tableNumber: string;
  notes: string;
}

export type DietFilter = "all" | "veg" | "nonveg";
