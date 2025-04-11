import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StoreProvider } from '../context/CartContext';
import ProductGrid from '../components/products/ProductGrid';
import Cart from '../components/cart/CartItem';

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Link to="/" className="flex items-center text-yellow-400 hover:text-yellow-300">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      <StoreProvider>
        <div className="pt-20 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProductGrid title="Our Products" products={[]} />
            </div>
            <div>
              <Cart />
            </div>
          </div>
        </div>
      </StoreProvider>
    </div>
  );
}
