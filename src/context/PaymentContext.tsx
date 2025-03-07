
import React, { createContext, useContext, useState } from 'react';
import { CryptoPaymentMethod } from '../types';
import { toast } from 'sonner';

interface PaymentContextType {
  selectedPaymentMethod: CryptoPaymentMethod | null;
  setSelectedPaymentMethod: (method: CryptoPaymentMethod | null) => void;
  isProcessingPayment: boolean;
  processPayment: (amount: number) => Promise<boolean>;
  paymentAddress: { [key in CryptoPaymentMethod]: string };
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<CryptoPaymentMethod | null>(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Mock payment addresses - in a real app, these would be generated or fetched from a backend
  const paymentAddress = {
    solana: 'HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH',
    ethereum: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    bitcoin: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  };

  // Mock payment processing function
  const processPayment = async (amount: number): Promise<boolean> => {
    if (!selectedPaymentMethod) {
      toast.error('Please select a payment method');
      return false;
    }

    setIsProcessingPayment(true);
    
    // Simulate API call to process payment
    try {
      await new Promise(resolve => setTimeout(resolve, 3000)); // Simulating network delay
      
      // 90% success rate in our simulation
      const success = Math.random() < 0.9;
      
      if (success) {
        toast.success(`Payment of ${amount.toFixed(2)} via ${selectedPaymentMethod} successful!`);
        return true;
      } else {
        toast.error(`Payment failed. Please try again.`);
        return false;
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      toast.error('An error occurred during payment processing');
      return false;
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <PaymentContext.Provider value={{
      selectedPaymentMethod,
      setSelectedPaymentMethod,
      isProcessingPayment,
      processPayment,
      paymentAddress
    }}>
      {children}
    </PaymentContext.Provider>
  );
};
