import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

interface PaymentFormProps {
  amount: number;
  onPaymentComplete: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onPaymentComplete }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onPaymentComplete();
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4">Payment Details</h3>
        <p className="text-gray-600 mb-6">
          Reservation deposit amount: ${amount.toFixed(2)}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                placeholder="MM/YY"
                maxLength={5}
                className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVC
              </label>
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                placeholder="123"
                maxLength={3}
                className="w-full px-4 py-2 border rounded-md focus:ring-stone-500 focus:border-stone-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={processing}
            className={`w-full px-8 py-3 bg-stone-800 text-white rounded-md 
              ${processing ? 'opacity-75 cursor-not-allowed' : 'hover:bg-stone-700'} 
              transition duration-300`}
          >
            {processing ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;