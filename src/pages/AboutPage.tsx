import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Star, Server, Users, Building, Award, Cpu, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import SupportDialog from '@/components/SupportDialog';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About HaloTech Security</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Albuquerque's premier provider of low voltage security solutions with cryptocurrency payment options.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4" id="about">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At HaloTech, we're dedicated to providing cutting-edge security solutions while embracing the future of finance through blockchain technology. We believe in making advanced security accessible to everyone through innovative technology and flexible payment options.
            </p>
            <p className="text-muted-foreground mb-6">
              Founded in 2018 in Albuquerque, New Mexico, we've grown from a small local business to a respected provider of comprehensive security systems, always staying ahead of the curve in both security technology and payment solutions.
            </p>
            <div className="flex space-x-4">
              <Button asChild>
                <Link to="/products">Explore Our Products</Link>
              </Button>
              <SupportDialog>
                <Button variant="outline">Contact Us</Button>
              </SupportDialog>
            </div>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="HaloTech Team" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      <section className="mb-16" id="team">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
              <CardTitle>John Rodriguez</CardTitle>
              <CardDescription>Founder & CEO</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                With over 15 years in security systems and a background in blockchain technology, John founded HaloTech to bridge traditional security with crypto innovation.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
              <CardTitle>Sarah Chen</CardTitle>
              <CardDescription>Chief Technology Officer</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Sarah leads our technical development, bringing experience from Silicon Valley startups and major security firms to drive our innovative solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4"></div>
              <CardTitle>Michael Washington</CardTitle>
              <CardDescription>Head of Installation Services</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Michael oversees all installation operations, ensuring every system is perfectly integrated into our clients' spaces with minimal disruption.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-16" id="installation">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Installation Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional installation by certified technicians for all your security needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-halotech-yellow mb-2" />
              <CardTitle>Access Control Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Secure entry points with cutting-edge biometric, card reader, and PIN systems installed by experts.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Server className="h-10 w-10 text-halotech-yellow mb-2" />
              <CardTitle>Data Communications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Professional setup of your entire data infrastructure for optimal performance and security.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Star className="h-10 w-10 text-halotech-yellow mb-2" />
              <CardTitle>Fire Alarm Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Expert installation of comprehensive fire detection and suppression systems to protect your assets.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-halotech-yellow mb-2" />
              <CardTitle>VoIP Communications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Setup and configuration of affordable, crystal-clear voice communication systems for your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose HaloTech?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="HaloTech Installation Team" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Award className="h-6 w-6 text-halotech-yellow flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Excellence in Service</h3>
                <p className="text-muted-foreground">Our team is committed to providing the highest level of service from consultation to installation and beyond.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Cpu className="h-6 w-6 text-halotech-yellow flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">We stay ahead of the curve with the latest security technologies and crypto payment solutions.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Building className="h-6 w-6 text-halotech-yellow flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Local Expertise</h3>
                <p className="text-muted-foreground">Based in Albuquerque, we understand the unique security needs of businesses and homes in our community.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Wrench className="h-6 w-6 text-halotech-yellow flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Customized Solutions</h3>
                <p className="text-muted-foreground">Every security system we install is tailored to meet the specific needs of your space and business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to secure your property?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our experts help you find the perfect security solution.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg">
              <Link to="/products">Browse Products</Link>
            </Button>
            <SupportDialog>
              <Button variant="outline" size="lg">Get In Touch</Button>
            </SupportDialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
