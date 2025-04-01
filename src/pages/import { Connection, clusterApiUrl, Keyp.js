import { Connection, clusterApiUrl, Keypair } from '@solana/web3.js';
import { createQR, encodeURL } from '@solana/pay';

// Initialize Solana connection
const connection = new Connection(clusterApiUrl('mainnet-beta'));

// Merchant's Solana wallet address
const recipient = 'YourSolanaWalletAddressHere';

// Payment details
const amount = 1; // Amount in SOL
const reference = new Keypair().publicKey; // Unique reference for the transaction

// Encode payment URL
const paymentURL = encodeURL({
  recipient,
  amount,
  reference,
  label: 'Your Store Name',
  message: 'Thank you for your purchase!',
});

// Generate QR code for payment
const qrCode = createQR(paymentURL, 512);
document.getElementById('qr-container').appendChild(qrCode);