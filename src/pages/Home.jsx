import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Star, Users, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { ProductGridSkeleton } from '../components/LoadingSkeleton';
import { fetchProducts } from '../data/products';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const products = await fetchProducts();
        // Get first 4 products as featured
        setFeaturedProducts(products.slice(0, 4));
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  const features = [
    {
      icon: ShoppingBag,
      title: 'Free Shipping',
      description: 'Free shipping on all orders over $50'
    },
    {
      icon: Star,
      title: 'Quality Products',
      description: 'Carefully curated high-quality items'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Customer support whenever you need it'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Your payment information is always safe'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to StoreFront
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 animate-fade-in">
              Discover amazing products at unbeatable prices
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 animate-slide-up"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">We're committed to providing the best shopping experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Check out our most popular items</p>
          </div>
          
          {loading ? (
            <ProductGridSkeleton count={4} />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center px-6 py-3"
                >
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of satisfied customers and find your perfect products today
          </p>
          <Link
            to="/products"
            className="btn-secondary inline-flex items-center px-8 py-4 text-lg"
          >
            Browse Products
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
