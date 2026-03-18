import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CategoryCard from '@/components/ui/CategoryCard';
import FadeIn from '@/components/animations/FadeIn';

const Categories = () => {
  const { toast } = useToast();
  
  // Fetch all categories
  const { 
    data: categories = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });

  // Show error toast if API request fails
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load categories. Please try again later.",
        variant: "destructive"
      });
    }
  }, [error, toast]);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:py-32 flex items-center">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Categories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Hero Content */}
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-2xl">
            <FadeIn delay={0.1} direction="up">
              <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
                Browse Categories
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-white/90 mb-8">
                Explore our collection of carefully curated product categories
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <FadeIn direction="up">
            <h2 className="text-2xl md:text-3xl font-medium mb-12">All Categories</h2>
          </FadeIn>
          
          {isLoading ? (
            <div className="min-h-[300px] flex items-center justify-center">
              <div className="space-y-2 text-center">
                <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto"></div>
                <p className="text-muted-foreground">Loading categories...</p>
              </div>
            </div>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={{
                  ...category,
                  productCount: Math.floor(Math.random() * 50) + 10 // Mock product count
                }} 
                index={index} 
              />
            ))}
            </div>
          )}
          
          {categories.length === 0 && !isLoading && (
            <div className="py-12 text-center">
              <p className="text-lg mb-2">No categories found</p>
              <Link to="/" className="text-primary hover:underline">
                Return to home
              </Link>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Categories;
