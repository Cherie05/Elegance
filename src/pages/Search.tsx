import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import FadeIn from '@/components/animations/FadeIn';
import { Search as SearchIcon, Filter, X } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/api';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const { 
    data: products = [], 
    isLoading
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  // Update search term when URL params change
  useEffect(() => {
    const q = searchParams.get('q');
    if (q && q !== searchTerm) {
      setSearchTerm(q);
      setTempSearchTerm(q);
    }
  }, [searchParams, searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempSearchTerm.trim()) {
      setSearchTerm(tempSearchTerm);
      setSearchParams({ q: tempSearchTerm });
    } else {
      setSearchTerm('');
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setTempSearchTerm('');
    setSearchParams({});
  };

  // Filter products based on search criteria
  const filteredProducts = products.filter((product) => {
    const matchesSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category_name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || product.category_name === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Get unique categories for filter
  const categories = Array.from(new Set(products.map(p => p.category_name)));

  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Search Header */}
        <div className="bg-secondary">
          <div className="container px-4 mx-auto py-12">
            <FadeIn direction="up">
              <h1 className="text-3xl md:text-4xl font-medium mb-6">Search Products</h1>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="max-w-2xl">
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={tempSearchTerm}
                    onChange={(e) => setTempSearchTerm(e.target.value)}
                    placeholder="Search for products..."
                    className="w-full pl-12 pr-12 py-4 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  {tempSearchTerm && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
              
              {searchTerm && (
                <p className="text-muted-foreground mt-4">
                  Showing results for "<span className="font-medium text-foreground">{searchTerm}</span>"
                </p>
              )}
            </FadeIn>
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <FadeIn>
                <div className="bg-white rounded-xl p-6 sticky top-24">
                  <div className="flex items-center mb-4">
                    <Filter className="w-5 h-5 mr-2" />
                    <h2 className="text-lg font-medium">Filters</h2>
                  </div>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Category</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="all-categories"
                          name="category"
                          checked={selectedCategory === null}
                          onChange={() => setSelectedCategory(null)}
                          className="mr-2"
                        />
                        <label htmlFor="all-categories" className="text-sm">All Categories</label>
                      </div>
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="radio"
                            id={category}
                            name="category"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                            className="mr-2"
                          />
                          <label htmlFor={category} className="text-sm">{category}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
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
              </FadeIn>
            </aside>
            
            {/* Results */}
            <div className="flex-grow">
              <FadeIn delay={0.1}>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-muted-foreground">
                    {isLoading ? 'Loading...' : `${filteredProducts.length} products found`}
                  </p>
                </div>
              </FadeIn>
              
              {isLoading ? (
                <div className="py-20 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mb-4"></div>
                  <p className="text-muted-foreground">Searching products...</p>
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <FadeIn>
                  <div className="text-center py-16">
                    <SearchIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h2 className="text-2xl font-medium mb-2">No products found</h2>
                    <p className="text-muted-foreground mb-4">
                      {searchTerm 
                        ? `No results for "${searchTerm}". Try different keywords or adjust your filters.`
                        : 'Try searching for something or browse our categories.'
                      }
                    </p>
                    {(selectedCategory || searchTerm) && (
                      <button
                        onClick={() => {
                          setSelectedCategory(null);
                          clearSearch();
                        }}
                        className="apple-button"
                      >
                        Clear Filters
                      </button>
                    )}
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Search;