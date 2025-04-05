# HaloTech Harmony Store Installation Guide

## Required Dependencies
```bash
# Install Node.js
sudo apt-get update
sudo apt-get install -y nodejs

# Verify installation
node -v
npm -v

# If you prefer N|solid Runtime alternative:
sudo apt-get install -y nsolid
```

## Project Setup
```bash
# Clone and enter project directory
git clone https://github.com/your-username/halotech-harmony-store.git
cd halotech-harmony-store

# Clean existing build artifacts
rm -rf node_modules dist package-lock.json

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

## Development Workflow
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting Build Issues
```bash
# If build fails, try clearing caches:
npm cache clean --force
rm -rf node_modules/.vite

# Reinstall dependencies:
rm -rf node_modules package-lock.json
npm install

# Verify TypeScript configuration:
npx tsc --noEmit
```

## Troubleshooting Guide

### Permission Issues
If you encounter permission errors:
```bash
# Fix npm permissions
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP .

# Fix node_modules
rm -rf node_modules package-lock.json
npm install
```

### Cache Issues
If you have cache-related problems:
```bash
# Clear npm cache
npm cache clean --force

# Clear vite cache
rm -rf node_modules/.vite

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Node.js Installation
If Node.js is not installed or needs updating:
```bash
# Install Node.js on Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node -v
npm -v
```

### Development Dependencies
If you're missing development dependencies:
```bash
# Install essential dev dependencies
npm install -D typescript @types/node @vitejs/plugin-react vite
```

### Environment Setup
If environment variables are not loading:
```bash
# Create .env if it doesn't exist
touch .env

# Set proper permissions
chmod 644 .env

# Generate tsconfig if missing
npx tsc --init
```

## Common Issues and Solutions

1. **"command not found" Errors**
   - Ensure Node.js and npm are installed correctly
   - Add npm binary directory to PATH
   - Try using npx for one-off commands

2. **Build Failures**
   - Check for syntax errors in TypeScript files
   - Verify all dependencies are installed
   - Clear cache and node_modules
   - Ensure .env file is properly configured

3. **Missing Types**
   - Install necessary @types packages
   - Verify tsconfig.json configuration
   - Run `npm install` to update dependencies

4. **Vite Configuration**
   - Check vite.config.ts for proper setup
   - Verify all plugins are installed
   - Clear vite cache if needed

## Additional Tips

- Keep Node.js and npm up to date
- Use `npm outdated` to check for package updates
- Monitor console for error messages
- Check GitHub issues for known problems

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
