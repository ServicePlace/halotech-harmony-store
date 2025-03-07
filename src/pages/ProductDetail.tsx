
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getProductById, getProductsByCategory } from '@/data/products';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/products/ProductGrid';
import { ShoppingCart, ArrowLeft, Download, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct || null);
      
      if (foundProduct) {
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-mono text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button className="bg-halotech-blue hover:bg-halotech-yellow hover:text-halotech-dark">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link to="/products" className="text-halotech-blue hover:text-halotech-yellow flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Products
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
            
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {product.category === 'digital' ? 'Digital Product' : 'Hardware'}
                </span>
                {product.featured && (
                  <span className="inline-block bg-halotech-yellow/20 text-halotech-dark rounded-full px-3 py-1 text-sm font-semibold">
                    Featured
                  </span>
                )}
                {product.isDigital && (
                  <span className="inline-block bg-halotech-blue/20 text-halotech-blue rounded-full px-3 py-1 text-sm font-semibold flex items-center">
                    <Download className="h-3 w-3 mr-1" />
                    Digital Download
                  </span>
                )}
              </div>
              
              <h1 className="font-mono text-3xl font-bold text-halotech-dark mb-2">{product.name}</h1>
              
              <div className="font-mono text-2xl font-bold text-halotech-dark mb-4">
                ${product.price.toFixed(2)}
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {!product.isDigital && (
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-3 rounded-full mr-2 ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={product.stock > 0 ? 'text-green-700' : 'text-red-700'}>
                    {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                  </span>
                </div>
              )}
              
              {product.isDigital && (
                <div className="flex items-center mb-6 text-halotech-blue">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Instant Download After Purchase</span>
                </div>
              )}
              
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-halotech-blue hover:bg-halotech-yellow hover:text-halotech-dark"
                onClick={() => addToCart(product)}
                disabled={!product.isDigital && product.stock <= 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <Separator className="mb-8" />
            <h2 className="font-mono text-2xl font-bold mb-6">Related Products</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
