import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:py-32 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="About us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-2xl">
            <FadeIn delay={0.1} direction="up">
              <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">
                Our Story
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <p className="text-xl text-white/90 mb-8">
                Creating beautiful spaces through thoughtful design and exceptional craftsmanship
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-medium mb-6">Crafting Elegance Since 2020</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded with a passion for exceptional design and quality craftsmanship, Elegance has been 
                    curating premium home furnishings and decor for discerning customers worldwide.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our commitment to sustainability and ethical sourcing ensures that every piece we offer 
                    not only elevates your space but also supports responsible manufacturing practices.
                  </p>
                  <p className="text-muted-foreground">
                    From handcrafted furniture to carefully selected accessories, we believe that your home 
                    should reflect your personal style while maintaining the highest standards of quality and design.
                  </p>
                </div>
                <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-4xl font-medium text-primary mb-2">500+</h3>
                  <p className="text-muted-foreground">Curated Products</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-medium text-primary mb-2">50+</h3>
                  <p className="text-muted-foreground">Partner Artisans</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-medium text-primary mb-2">10k+</h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-3xl font-medium text-center mb-12">Our Values</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-white p-6 rounded-xl text-center">
                  <h3 className="text-xl font-medium mb-4">Quality First</h3>
                  <p className="text-muted-foreground">
                    Every product is carefully selected and tested to meet our high standards of quality and durability.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-6 rounded-xl text-center">
                  <h3 className="text-xl font-medium mb-4">Sustainable Design</h3>
                  <p className="text-muted-foreground">
                    We prioritize eco-friendly materials and sustainable manufacturing processes in all our products.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.3}>
                <div className="bg-white p-6 rounded-xl text-center">
                  <h3 className="text-xl font-medium mb-4">Customer Focus</h3>
                  <p className="text-muted-foreground">
                    Your satisfaction is our priority. We provide exceptional service from selection to delivery.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
