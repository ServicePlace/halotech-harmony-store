
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import fs from 'fs';
import path from 'path';
import { Connection, PublicKey } from '@solana/web3.js';
import { SOLANA_NETWORK } from '../payment-system/config';

// Temporary invoice generator function until we fix the import
const createInvoice = async ({ orderId, customerName, customerEmail, items }) => {
  const invoicePath = `invoices/${orderId}.pdf`;
  // Simple implementation that would be replaced by the actual invoice generator
  fs.writeFileSync(invoicePath, JSON.stringify({ orderId, customerName, customerEmail, items }));
  return invoicePath;
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/invoices', express.static('invoices'));

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-session-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Fix route handler implementations
app.get('/api/verify-payment/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    const connection = new Connection(SOLANA_NETWORK);
    const signatures = await connection.getConfirmedSignaturesForAddress2(
      new PublicKey(orderId),
      { limit: 1 }
    );

    if (signatures && signatures.length > 0) {
      return res.json({ success: true, message: 'Payment confirmed' });
    }
    return res.json({ success: false, message: 'Payment not found' });
  } catch (error) {
    console.error('Payment verification error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/generate-invoice', async (req, res) => {
  try {
    const { orderId, customerName, customerEmail, items } = req.body;
    const invoicePath = await createInvoice({ orderId, customerName, customerEmail, items });
    return res.json({ success: true, invoicePath });
  } catch (error) {
    console.error('Invoice generation error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/api/check-connection', async (req, res) => {
  try {
    const connection = new Connection(SOLANA_NETWORK);
    const version = await connection.getVersion();
    return res.json({ success: true, version });
  } catch (error) {
    console.error('Connection check error:', error);
    return res.status(500).json({ success: false, message: 'Could not connect to Solana network' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
