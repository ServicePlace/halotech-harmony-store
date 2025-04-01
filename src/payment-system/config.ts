import { PublicKey } from '@solana/web3.js';

export const STORE_WALLET = new PublicKey(import.meta.env.VITE_STORE_WALLET || ''); // Use .env value or fallback to empty
export const PROCESSOR_WALLET = new PublicKey(import.meta.env.VITE_PROCESSOR_WALLET || '');
export const ACCEPTED_TOKEN_MINT = new PublicKey(import.meta.env.VITE_ACCEPTED_TOKEN_MINT || '');
export const SOLANA_NETWORK = import.meta.env.VITE_SOLANA_NETWORK || 'https://api.devnet.solana.com'; // Default to devnet
export const PROCESSING_FEE = parseFloat(import.meta.env.VITE_PROCESSING_FEE || '0.007'); // Default to 0.007 SOL
