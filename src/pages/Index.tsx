
import Hero from "@/components/Hero";
import EmailSignup from "@/components/EmailSignup";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Email Signup Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <EmailSignup />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-coral-50 to-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              What to expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thoughtfully designed pieces that celebrate the modern woman's journey, 
              blending comfort with confidence in every stitch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-8 h-8 bg-brand-coral rounded-full"></div>
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Sustainable Materials</h3>
              <p className="text-gray-600">
                Ethically sourced fabrics that feel as good as they look, 
                supporting both you and the planet.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-8 h-8 bg-coral-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Timeless Design</h3>
              <p className="text-gray-600">
                Classic silhouettes with modern touches that transcend 
                seasons and trends.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-8 h-8 bg-coral-300 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Perfect Fit</h3>
              <p className="text-gray-600">
                Carefully crafted sizing and cuts that celebrate every 
                woman's unique shape and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-white mb-4">Stay Connected</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Maybelle House. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Soft silhouettes for strong women.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
