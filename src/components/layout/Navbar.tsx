
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-halotech-dark text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-mono text-xl font-bold flex items-center">
          <span className="text-halotech-yellow">HALO</span>
          <span className="text-halotech-blue">TECH</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex items-center space-x-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-1 px-3 pr-8 rounded-md bg-white/10 border border-white/20 focus:border-halotech-blue/50 focus:outline-none text-white w-64"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
                <Search size={16} />
              </button>
            </form>
            
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-halotech-yellow transition-colors">Home</Link>
              <Link to="/products" className="hover:text-halotech-yellow transition-colors">Products</Link>
              <Link to="/about" className="hover:text-halotech-yellow transition-colors">About</Link>
            </div>
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-white hover:text-halotech-yellow transition-colors" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-halotech-yellow text-halotech-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-white" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-halotech-yellow text-halotech-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-halotech-dark z-40 p-4">
          <div className="flex flex-col space-y-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-2 px-4 pr-10 rounded-md bg-white/10 border border-white/20 focus:border-halotech-blue/50 focus:outline-none text-white w-full"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
                <Search size={18} />
              </button>
            </form>
            
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-lg py-2 border-b border-white/10 hover:text-halotech-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/products" className="text-lg py-2 border-b border-white/10 hover:text-halotech-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link to="/about" className="text-lg py-2 border-b border-white/10 hover:text-halotech-yellow transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
