
import React, { useState } from 'react';
import { Copy, Check, Wrench, Tool, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import SupportDialog from '@/components/SupportDialog';

const CryptoGuidePage: React.FC = () => {
  const [copiedFields, setCopiedFields] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string, field: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedFields((prev) => ({ ...prev, [field]: true }));
        setTimeout(() => {
          setCopiedFields((prev) => ({ ...prev, [field]: false }));
        }, 2000);
      });
    } else {
      // Fallback for browsers that don't support the clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedFields((prev) => ({ ...prev, [field]: true }));
        setTimeout(() => {
          setCopiedFields((prev) => ({ ...prev, [field]: false }));
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SupportDialog />
      <h1 className="text-3xl font-bold text-center mb-6">Crypto Guide</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-full md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Get Started with Crypto</CardTitle>
              <CardDescription>A simple guide for beginners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  New to the world of cryptocurrencies? Don't worry! This guide will help you understand the basics and get started with your crypto journey.
                </p>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">What You'll Need:</h3>
                  <div className="pl-4 space-y-1">
                    <p className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> A Crypto Wallet (e.g., Phantom)</p>
                    <p className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Some SOL for transaction fees</p>
                    <p className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Basic understanding of blockchain</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Resources:</h3>
                  <div className="pl-4 space-y-1">
                    <p className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Solana Documentation</p>
                    <p className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Phantom Wallet Guide</p>
                    <p className="flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Crypto Security Best Practices</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Visit Solana Learn</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-full md:col-span-2">
          <Tabs defaultValue="wallets" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="wallets">Wallets</TabsTrigger>
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="wallets" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Setting Up Phantom Wallet</CardTitle>
                  <CardDescription>Your gateway to Solana</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Phantom is a popular crypto wallet for Solana. Follow these steps to set up your wallet:
                  </p>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Installation:</h3>
                    <div className="pl-4">
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Visit <a href="https://phantom.app" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">phantom.app</a></li>
                        <li>Download the extension for your browser</li>
                        <li>Follow the installation instructions</li>
                      </ol>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Creating a Wallet:</h3>
                    <div className="pl-4">
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Click "Create a new wallet"</li>
                        <li>Write down your recovery phrase</li>
                        <li>Keep your recovery phrase safe</li>
                        <li>Set a password</li>
                      </ol>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Funding Your Wallet:</h3>
                    <div className="pl-4">
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Copy your wallet address</li>
                        <li>Purchase SOL from an exchange</li>
                        <li>Send SOL to your wallet address</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="flex items-center gap-2" onClick={() => handleCopy("https://phantom.app", "phantom")}>
                    {copiedFields.phantom ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copiedFields.phantom ? "Copied!" : "Copy Phantom URL"}
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Recommended Wallets</CardTitle>
                  <CardDescription>Alternatives to Phantom</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 rounded-full p-2">
                        <Wrench className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Solflare</h3>
                        <p className="text-sm text-gray-600">A feature-rich Solana wallet with staking support.</p>
                        <Button variant="ghost" size="sm" className="mt-1 h-7 px-2" onClick={() => handleCopy("https://solflare.com", "solflare")}>
                          {copiedFields.solflare ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                          {copiedFields.solflare ? "Copied!" : "Copy URL"}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-purple-100 rounded-full p-2">
                        <Wrench className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Backpack</h3>
                        <p className="text-sm text-gray-600">A multi-chain crypto wallet with xNFT support.</p>
                        <Button variant="ghost" size="sm" className="mt-1 h-7 px-2" onClick={() => handleCopy("https://backpack.app", "backpack")}>
                          {copiedFields.backpack ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                          {copiedFields.backpack ? "Copied!" : "Copy URL"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tokens" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Understanding Crypto Tokens</CardTitle>
                  <CardDescription>The basics of digital assets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Cryptocurrencies and tokens are digital assets that use cryptography for security. Here are some key concepts:
                  </p>

                  <div className="space-y-3">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <h3 className="font-semibold mb-1">Native Cryptocurrencies</h3>
                      <p className="text-sm">Coins like SOL that are native to their blockchain and used for gas fees and governance.</p>
                    </div>

                    <div className="bg-gray-100 p-3 rounded-lg">
                      <h3 className="font-semibold mb-1">Tokens</h3>
                      <p className="text-sm">Assets created on existing blockchains like SPL tokens on Solana.</p>
                    </div>

                    <div className="bg-gray-100 p-3 rounded-lg">
                      <h3 className="font-semibold mb-1">Fungible vs Non-Fungible</h3>
                      <p className="text-sm">Fungible tokens are interchangeable (like SOL); Non-fungible tokens (NFTs) are unique.</p>
                    </div>

                    <div className="bg-gray-100 p-3 rounded-lg">
                      <h3 className="font-semibold mb-1">Stablecoins</h3>
                      <p className="text-sm">Tokens pegged to fiat currencies like USDC or USDT.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>HaloTech Token</CardTitle>
                  <CardDescription>Our native ecosystem token</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The HaloTech token is the native token of our ecosystem, used for purchases and rewards within our platform.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg space-y-2 border border-blue-100">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Token Address:</span>
                      <div className="flex items-center">
                        <code className="bg-blue-100 px-2 py-1 rounded text-sm mr-2">mntEiNGoTrqjkL1BSi18fwgssboGa3pLX2VQg74cCC3</code>
                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleCopy("mntEiNGoTrqjkL1BSi18fwgssboGa3pLX2VQg74cCC3", "tokenAddress")}>
                          {copiedFields.tokenAddress ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <h3 className="font-semibold text-sm mb-1">Token Type</h3>
                      <p className="text-sm">SPL Token (Solana)</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <h3 className="font-semibold text-sm mb-1">Decimals</h3>
                      <p className="text-sm">9</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => handleCopy("https://explorer.solana.com/address/mntEiNGoTrqjkL1BSi18fwgssboGa3pLX2VQg74cCC3", "explorerLink")}>
                    {copiedFields.explorerLink ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {copiedFields.explorerLink ? "Copied!" : "Copy Explorer Link"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Crypto Security Best Practices</CardTitle>
                  <CardDescription>Keep your assets safe</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Security is paramount when dealing with cryptocurrencies. Follow these best practices to protect your assets:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 rounded-full p-2">
                        <Wrench className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Never Share Your Seed Phrase</h3>
                        <p className="text-sm text-gray-600">Your seed phrase gives complete access to your wallet. Never share it with anyone and store it securely offline.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-yellow-100 rounded-full p-2">
                        <Wrench className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Use Hardware Wallets</h3>
                        <p className="text-sm text-gray-600">For large holdings, consider using hardware wallets like Ledger or Trezor for enhanced security.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-green-100 rounded-full p-2">
                        <Wrench className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Enable Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600">Always enable 2FA on exchanges and other services where available.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 rounded-full p-2">
                        <Wrench className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Check URLs Carefully</h3>
                        <p className="text-sm text-gray-600">Always verify website URLs to avoid phishing attacks. Use bookmarks for important sites.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-purple-100 rounded-full p-2">
                        <Wrench className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Verify Transactions</h3>
                        <p className="text-sm text-gray-600">Always double-check addresses and amounts before confirming transactions.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Tools</CardTitle>
                  <CardDescription>Additional resources to enhance your security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-100 rounded-full p-2">
                        <Wrench className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Solana Token List</h3>
                        <p className="text-sm text-gray-600">Check if a token is legitimate using the official Solana token list.</p>
                        <Button variant="ghost" size="sm" className="mt-1 h-7 px-2" onClick={() => handleCopy("https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json", "tokenList")}>
                          {copiedFields.tokenList ? <Check className="w-3 h-3 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                          {copiedFields.tokenList ? "Copied!" : "Copy URL"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Common questions about crypto and our platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h3 className="font-semibold mb-2">What is Solana?</h3>
                <p className="text-sm text-gray-600">
                  Solana is a high-performance blockchain platform with fast transaction speeds and low fees, making it ideal for decentralized applications and DeFi.
                </p>
              </div>

              <div className="border-b pb-3">
                <h3 className="font-semibold mb-2">How do I buy HaloTech tokens?</h3>
                <p className="text-sm text-gray-600">
                  You can purchase HaloTech tokens directly from our platform using SOL, or from supported decentralized exchanges like Raydium or Orca.
                </p>
              </div>

              <div className="border-b pb-3">
                <h3 className="font-semibold mb-2">Are my crypto assets insured?</h3>
                <p className="text-sm text-gray-600">
                  Unlike traditional banks, crypto assets are generally not insured. This is why following security best practices is crucial.
                </p>
              </div>

              <div className="border-b pb-3">
                <h3 className="font-semibold mb-2">What are transaction fees on Solana?</h3>
                <p className="text-sm text-gray-600">
                  Solana transaction fees are typically very low, usually ranging from 0.000005 SOL to 0.0001 SOL per transaction.
                </p>
              </div>

              <div className="pb-3">
                <h3 className="font-semibold mb-2">Can I stake HaloTech tokens?</h3>
                <p className="text-sm text-gray-600">
                  Yes, we offer staking options for HaloTech tokens with various reward tiers. Check our staking page for more information.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => handleCopy("support@halotech.com", "supportEmail")}>
              {copiedFields.supportEmail ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copiedFields.supportEmail ? "Copied!" : "Copy Support Email"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CryptoGuidePage;
