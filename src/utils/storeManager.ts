
import { Product } from '@/types';
import { products as initialProducts } from '@/data/products';

// In-memory storage for products
let productsStore: Product[] = [...initialProducts];

export const getAllProducts = (): Product[] => {
  return [...productsStore];
};

export const addProducts = (newProducts: Product[]): void => {
  // First, remove any existing products with the same IDs
  const existingIds = new Set(newProducts.map(p => p.id));
  productsStore = productsStore.filter(p => !existingIds.has(p.id));
  
  // Then add the new products
  productsStore = [...productsStore, ...newProducts];
  
  // Log the new products count
  console.log(`Added ${newProducts.length} products. Total products: ${productsStore.length}`);
};

export const clearAllProducts = (): void => {
  productsStore = [];
};

export const resetToInitialProducts = (): void => {
  productsStore = [...initialProducts];
};
