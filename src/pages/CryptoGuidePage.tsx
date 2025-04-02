
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, AlertCircle, Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import SupportDialog from '@/components/SupportDialog';

const CryptoGuidePage: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">Crypto Payment Guide</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Learn how to pay for HaloTech security solutions using cryptocurrencies
      </p>
      
      <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="payment-process">Payment Process</TabsTrigger>
          <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
        </TabsList>
        
        <TabsContent value="getting-started" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started with Crypto Payments</CardTitle>
              <CardDescription>
                Everything you need to know before making your first crypto payment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Supported Cryptocurrencies</h3>
                <p className="text-muted-foreground mb-4">
                  HaloTech currently accepts the following cryptocurrencies for payment:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 border rounded-md">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Solana</p>
                      <p className="text-xs text-muted-foreground">Native token</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 border rounded-md">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Ethereum</p>
                      <p className="text-xs text-muted-foreground">ERC-20 tokens</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 border rounded-md">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Bitcoin</p>
                      <p className="text-xs text-muted-foreground">BTC only</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-medium mb-2">Setting Up a Wallet</h3>
                <p className="text-muted-foreground mb-4">
                  Before you can make a crypto payment, you'll need a digital wallet. We recommend the following options:
                </p>
                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-1">Phantom Wallet (Recommended for Solana)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Phantom is a user-friendly wallet for Solana blockchain that works as a browser extension or mobile app.
                    </p>
                    <Button size="sm" variant="outline" className="text-xs" asChild>
                      <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer">
                        Download Phantom <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-1">MetaMask (For Ethereum)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      MetaMask is the most popular Ethereum wallet that works across browsers and mobile devices.
                    </p>
                    <Button size="sm" variant="outline" className="text-xs" asChild>
                      <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
                        Download MetaMask <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-1">BlueWallet (For Bitcoin)</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      BlueWallet is a simple yet powerful Bitcoin wallet available for iOS and Android.
                    </p>
                    <Button size="sm" variant="outline" className="text-xs" asChild>
                      <a href="https://bluewallet.io/" target="_blank" rel="noopener noreferrer">
                        Download BlueWallet <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Getting Crypto</h3>
                <p className="text-muted-foreground mb-4">
                  You can acquire cryptocurrency through these popular exchanges:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="outline" asChild>
                    <a href="https://www.coinbase.com/" target="_blank" rel="noopener noreferrer" className="justify-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full mr-2"></div>
                      Coinbase
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a href="https://www.binance.com/" target="_blank" rel="noopener noreferrer" className="justify-start">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full mr-2"></div>
                      Binance
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a href="https://www.kraken.com/" target="_blank" rel="noopener noreferrer" className="justify-start">
                      <div className="w-6 h-6 bg-purple-500 rounded-full mr-2"></div>
                      Kraken
                    </a>
                  </Button>
                  
                  <Button variant="outline" asChild>
                    <a href="https://ftx.us/" target="_blank" rel="noopener noreferrer" className="justify-start">
                      <div className="w-6 h-6 bg-teal-500 rounded-full mr-2"></div>
                      FTX
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-700">Important Note</h4>
                    <p className="text-sm text-blue-600">
                      Always ensure you're sending the correct type of cryptocurrency to the appropriate address. Sending assets to the wrong blockchain can result in permanent loss of funds.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button asChild>
                  <a href="#payment-process" onClick={() => document.querySelector('[data-value="payment-process"]')?.click()}>
                    Next: Payment Process <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment-process" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>The Payment Process</CardTitle>
              <CardDescription>
                Step-by-step guide to completing your cryptocurrency payment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-halotech-yellow text-black flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Select Crypto Payment at Checkout</h3>
                    <p className="text-muted-foreground">
                      On the checkout page, select "Pay with Cryptocurrency" as your payment method and then choose your preferred cryptocurrency (Solana, Ethereum, or Bitcoin).
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-halotech-yellow text-black flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Review Payment Details</h3>
                    <p className="text-muted-foreground mb-3">
                      You'll be shown the exact amount to pay in your chosen cryptocurrency, along with the wallet address to send to. Double-check all details before proceeding.
                    </p>
                    <div className="bg-gray-100 p-3 rounded-md mb-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Example Solana Address:</span>
                        <div className="flex items-center">
                          <code className="text-xs bg-white px-2 py-1 rounded border mr-2">HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH</code>
                          <button onClick={() => copyToClipboard('HN7cABqLq46Es1jh92dQQisAq662SmxELLLsHHe4YWrH')} className="text-gray-500 hover:text-gray-700">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-md">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Example Amount:</span>
                        <div className="flex items-center">
                          <code className="text-xs bg-white px-2 py-1 rounded border mr-2">2.45 SOL</code>
                          <button onClick={() => copyToClipboard('2.45')} className="text-gray-500 hover:text-gray-700">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-halotech-yellow text-black flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Complete the Payment</h3>
                    <p className="text-muted-foreground mb-3">
                      Open your wallet application and send the exact amount to the provided address. You can either manually enter the address or scan the QR code if available.
                    </p>
                    <div className="flex justify-center">
                      <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-md mb-2">
                        <p className="text-xs text-gray-500">QR Code Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-halotech-yellow text-black flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Wait for Confirmation</h3>
                    <p className="text-muted-foreground">
                      Once you've sent the payment, the system will automatically verify the transaction. This typically takes 1-2 minutes for Solana, 5-20 minutes for Ethereum, and 10-60 minutes for Bitcoin, depending on network congestion.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-halotech-yellow text-black flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Receive Order Confirmation</h3>
                    <p className="text-muted-foreground">
                      After the payment is confirmed, you'll receive an order confirmation email with your receipt and order details. The transaction ID will be included for your reference.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md border border-green-200">
                <div className="flex">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-700">Payment Benefits</h4>
                    <p className="text-sm text-green-600">
                      By paying with cryptocurrency, you receive a 2% discount on your entire order and gain access to exclusive features like priority support and extended warranty options.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4 flex justify-between">
                <Button variant="outline" asChild>
                  <a href="#getting-started" onClick={() => document.querySelector('[data-value="getting-started"]')?.click()}>
                    Back: Getting Started
                  </a>
                </Button>
                <Button asChild>
                  <a href="#troubleshooting" onClick={() => document.querySelector('[data-value="troubleshooting"]')?.click()}>
                    Next: Troubleshooting <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="troubleshooting" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Troubleshooting</CardTitle>
              <CardDescription>
                Solutions to common issues with cryptocurrency payments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-lg mb-2">Payment Not Detected</h3>
                  <p className="text-muted-foreground mb-2">
                    If your payment has been sent but not detected by our system:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Verify that you sent the exact amount requested</li>
                    <li>Check that you sent to the correct wallet address</li>
                    <li>Confirm the transaction was successful in your wallet or block explorer</li>
                    <li>Wait at least 10 minutes as blockchain confirmations can take time</li>
                    <li>If the issue persists, contact support with your transaction ID</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-lg mb-2">Incorrect Amount Sent</h3>
                  <p className="text-muted-foreground mb-2">
                    If you accidentally sent an incorrect amount:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>If you sent less than required, you'll need to send another transaction for the remaining amount</li>
                    <li>If you sent more than required, please contact our support team with your transaction details for a refund</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-lg mb-2">Wrong Network or Token Sent</h3>
                  <p className="text-muted-foreground mb-2">
                    If you sent using the wrong cryptocurrency or network:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Contact our support team immediately with your transaction details</li>
                    <li>Recovery may be possible in some cases, but not guaranteed</li>
                    <li>Always double-check the network and token type before sending</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-lg mb-2">Wallet Connection Issues</h3>
                  <p className="text-muted-foreground mb-2">
                    If you're having trouble connecting your wallet:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Ensure your wallet has the latest update</li>
                    <li>Try refreshing the page or using a different browser</li>
                    <li>Disable any browser extensions that might interfere</li>
                    <li>For mobile wallets, ensure you're using the in-app browser when available</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-yellow-700">Need More Help?</h4>
                    <p className="text-sm text-yellow-600 mb-3">
                      If you're still experiencing issues with your cryptocurrency payment, our dedicated crypto support team is available to assist you.
                    </p>
                    <SupportDialog>
                      <Button size="sm" variant="outline" className="bg-white">
                        Contact Crypto Support
                      </Button>
                    </SupportDialog>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4 flex justify-between">
                <Button variant="outline" asChild>
                  <a href="#payment-process" onClick={() => document.querySelector('[data-value="payment-process"]')?.click()}>
                    Back: Payment Process
                  </a>
                </Button>
                <Button asChild>
                  <Link to="/products">
                    Shop Products
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CryptoGuidePage;
