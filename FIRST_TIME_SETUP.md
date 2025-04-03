# First-Time Setup Guide

This guide will help you configure the HaloTech Security Store for the first time.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Solana wallet (e.g., Phantom)
- Helius API key (get one from [Helius](https://helius.xyz))

## Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/halotech-harmony-store.git
   cd halotech-harmony-store
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory with the following variables:
   ```
   VITE_STORE_WALLET=YourSolanaWalletAddressHere
   VITE_PROCESSOR_WALLET=YourProcessorWalletAddressHere
   VITE_ACCEPTED_TOKEN_MINT=YourTokenMintAddressHere
   VITE_SOLANA_NETWORK=https://api.devnet.solana.com
   VITE_PROCESSING_FEE=0.007
   VITE_CRYPTO_API_URL=https://api.coingecko.com/api/v3
   VITE_HELIUS_API_KEY=YourHeliusApiKeyHere
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:5173`.

## Security Tips

- **Do not expose API keys**: Use a backend proxy for sensitive operations.
- **Validate user inputs**: Prevent injection attacks.
- **Use HTTPS**: Ensure secure communication.

## Switching to Mainnet

To switch to Solana Mainnet:
- Update `VITE_SOLANA_NETWORK` in `.env` to `https://api.mainnet-beta.solana.com`.
- Ensure your Helius API key supports Mainnet.

For further assistance, contact the development team.
