
import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { verifyPayment } from '../payment-system/verifyPayment';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, '../../public')));

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Payment verification endpoint
app.get('/api/verify-payment/:orderId', async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    if (!orderId) {
      return res.status(400).json({ success: false, message: 'Order ID is required' });
    }

    const result = await verifyPayment(orderId);
    return res.json(result);
  } catch (error) {
    console.error('Error verifying payment:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Invoice generation endpoint
app.post('/api/generate-invoice', async (req: Request, res: Response) => {
  try {
    const { order } = req.body;
    if (!order) {
      return res.status(400).json({ success: false, message: 'Order details are required' });
    }

    // Here you would typically generate an invoice PDF
    // For this example, we're just sending back a success response
    return res.json({ 
      success: true, 
      message: 'Invoice generated successfully',
      invoiceUrl: '/invoices/sample-invoice.pdf'
    });
  } catch (error) {
    console.error('Error generating invoice:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Crypto payment processing endpoint
app.post('/api/process-crypto-payment', async (req: Request, res: Response) => {
  try {
    const { amount, wallet, token } = req.body;
    if (!amount || !wallet || !token) {
      return res.status(400).json({ success: false, message: 'Payment details are required' });
    }

    // Here you would process the crypto payment
    // For this example, we're just sending back a success response
    return res.json({
      success: true,
      message: 'Payment processed successfully',
      transactionId: `tx_${Date.now()}`
    });
  } catch (error) {
    console.error('Error processing payment:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Fallback route for SPA
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
