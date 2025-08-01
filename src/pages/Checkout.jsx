import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Lock, CreditCard, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '../utils/format';
import CheckoutForm from '../components/CheckoutForm';

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_51Rr0gS1TrEgzclR4ZXvTH0hqB95KOGN91BY04rCQhMOTpdqyIIUM3iQKhcYRgZS7AaA7yMj5wE7xAtVrdw4ghRuD00LvW77pu9'); // This is a test key

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
      return;
    }

    // In a real application, you would create a payment intent on your backend
    // For this demo, we'll simulate this
    const createPaymentIntent = async () => {
      setLoading(true);
      try {
        // Simulate API call to create payment intent
        await new Promise(resolve => setTimeout(resolve, 1000));
        // In real app, this would come from your backend
        setClientSecret('pi_3NkNn3KUEt7Gabcdef_secret_ABC123xyz456');
      } catch (error) {
        console.error('Error creating payment intent:', error);
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [cart, navigate]);

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#0ea5e9',
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/cart')}
          className="btn-outline mb-6 inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">
                      {item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}
                    </h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-medium text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                <span>Total</span>
                <span className="text-primary-600">{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Lock className="w-5 h-5 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Secure Checkout
              </h2>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">Setting up secure payment...</p>
              </div>
            ) : clientSecret ? (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm total={total} onPaymentSuccess={() => {
                  clearCart();
                  navigate('/');
                }} />
              </Elements>
            ) : (
              <div className="text-center py-8">
                <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Preparing checkout...</p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Lock className="w-4 h-4 mr-1" />
                  <span>SSL Secured</span>
                </div>
                <div>•</div>
                <div>256-bit Encryption</div>
                <div>•</div>
                <div>PCI Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
