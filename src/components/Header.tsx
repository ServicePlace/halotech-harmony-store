import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('phantomPublicKey');
    alert('You have been signed out.');
    navigate('/signin');
  };

  const isSignedIn = !!localStorage.getItem('phantomPublicKey');

  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="tech-container flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:underline text-primary-foreground">
            HaloTech Store
          </Link>
        </h1>
        <nav className="flex gap-4">
          <Link to="/products" className="hover:underline text-primary-foreground">
            Products
          </Link>
          <Link to="/cart" className="hover:underline text-primary-foreground">
            Cart
          </Link>
          <Link to="/checkout" className="hover:underline text-primary-foreground">
            Checkout
          </Link>
        </nav>
        <div className="flex gap-4">
          {isSignedIn ? (
            <>
              <button
                className="tech-button bg-red-500 text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
              <Link to="/account" className="tech-button bg-blue-500 text-white">
                My Account
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin" className="tech-button bg-blue-500 text-white">
                Sign In
              </Link>
              <Link to="/signup" className="tech-button bg-green-500 text-white">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
