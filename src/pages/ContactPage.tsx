import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Mail } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-24 bg-midnight min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Nous Trouver
          </span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream mb-4">
            Contact
          </h1>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info Cards */}
          <div className="space-y-6">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 flex items-start gap-4 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <MapPin size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-playfair font-semibold mb-1">Adresse</h3>
                <p className="text-cream/50 text-sm font-light leading-relaxed">
                  11b Av. Francis de Pressense<br />93350 Le Bourget
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 flex items-start gap-4 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <Phone size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-playfair font-semibold mb-1">Telephone</h3>
                <p className="text-cream/50 text-sm font-light">
                  09 54 75 24 84
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 flex items-start gap-4 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <Clock size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-playfair font-semibold mb-1">Horaires</h3>
                <p className="text-cream/50 text-sm font-light leading-relaxed">
                  Lundi - Dimanche<br />
                  06h00 - 00h00
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 flex items-start gap-4 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <Mail size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="text-cream font-playfair font-semibold mb-1">Email</h3>
                <p className="text-cream/50 text-sm font-light">
                  contact@spiceandvalley.fr
                </p>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              href="https://wa.me/33954752484"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-gold text-midnight rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-cream transition-all duration-300"
            >
              <MessageCircle size={20} />
              Contactez-nous sur WhatsApp
            </motion.a>
          </div>

          {/* Map */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-gold rounded-sm overflow-hidden h-full min-h-[400px]"
          >
            <iframe
              title="Spice & Valley Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2!2d2.4167!3d48.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d2e7b6a6a6d%3A0x0!2s11b+Av.+Francis+de+Pressens%C3%A9%2C+93350+Le+Bourget!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
