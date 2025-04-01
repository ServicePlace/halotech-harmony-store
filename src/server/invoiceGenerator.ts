import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import { Connection } from '@solana/web3.js';
import { SOLANA_NETWORK } from '../payment-system/config';

const connection = new Connection(SOLANA_NETWORK, 'confirmed');

interface InvoiceData {
  username: string;
  email: string;
  orderId: string;
  transactionHash: string;
}

export async function generateInvoice({
  username,
  email,
  orderId,
  transactionHash,
}: InvoiceData): Promise<string> {
  // Fetch transaction details from Solana
  const transaction = await connection.getTransaction(transactionHash, {
    commitment: 'confirmed',
  });

  if (!transaction) {
    throw new Error('Transaction not found');
  }

  const transactionDetails = {
    from: transaction.transaction.message.accountKeys[0].toBase58(),
    to: transaction.transaction.message.accountKeys[1].toBase58(),
    amount: (transaction.meta?.postBalances[1] - transaction.meta?.preBalances[1]) / 1e9, // Convert lamports to SOL
    timestamp: new Date(transaction.blockTime! * 1000).toLocaleString(),
    hash: transactionHash, // Use transaction hash as the invoice number
  };

  const invoicePath = path.join(__dirname, `invoices/invoice_${transactionHash}.pdf`);
  const doc = new PDFDocument();

  // Create the PDF
  doc.pipe(fs.createWriteStream(invoicePath));

  // Header
  doc.fontSize(20).text('HaloTech Invoice', { align: 'center' });
  doc.moveDown();

  // User Details
  doc.fontSize(12).text(`Name: ${username}`);
  doc.text(`Email: ${email}`);
  doc.text(`Order ID: ${orderId}`);
  doc.text(`Invoice Number: ${transactionHash}`); // Use transaction hash here
  doc.moveDown();

  // Transaction Details
  doc.text('Transaction Details:');
  doc.text(`From: ${transactionDetails.from}`);
  doc.text(`To: ${transactionDetails.to}`);
  doc.text(`Amount: ${transactionDetails.amount} SOL`);
  doc.text(`Timestamp: ${transactionDetails.timestamp}`);
  doc.text(`Transaction Hash: ${transactionDetails.hash}`);
  doc.moveDown();

  // Footer
  doc.text('Thank you for your purchase!', { align: 'center' });

  doc.end();

  console.log(`Invoice generated at: ${invoicePath}`);
  return invoicePath;
}
