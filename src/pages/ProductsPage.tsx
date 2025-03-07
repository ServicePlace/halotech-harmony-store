
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { Product } from '@/types';
import { getProducts, getProductsByCategory, searchProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    const query = searchParams.get('q');
    const featured = searchParams.get('featured');

    if (category) {
      setSelectedCategory(category);
      setProducts(getProductsByCategory(category));
    } else if (query) {
      setSearchQuery(query);
      setProducts(searchProducts(query));
    } else if (featured === 'true') {
      setProducts(getProducts().filter(product => product.featured));
    } else {
      setProducts(getProducts());
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setProducts(searchProducts(searchQuery.trim()));
    } else {
      setProducts(selectedCategory ? getProductsByCategory(selectedCategory) : getProducts());
    }
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setProducts(category ? getProductsByCategory(category) : getProducts());
    setSearchQuery('');
  };

  const getTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    }
    if (selectedCategory === 'digital') {
      return 'Digital Products';
    }
    if (selectedCategory === 'hardware') {
      return 'Hardware Products';
    }
    return 'All Products';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="font-mono text-3xl font-bold mb-4 md:mb-0">{getTitle()}</h1>
          
          <form onSubmit={handleSearch} className="w-full md:w-auto flex">
            <div className="relative flex-grow">
              <Input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 py-2 tech-input w-full md:w-64"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-halotech-blue"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
              <div className="flex items-center mb-4">
                <Filter className="h-5 w-5 mr-2 text-halotech-blue" />
                <h2 className="font-mono text-lg font-semibold">Filters</h2>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-2">Categories</h3>
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  className={`w-full justify-start mb-1 ${selectedCategory === null ? 'bg-halotech-blue text-white' : ''}`}
                  onClick={() => handleCategorySelect(null)}
                >
                  All Products
                </Button>
                <Button
                  variant={selectedCategory === 'digital' ? "default" : "outline"}
                  className={`w-full justify-start mb-1 ${selectedCategory === 'digital' ? 'bg-halotech-blue text-white' : ''}`}
                  onClick={() => handleCategorySelect('digital')}
                >
                  Digital Products
                </Button>
                <Button
                  variant={selectedCategory === 'hardware' ? "default" : "outline"}
                  className={`w-full justify-start mb-1 ${selectedCategory === 'hardware' ? 'bg-halotech-blue text-white' : ''}`}
                  onClick={() => handleCategorySelect('hardware')}
                >
                  Hardware
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Products Grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
