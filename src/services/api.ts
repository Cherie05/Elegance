
import axios from 'axios';
import { mockCategories, mockProducts } from './mockData';

const API_BASE_URL = 'http://localhost:8000/api';
const USE_MOCK_DATA = true; // Set to false when backend is running

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  long_description?: string;
  price: number;
  image: string;
  hover_image?: string;
  additional_images?: string[];
  category: string;
  category_name: string;
  is_featured: boolean;
  is_new: boolean;
  in_stock?: boolean;
  sku?: string;
  features?: string[];
  specifications?: Record<string, string>;
  rating?: number;
  review_count?: number;
}

// Categories
export const getCategories = async (): Promise<Category[]> => {
  if (USE_MOCK_DATA) {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockCategories), 500); // Simulate API delay
    });
  }
  const response = await api.get('/categories/');
  return response.data;
};

export const getCategory = async (slug: string): Promise<Category> => {
  if (USE_MOCK_DATA) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const category = mockCategories.find(c => c.slug === slug || c.id === slug);
        if (category) {
          resolve(category);
        } else {
          reject(new Error('Category not found'));
        }
      }, 500);
    });
  }
  const response = await api.get(`/categories/${slug}/`);
  return response.data;
};

// Products
export const getProducts = async (): Promise<Product[]> => {
  if (USE_MOCK_DATA) {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockProducts), 500); // Simulate API delay
    });
  }
  const response = await api.get('/products/');
  return response.data;
};

export const getProduct = async (slug: string): Promise<Product> => {
  if (USE_MOCK_DATA) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = mockProducts.find(p => p.slug === slug || p.id === slug);
        if (product) {
          resolve(product);
        } else {
          reject(new Error('Product not found'));
        }
      }, 500);
    });
  }
  const response = await api.get(`/products/${slug}/`);
  return response.data;
};

export const getCategoryProducts = async (categorySlug: string): Promise<Product[]> => {
  if (USE_MOCK_DATA) {
    return new Promise(resolve => {
      setTimeout(() => {
        const category = mockCategories.find(c => c.slug === categorySlug || c.id === categorySlug);
        if (category) {
          const categoryProducts = mockProducts.filter(p => p.category === category.id || p.category_name === category.name);
          resolve(categoryProducts);
        } else {
          resolve([]);
        }
      }, 500);
    });
  }
  const response = await api.get(`/categories/${categorySlug}/products/`);
  return response.data;
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  if (USE_MOCK_DATA) {
    return new Promise(resolve => {
      setTimeout(() => {
        const featuredProducts = mockProducts.filter(p => p.is_featured);
        resolve(featuredProducts);
      }, 500);
    });
  }
  const response = await api.get('/featured-products/');
  return response.data;
};

export const getNewProducts = async (): Promise<Product[]> => {
  if (USE_MOCK_DATA) {
    return new Promise(resolve => {
      setTimeout(() => {
        const newProducts = mockProducts.filter(p => p.is_new);
        resolve(newProducts);
      }, 500);
    });
  }
  const response = await api.get('/new-products/');
  return response.data;
};

export default api;
