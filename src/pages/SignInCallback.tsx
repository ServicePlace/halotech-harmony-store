import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const SignInCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log('Handling SSO callback...');
        // Simulate token validation or session setup
        setTimeout(() => {
          navigate('/'); // Redirect to home after successful handling
        }, 2000);
      } catch (error) {
        console.error('Error handling SSO callback:', error);
        navigate('/signin'); // Redirect to sign-in page on error
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <>
      <Header />
      <div className="tech-container">
        <div className="tech-card p-8 text-center shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Processing Your Sign-In</h1>
          <p className="text-lg text-muted mb-6">
            Please wait while we verify your credentials and set up your session.
          </p>
          <div className="flex justify-center">
            <div className="loader border-t-4 border-[#7948FF] rounded-full w-12 h-12 animate-spin"></div>
          </div>
        </div>
        <footer className="mt-8 text-sm text-muted">
          <p>© {new Date().getFullYear()} HaloTech Store. All rights reserved.</p>
          <p>
            Need help? <a href="/support" className="text-blue-500 hover:underline">Contact Support</a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default SignInCallback;
