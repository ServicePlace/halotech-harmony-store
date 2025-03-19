
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  console.log("Rendering Layout component"); // Debug log
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="bg-gray-100 py-2 border-b">
        <div className="container mx-auto flex justify-end">
          <Button asChild variant="outline" size="sm" className="text-gray-600">
            <Link to="/import" className="flex items-center">
              <Upload className="h-3.5 w-3.5 mr-1" />
              Import Products
            </Link>
          </Button>
        </div>
      </div>
      
      <main className="flex-grow bg-gradient-to-b from-gray-100 to-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
