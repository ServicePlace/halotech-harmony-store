import { useState } from 'react';
import { connectPhantomWallet } from '../utils/phantomWallet';
// ...existing code...

const Home = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    try {
      const address = await connectPhantomWallet();
      setWalletAddress(address);
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  return (
    <div>
      {/* ...existing code... */}
      <button onClick={handleConnectWallet}>Connect Phantom Wallet</button>
      {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
      {/* ...existing code... */}
    </div>
  );
};

export default Home;