import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { PaymentProvider } from "./context/PaymentContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import ProductImport from "./pages/ProductImport";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  console.log("Rendering App component"); // Debug log
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <PaymentProvider>
            <Router>
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} /> {/* Ensure this route is correct */}
                <Route path="/import" element={<ProductImport />} />
                <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
              </Routes>
            </Router>
          </PaymentProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
