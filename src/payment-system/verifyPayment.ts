import { Connection, PublicKey, ParsedTransactionWithMeta, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { SOLANA_NETWORK, STORE_WALLET, PROCESSOR_WALLET, ACCEPTED_TOKEN_MINT, PROCESSING_FEE } from './config';

const connection: Connection = new Connection(SOLANA_NETWORK, 'confirmed');

interface VerificationResult {
  success: boolean;
  message: string;
}

export async function verifyPayment(orderId: string): Promise<VerificationResult> {
  try {
    const reference: PublicKey = new PublicKey(orderId);
    const signatures = await connection.getSignaturesForAddress(reference, { limit: 10 });
    if (!signatures.length) return { success: false, message: 'Payment not found' };

    const tx: ParsedTransactionWithMeta | null = await connection.getParsedTransaction(signatures[0].signature, 'confirmed');
    if (!tx || !tx.meta) return { success: false, message: 'Invalid transaction' };

    const tokenTransfer = tx.transaction.message.instructions.find(
      (ix) => ix.programId.toBase58() === 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    ) as any;
    const tokenValid: boolean = tokenTransfer &&
      tokenTransfer.parsed.info.destination === STORE_WALLET.toBase58() &&
      tokenTransfer.parsed.info.mint === ACCEPTED_TOKEN_MINT.toBase58();

    const solTransfer = tx.transaction.message.instructions.find(
      (ix) => ix.programId.toBase58() === '11111111111111111111111111111111'
    ) as any;
    const feeValid: boolean = solTransfer &&
      solTransfer.parsed.info.destination === PROCESSOR_WALLET.toBase58() &&
      solTransfer.parsed.info.lamports === PROCESSING_FEE * LAMPORTS_PER_SOL;

    if (tokenValid && feeValid) {
      return { success: true, message: 'Payment verified' };
    }
    return { success: false, message: 'Payment verification failed' };
  } catch (error) {
    console.error('Verification error:', error);
    return { success: false, message: 'Error verifying payment' };
  }
}

const SOLANA_NETWORK = process.env.VITE_SOLANA_NETWORK || 'https://api.devnet.solana.com';

export const verifyPayment = async (orderId: string, recipient: string): Promise<boolean> => {
  try {
    const connection = new Connection(SOLANA_NETWORK, 'confirmed');
    const recipientPublicKey = new PublicKey(recipient);

    // Fetch transactions for the recipient
    const transactions = await connection.getConfirmedSignaturesForAddress2(recipientPublicKey, { limit: 10 });

    // Check if any transaction matches the orderId
    for (const tx of transactions) {
      const transactionDetails = await connection.getParsedTransaction(tx.signature);
      if (transactionDetails?.meta?.postTokenBalances?.some(balance => balance.owner === orderId)) {
        return true; // Payment verified
      }
    }

    return false; // Payment not found
  } catch (error) {
    console.error('Error verifying payment:', error);
    return false;
  }
};
