
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  isDigital: boolean;
  stock: number;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CryptoPaymentMethod = 'solana' | 'ethereum' | 'bitcoin';

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: CryptoPaymentMethod | string;
  status: 'pending' | 'paid' | 'fulfilled' | 'cancelled';
  customerEmail: string;
  shippingAddress?: ShippingAddress;
  createdAt: string;
}

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
