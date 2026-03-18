
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import FadeIn from '@/components/animations/FadeIn';
import { Product } from '@/services/api';

export type ProductProps = Product;

interface ProductCardProps {
  product: ProductProps;
  index?: number;
  className?: string;
}

const ProductCard = ({ product, index = 0, className }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <FadeIn 
      delay={index * 0.1} 
      className={cn("group", className)}
    >
      <div
        className="product-card-shadow rounded-xl overflow-hidden bg-white transition-all duration-500 ease-apple hover:translate-y-[-5px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="product-image-container aspect-square">
          <Link to={`/products/${product.slug}`}>
            <img
              src={isHovered && product.hover_image ? product.hover_image : product.image}
              alt={product.name}
              className="product-image w-full h-full object-cover"
            />
          </Link>
          
          {/* Overlay with actions */}
          <div className={cn(
            "absolute inset-0 bg-background/5 backdrop-blur-xs flex items-center justify-center gap-2 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}>
            <button 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110"
              title="Add to wishlist"
            >
              <Heart className="w-4 h-4" />
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110"
              title="Add to cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
            <Link 
              to={`/products/${product.slug}`}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110"
              title="Quick view"
            >
              <Eye className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Product badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.is_new && (
              <span className="bg-primary text-white text-xs py-1 px-2 rounded-md font-medium">
                New
              </span>
            )}
            {product.is_featured && (
              <span className="bg-black text-white text-xs py-1 px-2 rounded-md font-medium">
                Featured
              </span>
            )}
          </div>
        </div>
        
        {/* Product details */}
        <div className="p-4">
          <div className="text-xs text-muted-foreground mb-1">{product.category_name}</div>
          <Link 
            to={`/products/${product.slug}`}
            className="block font-medium mb-2 transition-colors duration-300 hover:text-muted-foreground"
          >
            {product.name}
          </Link>
          <div className="text-sm font-medium">{formattedPrice}</div>
        </div>
      </div>
    </FadeIn>
  );
};

export default ProductCard;
