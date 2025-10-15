'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { apartments } from '@/data/apartments';
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaChevronRight, FaSearch } from 'react-icons/fa';

export default function StanoviPage() {
  const [selectedRooms, setSelectedRooms] = useState<string>('all');
  const [selectedFloor, setSelectedFloor] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState('price-asc');

  const filteredApartments = useMemo(() => {
    let filtered = [...apartments];

    // Filter by rooms
    if (selectedRooms !== 'all') {
      filtered = filtered.filter(apt => apt.rooms === parseInt(selectedRooms));
    }

    // Filter by floor
    if (selectedFloor !== 'all') {
      filtered = filtered.filter(apt => apt.floor === parseInt(selectedFloor));
    }

    // Filter by price range
    filtered = filtered.filter(apt => apt.price >= priceRange[0] && apt.price <= priceRange[1]);

    // Filter by availability
    if (showAvailableOnly) {
      filtered = filtered.filter(apt => apt.available);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'size-asc':
        filtered.sort((a, b) => a.size - b.size);
        break;
      case 'size-desc':
        filtered.sort((a, b) => b.size - a.size);
        break;
    }

    return filtered;
  }, [selectedRooms, selectedFloor, priceRange, showAvailableOnly, sortBy]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920"
            alt="Apartments"
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
            Pronađite <span className="gold-gradient-text">Vaš Stan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            {apartments.length} ekskluzivnih jedinica čeka na vas
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaSearch className="text-gold-600 text-xl" />
            <h2 className="text-2xl font-bold text-gray-900">Filtriraj Stanove</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Rooms Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Broj Soba
              </label>
              <select
                value={selectedRooms}
                onChange={(e) => setSelectedRooms(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
              >
                <option value="all">Sve</option>
                <option value="2">2 sobe</option>
                <option value="3">3 sobe</option>
                <option value="4">4 sobe</option>
              </select>
            </div>

            {/* Floor Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sprat
              </label>
              <select
                value={selectedFloor}
                onChange={(e) => setSelectedFloor(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
              >
                <option value="all">Svi spratovi</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(floor => (
                  <option key={floor} value={floor}>{floor}. sprat</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sortiraj Po
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
              >
                <option value="price-asc">Cena: Niža → Viša</option>
                <option value="price-desc">Cena: Viša → Niža</option>
                <option value="size-asc">Površina: Manja → Veća</option>
                <option value="size-desc">Površina: Veća → Manja</option>
              </select>
            </div>

            {/* Availability Toggle */}
            <div className="flex items-end">
              <label className="flex items-center gap-3 cursor-pointer w-full px-4 py-3 rounded-lg border border-gray-300 hover:border-gold-500 transition">
                <input
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(e) => setShowAvailableOnly(e.target.checked)}
                  className="w-5 h-5 text-gold-600 rounded focus:ring-gold-500"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Samo dostupni
                </span>
              </label>
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cena: {priceRange[0].toLocaleString()}€ - {priceRange[1].toLocaleString()}€
            </label>
            <input
              type="range"
              min="0"
              max="500000"
              step="10000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-600"
            />
          </div>

          {/* Results Count */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Pronađeno <span className="font-bold text-gold-600">{filteredApartments.length}</span> stanova
            </p>
          </div>
        </motion.div>

        {/* Apartments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApartments.map((apartment, index) => (
            <motion.div
              key={apartment.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/stanovi/${apartment.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={apartment.images[0]}
                      alt={apartment.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 left-4 px-4 py-2 rounded-full font-semibold text-sm ${
                      apartment.available 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {apartment.available ? 'Dostupan' : 'Prodat'}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-4 py-2 rounded-full font-bold">
                      {apartment.pricePerM2.toLocaleString()}€/m²
                    </div>

                    {/* Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white">{apartment.name}</h3>
                      <div className="flex items-center gap-2 text-white/90 text-sm mt-1">
                        <FaMapMarkerAlt />
                        <span>{apartment.floor}. sprat • {apartment.orientation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <FaRuler className="text-gold-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Površina</p>
                        <p className="font-bold text-gray-900">{apartment.size}m²</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <FaBed className="text-gold-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Sobe</p>
                        <p className="font-bold text-gray-900">{apartment.rooms}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <FaBath className="text-gold-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Kupatila</p>
                        <p className="font-bold text-gray-900">{apartment.bathrooms}</p>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Ukupna cena</p>
                        <p className="text-3xl font-bold text-gray-900">
                          {apartment.price.toLocaleString()}€
                        </p>
                      </div>
                      <div className="bg-gold-500 text-white px-6 py-3 rounded-full font-semibold group-hover:bg-gold-600 transition flex items-center gap-2">
                        Detalji
                        <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredApartments.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Nema rezultata
            </h3>
            <p className="text-gray-600">
              Pokušajte sa različitim filterima
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

