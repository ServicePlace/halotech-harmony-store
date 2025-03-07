
import Layout from '@/components/layout/Layout';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowRight, Download, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  console.log("Rendering Index page"); // Add debug log
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-halotech-dark to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-halotech-yellow">Future Tech</span><br />
                <span className="text-halotech-blue">Available Now</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 max-w-lg">
                Discover cutting-edge technology products for the modern digital lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/products">
                  <Button size="lg" className="w-full sm:w-auto bg-halotech-yellow text-halotech-dark hover:bg-halotech-blue hover:text-white">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Browse Products
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-halotech-blue text-halotech-blue hover:bg-halotech-blue/10">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1170&auto=format&fit=crop" 
                alt="VR Technology" 
                className="rounded-lg shadow-2xl max-w-full h-auto animated-glow"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-mono text-3xl font-bold text-center mb-12 text-halotech-dark">Why Shop with HaloTech</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 bg-halotech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-7 w-7 text-halotech-blue" />
              </div>
              <h3 className="font-mono text-xl font-semibold mb-3">Digital Products</h3>
              <p className="text-gray-600">Instant delivery of digital products with secure download links.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 bg-halotech-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-7 w-7 text-halotech-yellow" />
              </div>
              <h3 className="font-mono text-xl font-semibold mb-3">Secure Payments</h3>
              <p className="text-gray-600">Shop confidently with our secure cryptocurrency payment options.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 bg-halotech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-halotech-blue">
                  <path d="M16.8749 8.24999L13.1249 11.9999L16.8749 15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.25 15.75L11.9999 12L8.25 8.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="font-mono text-xl font-semibold mb-3">Cutting-Edge Tech</h3>
              <p className="text-gray-600">Access to the latest innovations in technology products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 container mx-auto px-4">
        <FeaturedProducts />
        
        <div className="text-center mt-8">
          <Link to="/products">
            <Button className="bg-halotech-blue hover:bg-halotech-yellow hover:text-halotech-dark">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-halotech-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-mono text-3xl font-bold mb-4">Ready to upgrade your tech?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers exploring the future of technology with HaloTech.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-halotech-yellow text-halotech-dark hover:bg-halotech-blue hover:text-white">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
