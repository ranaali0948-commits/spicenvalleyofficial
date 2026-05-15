import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, UtensilsCrossed, Clock, MapPin } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 600], [1.3, 1]);
  const textScale = useTransform(scrollY, [0, 500], [1.15, 1]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.7, 0.95]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 will-change-transform"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1600&q=80")',
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-midnight will-change-transform"
        />

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.div
            style={{ scale: textScale, opacity: textOpacity }}
            className="text-center max-w-3xl mx-auto will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase font-medium">
                Restaurant Gourmand
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-cream mb-6 leading-[1.1]"
            >
              Spice <span className="text-gold italic">&</span> Valley
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-16 h-px bg-gold mx-auto mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-xl md:text-2xl text-gold/90 mb-4 font-playfair italic tracking-wide"
            >
              Fast Food Gourmand au Bourget
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55 }}
              className="text-base text-cream/60 mb-12 leading-relaxed max-w-xl mx-auto font-light"
            >
              Burgers smashes, poulet croustillant, wraps savoureux.
              Le gout authentique, servi vite et bien.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link
                to="/carte"
                className="px-8 py-3.5 bg-gold text-midnight font-bold rounded-sm hover:bg-cream transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Decouvrir la Carte
              </Link>
              <Link
                to="/reservation"
                className="px-8 py-3.5 border border-gold/50 text-gold font-bold rounded-sm hover:bg-gold hover:text-midnight transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Reserver
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown size={24} className="text-gold/50" />
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 bg-midnight">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: UtensilsCrossed,
                title: 'Saveurs Authentiques',
                desc: 'Des recettes originales, des ingredients frais et un savoir-faire unique pour chaque plat.',
              },
              {
                icon: Clock,
                title: 'Service Rapide',
                desc: 'Votre commande preparee avec soin et servie rapidement, sans compromis sur la qualite.',
              },
              {
                icon: MapPin,
                title: 'Le Bourget, Paris',
                desc: '11b Av. Francis de Pressense, 93350 Le Bourget. Ouvert tous les jours de 06h00 a 00h00.',
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass-gold rounded-sm p-8 text-center group hover:border-gold/30 transition-all duration-500"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                  <feature.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-lg font-playfair font-semibold text-cream mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream/50 text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-midnight border-t border-gold/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-gold fill-gold" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-playfair italic text-cream/80 mb-6 leading-relaxed">
              "Le meilleur Smash Burger du Bourget ! Service rapide et viande de qualite."
            </blockquote>
            <p className="text-gold/60 text-sm tracking-widest uppercase">Avis Client</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream mb-4">
              Pret a <span className="text-gold italic">deguster</span> ?
            </h2>
            <p className="text-cream/50 font-light mb-10 max-w-lg mx-auto">
              Commandez maintenant ou reservez votre table pour une experience gourmande inoubliable.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/carte"
                className="px-8 py-3.5 bg-gold text-midnight font-bold rounded-sm hover:bg-cream transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Commander
              </Link>
              <Link
                to="/reservation"
                className="px-8 py-3.5 border border-gold/50 text-gold font-bold rounded-sm hover:bg-gold hover:text-midnight transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Reserver une Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
