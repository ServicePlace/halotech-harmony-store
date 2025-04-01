import express from 'express';
import { Request, Response } from 'express';
import session from 'express-session';
import cors from 'cors';
import dotenv from 'dotenv';
import { verifyPayment } from '../payment-system/verifyPayment';
import { generateInvoice } from './invoiceGenerator';
import path from 'path';

dotenv.config(); // Load .env variables

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-session-secret',
  resave: false,
  saveUninitialized: false,
}));

// Serve static files (e.g., invoices)
app.use('/invoices', express.static(path.join(__dirname, 'invoices')));

// Endpoint to create a profile using Phantom Wallet and email
app.post('/api/create-profile', async (req: Request, res: Response) => {
  const { email, phantomPublicKey } = req.body;

  if (!email || !phantomPublicKey) {
    return res.status(400).json({ success: false, message: 'Email and Phantom public key are required.' });
  }

  try {
    // Replace this with actual database logic
    const userProfile = {
      email,
      phantomPublicKey,
      createdAt: new Date(),
    };

    console.log('Profile created:', userProfile);

    // Simulate saving to a database (replace with actual DB logic)
    // Example: await database.saveUserProfile(userProfile);

    // Return success response
    res.status(201).json({ success: true, message: 'Profile created successfully.', data: userProfile });
  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// Endpoint to verify payment
app.get('/api/verify-payment/:orderId', async (req: Request, res: Response) => {
  const { orderId } = req.params;

  try {
    const result = await verifyPayment(orderId);
    res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// Endpoint to generate an invoice
app.post('/api/generate-invoice', async (req: Request, res: Response) => {
  const { username, email, orderId, transactionHash } = req.body;

  if (!username || !email || !orderId || !transactionHash) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const invoicePath = await generateInvoice({ username, email, orderId, transactionHash });
    res.status(201).json({ success: true, message: 'Invoice generated successfully.', invoicePath });
  } catch (error) {
    console.error('Error generating invoice:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
