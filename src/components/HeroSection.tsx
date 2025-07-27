import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TreePine, Globe } from "lucide-react";
import heroImage from "@/assets/hero-nature.jpg";

const HeroSection = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Leaf className="h-12 w-12 text-leaf-green" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-leaf-green bg-clip-text text-transparent">
                EcoVoyage
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-100">
              Journey Responsibly, Impact Positively
            </h2>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Discover sustainable travel solutions that protect our planet while creating unforgettable experiences. 
              Calculate your impact, plan eco-friendly trips, and contribute to conservation efforts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-forest-green hover:bg-forest-green/90 text-white px-8 py-6 text-lg font-semibold group"
              onClick={() => setActiveSection("calculator")}
            >
              Calculate Your Impact
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-forest-green px-8 py-6 text-lg font-semibold"
              onClick={() => setActiveSection("planner")}
            >
              Plan Green Trip
            </Button> */}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <TreePine className="h-8 w-8 text-leaf-green" />
              </div>
              <h3 className="text-xl font-semibold">Carbon Calculator</h3>
              <p className="text-gray-300 text-sm">
                Calculate and offset your travel emissions with verified green projects
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Globe className="h-8 w-8 text-leaf-green" />
              </div>
              <h3 className="text-xl font-semibold">Trip Planner</h3>
              <p className="text-gray-300 text-sm">
                Get sustainability scores and eco-friendly recommendations for your journey
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Leaf className="h-8 w-8 text-leaf-green" />
              </div>
              <h3 className="text-xl font-semibold">Conservation Impact</h3>
              <p className="text-gray-300 text-sm">
                Support real conservation projects and track your positive environmental impact
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-transparent to-white rounded-full opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;