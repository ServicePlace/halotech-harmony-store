
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SupportDialog from '@/components/SupportDialog';

const FAQPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Find answers to common questions about our products, services, and cryptocurrency payments
      </p>
      
      <Tabs defaultValue="products" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="services">Installation</TabsTrigger>
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What security systems do you offer?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  HaloTech offers a comprehensive range of security solutions including:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Access Control Systems:</strong> Biometric scanners, card readers, and PIN systems to secure entry points</li>
                  <li><strong>Data Communications Infrastructure:</strong> Secure network design for safe data transfer</li>
                  <li><strong>Fire Alarm Systems:</strong> Early detection and notification systems</li>
                  <li><strong>VoIP Communications:</strong> Voice Over IP phone and intercom solutions</li>
                  <li><strong>Structured Cabling:</strong> High-performance backbone for all your technology needs</li>
                  <li><strong>Wireless Network Solutions:</strong> P2P technology for multi-building connectivity</li>
                </ul>
                <p>
                  <Link to="/products" className="text-halotech-yellow hover:underline">Browse our full product catalog</Link> to see detailed specifications and pricing.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Are your products compatible with existing systems?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes, our systems are designed with interoperability in mind. We can integrate with most existing security infrastructure including:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Legacy alarm systems</li>
                  <li>Existing CCTV cameras</li>
                  <li>Third-party access control systems</li>
                  <li>Building management systems</li>
                </ul>
                <p>
                  Our team will conduct a thorough assessment of your current setup before recommending a solution that works seamlessly with your existing equipment. In some cases, we may need to add interface modules or update firmware to ensure compatibility.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>How often should security systems be updated?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  We recommend reviewing your security systems every 3-5 years for potential updates, though this timeline can vary based on:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Changes in security threats and vulnerabilities</li>
                  <li>Advances in security technology</li>
                  <li>Your business growth and changing security needs</li>
                  <li>Regulatory requirements in your industry</li>
                </ul>
                <p className="mb-4">
                  For critical components like fire alarm systems, we recommend following manufacturer guidelines and local code requirements, which typically mandate annual inspections.
                </p>
                <p>
                  We offer security assessments to help determine if your current systems are meeting your needs or if upgrades are recommended.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer warranties on your products?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes, all our products come with the following warranty options:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Standard Warranty:</strong> All equipment includes a 1-year manufacturer's warranty covering defects in materials and workmanship</li>
                  <li><strong>Extended Warranty:</strong> Options to extend coverage to 2, 3, or 5 years at additional cost</li>
                  <li><strong>Installation Warranty:</strong> Our installation work is guaranteed for 90 days</li>
                  <li><strong>Maintenance Contracts:</strong> Comprehensive service plans available that include regular maintenance and priority support</li>
                </ul>
                <p>
                  For crypto payments, we offer an exclusive 6-month warranty extension on all purchases at no additional cost. See our <Link to="/warranty" className="text-halotech-yellow hover:underline">warranty page</Link> for complete details and terms.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Can your systems be accessed remotely?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes, most of our modern security systems support remote access and management through:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Secure web portals accessible from any browser</li>
                  <li>Mobile apps for iOS and Android devices</li>
                  <li>API integrations for enterprise management systems</li>
                </ul>
                <p className="mb-4">
                  Remote capabilities typically include:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Live video monitoring</li>
                  <li>Door lock/unlock commands</li>
                  <li>User access management</li>
                  <li>System health monitoring</li>
                  <li>Alert notifications</li>
                  <li>Event logs and reporting</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="services" className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you provide installation services?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes, we provide professional installation services for all our security systems. Our installation process includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Initial site assessment and planning</li>
                  <li>Custom installation design for your space</li>
                  <li>Professional mounting and wiring by certified technicians</li>
                  <li>System configuration and testing</li>
                  <li>User training and handover</li>
                </ul>
                <p className="mb-4">
                  Our installation team consists of factory-trained and certified professionals with extensive experience in security system deployment.
                </p>
                <p>
                  For more details, visit our <Link to="/about#installation" className="text-halotech-yellow hover:underline">installation services page</Link>.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does installation typically take?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Installation timelines vary based on the complexity and scope of the project:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Small residential systems:</strong> Usually completed in 1-2 days</li>
                  <li><strong>Small to medium business systems:</strong> Typically 2-5 days</li>
                  <li><strong>Large commercial installations:</strong> May take 1-3 weeks</li>
                  <li><strong>Enterprise-level integrated systems:</strong> Can range from 2-8 weeks</li>
                </ul>
                <p className="mb-4">
                  Factors that can affect installation time include:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Building construction type and accessibility</li>
                  <li>System complexity and number of components</li>
                  <li>Integration requirements with existing systems</li>
                  <li>Permits and regulatory compliance needs</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer maintenance services?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes, we offer comprehensive maintenance services for all security systems, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Preventative Maintenance:</strong> Regular scheduled inspections and servicing</li>
                  <li><strong>Corrective Maintenance:</strong> Troubleshooting and repair services</li>
                  <li><strong>System Updates:</strong> Software and firmware updates</li>
                  <li><strong>24/7 Emergency Support:</strong> Available with our premium maintenance plans</li>
                </ul>
                <p className="mb-4">
                  Our maintenance service plans include:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Basic Plan:</strong> Annual inspection and testing</li>
                  <li><strong>Standard Plan:</strong> Semi-annual maintenance plus priority support</li>
                  <li><strong>Premium Plan:</strong> Quarterly maintenance, 24/7 emergency support, and parts discount</li>
                </ul>
                <p>
                  All maintenance is performed by our certified technicians to ensure your systems remain in optimal working condition.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>What areas do you service?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  We primarily serve the greater Albuquerque metropolitan area and surrounding regions, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Albuquerque</li>
                  <li>Rio Rancho</li>
                  <li>Santa Fe</li>
                  <li>Los Lunas</li>
                  <li>Bernalillo</li>
                  <li>Corrales</li>
                  <li>Placitas</li>
                </ul>
                <p className="mb-4">
                  For larger projects, we also service other locations throughout New Mexico and occasionally neighboring states for enterprise clients.
                </p>
                <p>
                  Contact us for specific information about service availability in your area. For locations outside our standard service area, we may be able to accommodate your needs for larger projects.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you provide training for installed systems?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes, comprehensive training is included with all our installations. Our training includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Hands-on instruction for system administrators</li>
                  <li>Basic user training for staff</li>
                  <li>Detailed system documentation and user manuals</li>
                  <li>Video tutorials for reference</li>
                </ul>
                <p className="mb-4">
                  We also offer additional training options:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Advanced Administrator Training:</strong> In-depth sessions for IT and security personnel</li>
                  <li><strong>Refresher Training:</strong> For new staff or as a system update</li>
                  <li><strong>Custom Training Programs:</strong> Tailored to your organization's specific needs</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="crypto" className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What cryptocurrencies do you accept?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  We currently accept the following cryptocurrencies:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Solana (SOL)</strong> - Our preferred and native token</li>
                  <li><strong>HaloTech Token</strong> - Our platform's utility token on Solana</li>
                  <li><strong>Ethereum (ETH)</strong></li>
                  <li><strong>Bitcoin (BTC)</strong></li>
                </ul>
                <p className="mb-4">
                  When paying with our HaloTech token, you'll receive a 5% discount on all purchases. Payments in SOL receive a 2% discount, while ETH and BTC payments receive a 1% discount.
                </p>
                <p>
                  For detailed instructions on how to pay with cryptocurrency, please visit our <Link to="/crypto-guide" className="text-halotech-yellow hover:underline">Crypto Payment Guide</Link>.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I pay with cryptocurrency?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Paying with cryptocurrency is simple:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>At checkout, select "Pay with Cryptocurrency" as your payment method</li>
                  <li>Choose your preferred cryptocurrency (Solana, Ethereum, or Bitcoin)</li>
                  <li>You'll be shown our wallet address and the exact amount to pay</li>
                  <li>Complete the payment using your crypto wallet of choice</li>
                  <li>Once the transaction is confirmed on the blockchain, your order will be processed</li>
                </ol>
                <p className="mb-4">
                  The system automatically verifies your payment on the blockchain, so there's no need to provide proof of payment. However, we recommend keeping your transaction hash for reference.
                </p>
                <p>
                  For detailed step-by-step instructions, please visit our <Link to="/crypto-guide" className="text-halotech-yellow hover:underline">Crypto Payment Guide</Link>.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>What is the HaloTech token?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  The HaloTech token (HALO) is our proprietary utility token built on the Solana blockchain. Key features include:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Native SPL token on the Solana blockchain</li>
                  <li>Used for payments on our platform with a 5% discount</li>
                  <li>Provides access to exclusive features and services</li>
                  <li>Can be staked for additional benefits and rewards</li>
                  <li>Token holders get priority customer support</li>
                </ul>
                <p className="mb-4">
                  You can acquire HaloTech tokens through:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Directly purchasing on our website</li>
                  <li>Decentralized exchanges on Solana</li>
                  <li>Loyalty rewards for repeat customers</li>
                  <li>Referral programs</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Are crypto payments secure?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes, cryptocurrency payments are highly secure due to several factors:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Blockchain Technology:</strong> All transactions are recorded on a decentralized ledger that is practically impossible to alter</li>
                  <li><strong>Cryptographic Security:</strong> Advanced encryption secures all transactions</li>
                  <li><strong>No Personal Information:</strong> Crypto payments don't require sharing credit card or banking details</li>
                  <li><strong>Immutable Transactions:</strong> Once confirmed, crypto transactions cannot be reversed or modified</li>
                </ul>
                <p className="mb-4">
                  Our payment system uses:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Unique transaction references for order tracking</li>
                  <li>Automated blockchain verification</li>
                  <li>Secure wallet address generation</li>
                  <li>Real-time payment confirmation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>What if I send the wrong amount of cryptocurrency?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  If you send an incorrect amount of cryptocurrency:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>If you sent less than required:</strong> Your order won't be processed automatically. Contact our support team with your transaction details, and they'll help you complete the payment.
                  </li>
                  <li>
                    <strong>If you sent more than required:</strong> Our system will detect the overpayment. Contact our support team with your transaction details and wallet address, and we'll arrange a refund of the excess amount.
                  </li>
                </ul>
                <p className="mb-4">
                  Important things to note:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Always double-check the amount before sending any cryptocurrency</li>
                  <li>Keep your transaction hash/ID for reference</li>
                  <li>Refunds are processed in the same cryptocurrency that was originally sent</li>
                  <li>Processing refunds typically takes 1-3 business days</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        
        <TabsContent value="support" className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  You can reach our customer support team through multiple channels:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Phone Support:</strong> (505) 555-0123<br/>
                    <span className="text-sm text-muted-foreground">Available Monday-Friday, 9AM-5PM MST</span>
                  </li>
                  <li>
                    <strong>Email Support:</strong> support@halotech.com<br/>
                    <span className="text-sm text-muted-foreground">24/7 response within 24 hours</span>
                  </li>
                  <li>
                    <strong>Live Chat:</strong> Available on our website<br/>
                    <span className="text-sm text-muted-foreground">Monday-Friday, 9AM-7PM MST</span>
                  </li>
                  <li>
                    <strong>Support Ticket:</strong> Submit through our <Link to="/support" className="text-halotech-yellow hover:underline">Support Portal</Link><br/>
                    <span className="text-sm text-muted-foreground">Tracked responses with detailed history</span>
                  </li>
                </ul>
                <p className="mb-4">
                  For crypto-specific support issues, please email crypto-support@halotech.com or use our <span className="text-halotech-yellow cursor-pointer hover:underline">
                    <SupportDialog>
                      <span>Support Contact Form</span>
                    </SupportDialog>
                  </span>.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>What are your business hours?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Our business hours are:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Office & Showroom Hours:</strong><br/>Monday-Friday: 9:00 AM - 5:00 PM MST<br/>Saturday: 10:00 AM - 2:00 PM MST<br/>Sunday: Closed</li>
                  <li><strong>Phone Support:</strong><br/>Monday-Friday: 9:00 AM - 5:00 PM MST</li>
                  <li><strong>Live Chat Support:</strong><br/>Monday-Friday: 9:00 AM - 7:00 PM MST</li>
                  <li><strong>Installation Services:</strong><br/>Monday-Friday: 8:00 AM - 6:00 PM MST</li>
                </ul>
                <p className="mb-4">
                  <strong>Emergency Support:</strong> For customers with maintenance contracts, 24/7 emergency support is available via our emergency hotline at (505) 555-0911.
                </p>
                <p>
                  Please note that our hours may vary during holidays. Any changes to our regular business hours will be posted on our website and social media channels.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer technical support after installation?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Yes, we provide several options for post-installation technical support:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Standard Support:</strong> All products come with 30 days of complimentary technical support after installation. This includes phone, email, and remote troubleshooting assistance.
                  </li>
                  <li>
                    <strong>Extended Support Plans:</strong> We offer various support plans that extend beyond the initial 30 days:
                    <ul className="list-disc pl-5 mt-2">
                      <li><strong>Basic Plan:</strong> Email and phone support during business hours</li>
                      <li><strong>Standard Plan:</strong> Includes remote troubleshooting and quarterly system checks</li>
                      <li><strong>Premium Plan:</strong> 24/7 support with guaranteed response times and prioritized onsite visits</li>
                    </ul>
                  </li>
                </ul>
                <p className="mb-4">
                  Support services typically include:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Troubleshooting system issues</li>
                  <li>Software and firmware updates</li>
                  <li>User assistance and training</li>
                  <li>System optimization recommendations</li>
                  <li>Remote diagnostics and repairs when possible</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I request a refund?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Our refund policy varies by product type and circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li><strong>Unopened Products:</strong> Full refund within 30 days of purchase</li>
                  <li><strong>Opened Products:</strong> May be subject to a 15% restocking fee</li>
                  <li><strong>Custom Orders:</strong> Non-refundable once production has begun</li>
                  <li><strong>Installation Services:</strong> Prorated refund based on work completed</li>
                </ul>
                <p className="mb-4">
                  To request a refund, you can:
                </p>
                <ol className="list-decimal pl-5 space-y-1 mb-4">
                  <li>Contact our customer service at (505) 555-0123</li>
                  <li>Email your request to refunds@halotech.com</li>
                  <li>Visit our office in person with your receipt</li>
                  <li>Submit a refund request through your account on our website</li>
                </ol>
                <p className="mb-4">
                  <strong>For cryptocurrency payments:</strong> Refunds are processed in the same cryptocurrency used for the original payment, based on the USD value at the time of the refund issuance.
                </p>
                <p>
                  Please note that shipping costs are non-refundable, and return shipping costs are the responsibility of the customer except in cases of defective products.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>How can I check the status of my order?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  There are several ways to check the status of your order:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Online Account:</strong> Log in to your HaloTech account to view real-time order status, tracking information, and delivery estimates.
                  </li>
                  <li>
                    <strong>Order Confirmation Email:</strong> Click the "Track Order" link in your order confirmation email to go directly to your order status.
                  </li>
                  <li>
                    <strong>Customer Service:</strong> Contact our team at (505) 555-0123 with your order number for status updates.
                  </li>
                  <li>
                    <strong>Live Chat:</strong> Use the chat feature on our website to inquire about your order status.
                  </li>
                </ul>
                <p className="mb-4">
                  For orders paid with cryptocurrency, you can also check the blockchain confirmation status using the transaction hash provided in your order confirmation.
                </p>
                <p>
                  Please have your order number ready when contacting us about your order status. For installation services, your project manager will provide regular updates throughout the installation process.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <SupportDialog>
            <Button size="lg" className="bg-halotech-yellow text-halotech-dark hover:bg-halotech-yellow/90">
              Contact Support
            </Button>
          </SupportDialog>
          <Button variant="outline" size="lg" asChild>
            <Link to="/support">Visit Support Center</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
