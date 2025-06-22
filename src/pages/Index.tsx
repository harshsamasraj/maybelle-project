import { Instagram, Facebook } from "lucide-react";

const Index = () => {
  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: '#e06831' }}>
      {/* Main Content Container */}
      <div className="relative h-full flex flex-col">
        {/* Hero Section - Takes most of the space */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-2">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo - Made 15% smaller */}
            <div className="mb-1">
              <div className="mx-auto w-80 h-80 md:w-[27rem] md:h-[27rem] lg:w-[30rem] lg:h-[30rem] overflow-hidden flex items-center justify-center">
                <img 
                  src="/assets/white_logo.svg" 
                  alt="Maybelle House Logo" 
                  className="w-[115%] h-[115%] object-contain drop-shadow-sm"
                  style={{ margin: '-15%' }}
                />
              </div>
            </div>

            {/* Tagline - Made 25% smaller with minimal space from logo, extra thin font */}
            <h1 className="text-xs md:text-lg lg:text-2xl font-cinzel font-extralight text-white mb-8 leading-tight">
              soft silhouettes for strong women.
            </h1>

            {/* Coming Soon - More space after tagline, same size */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-4 font-cinzel">
              Coming soon.
            </p>
          </div>
        </div>

        {/* Footer - Ensuring socials are visible */}
        <footer className="py-2 px-4 flex-shrink-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-2">
              <h3 className="text-sm font-cinzel text-white mb-2">Stay Connected</h3>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/maybelle_house_?igsh=NXgwc3JwcGRhOGVq&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-black transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-white border-opacity-30 pt-1">
              <p className="text-white text-xs opacity-80 font-cinzel">
                © 2024 Maybelle House. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
