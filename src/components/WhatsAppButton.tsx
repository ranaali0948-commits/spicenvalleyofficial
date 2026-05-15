import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      <motion.a
        href="tel:0954752484"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Appelez-nous"
        className="relative flex items-center justify-center w-14 h-14 bg-cream text-midnight rounded-full shadow-lg shadow-cream/20 hover:shadow-cream/40 transition-shadow duration-300 md:hidden"
      >
        <Phone size={22} />
      </motion.a>

      <motion.a
        href="https://wa.me/33954752484"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contactez-nous sur WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-gold text-midnight rounded-full shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-shadow duration-300"
      >
        <span className="absolute inset-0 rounded-full animate-pulse-gold" />
        <MessageCircle size={24} className="relative z-10" />
      </motion.a>
    </div>
  );
}
