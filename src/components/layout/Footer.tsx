
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Shield, Lock, BellRing } from 'lucide-react';

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
              Albuquerque's premier provider of low voltage security solutions with cryptocurrency payment options.
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
            <h3 className="font-mono text-lg mb-4">Security Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products?category=digital" className="hover:text-halotech-yellow transition-colors">Access Control</Link></li>
              <li><Link to="/products?category=hardware" className="hover:text-halotech-yellow transition-colors">Security Systems</Link></li>
              <li><Link to="/products?category=voip" className="hover:text-halotech-yellow transition-colors">VoIP Services</Link></li>
              <li><Link to="/products?featured=true" className="hover:text-halotech-yellow transition-colors">Featured Systems</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-lg mb-4">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-halotech-yellow transition-colors">Our Expertise</Link></li>
              <li><Link to="/about#team" className="hover:text-halotech-yellow transition-colors">Our Team</Link></li>
              <li><Link to="/about#installation" className="hover:text-halotech-yellow transition-colors">Installation Services</Link></li>
              <li><Link to="/contact" className="hover:text-halotech-yellow transition-colors">Free Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/faq" className="hover:text-halotech-yellow transition-colors">FAQ</Link></li>
              <li><Link to="/crypto-guide" className="hover:text-halotech-yellow transition-colors">Crypto Payment Guide</Link></li>
              <li><Link to="/warranty" className="hover:text-halotech-yellow transition-colors">Warranty & Service</Link></li>
              <li><Link to="/privacy" className="hover:text-halotech-yellow transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} HaloTech Security Technologies. Secure your property with crypto.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 flex items-center">
              Exclusively accepting: 
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
