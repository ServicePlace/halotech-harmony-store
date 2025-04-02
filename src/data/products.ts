
import { Product } from "../types";
import { getAllProducts, initializeStore, resetToInitialProducts as resetStore } from "../utils/storeManager";

export const products: Product[] = [
  {
    id: "1",
    name: "HaloTech Access Control System",
    description: "Keep your building secure with advanced biometric scanners, card readers, and cutting-edge tech. Secures doors, elevators, parking garages, and gates with detailed activity logging.",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?q=80&w=1169&auto=format&fit=crop",
    category: "security",
    featured: true,
    isDigital: false,
    stock: 15,
    createdAt: "2023-01-15T12:00:00Z"
  },
  {
    id: "2",
    name: "HaloTech Data Communications Infrastructure",
    description: "Stay connected and protected with expertly designed data infrastructure that ensures safe, seamless data transfer across your devices with hardwired and wireless options.",
    price: 2999.99,
    image: "https://images.unsplash.com/photo-1551703599-3d8c6684ec06?q=80&w=1674&auto=format&fit=crop",
    category: "communication",
    featured: true,
    isDigital: false,
    stock: 10,
    createdAt: "2023-02-10T12:00:00Z"
  },
  {
    id: "3",
    name: "HaloTech Fire Alarm System",
    description: "Safeguard your investment with our top-tier fire alarm system designed to detect fires early and ensure safe evacuation, with optional fire suppression system integration.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1169&auto=format&fit=crop",
    category: "safety",
    featured: true,
    isDigital: false,
    stock: 18,
    createdAt: "2023-03-05T12:00:00Z"
  },
  {
    id: "4",
    name: "HaloTech VoIP Communications System",
    description: "Upgrade your communication with Voice Over IP services offering affordable, clear, and scalable phone and intercom solutions with crystal-clear audio quality.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1599424481155-6963e9e618be?q=80&w=1180&auto=format&fit=crop",
    category: "communication",
    featured: true,
    isDigital: false,
    stock: 12,
    createdAt: "2023-04-20T12:00:00Z"
  },
  {
    id: "5",
    name: "HaloTech Structured Cabling and Design",
    description: "Power your data, video, and voice networks with structured cabling solutions providing a low-voltage backbone for your tech needs, installed by certified experts.",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1558959356-2d5f59af4c45?q=80&w=1074&auto=format&fit=crop",
    category: "infrastructure",
    featured: false,
    isDigital: false,
    stock: 20,
    createdAt: "2023-05-12T12:00:00Z"
  },
  {
    id: "6",
    name: "HaloTech Wireless Network Solutions",
    description: "Enjoy reliable Wi-Fi with low-voltage wireless options, including Point-to-Point (P2P) technology for multi-building connectivity without wiring.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=987&auto=format&fit=crop",
    category: "infrastructure",
    featured: false,
    isDigital: false,
    stock: 25,
    createdAt: "2023-06-08T12:00:00Z"
  },
  {
    id: "7",
    name: "Enterprise Network Monitoring Service",
    description: "24/7 monitoring and maintenance of your network infrastructure with real-time alerts and technical support. Subscription-based security solution.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1563770557117-bfa9e986475b?q=80&w=1170&auto=format&fit=crop",
    category: "service",
    featured: false,
    isDigital: true,
    stock: 999,
    createdAt: "2023-07-15T12:00:00Z"
  },
  {
    id: "8",
    name: "Data Security Compliance Package",
    description: "Complete solution for data protection compliance including security audits, encryption implementation, and staff training for regulatory standards.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=1169&auto=format&fit=crop",
    category: "service",
    featured: true,
    isDigital: true,
    stock: 999,
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
