'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'opsti-upit',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', interest: 'opsti-upit', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920"
            alt="Contact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-display font-bold text-white mb-4"
          >
            <span className="gold-gradient-text">Kontaktirajte Nas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Tu smo da odgovorimo na sva vaša pitanja
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakt Informacije</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-gold-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <a href="tel:+381641234567" className="text-gray-600 hover:text-gold-600 transition">
                      +381 64 123 4567
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Pon-Pet: 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-gold-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@premiumresidence.rs" className="text-gray-600 hover:text-gold-600 transition break-all">
                      info@premiumresidence.rs
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Odgovaramo u roku 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-gold-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresa</h3>
                    <p className="text-gray-600">
                      Bulevar Kralja Aleksandra 123<br />
                      11000 Beograd, Srbija
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-gold-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Radno Vreme</h3>
                    <p className="text-gray-600 text-sm">
                      Ponedeljak - Petak: 9:00 - 18:00<br />
                      Subota: 10:00 - 15:00<br />
                      Nedelja: Po dogovoru
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Pratite Nas</h3>
              <p className="text-white/90 mb-6 text-sm">
                Budite u toku sa najnovijim vestima i ponudama
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">Hitni Kontakt 24/7</h3>
              <p className="text-red-700 text-sm mb-3">Za hitne slučajeve i hitne upite:</p>
              <a href="tel:+381641234567" className="text-2xl font-bold text-red-600 hover:text-red-700 transition">
                +381 64 123 4567
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Pošaljite Upit</h2>
              <p className="text-gray-600 mb-8">
                Popunite formu i kontaktiraćemo vas u najkraćem roku
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Hvala na Upitu!</h3>
                  <p className="text-gray-600 mb-6">Kontaktiraćemo vas uskoro.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-gold-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-gold-600 transition"
                  >
                    Pošalji Novi Upit
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Ime i Prezime *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                        placeholder="Vaše ime"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Adresa *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                        placeholder="vas@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                        placeholder="+381 64 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Zainteresovan/a za *
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                      >
                        <option value="opsti-upit">Opšti upit</option>
                        <option value="kupovina">Kupovina stana</option>
                        <option value="obilazak">Zakazivanje obilaska</option>
                        <option value="investicija">Investicione prilike</option>
                        <option value="drugo">Drugo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Poruka *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition resize-none"
                      placeholder="Unesite vašu poruku..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-5 h-5 text-gold-600 rounded focus:ring-gold-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Slažem se sa <a href="/privacy" className="text-gold-600 hover:underline">politikom privatnosti</a> i 
                      dozvolјavam obradu mojih podataka.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-xl font-bold text-lg hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Slanje...
                      </>
                    ) : (
                      'Pošalji Upit'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="mt-8 h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.5348297524327!2d20.48831531567893!3d44.80401597909863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b3a1c5%3A0x88398d5b970d6e1!2sBelgrade%2C%20Serbia!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

