Next Steps
---

### Next Steps

1. **Backend Support for Account Creation**:
   - Add an endpoint to create accounts using the public key from Phantom.
   - Use Google OAuth for additional login options.

2. **Frontend for Google Login**:
   - Add a button for Google login and integrate it with the backend.

Let me know if you need help with these additional steps!

Made changes.



Step 1: Backend Requirements
Purpose: Verify Solana transactions (altcoin payment to STORE_WALLET and SOL fee to PROCESSOR_WALLET).

Tech Stack: Node.js, Express, TypeScript, @solana/web3.js.

Integration: Works with CheckoutPage.tsx by exposing an /api/verify-payment/:orderId endpoint.

Location: Placed in src/server/ within your current structure.

Step 2: Update Project Structure
Your current structure:

src/
├── pages/
│   ├── CheckoutPage.tsx
│   └── ...
├── payment-system/
│   ├── config.ts
│   └── verifyPayment.ts
└── ...

Add a server/ directory:
bash

mkdir -p src/server
touch src/server/index.ts

Updated structure:

src/
├── pages/
│   ├── CheckoutPage.tsx
│   └── ...
├── payment-system/
│   ├── config.ts
│   └── verifyPayment.ts
├── server/
│   └── index.ts
└── ...

Step 3: Install Backend Dependencies
Ensure these are in your package.json:
bash

npm install express @solana/web3.js
npm install --save-dev @types/express @types/node typescript

Update package.json scripts:
json

{
  "scripts": {
    "start": "vite",
    "build": "tsc && vite build",
    "server": "ts-node src/server/index.ts" // Run backend with ts-node
  }
}

Install ts-node for running TypeScript directly:
bash

npm install --save-dev ts-node

Step 4: Create the Backend
src/server/index.ts
typescript

// src/server/index.ts
import express, { Request, Response } from 'express';
import { verifyPayment } from '../payment-system/verifyPayment';

const app = express();
const PORT = 3001; // Separate from Vite’s default 3000

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

src/payment-system/verifyPayment.ts
(Already in your structure, just ensuring it’s correct):
typescript

// src/payment-system/verifyPayment.ts
import { Connection, PublicKey, ParsedTransactionWithMeta } from '@solana/web3.js';
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

src/payment-system/config.ts
(Already present, just confirming):
typescript

// src/payment-system/config.ts
import { PublicKey } from '@solana/web3.js';

export const STORE_WALLET: PublicKey = new PublicKey('YOUR_STORE_WALLET_ADDRESS');
export const PROCESSOR_WALLET: PublicKey = new PublicKey('YOUR_PROCESSOR_WALLET_ADDRESS');
export const ACCEPTED_TOKEN_MINT: PublicKey = new PublicKey('YOUR_HALOTECH_COIN_MINT_ADDRESS');
export const SOLANA_NETWORK: string = 'https://api.devnet.solana.com'; // Switch to mainnet later
export const PROCESSING_FEE: number = 0.007; // SOL fee

Step 5: Update Frontend to Use Backend
Modify CheckoutPage.tsx to poll the backend for payment verification after generating the QR code:
typescript

// src/pages/CheckoutPage.tsx
import React, { useEffect, useState } from 'react';
import { encodeURL } from '@solana/pay';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { toDataURL } from 'qrcode';
import { STORE_WALLET, PROCESSOR_WALLET, ACCEPTED_TOKEN_MINT, PROCESSING_FEE } from '../payment-system/config';
import { useLocation } from 'react-router-dom';

interface CheckoutProps {
  orderAmount: number;
  orderId: string;
}

