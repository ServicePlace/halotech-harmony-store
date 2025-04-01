import { useNavigate } from 'react-router-dom';

function ProductPage({ product }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout', { state: { orderAmount: product.price, orderId: `ORDER_${product.id}_${Date.now()}` } }); // Pass state correctly
  };

  return (
    <div className="product-page">
      {/* ...existing product details... */}
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}

export default ProductPage;
