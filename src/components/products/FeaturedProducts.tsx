
import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, featuredProducts.length - 3) : Math.max(0, prevIndex - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= featuredProducts.length - 3 ? 0 : prevIndex + 1
    );
  };

  if (featuredProducts.length === 0) {
    return null;
  }

  // Get visible products for the carousel
  const visibleProducts = featuredProducts.slice(currentIndex, currentIndex + 3);
  // If we don't have enough products to fill the carousel, add from the beginning
  if (visibleProducts.length < 3 && featuredProducts.length > 3) {
    visibleProducts.push(...featuredProducts.slice(0, 3 - visibleProducts.length));
  }

  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-mono text-2xl font-bold text-halotech-dark">Featured Products</h2>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handlePrev}
            className="border-halotech-blue/30 hover:bg-halotech-blue hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleNext}
            className="border-halotech-blue/30 hover:bg-halotech-blue hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
