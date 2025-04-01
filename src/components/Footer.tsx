import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-4">
      <div className="tech-container text-center">
        <p>© {new Date().getFullYear()} HaloTech Store. All rights reserved.</p>
        <p>
          Need help?{' '}
          <a href="/support" className="text-blue-500 hover:underline">
            Contact Support
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
