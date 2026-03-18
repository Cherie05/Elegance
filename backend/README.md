
# E-commerce Backend (Django)

This is the backend for the e-commerce application built with Django and Django REST Framework.

## Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. Clone the repository
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```
   python manage.py makemigrations
   python manage.py migrate
   ```
5. Create a superuser to access the admin panel:
   ```
   python manage.py createsuperuser
   ```
6. Load sample data (optional):
   ```
   python -m products.sample_data
   ```
7. Start the development server:
   ```
   python manage.py runserver
   ```

The API will be available at http://localhost:8000/api/

## API Endpoints

- `/api/categories/` - List all categories
- `/api/categories/{slug}/` - Get a specific category by slug
- `/api/products/` - List all products
- `/api/products/{slug}/` - Get a specific product by slug
- `/api/categories/{slug}/products/` - List all products in a specific category
- `/api/featured-products/` - List all featured products
- `/api/new-products/` - List all new products

## Admin Panel

You can access the admin panel at http://localhost:8000/admin/ using the superuser credentials you created.
