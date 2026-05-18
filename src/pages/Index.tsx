import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard, { ProductProps } from '@/components/ui/ProductCard';
import FeaturedProduct from '@/components/ui/FeaturedProduct';
import CategoryCard from '@/components/ui/CategoryCard';
import FadeIn from '@/components/animations/FadeIn';

const Index = () => {
  // Mock product data
  const products: ProductProps[] = [
    {
      id: '1',
      name: 'Minimalist Ceramic Vase',
      slug: 'minimalist-ceramic-vase',
      description: 'Beautiful minimalist ceramic vase for modern homes',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      hover_image: 'https://images.unsplash.com/photo-1600337752115-de2533664fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'home-decor',
      category_name: 'Home Decor',
      is_new: true,
      is_featured: false,
    },
    {
      id: '2',
      name: 'Modern Desk Lamp',
      slug: 'modern-desk-lamp',
      description: 'Sleek modern desk lamp with adjustable brightness',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      hover_image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'lighting',
      category_name: 'Lighting',
      is_featured: true,
      is_new: false,
    },
    {
      id: '3',
      name: 'Handcrafted Coffee Table',
      slug: 'handcrafted-coffee-table',
      description: 'Artisan handcrafted coffee table made from reclaimed wood',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      hover_image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'furniture',
      category_name: 'Furniture',
      is_featured: false,
      is_new: false,
    },
    {
      id: '4',
      name: 'Artisan Wall Clock',
      slug: 'artisan-wall-clock',
      description: 'Handmade wall clock with minimalist design',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      hover_image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      category: 'home-decor',
      category_name: 'Home Decor',
      is_new: true,
      is_featured: false,
    },
  ];

  // Mock featured product
  const featuredProduct = {
    id: '5',
    name: 'Premium Lounge Chair',
    description: 'Handcrafted from the finest materials, this lounge chair combines modern design with unparalleled comfort. Perfect for your living room or reading nook.',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  };

  // Second featured product
  const secondFeaturedProduct = {
    id: '6',
    name: 'Minimalist Floor Lamp',
    description: 'This sleek floor lamp provides perfect ambient lighting with its adjustable height and direction. The modern design will complement any interior.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  };

  // Mock categories
  const categories = [
    {
      id: '1',
      name: 'Furniture',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      productCount: 42,
    },
    {
      id: '2',
      name: 'Lighting',
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      productCount: 24,
    },
    {
      id: '3',
      name: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      productCount: 38,
    },
    {
      id: '4',
      name: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      productCount: 31,
    },
  ];

  // Scroll-triggered animation for sections
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Modern interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Hero Content */}
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-2xl">
            <FadeIn delay={0.1} direction="up">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-6">
                Elevate Your Space
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-white/90 mb-8">
                Discover curated collections of premium furniture and home accessories designed for modern living.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="apple-button bg-white text-primary hover:bg-white/90"
                >
                  Shop Collection
                </Link>
                <Link
                  to="/about"
                  className="apple-button bg-transparent text-white border border-white/30 hover:bg-white/10"
                >
                  Our Story
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll</span>
          <div className="w-0.5 h-8 bg-white/30 animate-pulse-slow" />
        </div>
      </section>
      
      {/* Featured Categories */}
      <section className="section-padding bg-secondary">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-3 block">Explore</span>
                <h2 className="text-3xl md:text-4xl font-medium">Shop by Category</h2>
              </div>
              <Link 
                to="/categories" 
                className="hidden md:flex items-center text-sm font-medium hover:text-muted-foreground transition-colors duration-300"
              >
                <span>All Categories</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index} 
              />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/categories" 
              className="inline-flex items-center text-sm font-medium hover:text-muted-foreground transition-colors duration-300"
            >
              <span>All Categories</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Product */}
      <FeaturedProduct product={featuredProduct} />
      
      {/* New Arrivals */}
      <section className="section-padding bg-white">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-sm text-muted-foreground uppercase tracking-wider mb-3 block">Latest</span>
                <h2 className="text-3xl md:text-4xl font-medium">New Arrivals</h2>
              </div>
              <Link 
                to="/products" 
                className="hidden md:flex items-center text-sm font-medium hover:text-muted-foreground transition-colors duration-300"
              >
                <span>All Products</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
              />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/products" 
              className="inline-flex items-center text-sm font-medium hover:text-muted-foreground transition-colors duration-300"
            >
              <span>All Products</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Second Featured Product */}
      <FeaturedProduct product={secondFeaturedProduct} reverse={true} />
      
      {/* Newsletter & Testimonial */}
      <section className="section-padding bg-muted relative overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <FadeIn direction="up">
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-3 block">Join Us</span>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Get 10% off your first order</h2>
              <p className="text-muted-foreground mb-8">
                Sign up for our newsletter to receive exclusive offers, design inspiration, and updates on new products.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow rounded-l-lg px-4 py-3 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <button className="apple-button rounded-l-none rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
