
import { Instagram, Twitter, Facebook, Leaf, Recycle, Scissors } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e06831' }}>
      {/* Main Content Container */}
      <div className="relative min-h-screen flex flex-col">
        {/* Hero Section - Takes most of the space */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo - Much larger now */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/004a00ac-7bfb-4199-8555-66f8664809d3.png" 
                alt="Maybelle House Logo" 
                className="mx-auto w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain drop-shadow-sm"
              />
            </div>

            {/* Tagline - Single line with period */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-cinzel text-white mb-4 leading-tight">
              soft silhouettes for strong women.
            </h1>

            {/* Coming Soon - Following line with period */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-12 font-bold font-cinzel">
              Coming soon.
            </p>

            {/* Features Section - Compact with relevant icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-cinzel text-white mb-2">Sustainable Materials</h3>
                <p className="text-sm text-white opacity-90">
                  Ethically sourced fabrics that feel as good as they look
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-cinzel text-white mb-2">Timeless Design</h3>
                <p className="text-sm text-white opacity-90">
                  Classic silhouettes with modern touches
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-cinzel text-white mb-2">Perfect Fit</h3>
                <p className="text-sm text-white opacity-90">
                  Carefully crafted sizing for every woman
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Compact at bottom */}
        <footer className="py-6 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <h3 className="text-lg font-cinzel text-white mb-3">Stay Connected</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-white hover:text-black transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-black transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-black transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-white border-opacity-30 pt-4">
              <p className="text-white text-sm opacity-80 font-cinzel">
                © 2024 Maybelle House. All rights reserved.
              </p>
              <p className="text-white text-xs mt-1 opacity-70 font-cinzel">
                Soft silhouettes for strong women.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
