import { Product } from '@/types';

export const parseProductCSV = (csvText: string): Partial<Product>[] => {
  // Split text into lines and get headers (first line)
  const lines = csvText.split('\n');
  if (lines.length <= 1) return [];
  
  const headers = lines[0].split(',').map(header => header.trim());
  
  // Process data rows
  const products: Partial<Product>[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue; // Skip empty lines
    
    const values = lines[i].split(',').map(value => value.trim());
    const product: Record<string, any> = {};
    
    // Map CSV columns to product properties
    headers.forEach((header, index) => {
      if (index < values.length) {
        // Handle boolean values
        if (values[index].toLowerCase() === 'true') {
          product[header] = true;
        } else if (values[index].toLowerCase() === 'false') {
          product[header] = false;
        }
        // Handle numeric values
        else if (!isNaN(Number(values[index])) && values[index] !== '') {
          product[header] = Number(values[index]);
        } 
        // Handle everything else as string
        else {
          product[header] = values[index];
        }
      }
    });
    
    // Generate ID if not provided
    if (!product.id) {
      product.id = (Math.floor(Math.random() * 10000) + Date.now()).toString();
    }
    
    // Generate createdAt if not provided
    if (!product.createdAt) {
      product.createdAt = new Date().toISOString();
    }
    
    products.push(product as Partial<Product>);
  }
  
  return products;
};

export const validateProducts = (products: Partial<Product>[]): string[] => {
  const errors: string[] = [];
  
  products.forEach((product, index) => {
    if (!product.name) {
      errors.push(`Row ${index + 1}: Missing product name`);
    }
    if (!product.price && product.price !== 0) {
      errors.push(`Row ${index + 1}: Missing product price`);
    }
    if (!product.description) {
      errors.push(`Row ${index + 1}: Missing product description`);
    }
    if (!product.category) {
      errors.push(`Row ${index + 1}: Missing product category`);
    }
    if (!product.image) {
      errors.push(`Row ${index + 1}: Missing product image URL`);
    }
    if (product.featured === undefined) {
      errors.push(`Row ${index + 1}: Missing featured flag`);
    }
    if (product.isDigital === undefined) {
      errors.push(`Row ${index + 1}: Missing isDigital flag`);
    }
    if (!product.stock && product.stock !== 0) {
      errors.push(`Row ${index + 1}: Missing product stock`);
    }
  });
  
  return errors;
};

export const parseCSV = (csvString: string): Array<Record<string, string>> => {
  const [headerLine, ...lines] = csvString.split('\n').filter(line => line.trim() !== '');
  const headers = headerLine.split(',');

  return lines.map(line => {
    const values = line.split(',');
    return headers.reduce((acc, header, index) => {
      acc[header.trim()] = values[index]?.trim() || '';
      return acc;
    }, {} as Record<string, string>);
  });
};
