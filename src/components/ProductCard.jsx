import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatPrice, truncateText, formatRating } from '../utils/format';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="card group hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 rounded-t-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
              {truncateText(product.title, 60)}
            </h3>
          </div>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {formatRating(product.rating?.rate || 0)}
              </span>
              <span className="ml-1 text-sm text-gray-400">
                ({product.rating?.count || 0})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary-600">
              {formatPrice(product.price)}
            </span>
            <button
              onClick={handleAddToCart}
              className="btn-primary text-sm px-3 py-2 flex items-center space-x-1 hover:scale-105 transition-transform duration-200"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
