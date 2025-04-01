import { useNavigate } from 'react-router-dom';

function ProductPage({ product }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout', { state: { productId: product.id, price: product.price } });
  };

  return (
    <div className="product-page">
      {/* ...existing product details... */}
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}

export default ProductPage;
