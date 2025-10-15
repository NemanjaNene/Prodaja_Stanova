'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Početna' },
    { href: '/stanovi', label: 'Stanovi' },
    { href: '/o-projektu', label: 'O Projektu' },
    { href: '/virtuelna-tura', label: 'Virtuelna Tura' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+381641234567" className="flex items-center gap-2 hover:text-gold-400 transition">
              <FaPhone className="text-gold-400" />
              +381 64 123 4567
            </a>
            <a href="mailto:info@premiumresidence.rs" className="flex items-center gap-2 hover:text-gold-400 transition">
              <FaEnvelope className="text-gold-400" />
              info@premiumresidence.rs
            </a>
          </div>
          <div className="text-gold-400 font-semibold">
            Premium Residence - Tvoj Dom Snova
          </div>
        </div>
      </div>

      {/* Main Navbar - PREMIUM GLASSMORPHISM */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-gray-200/50'
            : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">PR</span>
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Premium Residence
                </h1>
                <p className="text-xs text-gray-500">Luksuzni Stanovi</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-gold-600 font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="relative group bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-3 rounded-full font-bold hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg hover:shadow-2xl hover:shadow-gold-500/50 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Zakaži Obilazak</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-gold-600 transition"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-gold-600 font-medium transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transition-all"
                >
                  Zakaži Obilazak
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

