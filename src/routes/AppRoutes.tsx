import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetail from '@/pages/ProductDetail';
import ProductImport from '@/pages/ProductImport';
import CartPage from '@/pages/CartPage';
import CheckoutPage from '@/pages/CheckoutPage';
import SignUpPage from '@/pages/SignUpPage';
import SignInPage from '@/pages/SignInPage';
import SignInCallback from '@/pages/SignInCallback';
import AboutPage from '@/pages/AboutPage';
import SupportPage from '@/pages/SupportPage';
import FAQPage from '@/pages/FAQPage';
import CryptoGuidePage from '@/pages/CryptoGuidePage';
import PrivacyPage from '@/pages/PrivacyPage';

const AppRoutes = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default AppRoutes;
