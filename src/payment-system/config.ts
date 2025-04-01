import { PublicKey } from '@solana/web3.js';

export const STORE_WALLET = new PublicKey('YOUR_STORE_WALLET_ADDRESS');
export const PROCESSOR_WALLET = new PublicKey('YOUR_PROCESSOR_WALLET_ADDRESS');
export const ACCEPTED_TOKEN_MINT = new PublicKey('YOUR_HALOTECH_COIN_MINT_ADDRESS');
export const SOLANA_NETWORK = 'https://api.devnet.solana.com'; // Use mainnet for production
export const PROCESSING_FEE = 0.007; // Fee in SOL
