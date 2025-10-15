'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaMapMarkedAlt, FaShieldAlt, FaLeaf, FaCar, FaStar, FaChevronRight, FaPlay, FaRuler, FaBed } from 'react-icons/fa';
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

      {/* Features Section - PREMIUM REDESIGN */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-full text-gold-700 font-semibold text-sm tracking-wider uppercase">
                Premium Karakteristike
              </span>
            </motion.div>
            <h2 className="text-6xl font-display font-bold text-gray-900 mb-6">
              Zašto <span className="bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-clip-text text-transparent">Premium Residence</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400/0 via-gold-500/0 to-gold-600/0 group-hover:from-gold-400/20 group-hover:via-gold-500/20 group-hover:to-gold-600/20 transition-all duration-500 -z-10"></div>
                  
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-gold-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-gold-400/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Apartments - ULTRA PREMIUM */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 font-semibold text-sm tracking-wider uppercase">
                Ekskluzivna Ponuda
              </span>
            </motion.div>
            <h2 className="text-6xl font-display font-bold text-white mb-6">
              Izdvojeni <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">Stanovi</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={apartment.images[0]}
                        alt={apartment.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Floating price badge */}
                      <div className="absolute top-6 right-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gold-400 blur-lg opacity-50"></div>
                          <div className="relative bg-gradient-to-br from-gold-400 to-gold-600 text-white px-5 py-2.5 rounded-2xl font-bold shadow-xl">
                            {apartment.pricePerM2.toLocaleString()}€/m²
                          </div>
                        </div>
                      </div>

                      {/* Info overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                          {apartment.name}
                        </h3>
                        <div className="flex items-center gap-4 text-white/90 text-sm">
                          <span className="flex items-center gap-1">
                            <FaRuler className="text-gold-400" />
                            {apartment.size}m²
                          </span>
                          <span className="flex items-center gap-1">
                            <FaBed className="text-gold-400" />
                            {apartment.rooms} sobe
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom section */}
                    <div className="p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Cena</p>
                          <p className="text-3xl font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                            {apartment.price.toLocaleString()}€
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-2xl font-semibold group-hover:from-gold-600 group-hover:to-gold-700 transition-all shadow-lg group-hover:shadow-xl flex items-center gap-2 transform group-hover:scale-105">
                          Detalji
                          <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
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

      {/* CTA Section - PREMIUM PARALLAX */}
      <section className="relative py-40 overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920"
            alt="Contact"
            fill
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="px-6 py-2 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 font-semibold text-sm tracking-widest uppercase backdrop-blur-sm">
                Ekskluzivna Ponuda
              </span>
            </motion.div>

            <h2 className="text-6xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Spremni za Vaš<br/>
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                Novi Dom?
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Zakažite besplatnu virtuelnu turu ili posetite nas uživo. 
              Naš tim stručnjaka je tu da vam pomogne da pronađete savršen stan.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/kontakt"
                  className="group relative inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white px-12 py-5 rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-gold-500/50 transition-all"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Kontaktirajte Nas
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/virtuelna-tura"
                  className="group inline-block bg-white/10 backdrop-blur-xl text-white px-12 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all flex items-center gap-3"
                >
                  <FaPlay className="group-hover:scale-110 transition-transform" />
                  Virtuelna Tura
                </Link>
              </motion.div>
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { value: '50+', label: 'Luksuznih Stanova' },
                { value: '8', label: 'Spratova' },
                { value: '100%', label: 'Premium Kvalitet' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

