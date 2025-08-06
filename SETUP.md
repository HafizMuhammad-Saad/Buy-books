# E-commerce App with Admin Dashboard

This is a complete e-commerce solution with MongoDB order storage and admin dashboard.

## Features

### Customer Features
- Browse and add products to cart
- Checkout with customer information
- Upload payment screenshot
- Order data saved to MongoDB before WhatsApp redirect
- WhatsApp integration for order confirmation

### Admin Features
- Secure login system
- Dashboard with order statistics
- View all orders with filtering (by status, date, search)
- View detailed order information
- Update order status and add notes
- View payment screenshots

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS, Axios
**Backend:** Node.js, Express, MongoDB, Mongoose
**Authentication:** JWT tokens
**File Upload:** Multer

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
# Copy and edit .env file
cp .env.example .env
```

Update `.env` with your values:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
```

4. Start MongoDB (if using local installation):
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

5. Create initial admin user:
```bash
npm run setup-admin
```

6. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the project root:
```bash
cd ..
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Usage

### Customer Flow
1. Visit `http://localhost:5173`
2. Browse products and add to cart
3. Go to checkout (`/checkout`)
4. Fill in customer details
5. Upload payment screenshot
6. Click "Send Screenshot on WhatsApp"
7. Order is saved to MongoDB and WhatsApp opens

### Admin Flow
1. Visit `http://localhost:5173/admin/login`
2. Login with admin credentials:
   - Email: `admin@example.com`
   - Password: `admin123`
3. View dashboard with order statistics
4. Filter and search orders
5. Click "View Details" to see full order information
6. Update order status and add notes
7. View payment screenshots

## API Endpoints

### Public Endpoints
- `POST /api/orders` - Create new order
- `PATCH /api/orders/:orderId/whatsapp-sent` - Mark WhatsApp as sent

### Admin Endpoints (require authentication)
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get admin info
- `GET /api/orders` - Get all orders (with filters)
- `GET /api/orders/:orderId` - Get single order
- `PATCH /api/orders/:orderId/status` - Update order status
- `GET /api/orders/stats/overview` - Get order statistics

## File Structure

```
ecommerce-app/
├── server/                 # Backend
│   ├── config/
│   │   └── database.js     # MongoDB connection
│   ├── middleware/
│   │   ├── auth.js         # JWT authentication
│   │   └── upload.js       # File upload handling
│   ├── models/
│   │   ├── Admin.js        # Admin user schema
│   │   └── Order.js        # Order schema
│   ├── routes/
│   │   ├── auth.js         # Authentication routes
│   │   └── orders.js       # Order management routes
│   ├── scripts/
│   │   └── setup-admin.js  # Admin setup script
│   ├── uploads/            # Uploaded files (created automatically)
│   ├── .env                # Environment variables
│   ├── package.json
│   └── server.js           # Main server file
├── src/                    # Frontend
│   ├── components/
│   │   ├── AdminHeader.jsx
│   │   ├── Header.jsx
│   │   └── ProtectedRoute.jsx
│   ├── contexts/
│   │   ├── AdminContext.jsx
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderDetail.jsx
│   └── ...
├── package.json
└── SETUP.md
```

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting on API endpoints
- CORS configuration
- File upload validation
- Input sanitization

## Development Notes

- Payment screenshots are stored in `server/uploads/payment-screenshots/`
- Admin token is stored in localStorage
- Orders are saved before WhatsApp redirect to ensure data integrity
- All API responses follow a consistent format with success/error flags

## Production Deployment

1. Update environment variables for production
2. Set up MongoDB Atlas or production database
3. Configure domain in CORS settings
4. Set up proper SSL certificates
5. Use PM2 or similar for process management
6. Set up reverse proxy with Nginx

## Troubleshooting

### Backend Issues
- Ensure MongoDB is running
- Check environment variables
- Verify port availability (5000)

### Frontend Issues
- Ensure backend is running on port 5000
- Check browser console for errors
- Verify API endpoints are accessible

### Admin Login Issues
- Run `npm run setup-admin` to create initial admin
- Check admin credentials in .env file
- Clear browser localStorage if needed

## Support

For issues or questions, please check the console logs and ensure all dependencies are properly installed.
