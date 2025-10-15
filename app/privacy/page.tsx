'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-8">
            Politika <span className="gold-gradient-text">Privatnosti</span>
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Uvod</h2>
              <p className="text-gray-700 leading-relaxed">
                Premium Residence se obavezuje da štiti privatnost svih korisnika naših usluga. 
                Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše lične podatke.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Prikupljanje Podataka</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Prikupljamo sledeće vrste podataka:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Lični podaci (ime, prezime, email, telefon)</li>
                <li>Informacije o interesovanju za stanove</li>
                <li>Podaci o poseti web sajtu (cookies, IP adresa)</li>
                <li>Komunikacija sa našim timom</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Korišćenje Podataka</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Vaše podatke koristimo za:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Odgovaranje na vaše upite</li>
                <li>Zakazivanje obilazaka stanova</li>
                <li>Slanje relevantnih informacija o ponudama</li>
                <li>Unapređenje kvaliteta naših usluga</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Zaštita Podataka</h2>
              <p className="text-gray-700 leading-relaxed">
                Primenjujemo odgovarajuće tehničke i organizacione mere da zaštitimo vaše lične podatke 
                od neovlašćenog pristupa, izmene ili otkrivanja.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Vaša Prava</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Imate pravo da:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Pristupite svojim ličnim podacima</li>
                <li>Zatražite ispravku netačnih podataka</li>
                <li>Zatražite brisanje podataka</li>
                <li>Povučete saglasnost za obradu podataka</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kontakt</h2>
              <p className="text-gray-700 leading-relaxed">
                Za pitanja u vezi sa politikom privatnosti, kontaktirajte nas na:{' '}
                <a href="mailto:privacy@premiumresidence.rs" className="text-gold-600 hover:underline">
                  privacy@premiumresidence.rs
                </a>
              </p>
            </section>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Poslednje ažuriranje: Oktobar 2025
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

