
import { useState, useEffect } from 'react';
import { 
  Filter, X, ChevronDown, ChevronUp, Sliders
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getProducts, getCategories } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import FadeIn from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';

const Products = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
  });

  // Fetch products
  const { 
    data: products = [], 
    isLoading: productsLoading,
    error: productsError
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  // Fetch categories
  const { 
    data: categoriesData = [],
    isLoading: categoriesLoading
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });

  // Show error toast if API request fails
  useEffect(() => {
    if (productsError) {
      toast({
        title: "Error",
        description: "Failed to load products. Please try again later.",
        variant: "destructive"
      });
    }
  }, [productsError, toast]);

  // Filter and sort products
  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category_name !== selectedCategory) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    // Default: 'featured'
    return a.is_featured ? -1 : b.is_featured ? 1 : 0;
  });

  // Categories for filter
  const categories = categoriesData.map(cat => cat.name);

  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Page Header */}
        <div className="bg-secondary">
          <div className="container px-4 mx-auto py-12">
            <FadeIn direction="up">
              <h1 className="text-3xl md:text-4xl font-medium mb-2">All Products</h1>
              <p className="text-muted-foreground">Discover our collection of premium products</p>
            </FadeIn>
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <FadeIn>
                  <div className="mb-6">
                    <div 
                      className="flex items-center justify-between mb-4 cursor-pointer"
                      onClick={() => toggleSection('categories')}
                    >
                      <h3 className="text-lg font-medium">Categories</h3>
                      {expandedSections.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                    
                    {expandedSections.categories && (
                      <div className="space-y-2">
                        <div 
                          className={cn(
                            "px-3 py-2 rounded-lg cursor-pointer transition-colors",
                            selectedCategory === null ? "bg-secondary" : "hover:bg-muted"
                          )}
                          onClick={() => setSelectedCategory(null)}
                        >
                          All Categories
                        </div>
                        {categories.map((category) => (
                          <div 
                            key={category}
                            className={cn(
                              "px-3 py-2 rounded-lg cursor-pointer transition-colors",
                              selectedCategory === category ? "bg-secondary" : "hover:bg-muted"
                            )}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <div>
                    <div 
                      className="flex items-center justify-between mb-4 cursor-pointer"
                      onClick={() => toggleSection('price')}
                    >
                      <h3 className="text-lg font-medium">Price</h3>
                      {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                    
                    {expandedSections.price && (
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}+</span>
                        </div>
                        <input 
                          type="range"
                          min="0"
                          max="1000"
                          step="50"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>
            </aside>
            
            {/* Products Grid */}
            <div className="flex-grow">
              {/* Mobile Actions */}
              <div className="flex items-center justify-between mb-6 md:hidden">
                <button 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
                
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-4 py-2 pr-8 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>
              
              {/* Desktop Actions */}
              <div className="hidden md:flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{sortedProducts.length}</span> products
                </p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm mr-2">Sort by:</span>
                  <div className="relative">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none px-4 py-2 pr-8 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              {/* Loading State */}
              {productsLoading ? (
                <div className="py-20 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mb-4"></div>
                  <p className="text-muted-foreground">Loading products...</p>
                </div>
              ) : (
                <>
                  {/* Products */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map((product, index) => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        index={index}
                      />
                    ))}
                  </div>
                  
                  {/* No results message */}
                  {sortedProducts.length === 0 && !productsLoading && (
                    <div className="py-16 text-center">
                      <p className="text-lg mb-2">No products found</p>
                      <p className="text-muted-foreground">Try adjusting your filters</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile Filters Drawer */}
      <div className={cn(
        "fixed inset-0 bg-background/80 z-50 md:hidden transition-opacity duration-300",
        mobileFiltersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed inset-y-0 left-0 w-full max-w-xs bg-background shadow-lg transition-transform duration-300 ease-apple",
          mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium flex items-center">
              <Sliders className="w-5 h-5 mr-2" />
              Filters
            </h2>
            <button 
              className="p-2 rounded-full hover:bg-muted transition-colors"
              onClick={() => setMobileFiltersOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 space-y-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
            <div>
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                <div 
                  className={cn(
                    "px-3 py-2 rounded-lg cursor-pointer transition-colors",
                    selectedCategory === null ? "bg-secondary" : "hover:bg-muted"
                  )}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </div>
                {categories.map((category) => (
                  <div 
                    key={category}
                    className={cn(
                      "px-3 py-2 rounded-lg cursor-pointer transition-colors",
                      selectedCategory === category ? "bg-secondary" : "hover:bg-muted"
                    )}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Price</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}+</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t">
            <button 
              className="w-full apple-button"
              onClick={() => setMobileFiltersOpen(false)}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Products;
