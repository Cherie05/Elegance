import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { 
  ChevronRight, Minus, Plus, ShoppingCart, Heart, 
  Share2, Star, Truck, RefreshCw, Shield 
} from 'lucide-react';
import { getProduct, getFeaturedProducts } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import ProductCard from '@/components/ui/ProductCard';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { toast } = useToast();
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  
  const { 
    data: product,
    isLoading: productLoading,
    error: productError
  } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProduct(slug || ''),
    enabled: !!slug
  });

  const { 
    data: relatedProducts = [],
    isLoading: relatedLoading
  } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: getFeaturedProducts,
    initialData: []
  });

  // Show error toast if API request fails
  useEffect(() => {
    if (productError) {
      toast({
        title: "Error",
        description: "Failed to load product data. Please try again later.",
        variant: "destructive"
      });
    }
  }, [productError, toast]);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cn(
          "w-4 h-4",
          index < Math.floor(rating) 
            ? "text-yellow-400 fill-yellow-400" 
            : index < rating 
              ? "text-yellow-400 fill-yellow-400 opacity-50" 
              : "text-gray-300"
        )}
      />
    ));
  };

  if (productLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
          <div className="space-y-2 text-center">
            <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto"></div>
            <p className="text-muted-foreground">Loading product details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-medium mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you are looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="apple-button">Browse Products</Link>
        </div>
        <Footer />
      </>
    );
  }
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  const features = typeof product.features === 'string' 
    ? JSON.parse(product.features) 
    : product.features || [];
    
  const specifications = typeof product.specifications === 'string'
    ? JSON.parse(product.specifications)
    : product.specifications || {};
    
  const additionalImages = typeof product.additional_images === 'string'
    ? JSON.parse(product.additional_images)
    : product.additional_images || [];

  const allImages = [product.image];
  if (product.hover_image) allImages.push(product.hover_image);
  if (additionalImages && additionalImages.length) {
    allImages.push(...additionalImages);
  }
  
  const reviews = [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      date: '2 months ago',
      content: 'This product is absolutely beautiful! The craftsmanship is excellent and it looks perfect in my living room. Very happy with this purchase.',
    },
    {
      id: 2,
      author: 'Michael K.',
      rating: 4,
      date: '3 months ago',
      content: 'Great quality and design. The color is slightly different from what I expected, but still looks great.',
    },
    {
      id: 3,
      author: 'Emma L.',
      rating: 5,
      date: '1 month ago',
      content: 'Stunning piece! I\'ve received so many compliments on this. It\'s the perfect size for my dining table centerpiece.',
    },
  ];
  
  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="bg-muted py-4">
          <div className="container px-4 mx-auto">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 mx-2" />
              <Link to="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <ChevronRight className="w-3 h-3 mx-2" />
              <Link to={`/categories/${product.category}`} className="hover:text-primary transition-colors">
                {product.category_name}
              </Link>
              <ChevronRight className="w-3 h-3 mx-2" />
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FadeIn className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
                  <img
                    src={allImages[activeImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-all duration-500 ease-apple"
                  />
                </div>
                
                {allImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {allImages.map((image, index) => (
                      <button
                        key={index}
                        className={cn(
                          "aspect-square rounded-lg overflow-hidden bg-secondary border-2 transition-all duration-300",
                          index === activeImageIndex
                            ? "border-primary"
                            : "border-transparent hover:border-muted-foreground/50"
                        )}
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <img
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </FadeIn>
              
              <div className="flex flex-col">
                <FadeIn delay={0.1} direction="up">
                  <h1 className="text-3xl md:text-4xl font-medium mb-2">{product.name}</h1>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      {renderStars(product.rating || 0)}
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({product.review_count || 0} reviews)
                      </span>
                    </div>
                    {product.sku && (
                      <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
                    )}
                  </div>
                  
                  <p className="text-2xl font-medium mb-6">{formattedPrice}</p>
                  
                  <p className="text-muted-foreground mb-8">
                    {product.description}
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.2} direction="up">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-sm font-medium">Quantity:</span>
                    <div className="flex items-center border border-border rounded-lg overflow-hidden">
                      <button
                        className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                        onClick={decreaseQuantity}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center">{quantity}</span>
                      <button
                        className="w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
                        onClick={increaseQuantity}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="apple-button w-full sm:w-auto flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      <span>Add to Cart</span>
                    </button>
                    <div className="flex gap-4 w-full sm:w-auto">
                      <button className="apple-button flex-grow sm:flex-grow-0 bg-white text-primary border border-border hover:bg-muted flex items-center justify-center">
                        <Heart className="w-4 h-4 mr-2" />
                        <span>Wishlist</span>
                      </button>
                      <button className="w-12 h-12 flex-shrink-0 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.3} direction="up">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-muted rounded-lg flex flex-col items-center text-center">
                      <Truck className="w-6 h-6 mb-2" />
                      <h3 className="text-sm font-medium mb-1">Free Shipping</h3>
                      <p className="text-xs text-muted-foreground">On orders over $50</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg flex flex-col items-center text-center">
                      <RefreshCw className="w-6 h-6 mb-2" />
                      <h3 className="text-sm font-medium mb-1">Easy Returns</h3>
                      <p className="text-xs text-muted-foreground">30 day return policy</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg flex flex-col items-center text-center">
                      <Shield className="w-6 h-6 mb-2" />
                      <h3 className="text-sm font-medium mb-1">Secure Checkout</h3>
                      <p className="text-xs text-muted-foreground">SSL encrypted checkout</p>
                    </div>
                  </div>
                </FadeIn>
                
                {features && features.length > 0 && (
                  <FadeIn delay={0.4} direction="up">
                    <div className="border-t border-border pt-6">
                      <h3 className="text-lg font-medium mb-4">Features</h3>
                      <ul className="space-y-2">
                        {features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-muted">
          <div className="container px-4 mx-auto">
            <FadeIn>
              <div className="flex flex-wrap gap-2 border-b border-border mb-8">
                <button
                  className={cn(
                    "py-3 px-6 text-sm font-medium border-b-2 transition-colors",
                    activeTab === 'description'
                      ? "border-primary"
                      : "border-transparent hover:text-primary"
                  )}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                {Object.keys(specifications).length > 0 && (
                  <button
                    className={cn(
                      "py-3 px-6 text-sm font-medium border-b-2 transition-colors",
                      activeTab === 'specifications'
                        ? "border-primary"
                        : "border-transparent hover:text-primary"
                    )}
                    onClick={() => setActiveTab('specifications')}
                  >
                    Specifications
                  </button>
                )}
                <button
                  className={cn(
                    "py-3 px-6 text-sm font-medium border-b-2 transition-colors",
                    activeTab === 'reviews'
                      ? "border-primary"
                      : "border-transparent hover:text-primary"
                  )}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews ({product.review_count || 0})
                </button>
              </div>
            </FadeIn>
            
            <div className="max-w-3xl mx-auto">
              {activeTab === 'description' && (
                <FadeIn>
                  <div 
                    className="prose" 
                    dangerouslySetInnerHTML={{ 
                      __html: typeof product.long_description === 'string' 
                        ? product.long_description 
                        : typeof product.description === 'string'
                          ? product.description 
                          : ''
                    }} 
                  />
                </FadeIn>
              )}
              
              {activeTab === 'specifications' && (
                <FadeIn>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex p-4 bg-white rounded-lg">
                        <div className="w-1/2 font-medium">{key}</div>
                        <div className="w-1/2 text-muted-foreground">{String(value)}</div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              )}
              
              {activeTab === 'reviews' && (
                <FadeIn>
                  <div className="space-y-10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 bg-white rounded-xl">
                      <div className="text-center sm:text-left">
                        <div className="text-4xl font-medium mb-2">{product.rating || 0}</div>
                        <div className="flex justify-center sm:justify-start mb-2">
                          {renderStars(product.rating || 0)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Based on {product.review_count || 0} reviews
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map(star => {
                            const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1;
                            
                            return (
                              <div key={star} className="flex items-center">
                                <div className="flex items-center w-20">
                                  <span className="text-sm mr-2">{star}</span>
                                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                </div>
                                <div className="flex-grow h-2 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-yellow-400"
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                                <span className="text-sm text-muted-foreground ml-4 w-12">
                                  {percentage}%
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium">Customer Reviews</h3>
                      
                      {reviews.map(review => (
                        <div key={review.id} className="border-b border-border pb-6 last:border-0">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{review.author}</span>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-3">
                            {renderStars(review.rating)}
                          </div>
                          <div 
                            className="mt-2 text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: typeof review.content === 'string' ? review.content : '' }}
                          />
                        </div>
                      ))}
                      
                      <button className="apple-button bg-white text-primary border border-border hover:bg-muted inline-flex">
                        Write a Review
                      </button>
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>
        
        {!relatedLoading && relatedProducts.length > 0 && (
          <section className="py-16">
            <div className="container px-4 mx-auto">
              <FadeIn direction="up">
                <h2 className="text-3xl font-medium mb-12 text-center">You May Also Like</h2>
              </FadeIn>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts
                  .filter(p => p.id !== product.id)
                  .slice(0, 4)
                  .map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      index={index} 
                    />
                  ))
                }
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default ProductDetail;
