import { Connection, PublicKey, ParsedTransactionWithMeta } from '@solana/web3.js';
import { SOLANA_NETWORK, STORE_WALLET, PROCESSOR_WALLET, ACCEPTED_TOKEN_MINT, PROCESSING_FEE } from './config';

const connection = new Connection(SOLANA_NETWORK, 'confirmed');

export async function verifyPayment(orderId: string) {
  try {
    const reference = new PublicKey(orderId);
    const signatures = await connection.getSignaturesForAddress(reference, { limit: 10 });
    if (!signatures.length) return { success: false, message: 'Payment not found' };

    const tx = await connection.getParsedTransaction(signatures[0].signature, 'confirmed');
    if (!tx || !tx.meta) return { success: false, message: 'Invalid transaction' };

    const tokenTransfer = tx.transaction.message.instructions.find(
      (ix) => ix.programId.toBase58() === 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    );
    const solTransfer = tx.transaction.message.instructions.find(
      (ix) => ix.programId.toBase58() === '11111111111111111111111111111111'
    );

    const tokenValid = tokenTransfer?.parsed?.info?.destination === STORE_WALLET.toBase58() &&
      tokenTransfer?.parsed?.info?.mint === ACCEPTED_TOKEN_MINT.toBase58();
    const feeValid = solTransfer?.parsed?.info?.destination === PROCESSOR_WALLET.toBase58() &&
      solTransfer?.parsed?.info?.lamports === PROCESSING_FEE * LAMPORTS_PER_SOL;

    if (tokenValid && feeValid) {
      return { success: true, message: 'Payment verified' };
    }
    return { success: false, message: 'Payment verification failed' };
  } catch (error) {
    console.error('Verification error:', error);
    return { success: false, message: 'Error verifying payment' };
  }
}
