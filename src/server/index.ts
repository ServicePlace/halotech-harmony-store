import express, { Request, Response } from 'express';
import { verifyPayment } from '../payment-system/verifyPayment';

const app = express();
const PORT = 3001; // Backend runs on port 3001

app.use(express.json());

// Endpoint to verify Solana payment
app.get('/api/verify-payment/:orderId', async (req: Request, res: Response) => {
  const { orderId } = req.params;
  try {
    const result = await verifyPayment(orderId);
    res.status(result.success ? 200 : 400).json(result);
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
