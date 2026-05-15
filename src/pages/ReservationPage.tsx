import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Phone, User, CheckCircle } from 'lucide-react';

const WEB3FORMS_KEY = 'a200ed1d-6f30-496e-9579-d6031157a982';

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}

export default function ReservationPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Nouvelle reservation - Spice & Valley',
          from_name: form.name,
          Nom_et_Prenom: form.name,
          Telephone: form.phone,
          Date: form.date,
          Heure: form.time,
          Nombre_de_couverts: form.guests,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Une erreur est survenue. Veuillez reessayer.');
      }
    } catch {
      setError('Erreur de connexion. Veuillez reessayer.');
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    'w-full bg-white/[0.04] border border-gold/15 rounded-sm px-4 py-3 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all duration-300';

  return (
    <section className="pt-28 pb-24 bg-midnight min-h-screen">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Reservez
          </span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-cream mb-4">
            Reservation
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-cream/50 font-light">
            Reservez votre table et decouvrez une experience gourmande
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass-gold rounded-sm p-12 text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center bg-gold/10">
                  <CheckCircle size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-gold mb-3">
                  Merci !
                </h3>
                <p className="text-cream/60 font-light">
                  Votre demande a ete envoyee.
                </p>
                <p className="text-cream/40 text-sm mt-2 font-light">
                  Nous vous confirmerons votre reservation par telephone.
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="glass-gold rounded-sm p-8 space-y-5"
            >
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                <input
                  type="text"
                  placeholder="Nom et Prenom"
                  required
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`${inputClass} pl-11`}
                />
              </div>

              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                <input
                  type="tel"
                  placeholder="Telephone"
                  required
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`${inputClass} pl-11`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className={`${inputClass} pl-11`}
                  />
                </div>
                <div className="relative">
                  <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                  <select
                    required
                    value={form.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    className={`${inputClass} pl-11 appearance-none cursor-pointer`}
                  >
                    <option value="" disabled className="bg-midnight text-cream/30">Heure</option>
                    {Array.from({ length: 24 }, (_, h) => {
                      const hour = h.toString().padStart(2, '0');
                      return [`${hour}:00`, `${hour}:30`].map((t) => (
                        <option key={t} value={t} className="bg-midnight text-cream">
                          {t}
                        </option>
                      ));
                    })}
                  </select>
                </div>
              </div>

              <div className="relative">
                <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/40" />
                <select
                  value={form.guests}
                  onChange={(e) => handleChange('guests', e.target.value)}
                  className={`${inputClass} pl-11 appearance-none cursor-pointer`}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n} className="bg-midnight text-cream">
                      {n} {n === 1 ? 'couvert' : 'couverts'}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 bg-gold text-midnight font-bold rounded-sm hover:bg-cream transition-all duration-300 text-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? 'Envoi en cours...' : 'Envoyer la demande'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
