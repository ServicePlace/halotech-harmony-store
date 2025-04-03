import { PublicKey } from '@solana/web3.js';

export const STORE_WALLET = import.meta.env.VITE_STORE_WALLET;
export const PROCESSOR_WALLET = import.meta.env.VITE_PROCESSOR_WALLET;
export const ACCEPTED_TOKEN_MINT = import.meta.env.VITE_ACCEPTED_TOKEN_MINT;
export const SOLANA_NETWORK = import.meta.env.VITE_SOLANA_NETWORK;
export const PROCESSING_FEE = parseFloat(import.meta.env.VITE_PROCESSING_FEE || '0.007');
