import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  // Mock cart items
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Minimalist Ceramic Vase',
      price: 89.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
    {
      id: '2',
      name: 'Modern Desk Lamp',
      price: 129.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Page Header */}
        <div className="bg-secondary">
          <div className="container px-4 mx-auto py-12">
            <FadeIn direction="up">
              <h1 className="text-3xl md:text-4xl font-medium mb-2">Shopping Cart</h1>
              <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
            </FadeIn>
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-8">
          {cartItems.length === 0 ? (
            <FadeIn>
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Add some beautiful items to get started</p>
                <Link to="/products" className="apple-button">
                  Continue Shopping
                </Link>
              </div>
            </FadeIn>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <FadeIn>
                  <div className="bg-white rounded-xl overflow-hidden">
                    {cartItems.map((item, index) => (
                      <div key={item.id} className={`p-6 flex items-center space-x-4 ${index < cartItems.length - 1 ? 'border-b border-border' : ''}`}>
                        <div className="w-20 h-20 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium mb-2">{item.name}</h3>
                          <p className="text-muted-foreground mb-2">${item.price.toFixed(2)}</p>
                          
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center border border-border rounded-lg overflow-hidden">
                              <button
                                className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              <button
                                className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            
                            <button
                              className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <FadeIn delay={0.1}>
                  <div className="bg-white rounded-xl p-6 sticky top-24">
                    <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                      </div>
                      {shipping === 0 && (
                        <p className="text-sm text-green-600">ðŸŽ‰ You qualify for free shipping!</p>
                      )}
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between font-medium text-lg">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <button className="w-full apple-button">
                        Proceed to Checkout
                      </button>
                      <Link
                        to="/products"
                        className="w-full bg-white text-primary border border-border hover:bg-muted rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 text-center block"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                    
                    <div className="mt-6 p-4 bg-secondary rounded-lg">
                      <h3 className="font-medium mb-2">Shipping & Returns</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>â€¢ Free shipping on orders over $50</li>
                        <li>â€¢ 30-day return policy</li>
                        <li>â€¢ Secure checkout guaranteed</li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Cart;
