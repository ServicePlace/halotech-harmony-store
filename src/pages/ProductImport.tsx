
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CSVUploader from '@/components/admin/CSVUploader';
import { Button } from '@/components/ui/button';
import { clearAllProducts } from '@/utils/storeManager';
import { resetToInitialProducts } from '@/data/products';
import { useToast } from '@/hooks/use-toast';
import { Home, RefreshCw, Trash2 } from 'lucide-react';

const ProductImport = () => {
  const [isResetting, setIsResetting] = useState(false);
  const { toast } = useToast();

  const handleResetProducts = () => {
    setIsResetting(true);
    setTimeout(() => {
      resetToInitialProducts();
      toast({
        title: "Products Reset",
        description: "All products have been reset to initial data",
        variant: "default"
      });
      setIsResetting(false);
    }, 500);
  };

  const handleClearProducts = () => {
    if (window.confirm('Are you sure you want to clear all products? This cannot be undone.')) {
      clearAllProducts();
      toast({
        title: "Products Cleared",
        description: "All products have been removed",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-halotech-dark">Product Import</h1>
          
          <div className="flex space-x-3">
            <Button variant="outline" asChild>
              <Link to="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleResetProducts}
              disabled={isResetting}
              className="text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isResetting ? 'animate-spin' : ''}`} />
              Reset to Default
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleClearProducts}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear All
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-1">
            <CSVUploader />
          </div>
          
          <div className="col-span-1 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-halotech-dark">Instructions</h2>
            
            <div className="prose max-w-none">
              <p>Follow these steps to import products:</p>
              
              <ol className="list-decimal pl-6 space-y-2">
                <li>Prepare a CSV file with the following columns:
                  <ul className="list-disc pl-6 mt-1">
                    <li><strong>name</strong> - Product name (required)</li>
                    <li><strong>description</strong> - Product description (required)</li>
                    <li><strong>price</strong> - Product price (required, numeric)</li>
                    <li><strong>image</strong> - URL to product image (required)</li>
                    <li><strong>category</strong> - Product category (required)</li>
                    <li><strong>featured</strong> - Whether product is featured (true/false)</li>
                    <li><strong>isDigital</strong> - Whether product is digital (true/false)</li>
                    <li><strong>stock</strong> - Product stock quantity (required, numeric)</li>
                  </ul>
                </li>
                <li>Click "Select CSV File" and choose your CSV file</li>
                <li>Review the preview and validation results</li>
                <li>If everything looks good, click "Confirm Import"</li>
                <li>Your products will be available in the store immediately</li>
              </ol>
              
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm">
                <p className="font-medium text-yellow-800">Note:</p>
                <p className="text-yellow-700">This is an in-memory implementation for demonstration purposes. 
                  Imported products will be lost when you refresh the page, unless you connect this to a 
                  backend database.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductImport;
