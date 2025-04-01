
import Layout from '@/components/layout/Layout';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-halotech-yellow">Low Voltage</span><br />
                <span className="text-halotech-blue">Security Solutions</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 max-w-lg">
                Professional security systems for homes and businesses in Albuquerque, powered by cryptocurrency payments.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/products">
                  <Button className="bg-halotech-yellow text-halotech-dark hover:bg-halotech-blue hover:text-white">
                    View Security Systems
                  </Button>
                </Link>
                <Link to="/products?category=installation">
                  <Button variant="outline" className="border-halotech-blue text-halotech-blue hover:bg-halotech-blue hover:text-white">
                    Installation Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/lovable-uploads/3a549ab4-6ede-4c0c-a0a9-e48735e59ade.png" 
                alt="Security Camera System" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-14 h-14 bg-halotech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-7 w-7 text-halotech-blue" />
                </div>
                <h3 className="font-mono text-xl font-semibold mb-3">Advanced Security</h3>
                <p className="text-gray-600">Professional-grade low voltage security systems for comprehensive protection.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-14 h-14 bg-halotech-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-7 w-7 text-halotech-yellow" />
                </div>
                <h3 className="font-mono text-xl font-semibold mb-3">Crypto Payments</h3>
                <p className="text-gray-600">Secure and convenient cryptocurrency payment options for all security solutions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-14 h-14 bg-halotech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-7 w-7 text-halotech-blue" />
                </div>
                <h3 className="font-mono text-xl font-semibold mb-3">Expert Installation</h3>
                <p className="text-gray-600">Professional setup and configuration included with every security system purchase.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Security Solutions</h2>
          <FeaturedProducts />
        </section>

        {/* CTA Section */}
        <section className="bg-halotech-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-mono text-3xl font-bold mb-4">Ready to Secure Your Property?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Protect your home or business with HaloTech's cutting-edge low voltage security systems.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-halotech-yellow text-halotech-dark hover:bg-halotech-blue hover:text-white">
                Explore Security Systems
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
