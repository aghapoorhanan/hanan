# HANAN Backend - Django REST API

Backend API for HANAN advertising agency platform.

## 🚀 Quick Start

### Prerequisites

- Python 3.9+
- PostgreSQL or Neon database
- Redis (optional, for caching)

### Installation

1. Clone the repository and navigate to backend:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file:
```bash
cp env.example .env
```

5. Configure your environment variables (see below)

6. Run migrations:
```bash
python manage.py migrate
```

7. Create superuser:
```bash
python manage.py createsuperuser
```

8. Run development server:
```bash
python manage.py runserver
```

## 🗄️ Database Configuration

This project supports multiple PostgreSQL-compatible databases:

### Option 1: Local PostgreSQL

In your `.env` file:
```env
DATABASE_URL=postgres://user:password@localhost:5432/hanan
```

### Option 2: Neon Database (Recommended for Production)

[Neon](https://neon.tech) is a serverless PostgreSQL platform perfect for production deployments.

1. Sign up at https://neon.tech
2. Create a new project
3. Copy your connection string from the dashboard
4. Add to your `.env` file:

```env
DATABASE_URL=postgres://user:password@ep-xxxxx.us-east-2.aws.neon.tech/hanan?sslmode=require
```

**Neon Benefits:**
- ✅ Serverless & Auto-scaling
- ✅ Free tier available
- ✅ PostgreSQL 15+ compatible
- ✅ Built-in connection pooling
- ✅ Zero configuration
- ✅ Easy backups & branching

### Option 3: SQLite (Development Only)

If no `DATABASE_URL` is set, the project defaults to SQLite:
```env
# Leave DATABASE_URL uncommented or remove it entirely
```

⚠️ **Warning**: SQLite is not suitable for production. Use PostgreSQL or Neon.

## 🔧 Environment Variables

Key environment variables in `.env`:

```env
# Django Settings
DJANGO_SECRET_KEY=your-secret-key-here
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=yourdomain.com,localhost

# Database (choose one)
DATABASE_URL=postgres://...  # For PostgreSQL/Neon
# Leave empty for SQLite (dev only)

# CORS & Security
CORS_ALLOWED_ORIGINS=http://localhost:5173
CSRF_TRUSTED_ORIGINS=https://yourdomain.com

# Email Settings
EMAIL_HOST=smtp.gmail.com
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
EMAIL_PORT=587
EMAIL_USE_TLS=True
DEFAULT_FROM_EMAIL=Hanan <noreply@yourdomain.com>

# Payment Gateway
PAYMENT_PROVIDER=zarinpal
ZARINPAL_MERCHANT_ID=your-merchant-id
PAYIR_API_KEY=your-api-key

# URLs
FRONTEND_URL=https://yourdomain.com
SITE_URL=https://api.yourdomain.com
```

## 📁 Project Structure

```
backend/
├── core/           # Django settings and configuration
├── users/          # User authentication and profiles
├── services/       # Service management
├── orders/         # Order processing
├── products/       # Product catalog
├── blog/           # Blog posts
├── ads/            # Advertisement management
├── affiliates/     # Affiliate program
├── payments/       # Payment processing
├── manage.py       # Django management script
├── requirements.txt
└── env.example     # Environment template
```

## 🔌 API Endpoints

- `/api/auth/` - Authentication (register, login, token refresh)
- `/api/users/` - User profiles and management
- `/api/services/` - Service listings
- `/api/orders/` - Order creation and tracking
- `/api/products/` - Product catalog
- `/api/blog/` - Blog posts
- `/api/ads/` - Advertisement management
- `/api/affiliate/` - Affiliate tracking
- `/api/payments/` - Payment processing

API documentation available at:
- Swagger UI: `/api/docs/`
- Schema: `/api/schema/`

## 🧪 Testing

Run tests:
```bash
python manage.py test
```

## 🚢 Deployment

### Neon + Railway/Render

Recommended stack:
1. **Database**: Neon PostgreSQL
2. **Backend**: Railway, Render, or Fly.io
3. **Frontend**: Vercel or Netlify

Example deployment steps:
```bash
# 1. Push to GitHub
git push origin main

# 2. Set environment variables in deployment platform
# - Copy all variables from .env
# - Add your Neon DATABASE_URL

# 3. Deploy
# Platform will automatically build and deploy
```

## 📚 Dependencies

Key packages:
- Django 5.0.6 - Web framework
- djangorestframework - REST API
- psycopg2-binary - PostgreSQL driver
- django-cors-headers - CORS support
- redis - Caching (optional)
- celery - Background tasks (optional)

See `requirements.txt` for complete list.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📄 License

Copyright © 2025 HANAN Agency

