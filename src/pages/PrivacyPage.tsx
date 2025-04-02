
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SupportDialog from '@/components/SupportDialog';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Last updated: July 1, 2023</p>
      
      <div className="prose prose-slate max-w-none">
        <p>
          At HaloTech Security, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including our cryptocurrency payment options.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Personal Information</h3>
        <p>
          We may collect personal information that you voluntarily provide to us when you:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Register on our website</li>
          <li>Place an order for our products or services</li>
          <li>Sign up for our newsletter</li>
          <li>Contact our customer support</li>
          <li>Participate in surveys or promotions</li>
        </ul>
        <p>
          The personal information we may collect includes: names, email addresses, phone numbers, billing addresses, shipping addresses, payment information, and other information you choose to provide.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Cryptocurrency Transactions</h3>
        <p>
          When you choose to pay with cryptocurrency, we collect blockchain transaction data including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Transaction hashes</li>
          <li>Wallet addresses used for payment</li>
          <li>Transaction amounts and timestamps</li>
          <li>Blockchain metadata required to verify payments</li>
        </ul>
        <p>
          This information is collected solely for the purpose of verifying and processing your payments and maintaining transaction records.
        </p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain information about your device, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Pages you view on our site</li>
          <li>Time spent on those pages</li>
          <li>Unique device identifiers</li>
        </ul>
        
        <Separator className="my-8" />
        
        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <p>
          We use the information we collect for various business purposes, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Providing, operating, and maintaining our website and services</li>
          <li>Processing and fulfilling orders</li>
          <li>Verifying and recording cryptocurrency transactions</li>
          <li>Improving, personalizing, and expanding our website and services</li>
          <li>Understanding how you use our website</li>
          <li>Communicating with you about products, services, and events</li>
          <li>Responding to your comments and questions</li>
          <li>Providing customer support</li>
          <li>Sending you technical notices and security alerts</li>
          <li>Complying with legal obligations</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">How We Share Your Information</h2>
        <p>
          We may share your information with:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business and website</li>
          <li><strong>Business Partners:</strong> Trusted partners who assist us in offering products and services</li>
          <li><strong>Legal Requirements:</strong> When required by law, such as to comply with a subpoena or similar legal process</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          <li><strong>With Your Consent:</strong> When you have provided consent to share your information</li>
        </ul>
        <p>
          <strong>We do not sell your personal information to third parties for marketing purposes.</strong>
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Cryptocurrency Data Privacy</h2>
        <p>
          While blockchain transactions are public by nature, we take steps to protect your privacy:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>We never associate your blockchain addresses with your identity in public databases</li>
          <li>We use one-time addresses for receiving payments where possible</li>
          <li>We maintain strict security protocols for handling transaction data</li>
          <li>We only retain cryptocurrency transaction data for as long as necessary for business and legal purposes</li>
        </ul>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>The right to access personal information we hold about you</li>
          <li>The right to request correction of inaccurate information</li>
          <li>The right to request deletion of your information</li>
          <li>The right to restrict or object to our processing of your information</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
        <p>
          Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        
        <div className="bg-muted p-4 rounded-md mb-8">
          <p><strong>HaloTech Security Technologies</strong></p>
          <p>123 Tech Plaza, Suite 456</p>
          <p>Albuquerque, NM 87102</p>
          <p>Email: privacy@halotech.com</p>
          <p>Phone: (505) 555-0123</p>
        </div>
      </div>
      
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Button asChild>
          <Link to="/">
            Return to Home
          </Link>
        </Button>
        <SupportDialog>
          <Button variant="outline">
            Contact Support
          </Button>
        </SupportDialog>
      </div>
    </div>
  );
};

export default PrivacyPage;
