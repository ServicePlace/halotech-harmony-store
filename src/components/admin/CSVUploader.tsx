
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { parseProductCSV, validateProducts } from '@/utils/csvParser';
import { addProducts } from '@/utils/storeManager';
import { Product } from '@/types';
import { Upload, FilePlus, AlertCircle, Check } from 'lucide-react';

const CSVUploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [previewData, setPreviewData] = useState<Partial<Product>[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setValidationErrors([]);
    
    if (!file) {
      return;
    }
    
    if (file.type !== 'text/csv' && !file.name.endsWith('.csv')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file",
        variant: "destructive"
      });
      return;
    }
    
    setIsUploading(true);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const csvText = event.target?.result as string;
        const parsedProducts = parseProductCSV(csvText);
        
        if (parsedProducts.length === 0) {
          toast({
            title: "Empty CSV",
            description: "No products found in the CSV file",
            variant: "destructive"
          });
          setIsUploading(false);
          return;
        }
        
        // Validate the parsed products
        const errors = validateProducts(parsedProducts);
        setValidationErrors(errors);
        
        // Set preview data regardless of errors
        setPreviewData(parsedProducts.slice(0, 5)); // Show only first 5 for preview
        
        setIsUploading(false);
      } catch (error) {
        console.error("CSV parsing error:", error);
        toast({
          title: "Parsing Error",
          description: "Failed to parse the CSV file",
          variant: "destructive"
        });
        setIsUploading(false);
      }
    };
    
    reader.onerror = () => {
      toast({
        title: "Read Error",
        description: "Failed to read the file",
        variant: "destructive"
      });
      setIsUploading(false);
    };
    
    reader.readAsText(file);
  };

  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleConfirmImport = () => {
    if (validationErrors.length > 0) {
      toast({
        title: "Validation Failed",
        description: "Please fix the errors before importing",
        variant: "destructive"
      });
      return;
    }
    
    try {
      // Re-parse the file for the full import
      const file = fileInputRef.current?.files?.[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const csvText = event.target?.result as string;
        const parsedProducts = parseProductCSV(csvText) as Product[];
        
        // Add the products to our store
        addProducts(parsedProducts);
        
        toast({
          title: "Import Successful",
          description: `Imported ${parsedProducts.length} products successfully`,
          variant: "default"
        });
        
        // Reset the form
        setPreviewData([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      };
      
      reader.readAsText(file);
    } catch (error) {
      console.error("Import error:", error);
      toast({
        title: "Import Failed",
        description: "Failed to import products",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-halotech-dark">Import Products</h2>
      
      <div className="mb-6">
        <input
          type="file"
          accept=".csv"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        
        <Button 
          onClick={handleImportClick}
          className="w-full py-8 bg-halotech-blue hover:bg-halotech-yellow hover:text-halotech-dark transition-colors"
          disabled={isUploading}
        >
          {isUploading ? (
            <span className="flex items-center">
              <Upload className="animate-pulse mr-2" />
              Uploading...
            </span>
          ) : (
            <span className="flex items-center">
              <FilePlus className="mr-2" />
              Select CSV File
            </span>
          )}
        </Button>
        
        <p className="text-sm text-gray-500 mt-2">
          CSV must include: name, description, price, image, category, featured, isDigital, stock
        </p>
      </div>
      
      {validationErrors.length > 0 && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <h3 className="flex items-center text-red-700 font-semibold mb-2">
            <AlertCircle className="w-4 h-4 mr-2" />
            Validation Errors
          </h3>
          <ul className="text-sm text-red-600 space-y-1 max-h-60 overflow-y-auto">
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      
      {previewData.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Preview (First 5 Products)</h3>
          
          <div className="border rounded-md overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {previewData.map((product, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2 text-sm">{product.name || 'N/A'}</td>
                    <td className="px-3 py-2 text-sm">${product.price?.toFixed(2) || 'N/A'}</td>
                    <td className="px-3 py-2 text-sm">{product.category || 'N/A'}</td>
                    <td className="px-3 py-2 text-sm">{product.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4">
            <Button 
              onClick={handleConfirmImport}
              className="bg-green-600 hover:bg-green-700"
              disabled={validationErrors.length > 0}
            >
              <Check className="mr-2 h-4 w-4" />
              Confirm Import
            </Button>
          </div>
        </div>
      )}
      
      <div className="text-sm text-gray-500 mt-4">
        <p className="font-medium">CSV Format Example:</p>
        <pre className="p-2 bg-gray-100 rounded overflow-x-auto mt-1 text-xs">
          name,description,price,image,category,featured,isDigital,stock<br/>
          Product 1,Description 1,29.99,https://example.com/image1.jpg,digital,true,true,999<br/>
          Product 2,Description 2,49.99,https://example.com/image2.jpg,hardware,false,false,50
        </pre>
      </div>
    </div>
  );
};

export default CSVUploader;
