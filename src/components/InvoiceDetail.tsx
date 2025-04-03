
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

interface InvoiceDetailProps {
  invoiceId: string;
  customerName: string;
  customerEmail: string;
  orderDate: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  pdfUrl?: string;
  status: 'paid' | 'pending' | 'cancelled';
}

const InvoiceDetail: React.FC<InvoiceDetailProps> = ({
  invoiceId,
  customerName,
  customerEmail,
  orderDate,
  items,
  subtotal,
  tax,
  total,
  pdfUrl,
  status
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'paid': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-amber-600 bg-amber-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleDownload = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl">Invoice #{invoiceId}</CardTitle>
          <p className="text-sm text-gray-500">Date: {orderDate}</p>
        </div>
        <div className={`px-3 py-1 rounded-full uppercase text-xs font-medium ${getStatusColor()}`}>
          {status}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-sm text-gray-500 mb-1">Billed To</h3>
            <p className="font-medium">{customerName}</p>
            <p className="text-sm">{customerEmail}</p>
          </div>
          <div>
            <h3 className="font-medium text-sm text-gray-500 mb-1">From</h3>
            <p className="font-medium">HaloTech LLC</p>
            <p className="text-sm">support@halotech.com</p>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium mb-3">Items</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Price</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-3 text-sm">{item.description}</td>
                    <td className="px-4 py-3 text-sm text-right">{item.quantity}</td>
                    <td className="px-4 py-3 text-sm text-right">${item.unitPrice.toFixed(2)}</td>
                    <td className="px-4 py-3 text-sm text-right">${(item.quantity * item.unitPrice).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2 pt-4">
          <div className="flex justify-between w-full max-w-xs">
            <span className="text-sm">Subtotal:</span>
            <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between w-full max-w-xs">
            <span className="text-sm">Tax:</span>
            <span className="text-sm font-medium">${tax.toFixed(2)}</span>
          </div>
          <Separator className="w-full max-w-xs my-2" />
          <div className="flex justify-between w-full max-w-xs">
            <span className="font-medium">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      {pdfUrl && (
        <CardFooter>
          <Button onClick={handleDownload} className="ml-auto flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default InvoiceDetail;
