declare global {
  interface Window {
    ethereum?: any;
    solana?: any;
  }
}

export const initializeWallet = async () => {
  try {
    // Check for Phantom Wallet
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    if (!isPhantomInstalled) {
      throw new Error('Phantom wallet is not installed');
    }

    // Initialize connection
    const resp = await window.solana.connect();
    return resp.publicKey.toString();
  } catch (error) {
    console.error('Error initializing wallet:', error);
    throw error;
  }
};

export const initializeEthereum = async () => {
  try {
    if (typeof window.ethereum !== 'undefined') {
      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      return accounts[0];
    }
    throw new Error('No Ethereum wallet found');
  } catch (error) {
    console.error('Error connecting to Ethereum wallet:', error);
    throw error;
  }
};
