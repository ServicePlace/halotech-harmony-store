
import React from 'react';
import { Link } from 'react-router-dom';
import SupportDialog from './SupportDialog';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-4">HaloTech Security</h3>
            <p className="text-sm mb-4">
              Your trusted provider of security solutions and low voltage systems, with cryptocurrency payment options.
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} HaloTech Security. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/crypto-guide" className="hover:text-primary transition-colors">
                  Crypto Payment Guide
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-primary transition-colors">
                  Warranty & Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <address className="text-sm not-italic mb-4">
              <p>123 Tech Plaza, Suite 456</p>
              <p>Albuquerque, NM 87102</p>
              <p>Phone: (505) 555-0123</p>
              <p>Email: info@halotech.com</p>
            </address>
            <div>
              <SupportDialog>
                <button className="text-primary hover:underline text-sm">
                  Contact Support
                </button>
              </SupportDialog>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-xs">
          <p>
            Payment methods accepted: 
            <span className="ml-2 font-semibold text-halotech-yellow">SOL</span> |
            <span className="ml-2 font-semibold">ETH</span> |
            <span className="ml-2 font-semibold">BTC</span> |
            <span className="ml-2 font-semibold text-halotech-yellow">HALO Token</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