const CheckoutPage: React.FC = () => {
  const [setupQr, setSetupQr] = useState<string>('');
  const [paymentQr, setPaymentQr] = useState<string>('');
  const [paymentStatus, setPaymentStatus] = useState<string>('Pending');
  const location = useLocation();
  const { orderAmount, orderId } = (location.state as CheckoutProps) || { orderAmount: 0.1, orderId: 'ORDER_TEST' };

  useEffect(() => {
    const generateQRs = async () => {
      try {
        const setupUrl: string = '/solana-setup.html';
        const setupQrCode = await toDataURL(setupUrl);
        setSetupQr(setupQrCode);

        const paymentUrl: string = encodeURL({
          recipient: STORE_WALLET,
          amount: orderAmount,
          splToken: ACCEPTED_TOKEN_MINT,
          additionalFee: { amount: PROCESSING_FEE, recipient: PROCESSOR_WALLET },
          reference: new PublicKey(orderId),
          label: 'HaloTech LLC Store',
          message: 'Pay with $HaloTech + 0.007 SOL fee',
        });
        const paymentQrCode = await toDataURL(paymentUrl);
        setPaymentQr(paymentQrCode);
      } catch (err) {
        console.error('QR code generation failed:', err);
      }
    };
    generateQRs();

    // Poll backend for payment status
    const pollPayment = setInterval(async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/verify-payment/${orderId}`);
        const result = await response.json();
        if (result.success) {
          setPaymentStatus('Confirmed');
          clearInterval(pollPayment);
        } else if (result.message !== 'Payment not found') {
          setPaymentStatus('Failed: ' + result.message);
          clearInterval(pollPayment);
        }
      } catch (err) {
        console.error('Payment polling failed:', err);
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(pollPayment); // Cleanup on unmount
  }, [orderAmount, orderId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Checkout</h2>
      <p>Total: {orderAmount} $HaloTech + 0.007 SOL fee</p>
      <p>Status: {paymentStatus}</p>
      <div>
        <h3>New to Solana?</h3>
        <p>Scan to download Phantom and set up your wallet:</p>
        {setupQr && <img draggable={false} src={setupQr} alt="Setup Phantom QR" />}
      </div>
      <div>
        <h3>Pay with Phantom</h3>
        <p>Scan to pay with $HaloTech:</p>
        {paymentQr && <img draggable={false} src={paymentQr} alt="Payment QR" />}
      </div>
    </div>
  );
};

export default CheckoutPage;

Changes:
Added polling to check /api/verify-payment/:orderId.

Displays payment status (Pending → Confirmed or Failed).

Step 6: Configure Codespaces for Backend
Since you’re in Codespaces:
Run Backend:
bash

npm run server

This starts the backend on port 3001.

Run Frontend:
Open a new terminal (split terminal in Codespaces):
bash

npm start

Frontend runs on port 3000 (default for Vite).

Port Forwarding:
Codespaces should auto-forward port 3000 (frontend). Check the “Ports” tab.

Manually forward port 3001:
Click “Ports” → “Add Port” → Enter 3001 → Set to “Public” if testing externally.

Access backend at https://<your-codespace-name>-3001.app.github.dev/api/verify-payment/ORDER_TEST.

Step 7: Test the Full Flow
Build Frontend:
bash

npm run build

Start Both:
Terminal 1: npm run server

Terminal 2: npm start

Test:
Go to /cart or /products, add items, and proceed to /checkout.

Scan the QR code with a Phantom wallet (devnet).

Wait for the status to update (takes a few seconds after payment).

Step 8: Commit Changes
bash

git add src/server/ src/pages/CheckoutPage.tsx package.json
git commit -m "Add backend for Solana payment verification"
git push origin main

Extending the Backend (Optional)
If you need more features:
Order Storage: Add a database (e.g., SQLite, MongoDB) to store orders.
Example endpoint: POST /api/orders to create an order.

CORS: If the frontend/backend domains differ in production:
typescript

import cors from 'cors';
app.use(cors());

bash

npm install cors @types/cors

Final Notes
Wallet Addresses: Replace placeholders in config.ts with real Solana devnet addresses for testing.

Error Handling: The backend logs errors; enhance with a UI notification if needed.

Codespaces: Use split terminals to run frontend and backend simultaneously.

