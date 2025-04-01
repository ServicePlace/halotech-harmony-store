import React, { useEffect, useState } from 'react';
import { encodeURL } from '@solana/pay';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import QRCode from 'qrcode';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { STORE_WALLET, PROCESSOR_WALLET, ACCEPTED_TOKEN_MINT, PROCESSING_FEE } from '@/payment-system/config';

const CheckoutPage = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentQr, setPaymentQr] = useState<string>('');
  const [setupQr, setSetupQr] = useState<string>('');
  const totalAmount = getCartTotal();

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }

    const setupUrl = '/solana-setup.html';
    QRCode.toDataURL(setupUrl, (err, url) => {
      if (!err) setSetupQr(url);
    });

    const paymentUrl = encodeURL({
      recipient: STORE_WALLET,
      amount: totalAmount,
      splToken: ACCEPTED_TOKEN_MINT,
      additionalFee: { amount: PROCESSING_FEE, recipient: PROCESSOR_WALLET },
      label: 'HaloTech LLC Store',
      message: 'Pay with $HaloTech + 0.007 SOL fee',
    });

    QRCode.toDataURL(paymentUrl, (err, url) => {
      if (!err) setPaymentQr(url);
    });
  }, [cart, totalAmount, navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-mono text-3xl font-bold mb-8">Checkout</h1>
        <p>Total: {totalAmount} $HaloTech + 0.007 SOL fee</p>
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
    </Layout>
  );
};

export default CheckoutPage;
