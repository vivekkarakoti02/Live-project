import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="pt-24 min-h-[80vh] flex items-center justify-center bg-[var(--color-primary-bg)] px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center p-12 bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-sm shadow-xl"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-8 text-black"
        >
          <CheckCircle size={40} />
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl mb-4 text-[var(--color-text-primary)]">Thank You!</h1>
        <p className="text-[var(--color-text-muted)] text-lg mb-8">
          Your message has been received. Our team will review your project details and get back to you shortly to schedule your consultation.
        </p>
        
        <Link to="/" className="btn-primary inline-block">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
