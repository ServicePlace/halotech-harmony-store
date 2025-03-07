
import { Bitcoin, icons } from 'lucide-react';
import { usePayment } from '@/context/PaymentContext';
import { CryptoPaymentMethod } from '@/types';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

// Custom icons for payment methods
const SolanaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M93.94 42.63H13.78c-1.75 0-2.62 0-3.06 0.44-0.44 0.44-0.44 1.31-0.44 3.06 0 1.75 0 2.62 0.44 3.06 0.44 0.44 1.31 0.44 3.06 0.44h80.16c1.75 0 2.62 0 3.06-0.44 0.44-0.44 0.44-1.31 0.44-3.06 0-1.75 0-2.62-0.44-3.06-0.44-0.44-1.31-0.44-3.06-0.44z" fill="currentColor"/>
    <path d="M93.94 78.83H13.78c-1.75 0-2.62 0-3.06 0.44-0.44 0.44-0.44 1.31-0.44 3.06 0 1.75 0 2.62 0.44 3.06 0.44 0.44 1.31 0.44 3.06 0.44h80.16c1.75 0 2.62 0 3.06-0.44 0.44-0.44 0.44-1.31 0.44-3.06 0-1.75 0-2.62-0.44-3.06-0.44-0.44-1.31-0.44-3.06-0.44z" fill="currentColor"/>
    <path d="M114.66 60.73H34.5c-1.75 0-2.62 0-3.06 0.44-0.44 0.44-0.44 1.31-0.44 3.06 0 1.75 0 2.62 0.44 3.06 0.44 0.44 1.31 0.44 3.06 0.44h80.16c1.75 0 2.62 0 3.06-0.44 0.44-0.44 0.44-1.31 0.44-3.06 0-1.75 0-2.62-0.44-3.06-0.44-0.44-1.31-0.44-3.06-0.44z" fill="currentColor"/>
  </svg>
);

const EthereumIcon = () => (
  <svg width="15" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M63.75 25.01V51.54L85.77 61.11L63.75 25.01Z" fill="currentColor"/>
    <path d="M63.75 25.01L41.72 61.11L63.75 51.54V25.01Z" fill="currentColor"/>
    <path d="M63.75 83.53V102.99L85.78 67.46L63.75 83.53Z" fill="currentColor"/>
    <path d="M63.75 102.99V83.52L41.72 67.46L63.75 102.99Z" fill="currentColor"/>
    <path d="M63.75 79.15L85.77 63.08L63.75 53.53V79.15Z" fill="currentColor"/>
    <path d="M41.72 63.08L63.75 79.15V53.53L41.72 63.08Z" fill="currentColor"/>
  </svg>
);

const PaymentSelector = () => {
  const { selectedPaymentMethod, setSelectedPaymentMethod, paymentAddress } = usePayment();

  const handlePaymentMethodChange = (value: string) => {
    setSelectedPaymentMethod(value as CryptoPaymentMethod);
  };

  return (
    <div className="space-y-6">
      <h3 className="font-mono text-xl font-bold text-halotech-dark">Payment Method</h3>
      
      <RadioGroup 
        value={selectedPaymentMethod || ''} 
        onValueChange={handlePaymentMethodChange}
        className="space-y-4"
      >
        <div className="flex items-center space-x-3 rounded-md border border-gray-200 p-3 hover:border-halotech-blue/50 transition-colors">
          <RadioGroupItem value="solana" id="solana" className="text-halotech-blue" />
          <Label htmlFor="solana" className="flex items-center cursor-pointer flex-1">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-1.5 rounded-full">
                <SolanaIcon />
              </div>
              <span className="font-medium">Solana</span>
            </div>
          </Label>
        </div>

        <div className="flex items-center space-x-3 rounded-md border border-gray-200 p-3 hover:border-halotech-blue/50 transition-colors">
          <RadioGroupItem value="ethereum" id="ethereum" className="text-halotech-blue" />
          <Label htmlFor="ethereum" className="flex items-center cursor-pointer flex-1">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-800 text-gray-400 p-1.5 rounded-full">
                <EthereumIcon />
              </div>
              <span className="font-medium">Ethereum</span>
            </div>
          </Label>
        </div>

        <div className="flex items-center space-x-3 rounded-md border border-gray-200 p-3 hover:border-halotech-blue/50 transition-colors">
          <RadioGroupItem value="bitcoin" id="bitcoin" className="text-halotech-blue" />
          <Label htmlFor="bitcoin" className="flex items-center cursor-pointer flex-1">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-500 text-white p-1.5 rounded-full">
                <Bitcoin className="h-4 w-4" />
              </div>
              <span className="font-medium">Bitcoin</span>
            </div>
          </Label>
        </div>
      </RadioGroup>

      {selectedPaymentMethod && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-mono font-medium mb-2">Payment Address:</h4>
          <div className="bg-white p-3 rounded border border-dashed border-gray-300">
            <p className="font-mono text-sm break-all select-all">
              {paymentAddress[selectedPaymentMethod]}
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Please send the exact amount to this address to complete your payment.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentSelector;
