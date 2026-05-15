import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: 'Le meilleur Smash Burger du Bourget ! Service rapide et viande de qualite.',
    rating: 5,
  },
  {
    text: 'Les Cheese Naans sont incroyables. Une adresse a ne pas manquer.',
    rating: 5,
  },
  {
    text: 'Super rapport qualite-prix. Les menus Family sont parfaits pour le weekend.',
    rating: 5,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Reviews() {
  return (
    <section className="py-20 bg-midnight border-t border-gold/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Temoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cream">
            Avis Clients
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="glass-gold rounded-sm p-6 hover:border-gold/30 transition-all duration-500"
            >
              <Quote size={24} className="text-gold/20 mb-3" />
              <p className="text-cream/70 text-sm font-light leading-relaxed mb-4 italic">
                {review.text}
              </p>
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-gold fill-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
