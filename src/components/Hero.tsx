import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden" style={{ backgroundColor: '#e06831' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-white bg-opacity-20 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-15 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo - Made 15% smaller */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-1"
        >
          <div className="mx-auto w-80 h-80 md:w-[27rem] md:h-[27rem] lg:w-[30rem] lg:h-[30rem] overflow-hidden flex items-center justify-center">
            <img 
              src="/assets/white_logo.svg" 
              alt="Maybelle House Logo" 
              className="w-[115%] h-[115%] object-contain drop-shadow-sm"
              style={{ margin: '-15%' }}
            />
          </div>
        </motion.div>

        {/* Tagline - Made 25% smaller with minimal space from logo, extra thin font */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-2xl lg:text-3xl font-serif font-extralight text-white mb-8 leading-tight"
        >
          soft silhouettes for strong women
        </motion.h1>

        {/* Coming Soon - More space after tagline, same size */}
        {/* Coming Soon - More space after tagline, same size */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-white mb-6 tracking-wide"
        >
          Coming Soon
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
