import { PublicKey } from '@solana/web3.js';

function validateBase58(value: string, name: string): string {
  if (!value || !/^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/.test(value)) {
    throw new Error(`Invalid Base58 value for ${name}: ${value}`);
  }
  return value;
}

export const STORE_WALLET = new PublicKey(validateBase58(import.meta.env.VITE_STORE_WALLET, 'VITE_STORE_WALLET'));
export const PROCESSOR_WALLET = new PublicKey(validateBase58(import.meta.env.VITE_PROCESSOR_WALLET, 'VITE_PROCESSOR_WALLET'));
export const ACCEPTED_TOKEN_MINT = new PublicKey(validateBase58(import.meta.env.VITE_ACCEPTED_TOKEN_MINT, 'VITE_ACCEPTED_TOKEN_MINT'));
export const SOLANA_NETWORK = import.meta.env.VITE_SOLANA_NETWORK || 'https://api.devnet.solana.com';
export const PROCESSING_FEE = parseFloat(import.meta.env.VITE_PROCESSING_FEE || '0.007');
