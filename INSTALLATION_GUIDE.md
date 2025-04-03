# HaloTech Security Store Installation Guide

This document provides instructions for setting up and running the HaloTech Security online store application.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- A modern web browser

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_STORE_WALLET=YourSolanaWalletAddressHere
VITE_PROCESSOR_WALLET=YourProcessorWalletAddressHere
VITE_ACCEPTED_TOKEN_MINT=YourTokenMintAddressHere
VITE_SOLANA_NETWORK=https://api.mainnet-beta.solana.com
VITE_PROCESSING_FEE=0.007
VITE_CLERK_PUBLISHABLE_KEY=YourClerkPublishableKeyHere
VITE_CRYPTO_API_URL=https://api.coingecko.com/api/v3
```

Replace the placeholder values with your actual wallet addresses, API keys, and the crypto API URL.

## Installation Steps

1. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn
   ```

2. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

3. Open your browser and navigate to http://localhost:5173

## Features Implemented

The HaloTech Security Store includes the following features:

- ✅ Responsive design with mobile and desktop layouts
- ✅ Product catalog with filtering and search functionality
- ✅ Shopping cart system
- ✅ Cryptocurrency payment integration (Solana, Ethereum, Bitcoin)
- ✅ User authentication
- ✅ Real-time crypto ticker with token stats
- ✅ Support request system with dedicated crypto support
- ✅ Comprehensive documentation (FAQ, Crypto Guide, Privacy Policy)
- ✅ Product detail pages with specifications

## Payment System Configuration

The payment system is configured to accept Solana tokens by default. To test the payment system:

1. Ensure you have a Phantom wallet installed
2. Add some SOL to your Phantom wallet (testnet is fine for testing)
3. Go through the checkout process and select "Pay with Cryptocurrency"
4. Follow the on-screen instructions to complete the payment

## Admin Features

To access the admin features:

1. Navigate to `/import` to access the product import tool
2. Upload a CSV file with product data (see example format below)

Example CSV format:
```
id,name,price,description,category,image,stock
1,Access Control System,999.99,Advanced biometric access control system,security,product1.jpg,10
```

## Customization

You can customize the store appearance by modifying:

- Theme colors in `tailwind.config.js`
- CSS styles in `src/index.css`
- Component layouts in their respective files

## Additional Information

- The crypto ticker data is currently simulated. Connect to a real API by updating the `fetchTokenData` function in `CryptoTicker.tsx`
- The payment verification system is ready for integration with real blockchain verification

## Need Help?

If you encounter any issues:

1. Check the console for error messages
2. Verify your environment variables are correctly set
3. Ensure all dependencies are installed
4. Refer to the documentation for specific features

For further assistance, please contact the development team.
