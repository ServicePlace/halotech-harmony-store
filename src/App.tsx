import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { PaymentProvider } from "./context/PaymentContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import ProductImport from "./pages/ProductImport";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import SignInCallback from './pages/SignInCallback';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <PaymentProvider>
            <Router>
              <Header /> {/* Render Header only once here */}
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signin/sso-callback" element={<SignInCallback />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/import" element={<ProductImport />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>
          </PaymentProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
