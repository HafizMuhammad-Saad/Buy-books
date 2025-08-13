import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ShoppingCart, Star } from 'lucide-react';
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
    <div className="group rounded-lg border border-primary-100 bg-white hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
  <Link to={`/products/${product.id}`} className="block">
    
    {/* Image */}
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-primary-50">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="p-4">
      {/* Title */}
      <h3 className="text-sm font-serif font-semibold text-primary-800 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
        {truncateText(product.title, 60)}
      </h3>

      {/* Price & Button */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-lg font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">
          {formatPrice(product.price)}
        </span>
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-1 bg-primary-500 text-white text-sm px-3 py-2 rounded-md hover:bg-primary-600 hover:scale-105 transition-all duration-200 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </div>
    </div>
  </Link>
</div>

  );
};

export default ProductCard;
