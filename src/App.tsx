import React from 'react';
import { Toaster } from "react-hot-toast";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { PaymentProvider } from "@/context/PaymentContext";
import Layout from '@/components/layout/Layout';
import AppRoutes from '@/routes/AppRoutes';
import { ClerkProvider } from '@clerk/clerk-react';

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
              <BrowserRouter>
                <Layout>
                  <AppRoutes />
                </Layout>
              </BrowserRouter>
            </PaymentProvider>
          </CartProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default App;
