
import { Product } from "../types";
import { getAllProducts, initializeStore, resetToInitialProducts as resetStore } from "../utils/storeManager";

export const products: Product[] = [
  {
    id: "1",
    name: "Pre-Programmed Wireless Alarm Kit",
    description: "Simple DIY wireless alarm system with commercial quality for home or office security.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1074&auto=format&fit=crop",
    category: "security",
    featured: true,
    isDigital: false,
    stock: 15,
    createdAt: "2023-01-15T12:00:00Z"
  },
  {
    id: "2",
    name: "Doorbell Camera",
    description: "High-resolution doorbell camera with remote monitoring capabilities and two-way communication.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1600077105524-ec79ffa98417?q=80&w=987&auto=format&fit=crop",
    category: "security",
    featured: true,
    isDigital: false,
    stock: 28,
    createdAt: "2023-02-10T12:00:00Z"
  },
  {
    id: "3",
    name: "Four-Channel DVR System",
    description: "Complete CCTV system with cameras, cables, and a 4-channel DVR for comprehensive surveillance.",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1527878082660-d150bec4a5cc?q=80&w=1170&auto=format&fit=crop",
    category: "security",
    featured: true,
    isDigital: false,
    stock: 10,
    createdAt: "2023-03-05T12:00:00Z"
  },
  {
    id: "4",
    name: "Basic Alarm Monitoring",
    description: "24/7 alarm monitoring service, 365 days a year. Subscription-based security solution.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=987&auto=format&fit=crop",
    category: "service",
    featured: false,
    isDigital: true,
    stock: 999,
    createdAt: "2023-04-20T12:00:00Z"
  },
  {
    id: "5",
    name: "Smart Alarm Monitoring",
    description: "Enhanced monitoring with smart features and mobile alerts for residential security systems.",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1558959356-2d5f59af4c45?q=80&w=1074&auto=format&fit=crop",
    category: "service",
    featured: false,
    isDigital: true,
    stock: 999,
    createdAt: "2023-05-12T12:00:00Z"
  },
  {
    id: "6",
    name: "Access Control System",
    description: "Keyless entry system with activity tracking for businesses and sensitive areas.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?q=80&w=1169&auto=format&fit=crop",
    category: "access",
    featured: true,
    isDigital: false,
    stock: 8,
    createdAt: "2023-06-08T12:00:00Z"
  },
  {
    id: "7",
    name: "Fire Alarm System",
    description: "Comprehensive fire detection and alert system with monitoring capabilities.",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1169&auto=format&fit=crop",
    category: "safety",
    featured: false,
    isDigital: false,
    stock: 12,
    createdAt: "2023-07-15T12:00:00Z"
  },
  {
    id: "8",
    name: "VoIP Business Phone System",
    description: "Complete Voice Over IP communication system for efficient business operations.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1599424481155-6963e9e618be?q=80&w=1180&auto=format&fit=crop",
    category: "communication",
    featured: true,
    isDigital: false,
    stock: 7,
    createdAt: "2023-08-18T12:00:00Z"
  }
];

// Initialize the store with initial products
initializeStore(products);

export const getProducts = () => getAllProducts();

export const getProductById = (id: string) => 
  getAllProducts().find(product => product.id === id);

export const getFeaturedProducts = () => 
  getAllProducts().filter(product => product.featured);

export const getProductsByCategory = (category: string) => 
  getAllProducts().filter(product => product.category === category);

export const searchProducts = (query: string) => 
  getAllProducts().filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );

// Exporting a reset function that uses the initial products
export const resetToInitialProducts = () => resetStore(products);
