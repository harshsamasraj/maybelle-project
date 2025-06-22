
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#e06831' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-white bg-opacity-20 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-15 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/8d9fe756-a1f3-47e7-9bd2-4e6849ec0dc2.png" 
            alt="Maybelle House Logo" 
            className="mx-auto w-60 h-60 md:w-80 md:h-80 object-contain drop-shadow-sm"
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight"
        >
          soft silhouettes
          <br />
          <span className="text-black">for strong women</span>
        </motion.h1>

        {/* Coming Soon */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-white mb-8 font-bold tracking-wide"
        >
          Coming Soon
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
