import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-medium mb-4">Stay in the know</h3>
            <p className="text-primary-foreground/70 mb-6">
              Subscribe to our newsletter to receive updates on new collections, features and exclusive content.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
              />
              <button className="bg-white text-primary px-4 rounded-r-lg flex items-center justify-center hover:bg-opacity-90 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          <div>
            <h2 className="text-xl font-medium mb-6">Elegance</h2>
            <p className="text-primary-foreground/70 mb-6">
              Redefining style with simplicity and quality. Our products are designed to last and make a statement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 border-t border-white/10 text-center text-primary-foreground/70 text-sm">
          <p>© {currentYear} Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
