'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { apartments } from '@/data/apartments';
import ImageGallery from '@/components/ImageGallery';
import { 
  FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaCheckCircle, 
  FaParking, FaWarehouse, FaPhone, FaEnvelope,
  FaDownload, FaShareAlt, FaHeart, FaArrowLeft, FaVideo,
  FaCube
} from 'react-icons/fa';
import { useParams } from 'next/navigation';

export default function ApartmentDetailPage() {
  const params = useParams();
  const apartment = apartments.find(apt => apt.id === parseInt(params?.id as string));
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'floor-plan' | 'virtual-tour'>('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Stan nije pronađen</h1>
          <Link href="/stanovi" className="text-gold-600 hover:text-gold-700 font-semibold">
            ← Nazad na listu stanova
          </Link>
        </div>
      </div>
    );
  }

  const relatedApartments = apartments
    .filter(apt => apt.id !== apartment.id && apt.available)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link 
            href="/stanovi"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gold-600 font-semibold transition"
          >
            <FaArrowLeft />
            Nazad na sve stanove
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div>
              <h1 className="text-5xl font-display font-bold text-gray-900 mb-2">
                {apartment.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <FaMapMarkerAlt className="text-gold-600" />
                <span>{apartment.floor}. sprat • Premium Residence</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition ${
                  isFavorite 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white border-2 border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'
                }`}
              >
                <FaHeart />
              </button>
              <button className="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 hover:border-gold-600 hover:text-gold-600 rounded-full flex items-center justify-center transition">
                <FaShareAlt />
              </button>
              <button className="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 hover:border-gold-600 hover:text-gold-600 rounded-full flex items-center justify-center transition">
                <FaDownload />
              </button>
            </div>
          </div>

          {/* Status & Price */}
          <div className="flex flex-wrap items-center gap-4">
            <div className={`px-6 py-2 rounded-full font-semibold ${
              apartment.available 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}>
              {apartment.available ? '✓ Dostupan' : '✗ Prodat'}
            </div>
            <div className="text-4xl font-bold text-gray-900">
              {apartment.price.toLocaleString()}€
            </div>
            <div className="text-xl text-gray-600">
              ({apartment.pricePerM2.toLocaleString()}€/m²)
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <ImageGallery images={apartment.images} apartmentName={apartment.name} />
        </motion.div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex gap-4 border-b border-gray-200 overflow-x-auto">
            {[
              { id: 'overview', label: 'Pregled', icon: FaRuler },
              { id: 'features', label: 'Karakteristike', icon: FaCheckCircle },
              { id: 'floor-plan', label: 'Osnova', icon: FaCube },
              { id: 'virtual-tour', label: 'Virtuelna Tura', icon: FaVideo },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold whitespace-nowrap transition ${
                  activeTab === tab.id
                    ? 'text-gold-600 border-b-2 border-gold-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">O Stanu</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {apartment.description}
                </p>

                {/* Specs Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl">
                    <FaRuler className="text-3xl text-gold-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Površina</p>
                    <p className="text-2xl font-bold text-gray-900">{apartment.size}m²</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <FaBed className="text-3xl text-blue-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Sobe</p>
                    <p className="text-2xl font-bold text-gray-900">{apartment.rooms}</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <FaBath className="text-3xl text-purple-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Kupatila</p>
                    <p className="text-2xl font-bold text-gray-900">{apartment.bathrooms}</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <FaMapMarkerAlt className="text-3xl text-green-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Sprat</p>
                    <p className="text-2xl font-bold text-gray-900">{apartment.floor}</p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    {apartment.balcony ? <FaCheckCircle className="text-green-500 mt-1" /> : null}
                    <div>
                      <p className="font-semibold text-gray-900">Balkon/Terasa</p>
                      <p className="text-sm text-gray-600">{apartment.balcony ? 'Da' : 'Ne'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {apartment.parking ? <FaCheckCircle className="text-green-500 mt-1" /> : null}
                    <div>
                      <p className="font-semibold text-gray-900">Parking</p>
                      <p className="text-sm text-gray-600">{apartment.parking ? 'Uključen' : 'Nije uključen'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {apartment.storage ? <FaCheckCircle className="text-green-500 mt-1" /> : null}
                    <div>
                      <p className="font-semibold text-gray-900">Ostava</p>
                      <p className="text-sm text-gray-600">{apartment.storage ? 'Da' : 'Ne'}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Karakteristike</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {apartment.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gold-50 transition"
                    >
                      <FaCheckCircle className="text-gold-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Floor Plan Tab */}
            {activeTab === 'floor-plan' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Osnova Stana</h2>
                <div className="relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src={apartment.floorPlan}
                    alt="Floor Plan"
                    fill
                    className="object-contain bg-gray-100"
                  />
                </div>
                <button className="mt-6 w-full bg-gold-500 text-white py-4 rounded-xl font-semibold hover:bg-gold-600 transition flex items-center justify-center gap-2">
                  <FaDownload />
                  Preuzmi Osnovu (PDF)
                </button>
              </motion.div>
            )}

            {/* Virtual Tour Tab */}
            {activeTab === 'virtual-tour' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">360° Virtuelna Tura</h2>
                <div className="relative h-[600px] rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaVideo className="text-6xl mx-auto mb-4 text-gold-400" />
                    <h3 className="text-2xl font-bold mb-2">Virtuelna tura uskoro dostupna</h3>
                    <p className="text-gray-400 mb-6">Ili zakažite uživo obilazak stana</p>
                    <Link
                      href="/kontakt"
                      className="inline-block bg-gold-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-600 transition"
                    >
                      Zakaži Obilazak
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-xl sticky top-32"
            >
              <h3 className="text-2xl font-bold mb-6">Zainteresovani?</h3>
              
              <div className="space-y-4 mb-6">
                <a
                  href="tel:+381641234567"
                  className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition"
                >
                  <FaPhone className="text-gold-400" />
                  <div>
                    <p className="text-sm text-gray-400">Pozovite nas</p>
                    <p className="font-semibold">+381 64 123 4567</p>
                  </div>
                </a>
                <a
                  href="mailto:info@premiumresidence.rs"
                  className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition"
                >
                  <FaEnvelope className="text-gold-400" />
                  <div>
                    <p className="text-sm text-gray-400">Pošaljite email</p>
                    <p className="font-semibold text-sm">info@premiumresidence.rs</p>
                  </div>
                </a>
              </div>

              <Link
                href="/kontakt"
                className="block w-full bg-gold-500 text-white py-4 rounded-xl font-semibold hover:bg-gold-600 transition text-center"
              >
                Zakaži Besplatnu Turu
              </Link>

              <p className="text-sm text-gray-400 mt-4 text-center">
                Dostupni smo Pon-Pet: 9-18h
              </p>
            </motion.div>

            {/* Calculator Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kalkulator Kredita</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Cena stana:</span>
                  <span className="font-semibold">{apartment.price.toLocaleString()}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Učešće (20%):</span>
                  <span className="font-semibold">{(apartment.price * 0.2).toLocaleString()}€</span>
                </div>
                <div className="flex justify-between pt-3 border-t">
                  <span className="text-gray-600">Kredit:</span>
                  <span className="font-semibold">{(apartment.price * 0.8).toLocaleString()}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mesečna rata* (20 god):</span>
                  <span className="font-bold text-gold-600">~{Math.round((apartment.price * 0.8) / 240).toLocaleString()}€</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">*Orijentacioni proračun</p>
            </motion.div>
          </div>
        </div>

        {/* Related Apartments */}
        {relatedApartments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-8">
              Slični <span className="gold-gradient-text">Stanovi</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedApartments.map((apt) => (
                <Link key={apt.id} href={`/stanovi/${apt.id}`}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition hover-lift">
                    <div className="relative h-48">
                      <Image
                        src={apt.images[0]}
                        alt={apt.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2">{apt.name}</h3>
                      <p className="text-2xl font-bold text-gold-600">{apt.price.toLocaleString()}€</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

