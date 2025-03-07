
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CartItem as CartItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart, updateQuantity } = useCart();
  const { product, quantity } = item;

  const increaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200 last:border-b-0">
      <div className="w-full sm:w-1/4 md:w-1/6 mb-4 sm:mb-0">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-24 object-cover rounded"
          />
        </Link>
      </div>
      
      <div className="flex-grow px-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-mono text-lg font-semibold text-halotech-dark">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500 mt-1">
          {product.isDigital ? 'Digital Product' : 'Physical Product'}
        </p>
      </div>
      
      <div className="flex items-center mt-4 sm:mt-0">
        <div className="flex items-center border border-gray-300 rounded-md">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={decreaseQuantity}
            className="h-8 w-8 text-gray-600 hover:text-halotech-blue"
          >
            <Minus className="h-3 w-3" />
          </Button>
          
          <span className="w-10 text-center font-mono">{quantity}</span>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={increaseQuantity}
            className="h-8 w-8 text-gray-600 hover:text-halotech-blue"
            disabled={!product.isDigital && product.stock <= quantity}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col items-end justify-center mt-4 sm:mt-0 w-full sm:w-auto ml-0 sm:ml-4">
        <div className="font-mono font-semibold text-lg mb-1">
          ${(product.price * quantity).toFixed(2)}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0"
        >
          <Trash2 className="h-4 w-4 mr-1" />
          <span className="text-xs">Remove</span>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
