
import React from 'react';
import { Mail, MessageCircle, FileText, Phone, AtSign, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SupportPage: React.FC = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the contact form data to a backend
    alert('Your message has been sent! Our team will contact you shortly.');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Customer Support</h1>
      
      <Tabs defaultValue="contact" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="contact" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-halotech-yellow mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="text-sm text-muted-foreground">+1 (505) 555-0123</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-5PM MST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-halotech-yellow mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-sm text-muted-foreground">support@halotech.com</p>
                    <p className="text-xs text-muted-foreground">24/7 response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-halotech-yellow mt-0.5" />
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">Available on our website</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-7PM MST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AtSign className="h-5 w-5 text-halotech-yellow mt-0.5" />
                  <div>
                    <h3 className="font-medium">Social Media</h3>
                    <div className="flex space-x-2 mt-1">
                      <a href="https://twitter.com/halotech" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Twitter</a>
                      <a href="https://discord.gg/halotech" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-600">Discord</a>
                      <a href="https://t.me/halotech" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">Telegram</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your issue in detail..." 
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-halotech-yellow text-halotech-dark hover:bg-halotech-yellow/90">
                    <Send className="mr-2 h-4 w-4" /> Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about our products and services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <h3 className="font-medium text-lg">How do I pay with cryptocurrency?</h3>
                <p className="text-muted-foreground">Our system supports payments via Solana, Ethereum, and Bitcoin. At checkout, simply select your preferred cryptocurrency and follow the instructions to complete your payment.</p>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-lg">What security systems do you offer?</h3>
                <p className="text-muted-foreground">We offer a range of security solutions including access control systems, CCTV systems, fire alarm systems, and integrated security solutions. Visit our Products page for more details.</p>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-lg">Do you provide installation services?</h3>
                <p className="text-muted-foreground">Yes, we provide professional installation services for all our security systems. Our technicians are certified and experienced in handling complex installations.</p>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-lg">What is the HaloTech token?</h3>
                <p className="text-muted-foreground">The HaloTech token is our proprietary cryptocurrency built on the Solana blockchain. It can be used for purchasing our products and services, and also provides access to exclusive features and discounts.</p>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-lg">How can I get technical support for my system?</h3>
                <p className="text-muted-foreground">You can reach our technical support team via phone, email, or live chat. For urgent matters, please call our support hotline at +1 (505) 555-0123.</p>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-lg">Do you offer warranties on your products?</h3>
                <p className="text-muted-foreground">Yes, all our products come with a standard 1-year warranty. Extended warranty options are available for purchase during checkout.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documentation" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Documentation & Resources</CardTitle>
              <CardDescription>Access user manuals, guides, and technical documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/docs/user-manuals.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    User Manuals
                  </a>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/docs/installation-guides.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    Installation Guides
                  </a>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/docs/crypto-payment-guide.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    Crypto Payment Guide
                  </a>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/docs/troubleshooting.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    Troubleshooting Tips
                  </a>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/docs/warranty-info.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    Warranty Information
                  </a>
                </Button>
                
                <Button variant="outline" className="justify-start" asChild>
                  <a href="/docs/api-documentation.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    API Documentation
                  </a>
                </Button>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-3">Video Tutorials</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <div className="aspect-video bg-muted rounded-md mb-2 flex items-center justify-center">
                      <span className="text-muted-foreground">Video Tutorial Placeholder</span>
                    </div>
                    <h4 className="font-medium">System Installation Guide</h4>
                    <p className="text-sm text-muted-foreground">Learn how to install your new security system</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <div className="aspect-video bg-muted rounded-md mb-2 flex items-center justify-center">
                      <span className="text-muted-foreground">Video Tutorial Placeholder</span>
                    </div>
                    <h4 className="font-medium">Crypto Payment Tutorial</h4>
                    <p className="text-sm text-muted-foreground">Step-by-step guide to paying with cryptocurrency</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupportPage;
