import React from 'react';
import { Toaster } from "react-hot-toast";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { PaymentProvider } from "./context/PaymentContext";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import ProductImport from "./pages/ProductImport.tsx";
import CartPage from "./pages/CartPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import SignUpPage from './pages/SignUpPage.tsx';
import SignInPage from './pages/SignInPage.tsx';
import SignInCallback from './pages/SignInCallback.tsx';
import AboutPage from './pages/AboutPage.tsx';
import SupportPage from './pages/SupportPage.tsx';
import FAQPage from './pages/FAQPage.tsx';
import CryptoGuidePage from './pages/CryptoGuidePage.tsx';
import PrivacyPage from './pages/PrivacyPage.tsx';
import { ClerkProvider } from '@clerk/clerk-react';
import ProtectedRoute from './components/auth/ProtectedRoute';

const queryClient = new QueryClient();
const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const App: React.FC = () => {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CartProvider>
            <PaymentProvider>
              <Router>
                <Header />
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/crypto-guide" element={<CryptoGuidePage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  
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
                  
                  {/* Auth Routes */}
                  <Route path="/sign-in/*" element={<SignInPage />} />
                  <Route path="/sign-up/*" element={<SignUpPage />} />
                  <Route path="/auth/callback" element={<SignInCallback />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </Router>
            </PaymentProvider>
          </CartProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default App;
