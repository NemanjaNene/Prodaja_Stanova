'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAward, FaUsers, FaBuilding, FaLeaf, FaShieldAlt, FaStar, FaCheckCircle } from 'react-icons/fa';
import { buildingFeatures } from '@/data/apartments';

export default function OProjektuPage() {
  const timeline = [
    { year: '2023', title: 'Početak Projekta', description: 'Kupovina lokacije i dobijanje dozvola' },
    { year: '2024', title: 'Izgradnja', description: 'Početak gradnje sa vrhunskim materjalima' },
    { year: '2025', title: 'Završetak', description: 'Dovršetak i predaja stanova' },
    { year: '2025+', title: 'Zajednica', description: 'Premium životna zajednica' },
  ];

  const team = [
    {
      name: 'Arhitektonski Tim',
      description: 'Nagrađivani arhitekti sa međunarodnim iskustvom',
      icon: FaBuilding,
    },
    {
      name: 'Izvođači Radova',
      description: 'Sertifikovane firme sa najvišim standardima kvaliteta',
      icon: FaUsers,
    },
    {
      name: 'Dizajnerski Tim',
      description: 'Eksperti za enterijer i eksterijer dizajn',
      icon: FaStar,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
            alt="About Project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-display font-bold text-white mb-6"
          >
            O <span className="gold-gradient-text">Projektu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-200 leading-relaxed"
          >
            Premium Residence je više od zgrade - to je životni stil, zajednica i dom snova koji postaje stvarnost
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-display font-bold text-gray-900 mb-6">
                Naša <span className="gold-gradient-text">Vizija</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Premium Residence je rođen iz želje da se kreira prostor gde se luksuz susreće sa funkcionalnosti, 
                a dizajn sa udobnosti. Naš cilj je bio da izgradimo ne samo zgradu, već kompletan ekosistem koji 
                nadilazi sve standarde modernog stanovanja.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Svaki detalj je pažljivo osmišljen - od arhitekture koja spaja estetiku sa prirodnim svetlom, 
                do materijala koji garantuju trajnost i kvalitet. Ovo nije samo mesto za život, već investicija 
                u vašu budućnost i kvalitet života vaše porodice.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gold-50 rounded-xl">
                  <div className="text-4xl font-bold text-gold-600 mb-2">50+</div>
                  <p className="text-gray-700">Ekskluzivnih jedinica</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
                  <p className="text-gray-700">Spratova luksuza</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
                alt="Building Vision"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold mb-4">
              Naša <span className="gold-gradient-text">Priča</span>
            </h2>
            <p className="text-xl text-gray-300">Od ideje do stvarnosti</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold-600 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 && (
                      <>
                        <h3 className="text-3xl font-bold text-gold-400 mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </>
                    )}
                  </div>
                  <div className="w-20 h-20 bg-gold-600 rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <span className="text-2xl font-bold">{item.year}</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <>
                        <h3 className="text-3xl font-bold text-gold-400 mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold text-gray-900 mb-4">
              Karakteristike <span className="gold-gradient-text">Projekta</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-gold-50 hover:to-gold-100 transition-all duration-300 hover-lift border border-gray-200"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold text-gray-900 mb-4">
              Naš <span className="gold-gradient-text">Tim</span>
            </h2>
            <p className="text-xl text-gray-600">Stručnjaci koji stvaraju izvrsnost</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition"
              >
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="text-4xl text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.name}</h3>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gold-500 to-gold-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold mb-4">Naše Vrednosti</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FaAward, title: 'Kvalitet', description: 'Najviši standardi u svemu' },
              { icon: FaShieldAlt, title: 'Bezbednost', description: '24/7 zaštita i sigurnost' },
              { icon: FaLeaf, title: 'Održivost', description: 'Eko-svesna gradnja' },
              { icon: FaStar, title: 'Inovacija', description: 'Najmodernija tehnologija' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <value.icon className="text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-8">
              Sertifikati i Priznanja
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {['ISO 9001', 'Green Building', 'Energy Star', 'Quality Award'].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-xl"
                >
                  <FaCheckCircle className="text-4xl text-gold-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

