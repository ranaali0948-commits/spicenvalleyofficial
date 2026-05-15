import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Utensils, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight border-t border-gold/10 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Utensils size={24} className="text-gold" />
              <h3 className="text-2xl font-playfair font-bold text-gold">
                Spice & Valley
              </h3>
            </div>
            <p className="text-cream/50 leading-relaxed font-light text-sm">
              L'authenticite culinaire au Bourget. Decouvrez nos delicieux burgers,
              wraps et poulet epice prepares avec passion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cream mb-4 tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', to: '/' },
                { label: 'La Carte', to: '/carte' },
                { label: 'Reservation', to: '/reservation' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-cream/50 hover:text-gold transition-colors duration-300 text-sm font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cream mb-4 tracking-widest uppercase">Horaires</h4>
            <ul className="space-y-2 text-cream/50 text-sm font-light">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-gold/50" />
                Lundi - Dimanche
              </li>
              <li className="pl-[22px]">06h00 - 00h00</li>
              <li className="flex items-center gap-2 pt-2">
                <MapPin size={14} className="text-gold/50" />
                11b Av. Francis de Pressense, 93350 Le Bourget
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Phone size={14} className="text-gold/50" />
                09 54 75 24 84
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-bold text-cream mb-4 tracking-widest uppercase">Suivez-nous</h4>
            <div className="flex gap-3">
              {[
                { name: 'Facebook', icon: 'f' },
                { name: 'Instagram', icon: 'ig' },
                { name: 'WhatsApp', icon: 'wa' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 glass-gold hover:bg-gold hover:text-midnight text-gold/60 rounded-full flex items-center justify-center transition-all duration-300 font-bold text-xs"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gold/10 pt-8 text-center text-cream/30 text-xs tracking-wide"
        >
          <p>&copy; {currentYear} Spice & Valley. Tous droits reserves.</p>
          <p className="mt-2">
            Restaurant Authentique au Bourget, Paris | Burgers &bull; Wraps &bull; Poulet Epice
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
