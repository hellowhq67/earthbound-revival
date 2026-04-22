export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "Home" | "Fashion" | "Food & Beverage" | "Lifestyle" | "Auto" | "Celebrity" | "Character";
  tagline: string;
  color: string; // CSS color used as gradient base
};

export const PRODUCTS: Product[] = [
  { id: "1", name: "Frosty Collab Cup",        brand: "Wendy's",                  category: "Food & Beverage", tagline: "Limited-edition retail line.",       color: "#dc2626" },
  { id: "2", name: "Heritage Throw",           brand: "Better Homes & Gardens",   category: "Home",            tagline: "Woven for everyday warmth.",         color: "#0ea5e9" },
  { id: "3", name: "Studio Crewneck",          brand: "Crayola",                  category: "Fashion",         tagline: "Color your wardrobe.",               color: "#f59e0b" },
  { id: "4", name: "Editorial Mug",            brand: "Real Simple",              category: "Lifestyle",       tagline: "Mornings, considered.",              color: "#10b981" },
  { id: "5", name: "Open-Road Jacket",         brand: "Harley-Davidson",          category: "Auto",            tagline: "Built for the long ride.",           color: "#737373" },
  { id: "6", name: "Explorer Field Bag",       brand: "National Geographic",      category: "Lifestyle",       tagline: "Yellow border, anywhere.",           color: "#eab308" },
  { id: "7", name: "Signature Tee",            brand: "Popular Mechanics",        category: "Fashion",         tagline: "Workshop-grade cotton.",             color: "#0f172a" },
  { id: "8", name: "Character Plush",          brand: "Hasbro",                   category: "Character",       tagline: "Collectible by design.",             color: "#a855f7" },
  { id: "9", name: "Iconic Sticker Pack",      brand: "Marvel",                   category: "Character",       tagline: "Heroes for your laptop.",            color: "#dc2626" },
  { id: "10", name: "Tabletop Centerpiece",    brand: "Good Housekeeping",        category: "Home",            tagline: "Hosts approved.",                    color: "#16a34a" },
  { id: "11", name: "Chef Apron",              brand: "Wendy's",                  category: "Food & Beverage", tagline: "Square patties, sharper kit.",       color: "#dc2626" },
  { id: "12", name: "Roadster Cap",            brand: "Ford",                     category: "Auto",            tagline: "American classic, restyled.",        color: "#1d4ed8" },
];

export const CATEGORIES: Array<Product["category"] | "All"> = [
  "All", "Home", "Fashion", "Food & Beverage", "Lifestyle", "Auto", "Celebrity", "Character",
];