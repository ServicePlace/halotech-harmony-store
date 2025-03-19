
import Layout from '@/components/layout/Layout';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  console.log("Rendering Index page"); // Debug log
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-halotech-dark to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-halotech-yellow">Security Tech</span><br />
                <span className="text-halotech-blue">Crypto Powered</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 max-w-lg">
                Advanced low voltage security solutions for homes and businesses, exclusively available with cryptocurrency payments.
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
                alt="Security Technology" 
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
                <ShieldCheck className="h-7 w-7 text-halotech-blue" />
              </div>
              <h3 className="font-mono text-xl font-semibold mb-3">Advanced Security</h3>
              <p className="text-gray-600">Professional-grade low voltage security systems for homes and businesses.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 bg-halotech-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-halotech-yellow">
                  <path d="M9 8.25H7.5C6.42 8.25 5.5 7.33 5.5 6.25C5.5 5.17 6.42 4.25 7.5 4.25H9C10.08 4.25 11 5.17 11 6.25C11 7.33 10.08 8.25 9 8.25ZM7.5 5.75C7.22 5.75 7 5.97 7 6.25C7 6.53 7.22 6.75 7.5 6.75H9C9.28 6.75 9.5 6.53 9.5 6.25C9.5 5.97 9.28 5.75 9 5.75H7.5Z" fill="currentColor"/>
                  <path d="M18 8.25H16.5C15.42 8.25 14.5 7.33 14.5 6.25C14.5 5.17 15.42 4.25 16.5 4.25H18C19.08 4.25 20 5.17 20 6.25C20 7.33 19.08 8.25 18 8.25ZM16.5 5.75C16.22 5.75 16 5.97 16 6.25C16 6.53 16.22 6.75 16.5 6.75H18C18.28 6.75 18.5 6.53 18.5 6.25C18.5 5.97 18.28 5.75 18 5.75H16.5Z" fill="currentColor"/>
                  <path d="M9 19.75H7.5C6.42 19.75 5.5 18.83 5.5 17.75C5.5 16.67 6.42 15.75 7.5 15.75H9C10.08 15.75 11 16.67 11 17.75C11 18.83 10.08 19.75 9 19.75ZM7.5 17.25C7.22 17.25 7 17.47 7 17.75C7 18.03 7.22 18.25 7.5 18.25H9C9.28 18.25 9.5 18.03 9.5 17.75C9.5 17.47 9.28 17.25 9 17.25H7.5Z" fill="currentColor"/>
                  <path d="M18 19.75H16.5C15.42 19.75 14.5 18.83 14.5 17.75C14.5 16.67 15.42 15.75 16.5 15.75H18C19.08 15.75 20 16.67 20 17.75C20 18.83 19.08 19.75 18 19.75ZM16.5 17.25C16.22 17.25 16 17.47 16 17.75C16 18.03 16.22 18.25 16.5 18.25H18C18.28 18.25 18.5 18.03 18.5 17.75C18.5 17.47 18.28 17.25 18 17.25H16.5Z" fill="currentColor"/>
                  <path d="M12 14.25C10.48 14.25 9.25 13.02 9.25 11.5V11C9.25 9.48 10.48 8.25 12 8.25C13.52 8.25 14.75 9.48 14.75 11V11.5C14.75 13.02 13.52 14.25 12 14.25ZM12 9.75C11.31 9.75 10.75 10.31 10.75 11V11.5C10.75 12.19 11.31 12.75 12 12.75C12.69 12.75 13.25 12.19 13.25 11.5V11C13.25 10.31 12.69 9.75 12 9.75Z" fill="currentColor"/>
                  <path d="M12 22.75C11.96 22.75 11.92 22.75 11.88 22.74C11.71 22.72 11.56 22.63 11.45 22.49L10.23 20.97C10.17 20.9 10.09 20.89 10.02 20.93L8.33 21.78C8.18 21.86 7.99 21.85 7.84 21.77C7.69 21.68 7.61 21.52 7.62 21.35L7.73 19.47C7.74 19.39 7.69 19.32 7.62 19.28L6.05 18.43C5.91 18.35 5.82 18.19 5.82 18.02C5.82 17.86 5.91 17.7 6.05 17.62L7.62 16.76C7.69 16.72 7.74 16.65 7.73 16.57L7.62 14.69C7.61 14.52 7.69 14.36 7.84 14.27C7.99 14.18 8.18 14.18 8.33 14.26L10.02 15.11C10.09 15.15 10.17 15.14 10.23 15.07L11.45 13.55C11.56 13.41 11.71 13.33 11.88 13.31C12.05 13.29 12.22 13.35 12.35 13.47L13.77 14.81C13.83 14.87 13.91 14.88 13.98 14.84L15.67 13.99C15.82 13.91 16.01 13.92 16.16 14C16.31 14.09 16.39 14.25 16.38 14.42L16.27 16.3C16.26 16.38 16.31 16.45 16.38 16.49L17.95 17.35C18.09 17.43 18.18 17.59 18.18 17.76C18.18 17.93 18.09 18.09 17.95 18.17L16.38 19.02C16.31 19.07 16.26 19.13 16.27 19.22L16.38 21.1C16.39 21.27 16.31 21.43 16.16 21.52C16.01 21.6 15.82 21.61 15.67 21.53L13.98 20.68C13.91 20.64 13.83 20.65 13.77 20.71L12.35 22.05C12.25 22.16 12.13 22.75 12 22.75ZM10.15 19.41C10.39 19.41 10.63 19.5 10.81 19.72L11.92 21.07L13.2 19.86C13.54 19.56 14.03 19.54 14.38 19.72L15.9 20.48L15.8 18.8C15.77 18.37 15.97 17.96 16.33 17.75L17.76 16.97L16.33 16.19C15.97 15.98 15.77 15.57 15.8 15.14L15.9 13.46L14.38 14.22C14.03 14.4 13.54 14.38 13.2 14.08L11.92 12.87L10.81 14.22C10.63 14.44 10.39 14.53 10.15 14.53C9.9 14.53 9.66 14.44 9.48 14.22L8.1 13.46L8.2 15.14C8.23 15.57 8.03 15.98 7.67 16.19L6.24 16.97L7.67 17.75C8.03 17.96 8.23 18.37 8.2 18.8L8.1 20.48L9.62 19.72C9.77 19.64 9.93 19.59 10.09 19.59L10.15 19.41Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="font-mono text-xl font-semibold mb-3">Crypto Payments</h3>
              <p className="text-gray-600">Shop confidently with our secure cryptocurrency payment options.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 bg-halotech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-7 w-7 text-halotech-blue" />
              </div>
              <h3 className="font-mono text-xl font-semibold mb-3">Expert Installation</h3>
              <p className="text-gray-600">Professional setup and configuration included with every purchase.</p>
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
          <h2 className="font-mono text-3xl font-bold mb-4">Ready to secure your property?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join hundreds of satisfied customers protecting their homes and businesses with HaloTech security solutions.
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
