import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';
import { formatPrice } from '../utils/format';

const CheckoutForm = ({ total, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'US',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      // Validate customer info
      if (!customerInfo.email || !customerInfo.name) {
        toast.error('Please fill in all required fields');
        setLoading(false);
        return;
      }

      // Since we're using a demo/test environment, we'll simulate the payment
      // In a real application, you would use stripe.confirmPayment
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful payment
      toast.success('Payment successful! Thank you for your order.');
      onPaymentSuccess();
      
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Customer Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Information</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
              className="input-field"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
              className="input-field"
              placeholder="John Doe"
              required
            />
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping Address</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
              className="input-field"
              placeholder="123 Main Street"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={customerInfo.city}
                onChange={handleInputChange}
                className="input-field"
                placeholder="New York"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                value={customerInfo.postalCode}
                onChange={handleInputChange}
                className="input-field"
                placeholder="10001"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
        
        {/* Demo Payment Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <div className="flex items-center mb-2">
            <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="text-sm font-medium text-blue-900">Demo Mode</h4>
          </div>
          <p className="text-sm text-blue-700 mb-2">
            This is a demo checkout. Use the following test card:
          </p>
          <div className="text-sm text-blue-800 font-mono">
            <div>Card: 4242 4242 4242 4242</div>
            <div>Expiry: Any future date</div>
            <div>CVC: Any 3 digits</div>
          </div>
        </div>

        {/* Stripe Payment Element would go here in real implementation */}
        <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
          <div className="flex items-center justify-center text-gray-500">
            <CreditCard className="w-8 h-8 mr-3" />
            <div>
              <p className="font-medium">Secure Payment Form</p>
              <p className="text-sm">Stripe Payment Element (Demo)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors duration-200 ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
        }`}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Processing Payment...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Pay {formatPrice(total)}
          </div>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By clicking "Pay", you agree to our terms of service and privacy policy.
        Your payment information is secure and encrypted.
      </p>
    </form>
  );
};

export default CheckoutForm;
