
import { Product } from '@/types';
import { products as initialProducts } from '@/data/products';

// In-memory storage for products
let productsStore: Product[] = [...initialProducts];

export const getAllProducts = (): Product[] => {
  console.log(`Retrieving ${productsStore.length} products from store`);
  return [...productsStore];
};

export const addProducts = (newProducts: Product[]): void => {
  console.log(`Adding ${newProducts.length} products to store`);
  
  // First, remove any existing products with the same IDs
  const existingIds = new Set(newProducts.map(p => p.id));
  productsStore = productsStore.filter(p => !existingIds.has(p.id));
  
  // Then add the new products
  productsStore = [...productsStore, ...newProducts];
  
  // Log the new products count
  console.log(`Total products after adding: ${productsStore.length}`);
};

export const clearAllProducts = (): void => {
  productsStore = [];
  console.log("All products cleared from store");
};

export const resetToInitialProducts = (): void => {
  productsStore = [...initialProducts];
  console.log(`Reset to initial ${productsStore.length} products`);
};
