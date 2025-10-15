'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Building3D from '@/components/Building3D';
import { FaCube, FaVideo, FaImages, FaMapMarkedAlt } from 'react-icons/fa';

export default function VirtualnaTuraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Virtual Tour"
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
            <span className="gold-gradient-text">Virtuelna Tura</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Istražite zgradu i stanove iz udobnosti svog doma
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* 3D Building - TEMPORARILY DISABLED FOR PERFORMANCE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaCube className="text-4xl text-gold-600" />
            <h2 className="text-4xl font-display font-bold text-gray-900">
              3D Prikaz Zgrade
            </h2>
          </div>
          <div className="h-[700px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
              alt="Building 3D"
              fill
              className="object-cover opacity-30"
            />
            <div className="relative z-10 text-center text-white p-8">
              <FaCube className="text-6xl mx-auto mb-6 text-gold-400" />
              <h3 className="text-3xl font-bold mb-4">3D Tura Uskoro!</h3>
              <p className="text-xl text-gray-300 mb-8">Radimo na interaktivnom 3D prikazu zgrade</p>
              <Link
                href="/stanovi"
                className="inline-block bg-gold-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-600 transition"
              >
                Pogledaj Stanove
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Video Tours Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaVideo className="text-4xl text-gold-600" />
            <h2 className="text-4xl font-display font-bold text-gray-900">
              Video Ture
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Obilazak Zajedničkih Prostora',
                description: 'Pogledajte luksuzni lobi, fitnes centar i dvorište',
                thumbnail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
                duration: '3:45'
              },
              {
                title: 'Penthouse Tura',
                description: '360° prikaz najluksuznijeg stana',
                thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
                duration: '5:20'
              },
              {
                title: 'Garaža i Parking',
                description: 'Moderna podzemna garaža sa EV punjačima',
                thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
                duration: '2:15'
              },
              {
                title: 'Okolina i Lokacija',
                description: 'Dron snimak lokacije i okoline',
                thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
                duration: '4:10'
              },
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <div className="w-0 h-0 border-l-[20px] border-l-gold-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 360° Panoramas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <FaImages className="text-4xl text-gold-600" />
            <h2 className="text-4xl font-display font-bold text-gray-900">
              360° Panorame
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Dnevna Soba', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600' },
              { name: 'Kuhinja', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600' },
              { name: 'Spavaća Soba', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600' },
            ].map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">{room.name}</h3>
                    <p className="text-white/80 text-sm">Klikni za 360° prikaz</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-display font-bold mb-4">
            Želite Uživo Obilazak?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Zakažite besplatnu posetu i doživite luksuz svojih očiju
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-gold-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl"
          >
            Zakaži Obilazak
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

