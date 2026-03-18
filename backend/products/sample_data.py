
import os
import django
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ecommerce.settings')
django.setup()

from products.models import Category, Product

def create_sample_data():
    # Create categories
    categories = [
        {
            'name': 'Furniture',
            'description': 'Explore our collection of premium quality furniture designed to enhance your living space with elegance and functionality.',
            'image': 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        },
        {
            'name': 'Lighting',
            'description': 'Illuminate your space with our designer lighting solutions that combine form and function for a perfect ambiance.',
            'image': 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        },
        {
            'name': 'Home Decor',
            'description': 'Add personality to your home with our carefully curated decor items that reflect your unique style and taste.',
            'image': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        },
        {
            'name': 'Kitchen',
            'description': 'Upgrade your culinary space with our premium kitchen products that combine style, durability, and functionality.',
            'image': 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
        }
    ]
    
    for cat_data in categories:
        category, created = Category.objects.get_or_create(
            name=cat_data['name'],
            defaults={
                'description': cat_data['description'],
                'image': cat_data['image']
            }
        )
        print(f"{'Created' if created else 'Updated'} category: {category.name}")
    
    # Create products
    products = [
        {
            'category': 'Furniture',
            'name': 'Modern Armchair',
            'description': 'A comfortable modern armchair with sleek design and premium upholstery.',
            'long_description': '<p>This exquisite armchair combines comfort and modern aesthetics to create a stunning piece for any living space. Handcrafted by skilled artisans using traditional techniques, each chair has its own unique characteristics.</p><p>The premium upholstery is sourced from the finest materials and designed to last for years. The sturdy frame ensures stability and durability, while the ergonomic design provides exceptional comfort.</p>',
            'price': 249.99,
            'image': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': False,
            'is_new': False,
            'in_stock': True,
            'sku': 'ARMCH-101',
            'features': json.dumps([
                'Premium quality upholstery',
                'Ergonomic design',
                'Sturdy hardwood frame',
                'Available in multiple colors',
                'Dimensions: 29"W x 32"D x 35"H'
            ]),
            'specifications': json.dumps({
                'Material': 'Polyester blend fabric',
                'Frame': 'Solid hardwood',
                'Weight Capacity': '300 lbs',
                'Assembly': 'Minimal assembly required',
                'Care Instructions': 'Spot clean with mild detergent'
            }),
            'rating': 4.6,
            'review_count': 87
        },
        {
            'category': 'Furniture',
            'name': 'Minimalist Side Table',
            'description': 'A sleek minimalist side table perfect for modern interiors.',
            'long_description': '<p>This minimalist side table is crafted with precision to fit seamlessly into contemporary interiors. Its clean lines and balanced proportions make it a versatile piece for any room.</p><p>The table features a durable finish that resists scratches and stains, making it practical for everyday use. The compact design makes it perfect for small spaces, while still providing ample surface area.</p>',
            'price': 129.99,
            'image': 'https://images.unsplash.com/photo-1532372320572-cda25653a694?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': False,
            'is_new': True,
            'in_stock': True,
            'sku': 'SIDE-102',
            'features': json.dumps([
                'Minimalist design',
                'Durable finish',
                'Solid construction',
                'Easy assembly',
                'Dimensions: 20"W x 20"D x 24"H'
            ]),
            'specifications': json.dumps({
                'Material': 'Engineered wood with veneer',
                'Finish': 'Semi-gloss',
                'Weight Capacity': '50 lbs',
                'Assembly': 'Simple assembly required',
                'Care Instructions': 'Wipe clean with a dry cloth'
            }),
            'rating': 4.8,
            'review_count': 42
        },
        {
            'category': 'Furniture',
            'name': 'Elegant Desk Chair',
            'description': 'A comfortable and stylish desk chair for your home office.',
            'price': 179.99,
            'image': 'https://images.unsplash.com/photo-1505843490701-5be5d1b31a89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': True,
            'is_new': False,
            'in_stock': True,
            'sku': 'CHAIR-103',
            'rating': 4.5,
            'review_count': 63
        },
        {
            'category': 'Furniture',
            'name': 'Wooden Bookshelf',
            'description': 'A sturdy wooden bookshelf with ample storage space.',
            'price': 299.99,
            'image': 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': False,
            'is_new': False,
            'in_stock': True,
            'sku': 'SHELF-104',
            'rating': 4.7,
            'review_count': 35
        },
        {
            'category': 'Furniture',
            'name': 'Modern Coffee Table',
            'description': 'A sleek modern coffee table with clean lines and durable construction.',
            'price': 219.99,
            'image': 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': False,
            'is_new': True,
            'in_stock': True,
            'sku': 'TABLE-105',
            'rating': 4.4,
            'review_count': 28
        },
        {
            'category': 'Furniture',
            'name': 'Designer Sofa',
            'description': 'A premium designer sofa that combines comfort and aesthetics.',
            'price': 849.99,
            'image': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': True,
            'is_new': False,
            'in_stock': True,
            'sku': 'SOFA-106',
            'rating': 4.9,
            'review_count': 112
        },
        {
            'category': 'Lighting',
            'name': 'Modern Desk Lamp',
            'description': 'A versatile desk lamp with adjustable brightness and sleek design.',
            'price': 129.99,
            'image': 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': True,
            'is_new': False,
            'in_stock': True,
            'sku': 'LAMP-201',
            'rating': 4.5,
            'review_count': 58
        },
        {
            'category': 'Lighting',
            'name': 'Minimalist Floor Lamp',
            'description': 'A contemporary floor lamp that adds elegance to any room.',
            'price': 249.99,
            'image': 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1573486368237-a1aa804c0232?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': False,
            'is_new': False,
            'in_stock': True,
            'sku': 'LAMP-202',
            'rating': 4.6,
            'review_count': 43
        },
        {
            'category': 'Home Decor',
            'name': 'Minimalist Ceramic Vase',
            'description': 'A handcrafted ceramic vase with a beautiful minimalist design.',
            'long_description': '<p>This exquisite vase is handcrafted by skilled artisans using traditional techniques passed down through generations. Each piece has its own unique characteristics, making it a true work of art.</p><p>The ceramic is sourced from the finest clay and fired at high temperatures to ensure durability and longevity. The matte finish gives it a sophisticated look that works well with both dried and fresh flowers.</p><p>Available in a soft, neutral color palette, this vase complements any interior decor style from minimalist to bohemian. Its substantial weight ensures stability, while the water-tight design makes it perfectly functional for fresh flower arrangements.</p>',
            'price': 89.99,
            'image': 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1600337752115-de2533664fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'additional_images': json.dumps([
                'https://images.unsplash.com/photo-1602078019624-978fd597d3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1631125915902-d9aea55b0f4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            ]),
            'is_featured': False,
            'is_new': True,
            'in_stock': True,
            'sku': 'VASE-301',
            'features': json.dumps([
                'Handcrafted from premium ceramic',
                'Matte finish with subtle texture',
                'Water-tight design',
                'Dimensions: 12" H x 6" W',
                'Weight: 3.2 lbs',
            ]),
            'specifications': json.dumps({
                'Material': 'Ceramic',
                'Finish': 'Matte',
                'Height': '12 inches',
                'Width': '6 inches',
                'Weight': '3.2 lbs',
                'Care Instructions': 'Wipe clean with damp cloth',
                'Country of Origin': 'Portugal',
            }),
            'rating': 4.8,
            'review_count': 124
        },
        {
            'category': 'Home Decor',
            'name': 'Artisan Wall Clock',
            'description': 'A unique handcrafted wall clock that serves as both timekeeper and art piece.',
            'price': 79.99,
            'image': 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': False,
            'is_new': True,
            'in_stock': True,
            'sku': 'CLOCK-302',
            'rating': 4.7,
            'review_count': 37
        },
        {
            'category': 'Home Decor',
            'name': 'Handwoven Wool Rug',
            'description': 'A premium handwoven rug that adds warmth and texture to your space.',
            'price': 399.99,
            'image': 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': False,
            'is_new': False,
            'in_stock': True,
            'sku': 'RUG-303',
            'rating': 4.9,
            'review_count': 52
        },
        {
            'category': 'Kitchen',
            'name': 'Premium Chef\'s Knife',
            'description': 'A high-quality chef\'s knife crafted for precision and durability.',
            'price': 129.99,
            'image': 'https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1566454825481-9bfdb53a04fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': True,
            'is_new': False,
            'in_stock': True,
            'sku': 'KNIFE-401',
            'rating': 4.8,
            'review_count': 76
        },
        {
            'category': 'Kitchen',
            'name': 'Ceramic Cookware Set',
            'description': 'A complete set of premium ceramic cookware for all your culinary needs.',
            'price': 349.99,
            'image': 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'hover_image': 'https://images.unsplash.com/photo-1585513552070-8f73d39270de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'is_featured': False,
            'is_new': True,
            'in_stock': True,
            'sku': 'COOK-402',
            'rating': 4.6,
            'review_count': 45
        }
    ]
    
    for prod_data in products:
        category = Category.objects.get(name=prod_data['category'])
        
        # Extract fields that need special handling
        features = prod_data.pop('features', None)
        specifications = prod_data.pop('specifications', None)
        additional_images = prod_data.pop('additional_images', None)
        
        # Create or update the product
        product, created = Product.objects.get_or_create(
            name=prod_data['name'],
            defaults={
                **prod_data,
                'category': category,
                'features': features,
                'specifications': specifications,
                'additional_images': additional_images
            }
        )
        
        if not created:
            # Update existing product
            for key, value in prod_data.items():
                setattr(product, key, value)
            
            if features:
                product.features = features
            if specifications:
                product.specifications = specifications
            if additional_images:
                product.additional_images = additional_images
                
            product.category = category
            product.save()
            
        print(f"{'Created' if created else 'Updated'} product: {product.name}")

if __name__ == "__main__":
    create_sample_data()
    print("Sample data has been created successfully!")
