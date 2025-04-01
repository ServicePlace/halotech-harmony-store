import { PublicKey } from '@solana/web3.js';

export const STORE_WALLET: PublicKey = new PublicKey(import.meta.env.VITE_STORE_WALLET!);
export const PROCESSOR_WALLET: PublicKey = new PublicKey(import.meta.env.VITE_PROCESSOR_WALLET!);
export const ACCEPTED_TOKEN_MINT: PublicKey = new PublicKey(import.meta.env.VITE_ACCEPTED_TOKEN_MINT!);
export const SOLANA_NETWORK: string = import.meta.env.VITE_SOLANA_NETWORK!;
export const PROCESSING_FEE: number = parseFloat(import.meta.env.VITE_PROCESSING_FEE!);
