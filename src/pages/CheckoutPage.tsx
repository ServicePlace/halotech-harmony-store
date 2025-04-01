// src/client/pages/CheckoutPage.tsx
import React, { useEffect, useState } from 'react';
import { encodeURL } from '@solana/pay';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { toDataURL } from 'qrcode';
import { STORE_WALLET, PROCESSOR_WALLET, ACCEPTED_TOKEN_MINT, PROCESSING_FEE } from '../payment-system/config'; // Fixed path
import { useLocation } from 'react-router-dom';

interface CheckoutProps {
  orderAmount: number;
  orderId: string;
}

const CheckoutPage: React.FC = () => {
  const [setupQr, setSetupQr] = useState<string>('');
  const [paymentQr, setPaymentQr] = useState<string>('');
  const location = useLocation();
  const { orderAmount, orderId } = (location.state as CheckoutProps) || { orderAmount: 0.1, orderId: 'ORDER_TEST' };

  console.log('Location state:', location.state); // Debugging

  useEffect(() => {
    const generateQRs = async () => {
      try {
        const setupUrl: string = '/solana-setup.html';
        const setupQrCode = await toDataURL(setupUrl);
        setSetupQr(setupQrCode);

        const paymentUrl: string = encodeURL({
          recipient: STORE_WALLET,
          amount: orderAmount,
          splToken: ACCEPTED_TOKEN_MINT,
          additionalFee: { amount: PROCESSING_FEE, recipient: PROCESSOR_WALLET },
          reference: new PublicKey(orderId),
          label: 'HaloTech LLC Store',
          message: 'Pay with $HaloTech + 0.007 SOL fee',
        });
        const paymentQrCode = await toDataURL(paymentUrl);
        setPaymentQr(paymentQrCode);
      } catch (err) {
        console.error('QR code generation failed:', err);
      }
    };
    generateQRs();
  }, [orderAmount, orderId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Checkout</h2>
      <p>Total: {orderAmount} $HaloTech + 0.007 SOL fee</p>
      <div>
        <h3>New to Solana?</h3>
        <p>Scan to download Phantom and set up your wallet:</p>
        {setupQr && <img draggable={false} src={setupQr} alt="Setup Phantom QR" />}
      </div>
      <div>
        <h3>Pay with Phantom</h3>
        <p>Scan to pay with $HaloTech:</p>
        {paymentQr && <img draggable={false} src={paymentQr} alt="Payment QR" />}
      </div>
    </div>
  );
};

export default CheckoutPage;