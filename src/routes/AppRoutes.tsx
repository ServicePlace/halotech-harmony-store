import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Page components
import Index from '@/pages/Index';
import AboutPage from '@/pages/about/AboutPage';
import NotFound from '@/pages/NotFound';
// Auth pages
import SignInPage from '@/pages/auth/SignInPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import SignInCallback from '@/pages/auth/SignInCallback';
// Product pages
import ProductsPage from '@/pages/products/ProductsPage';
import ProductDetail from '@/pages/products/ProductDetail';
import ProductImport from '@/pages/admin/ProductImport';
// Cart & Checkout
import CartPage from '@/pages/cart/CartPage';
import CheckoutPage from '@/pages/checkout/CheckoutPage';
// Other pages
import CryptoGuidePage from '@/pages/guides/CryptoGuidePage';
import PrivacyPage from '@/pages/legal/PrivacyPage';
import SupportPage from '@/pages/support/SupportPage';
import FAQPage from '@/pages/support/FAQPage';
import StorePage from '../pages/StorePage';

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/crypto-guide" element={<CryptoGuidePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/store" element={<StorePage />} />
        
        {/* Auth Routes */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/auth/callback" element={<SignInCallback />} />
        
        {/* Protected Routes */}
        <Route path="/cart" element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        } />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        } />
        <Route path="/import" element={
          <ProtectedRoute>
            <ProductImport />
          </ProtectedRoute>
        } />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
