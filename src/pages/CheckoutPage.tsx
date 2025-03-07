
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { usePayment } from '@/context/PaymentContext';
import PaymentSelector from '@/components/checkout/PaymentSelector';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { selectedPaymentMethod, processPayment, isProcessingPayment } = usePayment();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [hasPhysicalItems, setHasPhysicalItems] = useState(false);
  
  // Shipping address state (only used if there are physical items)
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  useEffect(() => {
    // Check if cart has any physical items
    const physicalItems = cart.some(item => !item.product.isDigital);
    setHasPhysicalItems(physicalItems);
    
    // Redirect to cart page if cart is empty
    if (cart.length === 0) {
      navigate('/cart');
    }
    
    window.scrollTo(0, 0);
  }, [cart, navigate]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (!value) {
      setEmailError('Email is required');
    } else if (!validateEmail(value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  const validateShippingAddress = () => {
    if (!hasPhysicalItems) return true;
    
    const { fullName, addressLine1, city, state, zipCode, country } = shippingAddress;
    return fullName && addressLine1 && city && state && zipCode && country;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!email || !validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }
    
    if (hasPhysicalItems && !validateShippingAddress()) {
      toast.error('Please fill in all required shipping fields');
      return;
    }
    
    if (!selectedPaymentMethod) {
      toast.error('Please select a payment method');
      return;
    }
    
    // Process payment
    const totalAmount = getCartTotal();
    const success = await processPayment(totalAmount);
    
    if (success) {
      // Clear cart and redirect to success page
      clearCart();
      navigate('/order-success');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-mono text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="font-mono text-xl font-bold mb-4">Contact Information</h2>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`tech-input ${emailError ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                    required
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>
              </div>
              
              {/* Shipping Address (only if there are physical items) */}
              {hasPhysicalItems && (
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="font-mono text-xl font-bold mb-4">Shipping Address</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={shippingAddress.fullName}
                        onChange={handleShippingChange}
                        className="tech-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">Address Line 1 *</label>
                      <Input
                        id="addressLine1"
                        name="addressLine1"
                        value={shippingAddress.addressLine1}
                        onChange={handleShippingChange}
                        className="tech-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                      <Input
                        id="addressLine2"
                        name="addressLine2"
                        value={shippingAddress.addressLine2}
                        onChange={handleShippingChange}
                        className="tech-input"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                        <Input
                          id="city"
                          name="city"
                          value={shippingAddress.city}
                          onChange={handleShippingChange}
                          className="tech-input"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province *</label>
                        <Input
                          id="state"
                          name="state"
                          value={shippingAddress.state}
                          onChange={handleShippingChange}
                          className="tech-input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code *</label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={shippingAddress.zipCode}
                          onChange={handleShippingChange}
                          className="tech-input"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                        <Input
                          id="country"
                          name="country"
                          value={shippingAddress.country}
                          onChange={handleShippingChange}
                          className="tech-input"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <PaymentSelector />
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="font-mono text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded overflow-hidden mr-3">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium line-clamp-1">{item.product.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-mono font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{hasPhysicalItems ? 'Calculated at checkout' : 'Free'}</span>
                </div>
              </div>
              
              <Separator className="mb-4" />
              
              <div className="flex justify-between font-mono text-lg font-bold mb-6">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              
              <Button 
                className="w-full bg-halotech-blue hover:bg-halotech-yellow hover:text-halotech-dark"
                disabled={isProcessingPayment || !selectedPaymentMethod}
                onClick={handleSubmit}
              >
                {isProcessingPayment ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Complete Order'
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
