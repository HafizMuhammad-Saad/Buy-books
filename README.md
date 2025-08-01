# E-commerce Web Application

A complete, fully functional frontend for an e-commerce web application built with React and Vite, featuring a beautiful, modern, and responsive UI/UX using Tailwind CSS.

## 🚀 Features

### Product Listing Page
- Grid display of products with image, name, price, and quick "Add to Cart" button
- Category filtering and search functionality
- Responsive design for all screen sizes
- Loading skeletons for better UX

### Product Detail Page
- Detailed product view with larger images
- Full product description and specifications
- Quantity selector and "Add to Cart" functionality
- Customer reviews and ratings display

### Shopping Cart
- Persistent cart using localStorage and React Context
- Quantity management and item removal
- Order summary with tax and shipping calculations
- Free shipping promotion for orders over $50

### Checkout Page with Stripe Integration
- Secure payment processing simulation
- Customer information and shipping address forms
- Order summary and payment validation
- Success/failure handling

### Navigation and Routing
- React Router for seamless navigation
- Responsive navigation bar with cart item count badge
- Mobile-friendly menu

### Additional Features
- Toast notifications for user actions
- Loading states and error handling
- Beautiful animations and transitions
- Modern, clean design inspired by high-end e-commerce stores

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Stripe** - Payment processing integration
- **React Context API** - State management
- **React Hot Toast** - Elegant notifications
- **Lucide React** - Beautiful icons
- **Fake Store API** - Mock backend data

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── ProductCard.jsx # Product display card
│   ├── CheckoutForm.jsx# Stripe payment form
│   └── LoadingSkeleton.jsx # Loading placeholders
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Products.jsx    # Product listing
│   ├── ProductDetail.jsx # Individual product
│   ├── Cart.jsx        # Shopping cart
│   └── Checkout.jsx    # Payment page
├── contexts/           # React Context providers
│   └── CartContext.jsx # Cart state management
├── utils/              # Helper functions
│   └── format.js       # Formatting utilities
├── data/               # Data fetching
│   └── products.js     # API integration
└── App.jsx             # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ecommerce-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Features

- **Modern UI/UX** - Clean, minimal design inspired by premium e-commerce stores
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Subtle transitions and hover effects
- **Consistent Branding** - Cohesive color scheme and typography
- **Accessibility** - Proper contrast ratios and keyboard navigation

## 🔧 Configuration

### Stripe Integration
For production use, replace the test Stripe publishable key in `src/pages/Checkout.jsx`:

```javascript
const stripePromise = loadStripe('your-publishable-key-here');
```

### API Configuration
The app uses Fake Store API by default. To use a different API, modify the functions in `src/data/products.js`.

## 📱 Mobile Responsiveness

- Responsive navigation with mobile menu
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Fast loading and smooth scrolling

## 🎯 Performance Optimizations

- Lazy loading of images
- Code splitting with React Router
- Optimized bundle size with Vite
- Efficient re-renders with React Context

## 🔒 Security Features

- Secure payment processing with Stripe
- Input validation and sanitization
- Safe localStorage usage
- HTTPS ready for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing mock data
- [Tailwind CSS](https://tailwindcss.com/) for the amazing utility classes
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Stripe](https://stripe.com/) for payment processing capabilities

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
