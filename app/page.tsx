'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaMapMarkedAlt, FaShieldAlt, FaLeaf, FaCar, FaStar, FaChevronRight, FaPlay } from 'react-icons/fa';
import { buildingFeatures, apartments } from '@/data/apartments';
import { useState } from 'react';

export default function Home() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920"
            alt="Luxury Building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
              initial={{
                x: Math.random() * 1920,
                y: Math.random() * 1080,
              }}
              animate={{
                y: [null, -100],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dobrodošli u
              <span className="block mt-2 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Premium Residence
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Otkrijte vrhunski luksuz u srcu grada. Ekskluzivni stanovi sa modernim dizajnom, 
              virtuelnim turama i nezaboravnim pogledom.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/stanovi"
                className="group bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transition-all shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 flex items-center gap-2"
              >
                Pogledaj Stanove
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => setVideoPlaying(true)}
                className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
                  <FaPlay className="ml-1" />
                </div>
                Virtuelna Tura
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '50+', label: 'Luksuznih Stanova' },
              { number: '8', label: 'Spratova' },
              { number: '145m²', label: 'Najveći Stan' },
              { number: '100%', label: 'Premium Kvalitet' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gold-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold text-gray-900 mb-4">
              Zašto <span className="gold-gradient-text">Premium Residence?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Svaki detalj je pažljivo osmišljen da vam pruži život kakav zaslužujete
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {buildingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-gold-50 hover:to-gold-100 transition-all duration-300 hover-lift border border-gray-200"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold text-gray-900 mb-4">
              Izdvojeni <span className="gold-gradient-text">Stanovi</span>
            </h2>
            <p className="text-xl text-gray-600">
              Pogledajte neke od naših najluksuznijih jedinica
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {apartments.filter(apt => apt.available).slice(0, 3).map((apartment) => (
              <motion.div
                key={apartment.id}
                variants={fadeInUp}
                className="group"
              >
                <Link href={`/stanovi/${apartment.id}`}>
                  <div className="relative h-72 rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={apartment.images[0]}
                      alt={apartment.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-4 py-2 rounded-full font-semibold">
                      {apartment.pricePerM2.toLocaleString()}€/m²
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{apartment.name}</h3>
                      <p className="text-sm opacity-90">{apartment.size}m² • {apartment.rooms} sobe</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Cena</p>
                      <p className="text-2xl font-bold text-gray-900">{apartment.price.toLocaleString()}€</p>
                    </div>
                    <div className="bg-gold-500 text-white px-6 py-3 rounded-full font-semibold group-hover:bg-gold-600 transition flex items-center gap-2">
                      Detalji
                      <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/stanovi"
              className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Vidi Sve Stanove
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920"
            alt="Contact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Spremni za Vaš <span className="gold-gradient-text">Novi Dom?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Zakažite besplatnu virtuelnu turu ili posetite nas uživo. 
              Naš tim stručnjaka je tu da vam pomogne da pronađete savršen stan.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/kontakt"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transition-all shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105"
              >
                Kontaktirajte Nas
              </Link>
              <Link
                href="/virtuelna-tura"
                className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
              >
                Započni Virtuelnu Turu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

