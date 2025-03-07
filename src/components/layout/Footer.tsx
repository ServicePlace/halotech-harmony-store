
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-halotech-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-mono text-xl font-bold inline-block mb-4">
              <span className="text-halotech-yellow">HALO</span>
              <span className="text-halotech-blue">TECH</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Leading provider of cutting-edge tech products and digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-halotech-blue transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-halotech-blue transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-halotech-blue transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products" className="hover:text-halotech-yellow transition-colors">All Products</Link></li>
              <li><Link to="/products?category=digital" className="hover:text-halotech-yellow transition-colors">Digital Products</Link></li>
              <li><Link to="/products?category=hardware" className="hover:text-halotech-yellow transition-colors">Hardware</Link></li>
              <li><Link to="/products?featured=true" className="hover:text-halotech-yellow transition-colors">Featured Items</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-lg mb-4">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-halotech-yellow transition-colors">Our Story</Link></li>
              <li><Link to="/about#team" className="hover:text-halotech-yellow transition-colors">Team</Link></li>
              <li><Link to="/about#careers" className="hover:text-halotech-yellow transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-halotech-yellow transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/faq" className="hover:text-halotech-yellow transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-halotech-yellow transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-halotech-yellow transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="hover:text-halotech-yellow transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} HaloTech Harmony Store. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 flex items-center">
              We accept: 
              <span className="ml-2 crypto-tag mr-1">Solana</span>
              <span className="crypto-tag mr-1">Ethereum</span>
              <span className="crypto-tag">Bitcoin</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
