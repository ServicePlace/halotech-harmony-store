
import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Quantum Computing eBook",
    description: "Comprehensive guide to quantum computing algorithms and applications.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1074&auto=format&fit=crop",
    category: "digital",
    featured: true,
    isDigital: true,
    stock: 999,
    createdAt: "2023-01-15T12:00:00Z"
  },
  {
    id: "2",
    name: "AI Development Course",
    description: "Master artificial intelligence development with practical projects.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=1032&auto=format&fit=crop",
    category: "digital",
    featured: true,
    isDigital: true,
    stock: 999,
    createdAt: "2023-02-10T12:00:00Z"
  },
  {
    id: "3",
    name: "HoloTech AR Glasses",
    description: "Next generation augmented reality glasses with 8K resolution.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1032&auto=format&fit=crop",
    category: "hardware",
    featured: true,
    isDigital: false,
    stock: 15,
    createdAt: "2023-03-05T12:00:00Z"
  },
  {
    id: "4",
    name: "Blockchain Development Toolkit",
    description: "All-in-one toolkit for blockchain developers with sample code and templates.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1032&auto=format&fit=crop",
    category: "digital",
    featured: false,
    isDigital: true,
    stock: 999,
    createdAt: "2023-04-20T12:00:00Z"
  },
  {
    id: "5",
    name: "NeoSync Smart Watch",
    description: "Health and fitness tracking with advanced biometric sensors.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop",
    category: "hardware",
    featured: true,
    isDigital: false,
    stock: 28,
    createdAt: "2023-05-12T12:00:00Z"
  },
  {
    id: "6",
    name: "CryptoTrade Pro Subscription",
    description: "Advanced cryptocurrency trading strategies and real-time market analysis.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1032&auto=format&fit=crop",
    category: "digital",
    featured: false,
    isDigital: true,
    stock: 999,
    createdAt: "2023-06-08T12:00:00Z"
  },
  {
    id: "7",
    name: "DataSphere Storage Device",
    description: "1TB quantum-encrypted storage device with biometric security.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=1074&auto=format&fit=crop",
    category: "hardware",
    featured: false,
    isDigital: false,
    stock: 17,
    createdAt: "2023-07-15T12:00:00Z"
  },
  {
    id: "8",
    name: "Neural Interface Development Kit",
    description: "Start building brain-computer interfaces with this comprehensive kit.",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1581092921461-eab74593e708?q=80&w=1170&auto=format&fit=crop",
    category: "hardware",
    featured: true,
    isDigital: false,
    stock: 8,
    createdAt: "2023-08-18T12:00:00Z"
  }
];

export const getProducts = () => products;

export const getProductById = (id: string) => 
  products.find(product => product.id === id);

export const getFeaturedProducts = () => 
  products.filter(product => product.featured);

export const getProductsByCategory = (category: string) => 
  products.filter(product => product.category === category);

export const searchProducts = (query: string) => 
  products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );
