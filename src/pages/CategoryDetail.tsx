
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getCategory, getCategoryProducts } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import FadeIn from '@/components/animations/FadeIn';

const CategoryDetail = () => {
  const { toast } = useToast();
  const { id } = useParams();
  
  // Fetch category data
  const { 
    data: category,
    isLoading: categoryLoading,
    error: categoryError
  } = useQuery({
    queryKey: ['category', id],
    queryFn: () => getCategory(id || ''),
    enabled: !!id
  });
  
  // Fetch products in this category
  const { 
    data: products = [],
    isLoading: productsLoading,
    error: productsError
  } = useQuery({
    queryKey: ['categoryProducts', id],
    queryFn: () => getCategoryProducts(id || ''),
    enabled: !!id
  });

  const isLoading = categoryLoading || productsLoading;
  const error = categoryError || productsError;

  // Show error toast if API request fails
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load category data. Please try again later.",
        variant: "destructive"
      });
    }
  }, [error, toast]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
          <div className="space-y-2 text-center">
            <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto"></div>
            <p className="text-muted-foreground">Loading category...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!category) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-medium mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The category you are looking for doesn't exist or has been removed.</p>
          <Link to="/" className="apple-button">Return to Home</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:py-32 flex items-center">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Hero Content */}
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-2xl">
            <FadeIn delay={0.1} direction="up">
              <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
                {category.name}
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-white/90 mb-8">
                {category.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <div className="flex items-center mb-12">
              <Link to="/" className="flex items-center text-sm font-medium hover:text-muted-foreground transition-colors duration-300 mr-4">
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back</span>
              </Link>
              <h2 className="text-2xl md:text-3xl font-medium">{products.length} Products</h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
              />
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg mb-2">No products found in this category</p>
              <Link to="/products" className="text-primary hover:underline">
                Browse all products
              </Link>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default CategoryDetail;
