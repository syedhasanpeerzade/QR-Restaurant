import { Restaurant, Category, FoodItem } from "@/types";

export const restaurant: Restaurant = {
  id: "saffron-kitchen",
  name: "Saffron Kitchen",
  description:
    "Experience the art of authentic Indian cuisine, crafted with passion and the finest ingredients. From aromatic biryanis to sizzling tandoor specialties, every dish tells a story of tradition and taste.",
  tagline: "Authentic Flavors, Modern Experience",
  logo: "/logo.svg",
  heroImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  phone: "+917899454737",
  whatsappNumber: "917899454737",
  address: "42, MG Road, Bengaluru, Karnataka 560001",
  openingHours: "11:00 AM – 11:00 PM",
  isOpen: true,
  menuUrl: "https://example.com/menu",
};

export const categories: Category[] = [
  { id: "all", name: "All", slug: "all", sortOrder: 0 },
  { id: "starters", name: "Starters", slug: "starters", sortOrder: 1 },
  { id: "main-course", name: "Main Course", slug: "main-course", sortOrder: 2 },
  { id: "biryani", name: "Biryani", slug: "biryani", sortOrder: 3 },
  { id: "rice", name: "Rice", slug: "rice", sortOrder: 4 },
  { id: "breads", name: "Breads", slug: "breads", sortOrder: 5 },
  { id: "burgers", name: "Burgers", slug: "burgers", sortOrder: 6 },
  { id: "pizza", name: "Pizza", slug: "pizza", sortOrder: 7 },
  { id: "desserts", name: "Desserts", slug: "desserts", sortOrder: 8 },
  { id: "beverages", name: "Beverages", slug: "beverages", sortOrder: 9 },
];

