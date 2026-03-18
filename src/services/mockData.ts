import { Category, Product } from './api';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Furniture',
    slug: 'furniture',
    description: 'Premium furniture for modern living spaces',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    name: 'Lighting',
    slug: 'lighting',
    description: 'Beautiful lighting solutions for every room',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    name: 'Home Decor',
    slug: 'home-decor',
    description: 'Stylish accessories to complete your space',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '4',
    name: 'Kitchen',
    slug: 'kitchen',
    description: 'Modern kitchen essentials and appliances',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Minimalist Ceramic Vase',
    slug: 'minimalist-ceramic-vase',
    description: 'Beautiful minimalist ceramic vase for modern homes',
    long_description: 'This exquisite ceramic vase represents the perfect blend of form and function. Crafted by skilled artisans, each piece features a unique glaze that catches light beautifully. The minimalist design makes it versatile enough to complement any interior style, from Scandinavian to contemporary.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    hover_image: 'https://images.unsplash.com/photo-1600337752115-de2533664fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    additional_images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ],
    category: '3',
    category_name: 'Home Decor',
    is_new: true,
    is_featured: false,
    in_stock: true,
    sku: 'VAZ-MIN-001',
    features: [
      'Handcrafted ceramic construction',
      'Water-resistant finish',
      'Perfect for fresh or dried flowers',
      'Easy to clean and maintain'
    ],
    specifications: {
      'Material': 'Ceramic',
      'Height': '12 inches',
      'Diameter': '6 inches',
      'Weight': '2.5 lbs',
      'Care Instructions': 'Hand wash recommended'
    },
    rating: 4.8,
    review_count: 156
  },
  {
    id: '2',
    name: 'Modern Desk Lamp',
    slug: 'modern-desk-lamp',
    description: 'Sleek modern desk lamp with adjustable brightness',
    long_description: 'Illuminate your workspace with this elegant LED desk lamp. Featuring three brightness levels and a flexible neck, it provides optimal lighting for reading, working, or studying. The minimalist design and premium materials make it a perfect addition to any modern office or study.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    hover_image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: '2',
    category_name: 'Lighting',
    is_featured: true,
    is_new: false,
    in_stock: true,
    sku: 'LMP-DSK-002',
    features: [
      'Energy-efficient LED bulbs',
      'Three brightness levels',
      'Flexible adjustable neck',
      'Touch-sensitive controls',
      'USB charging port'
    ],
    specifications: {
      'Power': '12W LED',
      'Brightness': '1200 lumens',
      'Color Temperature': '3000K-6500K',
      'Base Dimensions': '8" x 6"',
      'Height': '24 inches (adjustable)'
    },
    rating: 4.6,
    review_count: 89
  },
  {
    id: '3',
    name: 'Handcrafted Coffee Table',
    slug: 'handcrafted-coffee-table',
    description: 'Artisan handcrafted coffee table made from reclaimed wood',
    long_description: 'Each coffee table is uniquely handcrafted from sustainably sourced reclaimed wood, celebrating the natural beauty of wood grain and texture. The live-edge design preserves the organic shape of the tree, making each piece truly one-of-a-kind. Perfect for those who appreciate authentic craftsmanship and sustainable design.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a694?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    hover_image: 'https://images.unsplash.com/photo-1594896955090-446756060df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: '1',
    category_name: 'Furniture',
    is_featured: false,
    is_new: false,
    in_stock: true,
    sku: 'TBL-COF-003',
    features: [
      'Reclaimed wood construction',
      'Live-edge natural design',
      'Protective finish applied',
      'Handcrafted by skilled artisans',
      'Sustainable and eco-friendly'
    ],
    specifications: {
      'Material': 'Reclaimed Oak',
      'Dimensions': '48" x 24" x 18"',
      'Weight': '65 lbs',
      'Finish': 'Natural oil finish',
      'Assembly': 'Minimal assembly required'
    },
    rating: 4.9,
    review_count: 127
  },
  {
    id: '4',
    name: 'Artisan Wall Clock',
    slug: 'artisan-wall-clock',
    description: 'Handmade wall clock with minimalist design',
    long_description: 'This striking wall clock combines traditional craftsmanship with contemporary design. Made from solid wood with precise quartz movement, it features clean lines and subtle details that enhance any space. The silent operation ensures it won\'t disturb your peace while adding a sophisticated touch to your walls.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    hover_image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: '3',
    category_name: 'Home Decor',
    is_new: true,
    is_featured: false,
    in_stock: true,
    sku: 'CLK-WAL-004',
    features: [
      'Silent quartz movement',
      'Solid wood construction',
      'Minimalist design',
      'Easy wall mounting',
      'Battery operated'
    ],
    specifications: {
      'Material': 'Solid Walnut Wood',
      'Diameter': '12 inches',
      'Thickness': '1.5 inches',
      'Movement': 'Quartz (silent)',
      'Battery': '1 AA (not included)'
    },
    rating: 4.5,
    review_count: 73
  },
  {
    id: '5',
    name: 'Premium Lounge Chair',
    slug: 'premium-lounge-chair',
    description: 'Luxurious lounge chair with ergonomic design',
    long_description: 'Experience unparalleled comfort with this premium lounge chair. Designed with ergonomics in mind, it features high-quality upholstery and a solid wood frame. The perfect addition to any living room, reading nook, or office space where comfort meets style.',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: '1',
    category_name: 'Furniture',
    is_featured: true,
    is_new: false,
    in_stock: true,
    sku: 'CHR-LNG-005',
    features: [
      'Premium leather upholstery',
      'Ergonomic design',
      'Solid hardwood frame',
      'High-density foam cushioning',
      'Swivel base'
    ],
    specifications: {
      'Material': 'Top-grain Leather, Oak Frame',
      'Dimensions': '32" x 34" x 42"',
      'Weight': '85 lbs',
      'Weight Capacity': '300 lbs',
      'Assembly': 'Professional assembly recommended'
    },
    rating: 4.7,
    review_count: 203
  },
  {
    id: '6',
    name: 'Minimalist Floor Lamp',
    slug: 'minimalist-floor-lamp',
    description: 'Sleek floor lamp with adjustable height and direction',
    long_description: 'This contemporary floor lamp provides perfect ambient lighting with its adjustable height and directional head. The sleek metal construction and neutral finish make it versatile enough to complement any modern interior design scheme.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: '2',
    category_name: 'Lighting',
    is_featured: true,
    is_new: true,
    in_stock: true,
    sku: 'LMP-FLR-006',
    features: [
      'Adjustable height mechanism',
      'Directional LED head',
      'Dimmer switch included',
      'Weighted base for stability',
      'Modern minimalist design'
    ],
    specifications: {
      'Material': 'Brushed Steel',
      'Height Range': '54" - 72"',
      'Base Diameter': '12 inches',
      'Light Output': '1800 lumens',
      'Color Temperature': '2700K warm white'
    },
    rating: 4.4,
    review_count: 91
  }
];
