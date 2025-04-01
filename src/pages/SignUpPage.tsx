import React, { useState } from 'react';

const PHANTOM_ICON_URL = 'https://cryptologos.cc/logos/phantom-phantom-logo.svg?v=023'; // Official Phantom Wallet icon

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phantomConnected, setPhantomConnected] = useState(false);
  const [phantomPublicKey, setPhantomPublicKey] = useState<string | null>(null);

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

  const handleSignUp = async () => {
    if (!email || !phantomPublicKey) {
      alert('Please provide your email and connect your Phantom wallet.');
      return;
    }

    try {
      const response = await fetch('/api/create-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phantomPublicKey }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Profile created successfully!');
      } else {
        alert(`Profile creation failed: ${result.message}`);
      }
    } catch (err) {
      console.error('Profile creation failed:', err);
      alert('An error occurred while creating your profile. Please try again.');
    }
  };

  return (
    <div className="tech-container">
      <div className="tech-card p-8 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        <p className="text-lg text-muted mb-6">
          Create your account using your email and Phantom Wallet.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="tech-input"
          />
          <button
            className={`tech-button flex items-center justify-center gap-2 ${
              phantomConnected ? 'bg-green-500 text-white' : 'bg-[#7948FF] text-white'
            }`}
            onClick={connectPhantom}
          >
            <img src={PHANTOM_ICON_URL} alt="Phantom Icon" className="w-5 h-5" />
            {phantomConnected ? 'Phantom Connected' : 'Connect Phantom Wallet'}
          </button>
          <button className="tech-button bg-green-500 text-white" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
