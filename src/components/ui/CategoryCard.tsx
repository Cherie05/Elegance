
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import FadeIn from '@/components/animations/FadeIn';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    image: string;
    productCount: number;
  };
  index: number;
  className?: string;
}

const CategoryCard = ({ category, index, className }: CategoryCardProps) => {
  return (
    <FadeIn 
      delay={index * 0.1} 
      className={cn("group", className)}
    >
      <Link to={`/categories/${category.id}`} className="block">
        <div className="relative overflow-hidden rounded-xl">
          {/* Category Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
            />
          </div>
          
          {/* Category Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-medium mb-1">{category.name}</h3>
            <p className="text-sm text-white/80">{category.productCount} Products</p>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
};

export default CategoryCard;
