import { Product } from "../types";
import { getAllProducts, initializeStore, resetToInitialProducts as resetStore } from "../utils/storeManager";

export const products: Product[] = [
  {
    id: '1',
    name: 'HaloTech T-Shirt',
    description: 'Premium cotton t-shirt with HaloTech logo',
    price: 29.99,
    image: 'https://cdn.freewebstore.com/origin/919667/halotech-cosmic-t-shirt-min_1738371598010.jpg',
    featured: true,
    isDigital: false,
    stock: 100,
  },
  {
    id: '2',
    name: 'HaloTech Hoodie',
    description: 'Comfortable hoodie with embroidered HaloTech logo',
    price: 59.99,
    image: 'https://cdn.freewebstore.com/origin/919667/halotech-cosmic-hoodie-min_1738371686506.jpg',
    featured: false,
    isDigital: false,
    stock: 50,
  },
  // Add more products as needed...
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
