import React, { useEffect, useState } from 'react';
import { encodeURL } from '@solana/pay';
import BigNumber from 'bignumber.js';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { toDataURL } from 'qrcode';
import { useNavigate, useLocation } from 'react-router-dom';
import { STORE_WALLET, ACCEPTED_TOKEN_MINT, PROCESSING_FEE as RAW_PROCESSING_FEE } from '../payment-system/config';
import Header from '../components/Header';

const PROCESSING_FEE = new BigNumber(RAW_PROCESSING_FEE);

interface CheckoutProps {
  orderAmount: number;
  orderId: string;
}

const CheckoutPage: React.FC = (): JSX.Element => {
  const [setupQr, setSetupQr] = useState<string>('');
  const [paymentQr, setPaymentQr] = useState<string>('');
  const [paymentStatus, setPaymentStatus] = useState<string>('Pending');
  const [phantomConnected, setPhantomConnected] = useState<boolean>(false);
  const [phantomPublicKey, setPhantomPublicKey] = useState<string | null>(null);
  const [invoicePath, setInvoicePath] = useState<string | null>(null);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false); // Track sign-in status
  const navigate = useNavigate();
  const location = useLocation();
  const { orderAmount, orderId } = (location.state as CheckoutProps) || {};

  useEffect(() => {
    const user = localStorage.getItem('phantomPublicKey');
    if (!user) {
      alert('You must sign in to proceed to checkout.');
      navigate('/signin');
      return;
    }
    setIsSignedIn(true);

    if (!orderId) {
      alert('Order ID is missing. Redirecting to the previous page.');
      navigate(-1); // Redirect to the previous page
      return;
    }

    const generateQRs = async () => {
      try {
        const paymentUrl: string = encodeURL({
          recipient: STORE_WALLET,
          amount: new BigNumber(orderAmount).plus(PROCESSING_FEE.dividedBy(LAMPORTS_PER_SOL)),
          splToken: ACCEPTED_TOKEN_MINT,
          reference: [new PublicKey(orderId)],
          label: 'HaloTech LLC Store',
          message: `Pay with ${orderAmount} Mint Token + ${PROCESSING_FEE.toFixed(3)} SOL fee`,
        }).toString();
        const paymentQrCode = await toDataURL(paymentUrl);
        setPaymentQr(paymentQrCode);
      } catch (err) {
        console.error('QR code generation failed:', err);
      }
    };
    generateQRs();
  }, [orderAmount, orderId, navigate]);

  const connectPhantom = async () => {
    if ('solana' in window) {
      try {
        const provider = (window as any).solana;
        if (provider.isPhantom) {
          const response = await provider.connect();
          console.log('Connected with public key:', response.publicKey.toString());
          setPhantomConnected(true);
          setPhantomPublicKey(response.publicKey.toString());
          // Auto-create account logic here
        }
      } catch (err) {
        console.error('Phantom connection failed:', err);
      }
    } else {
      alert('Phantom wallet not found. Please install it to continue.');
    }
  };

  const handleDiscordLogin = () => {
    window.location.href = 'http://localhost:3001/api/auth/discord'; // Redirect to Discord OAuth
  };

  const handleDownloadInvoice = () => {
    if (invoicePath) {
      window.open(`http://localhost:3001/${invoicePath}`, '_blank');
    } else {
      alert('Invoice is not available yet.');
    }
  };

  const handlePayment = () => {
    if (!phantomConnected || !phantomPublicKey) {
      alert('Please connect your Phantom Wallet to proceed.');
      return;
    }
    alert('Redirecting to payment...');
    // Add logic to handle payment here
  };

  return (
    <>
      <Header />
      <div className="tech-container">
        <div className="tech-card p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Checkout</h2>
          {!phantomConnected && (
            <div className="text-center mb-6">
              <button className="tech-button" onClick={connectPhantom}>
                Connect Phantom Wallet
              </button>
            </div>
          )}
          <div className="text-center mb-6">
            <button className="tech-button bg-purple-500 text-white" onClick={handleDiscordLogin}>
              Sign in with Discord
            </button>
          </div>
          <p className="text-lg text-center mb-6">
            Total: <span className="font-semibold">{orderAmount} $HaloTech</span> + <span className="font-semibold">0.007 SOL fee</span>
          </p>
          <p className={`text-center mb-6 ${paymentStatus === 'Confirmed' ? 'text-green-600' : 'text-red-600'}`}>
            Status: <span className="font-semibold">{paymentStatus}</span>
          </p>
          {paymentStatus === 'Confirmed' && (
            <div className="text-center">
              <button className="tech-button bg-green-500 text-white" onClick={handleDownloadInvoice}>
                Download Invoice
              </button>
            </div>
          )}
          <div className="text-center">
            <button className="tech-button bg-blue-500 text-white" onClick={handlePayment}>
              Proceed to Pay
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">New to Solana?</h3>
              <p className="text-sm text-black mb-4">Scan to download Phantom and set up your wallet:</p>
              {setupQr && <img className="mx-auto border border-gray-300 rounded-lg shadow-md" draggable={false} src={setupQr} alt="Setup Phantom QR" />}
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Pay with Phantom</h3>
              <p className="text-sm text-black mb-4">Scan to pay with $HaloTech:</p>
              {paymentQr && <img className="mx-auto border border-gray-300 rounded-lg shadow-md" draggable={false} src={paymentQr} alt="Payment QR" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;