import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import FadeIn from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';

interface FeaturedProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  reverse?: boolean;
}

const FeaturedProduct = ({ product, reverse = false }: FeaturedProductProps) => {
  const [isInView, setIsInView] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={productRef}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center section-padding",
        reverse ? "md:flex-row-reverse" : ""
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          isInView ? "animate-fade-in" : "opacity-0"
        )}
        style={{
          transitionDelay: "0.2s",
          height: "100%",
          minHeight: "500px"
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className={cn("flex flex-col justify-center", reverse ? "md:pr-8" : "md:pl-8")}>
        <FadeIn delay={0.1} direction="up">
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Featured Product</span>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{product.name}</h2>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <p className="text-muted-foreground mb-6">{product.description}</p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <p className="text-2xl font-medium mb-6">{formattedPrice}</p>
        </FadeIn>

        <FadeIn delay={0.5} direction="up">
          <div className="flex space-x-4">
            <Link 
              to={`/products/${product.id}`}
              className="apple-button"
            >
              Shop Now
            </Link>
            <Link 
              to={`/products/${product.id}`}
              className="flex items-center space-x-2 text-sm font-medium hover:text-muted-foreground transition-colors duration-300"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default FeaturedProduct;
