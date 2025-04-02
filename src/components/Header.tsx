import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isSignedIn = !!localStorage.getItem('phantomPublicKey');

  const handleSignOut = () => {
    localStorage.removeItem('phantomPublicKey');
    alert('You have been signed out.');
    navigate('/signin');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const isMobile = window.innerWidth < 768;

  return (
    <header className="bg-halotech-dark text-white shadow-lg">
      {/* Main navigation bar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-mono text-xl font-bold flex items-center">
            <span className="text-halotech-yellow">HALO</span>
            <span className="text-white">TECH</span>
            <span className="ml-2 text-xs bg-halotech-yellow text-halotech-dark px-1 rounded">SECURITY</span>
            <span className="ml-2 text-xs bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-transparent bg-clip-text">
              On Solana
            </span>
          </Link>

          {/* Desktop navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="py-1 px-3 pr-8 rounded-md bg-white/10 border border-white/20 focus:border-halotech-yellow/50 focus:outline-none text-white w-64"
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
                  <Search size={16} />
                </button>
              </form>
              
              <nav className="flex items-center space-x-4">
                <Link 
                  to="/" 
                  className={`hover:text-halotech-yellow transition-colors ${location.pathname === '/' ? 'text-halotech-yellow border-b-2 border-halotech-yellow' : ''}`}
                >
                  Home
                </Link>
                <Link 
                  to="/products" 
                  className={`hover:text-halotech-yellow transition-colors ${location.pathname === '/products' ? 'text-halotech-yellow border-b-2 border-halotech-yellow' : ''}`}
                >
                  Products
                </Link>
                <Link 
                  to="/about" 
                  className={`hover:text-halotech-yellow transition-colors ${location.pathname === '/about' ? 'text-halotech-yellow border-b-2 border-halotech-yellow' : ''}`}
                >
                  About
                </Link>
              </nav>
            </div>
          )}

          {/* Action buttons - always visible */}
          <div className="flex items-center space-x-2">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="h-5 w-5 text-white hover:text-halotech-yellow transition-colors" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-halotech-yellow text-halotech-dark text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {isSignedIn ? (
              <div className="flex items-center space-x-2">
                <Link to="/account" className="p-1">
                  <User className="h-5 w-5 text-white hover:text-halotech-yellow transition-colors" />
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleSignOut}
                  className="text-xs border-halotech-yellow text-halotech-yellow hover:bg-halotech-yellow hover:text-halotech-dark"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="text-xs border-halotech-yellow text-halotech-yellow hover:bg-halotech-yellow hover:text-halotech-dark"
                >
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button 
                  size="sm" 
                  asChild
                  className="text-xs bg-halotech-yellow text-halotech-dark hover:bg-halotech-yellow/90"
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white ml-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Gold underflow accent */}
      <div className="h-1 bg-gradient-to-r from-halotech-yellow/60 via-halotech-yellow to-halotech-yellow/60"></div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="bg-halotech-dark border-t border-white/10 py-4 px-4 animate-accordion-down">
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-2 px-4 pr-10 rounded-md bg-white/10 border border-white/20 focus:border-halotech-yellow/50 focus:outline-none text-white w-full"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
              <Search size={18} />
            </button>
          </form>
          
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`py-2 hover:text-halotech-yellow transition-colors ${location.pathname === '/' ? 'text-halotech-yellow' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`py-2 hover:text-halotech-yellow transition-colors ${location.pathname === '/products' ? 'text-halotech-yellow' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`py-2 hover:text-halotech-yellow transition-colors ${location.pathname === '/about' ? 'text-halotech-yellow' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
