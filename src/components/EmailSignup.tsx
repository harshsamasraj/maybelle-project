
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Check } from "lucide-react";
import { motion } from "framer-motion";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Thank you for subscribing!",
        description: "We'll notify you when we launch.",
      });
      console.log("Email submitted:", email);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-white rounded-2xl shadow-lg border border-coral-100"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif text-gray-800 mb-2">You're on the list!</h3>
        <p className="text-gray-600">We'll notify you as soon as we launch.</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
          Be the first to know
        </h2>
        <p className="text-gray-600 text-lg">
          Join our exclusive list and get early access to our collection, 
          plus special launch offers just for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-12 py-4 text-lg rounded-full border-2 border-coral-200 focus:border-brand-coral focus:ring-brand-coral"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full py-4 text-lg rounded-full bg-brand-coral hover:bg-coral-600 text-white font-medium transition-all duration-300 transform hover:scale-105"
        >
          {isLoading ? "Joining..." : "Notify Me"}
        </Button>
      </form>

      <p className="text-sm text-gray-500 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </motion.div>
  );
};

export default EmailSignup;
