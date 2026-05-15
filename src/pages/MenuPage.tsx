import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import menuData from '../data/spice-valley-menu.json';

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface Category {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}

const categoryLabels: Record<string, string> = {
  deals: 'Bonnes Affaires',
  smash_burgers: 'Smash Burgers',
  burger_menus: 'Menus Burgers',
  chicken_menus: 'Menus Poulet',
  wraps_naans: 'Wraps & Naans',
  family_boxes: 'Boites Familiales',
  chicken_a_la_carte: 'Poulet (\u00C0 La Carte)',
  burgers_a_la_carte: 'Burgers & Wraps (\u00C0 La Carte)',
  starters: 'Entrees & Accompagnements',
  kids: 'Menus Enfants',
  desserts: 'Desserts',
  drinks: 'Boissons',
};

const categoryNotes: Record<string, string> = {
  burger_menus: 'Tous les menus incluent des frites et une boisson 33cl',
  chicken_menus: 'Tous les menus incluent des frites et une boisson 33cl',
  wraps_naans: 'Tous les menus incluent des frites et une boisson 33cl',
  family_boxes: 'Toutes les boites incluent des grandes frites familiales et une boisson 1.5L',
  kids: 'Tous les menus enfants incluent un Kinder, des frites et un Capri-Sun',
};

const categoryImages: Record<string, string> = {
  deals: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80',
  smash_burgers: 'https://images.unsplash.com/photo-1510739859545-e7b9e979de86?auto=format&fit=crop&w=800&q=80',
  burger_menus: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  chicken_menus: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
  wraps_naans: 'https://images.unsplash.com/photo-1601050690597-df056fb04791?auto=format&fit=crop&w=800&q=80',
  family_boxes: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
  chicken_a_la_carte: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
  burgers_a_la_carte: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
  starters: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80',
  kids: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80',
  desserts: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
  drinks: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('deals');
  const categories: Category[] = menuData.categories;
  const active = categories.find((c) => c.id === activeCategory);

  const formatPrice = (price: number) =>
    price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });

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
            Nos Specialites
          </span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream mb-4">
            La Carte
          </h1>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`py-2.5 px-5 rounded-sm font-medium transition-all duration-300 text-xs tracking-widest uppercase border ${
                activeCategory === category.id
                  ? 'bg-gold text-midnight border-gold'
                  : 'bg-transparent border-gold/20 text-gold/70 hover:border-gold hover:text-gold'
              }`}
            >
              {categoryLabels[category.id] || category.name}
            </motion.button>
          ))}
        </div>

        {/* Category Image Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + '-banner'}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="relative h-48 md:h-64 rounded-sm overflow-hidden mb-10"
          >
            <img
              src={categoryImages[activeCategory]}
              alt={categoryLabels[activeCategory]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-cream">
                {categoryLabels[activeCategory]}
              </h2>
              {(categoryNotes[activeCategory] || active?.note) && (
                <p className="text-gold/60 text-sm italic font-playfair mt-1">
                  {categoryNotes[activeCategory] || active?.note}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Menu Items - 2 Column Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {active?.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group glass-gold rounded-sm p-5 hover:border-gold/30 transition-all duration-500 flex justify-between items-start gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-cream font-playfair font-semibold text-base leading-tight mb-1">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-cream/40 text-xs leading-relaxed font-light">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="text-gold font-bold text-lg shrink-0 tabular-nums">
                    {formatPrice(item.price)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
