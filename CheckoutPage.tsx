import React, { useEffect, useState } from 'react';
import { encodeURL } from '@solana/pay';
import BigNumber from 'bignumber.js';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { toDataURL } from 'qrcode';
import { STORE_WALLET, PROCESSOR_WALLET, ACCEPTED_TOKEN_MINT, PROCESSING_FEE as RAW_PROCESSING_FEE } from './src/payment-system/config.ts'; // Update the path to the correct location

const PROCESSING_FEE = new BigNumber(RAW_PROCESSING_FEE);
import { useLocation } from 'react-router-dom';
import Header from './src/components/Header.tsx'; // Update the path to the correct location

interface CheckoutProps {
  orderAmount: number;
  orderId: string;
}

const CheckoutPage: React.FC = (): JSX.Element => {
  const [setupQr, setSetupQr] = useState<string>('');
  const [paymentQr, setPaymentQr] = useState<string>('');
  const [paymentStatus, setPaymentStatus] = useState<string>('Pending');
  const location = useLocation();
  const { orderAmount, orderId } = (location.state as CheckoutProps) || { orderAmount: 0.1, orderId: 'ORDER_TEST' };

  useEffect(() => {
    const generateQRs = async () => {
      try {
        const setupUrl: string = '/solana-setup.html';
        const setupQrCode = await toDataURL(setupUrl);
        setSetupQr(setupQrCode);

        const paymentUrl: string = encodeURL({
          recipient: STORE_WALLET,
          amount: new BigNumber(orderAmount).plus(PROCESSING_FEE.dividedBy(LAMPORTS_PER_SOL)),
          splToken: ACCEPTED_TOKEN_MINT,
          reference: [new PublicKey(orderId)],
          label: 'HaloTech LLC Store',
          message: 'Pay with $HaloTech + 0.007 SOL fee',
        }).toString();
        const paymentQrCode = await toDataURL(paymentUrl);
        setPaymentQr(paymentQrCode);
      } catch (err) {
        console.error('QR code generation failed:', err);
      }
    };
    generateQRs();

    // Poll backend for payment status
    const pollPayment = setInterval(async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/verify-payment/${orderId}`);
        const result = await response.json();
        if (result.success) {
          setPaymentStatus('Confirmed');
          clearInterval(pollPayment);
        } else if (result.message !== 'Payment not found') {
          setPaymentStatus('Failed: ' + result.message);
          clearInterval(pollPayment);
        }
      } catch (err) {
        console.error('Payment polling failed:', err);
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(pollPayment); // Cleanup on unmount
  }, [orderAmount, orderId]);

  return (
    <>
      <Header /> {/* Add the header */}
      <div className="tech-container">
        <div className="tech-card p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Checkout</h2>
          <p className="text-lg text-center mb-6">
            Total: <span className="font-semibold">{orderAmount} $HaloTech</span> + <span className="font-semibold">0.007 SOL fee</span>
          </p>
          <p className={`text-center mb-6 ${paymentStatus === 'Confirmed' ? 'text-green-600' : 'text-red-600'}`}>
            Status: <span className="font-semibold">{paymentStatus}</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">New to Solana?</h3>
              <p className="text-sm text-muted mb-4">Scan to download Phantom and set up your wallet:</p>
              {setupQr && <img className="mx-auto border border-gray-300 rounded-lg shadow-md" draggable={false} src={setupQr} alt="Setup Phantom QR" />}
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Pay with Phantom</h3>
              <p className="text-sm text-muted mb-4">Scan to pay with $HaloTech:</p>
              {paymentQr && <img className="mx-auto border border-gray-300 rounded-lg shadow-md" draggable={false} src={paymentQr} alt="Payment QR" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;