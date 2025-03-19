
import { Link } from 'react-router-dom';
import { ShoppingCart, ShieldCheck, Lock } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="tech-card group">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.featured && (
            <div className="absolute top-2 right-2 bg-halotech-yellow text-halotech-dark text-xs font-bold px-2 py-1 rounded">
              Featured
            </div>
          )}
          {product.isDigital && (
            <div className="absolute top-2 left-2 bg-halotech-blue text-white text-xs font-bold px-2 py-1 rounded flex items-center">
              <ShieldCheck size={12} className="mr-1" />
              Security
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-mono text-lg font-semibold mb-1 text-halotech-dark">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="font-mono text-lg font-bold text-halotech-dark">${product.price.toFixed(2)}</span>
          
          <Button 
            size="sm" 
            className="bg-halotech-blue hover:bg-halotech-yellow hover:text-halotech-dark transition-colors"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>

        {!product.isDigital && product.stock <= 5 && (
          <p className="text-red-500 text-xs mt-2">
            Only {product.stock} left in stock!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
