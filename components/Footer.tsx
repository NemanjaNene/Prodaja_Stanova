'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">PR</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Premium Residence</h3>
                <p className="text-sm text-gray-400">Luksuzni Stanovi</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Otkrijte vrhunski luksuz u srcu grada. Ekskluzivni stanovi sa modernim dizajnom i nezaboravnim pogledom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-600 rounded-full flex items-center justify-center transition">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-600 rounded-full flex items-center justify-center transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gold-600 rounded-full flex items-center justify-center transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Brzi Linkovi</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold-400 transition">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/stanovi" className="text-gray-400 hover:text-gold-400 transition">
                  Stanovi
                </Link>
              </li>
              <li>
                <Link href="/o-projektu" className="text-gray-400 hover:text-gold-400 transition">
                  O Projektu
                </Link>
              </li>
              <li>
                <Link href="/virtuelna-tura" className="text-gray-400 hover:text-gold-400 transition">
                  Virtuelna Tura
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-gold-400 transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Bulevar Kralja Aleksandra 123<br />
                  11000 Beograd, Srbija
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-gold-400 flex-shrink-0" />
                <a href="tel:+381641234567" className="text-gray-400 hover:text-gold-400 transition text-sm">
                  +381 64 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold-400 flex-shrink-0" />
                <a href="mailto:info@premiumresidence.rs" className="text-gray-400 hover:text-gold-400 transition text-sm">
                  info@premiumresidence.rs
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Radno Vreme</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-gray-400">
                <span>Ponedeljak - Petak:</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Subota:</span>
                <span className="text-white">10:00 - 15:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Nedelja:</span>
                <span className="text-white">Po dogovoru</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gold-600/20 rounded-lg border border-gold-600/30">
              <p className="text-sm text-gold-400 font-semibold">
                📞 Dostupni smo 24/7 za hitne pozive
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Premium Residence. Sva prava zadržana.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-gold-400 transition">
                Politika Privatnosti
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gold-400 transition">
                Uslovi Korišćenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

