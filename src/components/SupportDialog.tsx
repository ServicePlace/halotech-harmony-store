
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

interface SupportDialogProps {
  children: React.ReactNode;
}

const SupportDialog: React.FC<SupportDialogProps> = ({ children }) => {
  const navigate = useNavigate();
  
  const handleCryptoSupport = () => {
    window.location.href = 'mailto:crypto-support@halotech.com?subject=Crypto Related Support Request';
  };
  
  const handleGeneralSupport = () => {
    navigate('/support');
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Need Help?</DialogTitle>
          <DialogDescription>
            Please select the type of support you need.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 py-4">
          <p className="text-center text-sm text-muted-foreground">
            Is this a crypto-related issue?
          </p>
        </div>
        <DialogFooter className="flex-col sm:flex-row sm:justify-center sm:space-x-4">
          <Button onClick={handleCryptoSupport} className="bg-halotech-yellow text-halotech-dark hover:bg-halotech-yellow/90">
            Yes, Crypto Issue
          </Button>
          <Button onClick={handleGeneralSupport} variant="outline">
            No, General Support
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SupportDialog;
