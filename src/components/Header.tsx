import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="tech-container flex justify-between items-center">
        <h1 className="text-xl font-bold">HaloTech Store</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline text-primary-foreground">Home</Link>
          <Link to="/products" className="hover:underline text-primary-foreground">Products</Link>
          <Link to="/cart" className="hover:underline text-primary-foreground">Cart</Link>
          <Link to="/checkout" className="hover:underline text-primary-foreground">Checkout</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
