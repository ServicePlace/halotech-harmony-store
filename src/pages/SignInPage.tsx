import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PHANTOM_ICON_URL = 'https://cryptologos.cc/logos/phantom-phantom-logo.svg?v=023'; // Official Phantom Wallet icon

const SignInPage: React.FC = () => {
  const [phantomConnected, setPhantomConnected] = useState(false);
  const [phantomPublicKey, setPhantomPublicKey] = useState<string | null>(null);
  const navigate = useNavigate();

  const connectPhantom = async () => {
    console.log('Attempting to connect Phantom Wallet...');
    if ('solana' in window) {
      const provider = (window as any).solana;
      if (provider.isPhantom) {
        try {
          console.log('Phantom Wallet detected.');
          const response = await provider.connect({ onlyIfTrusted: false });
          console.log('Connected with Phantom wallet:', response.publicKey.toString());
          setPhantomConnected(true);
          setPhantomPublicKey(response.publicKey.toString());
          // Save the public key to local storage for session management
          localStorage.setItem('phantomPublicKey', response.publicKey.toString());
          // Redirect to checkout after connecting
          window.location.href = '/checkout';
        } catch (err) {
          console.error('Phantom connection failed:', err);
          alert('Failed to connect Phantom Wallet. Please try again.');
        }
      } else {
        alert('Phantom Wallet is not available. Please install it to continue.');
      }
    } else {
      alert('Phantom Wallet not found. Please install it to continue.');
    }
  };

  const handleSignIn = () => {
    // Simulate sign-in logic
    localStorage.setItem('phantomPublicKey', 'mockPublicKey');
    alert('Signed in successfully!');
    navigate('/');
  };

  return (
    <div className="tech-container">
      <div className="tech-card p-8 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
        <p className="text-lg text-black mb-6">
          Sign in using your Phantom Wallet to proceed to checkout.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <button
            className={`tech-button flex items-center justify-center gap-2 ${
              phantomConnected ? 'bg-green-500 text-white' : 'bg-[#7948FF] text-white'
            }`}
            onClick={connectPhantom}
          >
            <img src={PHANTOM_ICON_URL} alt="Phantom Icon" className="w-5 h-5" />
            {phantomConnected ? 'Phantom Connected' : 'Connect Phantom Wallet'}
          </button>
          <button onClick={handleSignIn} className="tech-button bg-halotech-yellow text-halotech-dark">
            Sign In with Phantom
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