export const foodItems: FoodItem[] = [
  // Starters
  {
    id: "paneer-tikka",
    categoryId: "starters",
    name: "Paneer Tikka",
    description:
      "Chunks of cottage cheese marinated in spiced yogurt and grilled to smoky perfection in the tandoor.",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=75",
    isVeg: true,
    ingredients: ["Paneer", "Yogurt", "Bell Peppers", "Onion", "Spices"],
    available: true,
    featured: true,
    tags: ["Bestseller", "Tandoor"],
  },
  {
    id: "chicken-65",
    categoryId: "starters",
    name: "Chicken 65",
    description:
      "Crispy deep-fried chicken bites tossed with curry leaves, green chillies, and a fiery spice blend.",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1610057099443-fde6c99db9e1?w=600&q=75",
    isVeg: false,
    ingredients: [
      "Chicken",
      "Curry Leaves",
      "Green Chillies",
      "Ginger-Garlic",
      "Spices",
    ],
    available: true,
    featured: true,
    tags: ["Spicy", "Popular"],
  },
  {
    id: "veg-spring-rolls",
    categoryId: "starters",
    name: "Veg Spring Rolls",
    description:
      "Crispy golden rolls stuffed with a medley of fresh vegetables and glass noodles, served with sweet chilli sauce.",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=75",
    isVeg: true,
    ingredients: ["Cabbage", "Carrots", "Glass Noodles", "Spring Roll Sheets"],
    available: true,
    featured: false,
    tags: ["Crispy"],
  },
  {
    id: "mutton-seekh-kebab",
    categoryId: "starters",
    name: "Mutton Seekh Kebab",
    description:
      "Succulent minced mutton kebabs infused with aromatic spices, grilled on skewers over charcoal.",
    price: 380,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=75",
    isVeg: false,
    ingredients: ["Minced Mutton", "Onion", "Coriander", "Mint", "Spices"],
    available: true,
    featured: true,
    tags: ["Chef's Special"],
  },

  // Main Course
  {
    id: "butter-chicken",
    categoryId: "main-course",
    name: "Butter Chicken",
    description:
      "Tender chicken pieces simmered in a rich, creamy tomato-based gravy with a hint of fenugreek.",
    price: 360,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=75",
    isVeg: false,
    ingredients: [
      "Chicken",
      "Tomato",
      "Cream",
      "Butter",
      "Kasuri Methi",
      "Spices",
    ],
    available: true,
    featured: true,
    tags: ["Bestseller", "Creamy"],
  },
  {
    id: "palak-paneer",
    categoryId: "main-course",
    name: "Palak Paneer",
    description:
      "Soft cubes of paneer floating in a vibrant, spiced spinach gravy. A wholesome vegetarian classic.",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=75",
    isVeg: true,
    ingredients: ["Paneer", "Spinach", "Onion", "Tomato", "Cream", "Spices"],
    available: true,
    featured: false,
    tags: ["Healthy"],
  },
  {
    id: "dal-makhani",
    categoryId: "main-course",
    name: "Dal Makhani",
    description:
      "Black lentils and kidney beans slow-cooked overnight with butter and cream for an incredibly rich flavour.",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=75",
    isVeg: true,
    ingredients: [
      "Black Urad Dal",
      "Rajma",
      "Butter",
      "Cream",
      "Tomato",
      "Spices",
    ],
    available: true,
    featured: true,
    tags: ["Slow Cooked"],
  },
  {
    id: "mutton-rogan-josh",
    categoryId: "main-course",
    name: "Mutton Rogan Josh",
    description:
      "A Kashmiri delicacy — tender mutton pieces braised in an aromatic gravy of Kashmiri chillies and whole spices.",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=75",
    isVeg: false,
    ingredients: [
      "Mutton",
      "Kashmiri Chillies",
      "Yogurt",
      "Fennel",
      "Whole Spices",
    ],
    available: true,
    featured: false,
    tags: ["Kashmiri"],
  },

  // Biryani
  {
    id: "chicken-biryani",
    categoryId: "biryani",
    name: "Chicken Biryani",
    description:
      "Fragrant basmati rice layered with spiced chicken, caramelised onions, and fresh herbs, slow-cooked to perfection.",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=75",
    isVeg: false,
    ingredients: [
      "Basmati Rice",
      "Chicken",
      "Onion",
      "Saffron",
      "Mint",
      "Whole Spices",
    ],
    available: true,
    featured: true,
    tags: ["Bestseller", "Dum Cooked"],
  },
  {
    id: "mutton-biryani",
    categoryId: "biryani",
    name: "Mutton Biryani",
    description:
      "Succulent mutton on the bone layered with aged basmati rice, sealed and dum-cooked for hours.",
    price: 400,
    image:
      "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=600&q=75",
    isVeg: false,
    ingredients: [
      "Basmati Rice",
      "Mutton",
      "Onion",
      "Saffron",
      "Kewra Water",
      "Spices",
    ],
    available: true,
    featured: true,
    tags: ["Premium"],
  },
  {
    id: "veg-biryani",
    categoryId: "biryani",
    name: "Veg Biryani",
    description:
      "A colourful medley of seasonal vegetables and paneer layered with aromatic basmati rice.",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1630851840633-f96999247032?w=600&q=75",
    isVeg: true,
    ingredients: [
      "Basmati Rice",
      "Mixed Vegetables",
      "Paneer",
      "Saffron",
      "Spices",
    ],
    available: true,
    featured: false,
    tags: ["Vegetarian"],
  },

  // Rice
  {
    id: "jeera-rice",
    categoryId: "rice",
    name: "Jeera Rice",
    description: "Fluffy basmati rice tempered with cumin seeds and ghee.",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=600&q=75",
    isVeg: true,
    ingredients: ["Basmati Rice", "Cumin Seeds", "Ghee"],
    available: true,
    featured: false,
  },
  {
    id: "steamed-rice",
    categoryId: "rice",
    name: "Steamed Rice",
    description: "Plain steamed long-grain basmati rice.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1536304993881-460e32f50569?w=600&q=75",
    isVeg: true,
    ingredients: ["Basmati Rice"],
    available: true,
    featured: false,
  },

  // Breads
  {
    id: "butter-naan",
    categoryId: "breads",
    name: "Butter Naan",
    description:
      "Soft and fluffy leavened bread baked in the tandoor and brushed with melted butter.",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=75",
    isVeg: true,
    ingredients: ["Refined Flour", "Yogurt", "Butter"],
    available: true,
    featured: false,
  },
  {
    id: "garlic-naan",
    categoryId: "breads",
    name: "Garlic Naan",
    description: "Tandoor-baked naan topped with minced garlic and coriander.",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=75",
    isVeg: true,
    ingredients: ["Refined Flour", "Garlic", "Coriander", "Butter"],
    available: true,
    featured: true,
    tags: ["Popular"],
  },
  {
    id: "tandoori-roti",
    categoryId: "breads",
    name: "Tandoori Roti",
    description: "Whole-wheat flatbread baked in the clay tandoor.",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=75",
    isVeg: true,
    ingredients: ["Whole Wheat Flour"],
    available: true,
    featured: false,
  },

  // Burgers
  {
    id: "classic-chicken-burger",
    categoryId: "burgers",
    name: "Classic Chicken Burger",
    description:
      "Juicy grilled chicken patty with lettuce, tomato, cheese, and our signature sauce in a brioche bun.",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=75",
    isVeg: false,
    ingredients: [
      "Chicken Patty",
      "Lettuce",
      "Tomato",
      "Cheese",
      "Brioche Bun",
    ],
    available: true,
    featured: false,
    tags: ["Grilled"],
  },
  {
    id: "paneer-burger",
    categoryId: "burgers",
    name: "Paneer Tikka Burger",
    description:
      "Tandoori-spiced paneer patty with mint chutney, pickled onions, and crunchy slaw.",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=75",
    isVeg: true,
    ingredients: [
      "Paneer Patty",
      "Mint Chutney",
      "Pickled Onion",
      "Slaw",
      "Bun",
    ],
    available: true,
    featured: false,
    tags: ["Fusion"],
  },

  // Pizza
  {
    id: "margherita-pizza",
    categoryId: "pizza",
    name: "Margherita Pizza",
    description:
      "Classic pizza with San Marzano tomato sauce, fresh mozzarella, and basil on a thin, crispy crust.",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=75",
    isVeg: true,
    ingredients: ["Pizza Dough", "Mozzarella", "Tomato Sauce", "Basil"],
    available: true,
    featured: false,
    tags: ["Classic"],
  },
  {
    id: "chicken-tikka-pizza",
    categoryId: "pizza",
    name: "Chicken Tikka Pizza",
    description:
      "Tandoori chicken tikka, red onions, green peppers, and mozzarella on a garlic-herb base.",
    price: 380,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=75",
    isVeg: false,
    ingredients: [
      "Pizza Dough",
      "Chicken Tikka",
      "Mozzarella",
      "Onion",
      "Bell Pepper",
    ],
    available: true,
    featured: true,
    tags: ["Fusion", "Popular"],
  },

  // Desserts
  {
    id: "gulab-jamun",
    categoryId: "desserts",
    name: "Gulab Jamun",
    description:
      "Soft, golden milk-solid dumplings soaked in a warm rose and cardamom-scented sugar syrup.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1666190076860-7d04d71d6d6f?w=600&q=75",
    isVeg: true,
    ingredients: ["Khoya", "Sugar", "Rose Water", "Cardamom"],
    available: true,
    featured: true,
    tags: ["Traditional"],
  },
  {
    id: "rasmalai",
    categoryId: "desserts",
    name: "Rasmalai",
    description:
      "Delicate paneer patties immersed in chilled, saffron-infused sweetened milk, garnished with pistachios.",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=75",
    isVeg: true,
    ingredients: ["Paneer", "Milk", "Saffron", "Cardamom", "Pistachio"],
    available: true,
    featured: false,
    tags: ["Chilled"],
  },
  {
    id: "chocolate-brownie",
    categoryId: "desserts",
    name: "Chocolate Brownie",
    description:
      "Warm, fudgy dark chocolate brownie served with a scoop of vanilla ice cream.",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=75",
    isVeg: true,
    ingredients: [
      "Dark Chocolate",
      "Butter",
      "Flour",
      "Eggs",
      "Vanilla Ice Cream",
    ],
    available: true,
    featured: false,
  },

  // Beverages
  {
    id: "masala-chai",
    categoryId: "beverages",
    name: "Masala Chai",
    description:
      "Strong Indian tea brewed with whole spices and served with steamed milk.",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600&q=75",
    isVeg: true,
    ingredients: ["Tea Leaves", "Milk", "Cardamom", "Ginger", "Cinnamon"],
    available: true,
    featured: false,
    tags: ["Hot"],
  },
  {
    id: "mango-lassi",
    categoryId: "beverages",
    name: "Mango Lassi",
    description:
      "Chilled yogurt smoothie blended with Alphonso mango pulp and a touch of cardamom.",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&q=75",
    isVeg: true,
    ingredients: ["Yogurt", "Mango Pulp", "Sugar", "Cardamom"],
    available: true,
    featured: true,
    tags: ["Refreshing", "Popular"],
  },
  {
    id: "cold-coffee",
    categoryId: "beverages",
    name: "Cold Coffee",
    description:
      "Creamy iced coffee blended with milk and a hint of chocolate.",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=75",
    isVeg: true,
    ingredients: ["Coffee", "Milk", "Sugar", "Ice", "Chocolate"],
    available: true,
    featured: false,
    tags: ["Chilled"],
  },
  {
    id: "fresh-lime-soda",
    categoryId: "beverages",
    name: "Fresh Lime Soda",
    description: "Freshly squeezed lime with soda, served sweet or salted.",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=600&q=75",
    isVeg: true,
    ingredients: ["Lime", "Soda", "Sugar", "Salt", "Mint"],
    available: true,
    featured: false,
  },
];
