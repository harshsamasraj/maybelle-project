
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-brand-light via-white to-coral-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-coral-100 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-coral-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-coral-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <img 
            src="/lovable-uploads/8d9fe756-a1f3-47e7-9bd2-4e6849ec0dc2.png" 
            alt="Maybelle House Logo" 
            className="mx-auto w-80 h-80 object-contain drop-shadow-sm"
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-800 mb-8 leading-tight"
        >
          soft silhouettes
          <br />
          <span className="text-brand-coral">for strong women</span>
        </motion.h1>

        {/* Coming Soon */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 mb-16 font-light tracking-wide"
        >
          Coming Soon
        </motion.p>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
