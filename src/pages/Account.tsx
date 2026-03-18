import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { User, Settings, Package, Heart, MapPin, CreditCard } from 'lucide-react';

const Account = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Page Header */}
        <div className="bg-secondary">
          <div className="container px-4 mx-auto py-12">
            <FadeIn direction="up">
              <h1 className="text-3xl md:text-4xl font-medium mb-2">My Account</h1>
              <p className="text-muted-foreground">Manage your account settings and view your orders</p>
            </FadeIn>
          </div>
        </div>
        
        <div className="container px-4 mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <FadeIn>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 space-y-2">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary">
                    <User className="w-5 h-5" />
                    <span className="font-medium">Profile</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                    <Package className="w-5 h-5" />
                    <span>Orders</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                    <Heart className="w-5 h-5" />
                    <span>Wishlist</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                    <MapPin className="w-5 h-5" />
                    <span>Addresses</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                    <CreditCard className="w-5 h-5" />
                    <span>Payment Methods</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-xl p-6">
                  <h2 className="text-2xl font-medium mb-6">Profile Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                        <User className="w-10 h-10 text-muted-foreground" />
                      </div>
                      <div>
                        <button className="apple-button">Change Photo</button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Date of Birth</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button className="apple-button">Save Changes</button>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-xl p-6 mt-6">
                  <h2 className="text-2xl font-medium mb-6">Change Password</h2>
                  
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    
                    <button className="apple-button">Update Password</button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Account;