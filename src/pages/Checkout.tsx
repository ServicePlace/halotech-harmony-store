import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
// ...existing code...

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const orderId = searchParams.get('orderId');
    if (!orderId) {
      alert('Order ID is missing. Redirecting to the previous page.');
      navigate(-1); // Redirect to the previous page
    }
  }, [searchParams, navigate]);

  return (
    <div>
      {/* ...existing code... */}
      <h1>Checkout Page</h1>
      {/* ...existing code... */}
    </div>
  );
};

export default Checkout;